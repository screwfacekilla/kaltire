<Query Kind="Program">
  <Reference>&lt;ProgramFilesX64&gt;\SharePoint Client Components\16.0\Assemblies\Microsoft.Online.SharePoint.Client.Tenant.dll</Reference>
  <Reference>&lt;ProgramFilesX64&gt;\Common Files\microsoft shared\Web Server Extensions\16\ISAPI\Microsoft.SharePoint.Client.dll</Reference>
  <Reference>&lt;ProgramFilesX64&gt;\Common Files\microsoft shared\Web Server Extensions\16\ISAPI\Microsoft.SharePoint.Client.Runtime.dll</Reference>
  <Namespace>Microsoft.Online.SharePoint.TenantAdministration</Namespace>
  <Namespace>Microsoft.SharePoint.Client</Namespace>
  <Namespace>System.Security</Namespace>
</Query>

private Guid _scriptLinkId = Guid.NewGuid();
private SharePointOnlineCredentials _creds;

string _scriptFile;

void Main()
{
	var siteCollectionUrl = @"https://kaltire.sharepoint.com/sites/OpsPortalUAT";
	var username = @"julian_charles@kaltire.com";
	_scriptFile = @"https://kaltire.sharepoint.com/sites/OpsPortalUAT/SiteAssets/jquery-3.2.1.min.js";
	var password = GetPassword(username);
	_creds = new SharePointOnlineCredentials(username, password);

	SetCustomActionForSiteCollection(siteCollectionUrl);
	//RemoveCustomActions(siteCollectionUrl)
}

private void SetCustomActionForSiteCollection(string url)
{
	// Build context
	try
	{
		var context = new ClientContext(url);
		context.Credentials = _creds;

		// Get the root web
		var web = context.Web;
		context.Load(web);
		context.ExecuteQuery();

		// Recurse through webs and sub-webs to set custom action
		SetCustomActionForWebAndSubWebs(context, web);
	}
	catch (Exception ex)
	{
		Console.WriteLine(String.Format("{0} - access denied", url));
	}
}

private void RemoveCustomActions(string url)
{
	var context = new ClientContext(url);
	context.Credentials = _creds;
	Site site = context.Site;
	context.Load(site, x => x.UserCustomActions);
	context.ExecuteQuery();

	for (int i = 0; i < site.UserCustomActions.Count; i++)
	{
		if (site.UserCustomActions[i].ScriptSrc != null && site.UserCustomActions[i].ScriptSrc.Contains("bundle.js"))
		{
			site.UserCustomActions[i].DeleteObject();
			break;
		}
	}

	context.ExecuteQuery();
}

private void SetCustomActionForWebAndSubWebs(ClientContext context, Web web)
{
	Console.Write(String.Format("{0} - ", web.Url));

	try
	{
		// Set action
		SetCustomActionForWebAddScriptTag(context, web);

		// Load sub-webs
		var webs = web.Webs;
		context.Load(webs);
		context.ExecuteQuery();

		// Iterate through sub-webs
		foreach (var subWeb in webs)
		{
			SetCustomActionForWebAndSubWebs(context, subWeb);
		}
	}
	catch (Exception ex)
	{
		Console.WriteLine(String.Format("error: {0}", ex.Message));
	}
}

private void SetCustomActionForWebAddScriptTag(ClientContext context, Web web)
{
	try
	{
		var customActionDescription = "jquery.js";
		var jsLink = String.Format(@"{0}?rev={1}", _scriptFile, _scriptLinkId.ToString());

		var scripts = new StringBuilder(@"var headID = document.getElementsByTagName('head')[0];");
		scripts.AppendLine("var newScript = document.createElement('script');");
		scripts.AppendLine("newScript.type = 'text/javascript';");
		scripts.AppendLine(String.Format("newScript.src = '{0}';", jsLink));
		scripts.AppendLine("newScript.onload = function(){");
			scripts.AppendLine("var $ = window.jQuery;");
			scripts.AppendLine("$(document).ready(function () {");
				scripts.AppendLine("SP.SOD.executeOrDelayUntilScriptLoaded(function (){");
		scripts.AppendLine("var oldLogoId = $('#DeltaSiteLogo > a').attr('id');");
		scripts.AppendLine("$('#' + oldLogoId).attr('id', 'CustomSiteLogo');");
		scripts.AppendLine("$('#DeltaSiteLogo > a').after('<a id=\"tmpUrl\" href=\"#\" style=\"display:none\">Temp</a>');");
					scripts.AppendLine("$('#tmpUrl').attr('id', oldLogoId);");
					scripts.AppendLine("$('#CustomSiteLogo').attr('href', _spPageContextInfo.siteServerRelativeUrl);");
					scripts.AppendLine("$('#CustomSiteLogo').attr('title', 'Home');");
				scripts.AppendLine("}, 'sp.js');");
			scripts.AppendLine("});");
		scripts.AppendLine("};");
		scripts.AppendLine("headID.appendChild(newScript);");
		string scriptBlock = scripts.ToString();

		var existingActions = web.UserCustomActions;
		context.Load(existingActions);
		context.ExecuteQuery();
		var actions = existingActions.ToArray();
		foreach (var action in actions)
		{
			if (action.Description == customActionDescription && action.Location == "ScriptLink")
			{
				action.DeleteObject();
				context.ExecuteQuery();
			}
		}

		var newAction = existingActions.Add();
		newAction.Description = customActionDescription;
		newAction.Location = "ScriptLink";

		newAction.ScriptBlock = scriptBlock;
		newAction.Update();
		context.ExecuteQuery();
	}
	catch (Exception ex)
	{
		Console.WriteLine(String.Format("error: {0}", ex.Message));
	}

	Console.WriteLine("done");
}

private void SetCustomActionForWebChangeLogoLink(ClientContext context, Web web)
{
	try
	{
		var customActionDescription = "logo.js";

		var scriptBlock = @"
	                $(document).ready(function () {
    SP.SOD.executeOrDelayUntilScriptLoaded(function ()
    {
        //read the simple link ID and store it
        var oldLogoId = $(""#DeltaSiteLogo > a"").attr('id');
        //change the id to something custom, so O365 doesn't touch this
        $(""#"" + oldLogoId).attr('id', 'CustomSiteLogo');
        //create temporary hidden element
        $(""#DeltaSiteLogo > a"").after(""<a id='tmpUrl' href='#' style='display:none'>Temp</a>"");
        //set the hidden element id with old id value
        $(""#tmpUrl"").attr(""id"", oldLogoId);
        //alter the link to point to the siteroot 
        $(""#CustomSiteLogo"").attr('href', _spPageContextInfo.siteServerRelativeUrl);
        //change title to home
        $(""#CustomSiteLogo"").attr('title', ""Home"");
	}, 'sp.js');
});";

		var existingActions = web.UserCustomActions;
		context.Load(existingActions);
		context.ExecuteQuery();
		var actions = existingActions.ToArray();
		foreach (var action in actions)
		{
			if (action.Description == customActionDescription && action.Location == "ScriptLink")
			{
				action.DeleteObject();
				context.ExecuteQuery();
			}
		}

//		var newAction = existingActions.Add();
//		newAction.Description = customActionDescription;
//		newAction.Location = "ScriptLink";
//
//		newAction.ScriptBlock = scriptBlock;
//		newAction.Update();
//		context.ExecuteQuery();
	}
	catch (Exception ex)
	{
		Console.WriteLine(String.Format("error: {0}", ex.Message));
	}

	Console.WriteLine("done");
}

// Define other methods and classes here
public SecureString GetPassword(string username)
{
	var pwdRaw = Util.GetPassword("Sharepoint", true);
	var pwd = new SecureString();
	foreach (var c in pwdRaw.ToCharArray())
	{
		pwd.AppendChar(c);
	}
	return pwd;
}