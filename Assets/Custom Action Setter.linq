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
	var siteCollectionUrl = @"";
	var username = @"";
	_scriptFile = @"";
	var password = GetPassword(username);
	_creds = new SharePointOnlineCredentials(username, password);

	SetCustomActionForSiteCollection(siteCollectionUrl);
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

private void SetCustomActionForWebAndSubWebs(ClientContext context, Web web)
{
	Console.Write(String.Format("{0} - ", web.Url));

	try
	{
		// Set action
		SetCustomActionForWeb(context, web);

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

private void SetCustomActionForWeb(ClientContext context, Web web)
{
	try
	{
		var customActionDescription = "ai.js";
		var jsLink = String.Format(@"{0}?rev={1}", _scriptFile, _scriptLinkId.ToString());

		var scripts = new StringBuilder(@"
	                var headID = document.getElementsByTagName('head')[0]; 
	                var");

		scripts.AppendFormat(@"
	                newScript = document.createElement('script');
	                newScript.type = 'text/javascript';
	                newScript.src = '{0}';
	                headID.appendChild(newScript);", jsLink);
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