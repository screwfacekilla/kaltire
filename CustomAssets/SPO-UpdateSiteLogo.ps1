﻿# Load the SharePoint Client Object Model libraries.
Try{
    Add-Type –Path "Microsoft.SharePoint.Client.dll"
    Add-Type –Path "Microsoft.SharePoint.Client.Runtime.dll"
}
 
catch {
    Throw "Unable to load SharePoint Client runtime libraries."
}
$siteUrl = Read-Host -Prompt "Enter site collection URL (https://yourtenant.sharepoint.com)"
$userToLogin = Read-Host -Prompt "Username"
$password = Read-Host -Prompt "Password" -AsSecureString
$ctx = New-Object Microsoft.SharePoint.Client.ClientContext($siteUrl)
$credentials = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($userToLogin, $password) 

$ctx.Credentials = $credentials

$web = $ctx.get_web()
$webs = $ctx.Web.Webs;
$ctx.Load($webs)
$ctx.Load($web)

$ctx.ExecuteQuery()



function getSubSites($subWeb) {
    $subsites = $subWeb.Webs;
    $ctx.Load($subsites)
    $ctx.ExecuteQuery()
    foreach ($subSite in $subsites) {
        setSiteLogo($subSite)
        getSubSites($subSite)
    }
}


function setSiteLogo($subWeb) {
    If($logoToReplace) {
        If($subWeb.SiteLogoUrl.Contains($logoToReplace)) {
            Write-Host "Setting logo for " $subWeb.Title " " $subWeb.Url
            $subWeb.SiteLogoUrl = $newSiteLogoURL
            $subWeb.Update();
            $ctx.ExecuteQuery()
        }
        Else {
            Write-Host "Skipping " $subWeb.Title ". Current logo does not match filter"
        }
    }
    Else {
        Write-Host "Setting logo for " $subWeb.Title " " $subWeb.Url
        $subWeb.SiteLogoUrl = $newSiteLogoURL
        $subWeb.Update();
        $ctx.ExecuteQuery()
    }
}

setSiteLogo($web)

foreach ($subWeb in $webs)
{
	setSiteLogo($subWeb)
    getSubSites($subWeb)
}