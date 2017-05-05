param
(
    [string]$Web = $(throw '- Need a SharePoint web site URL (e.g. "http://mysp15site/")')
)

Write-Host -ForegroundColor White "------------------------------------"
Write-Host -ForegroundColor White "|  Corporate News App UnInstaller  |"
Write-Host -ForegroundColor White "------------------------------------"
Write-Host -ForegroundColor White "- "

#Global vars
$AppName = "Corporate News App";

#Loads the SharePoint snapin
Write-Host -ForegroundColor White "- Load SharePoint context.."
$ver = $host | select version
if ($ver.Version.Major -gt 1) {$host.Runspace.ThreadOptions = "ReuseThread"} 
if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) {
    Add-PSSnapin "Microsoft.SharePoint.PowerShell";
}
[void][System.Reflection.Assembly]::Load("Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c") 

#Checks if the app instance exists
$appInstance = Get-SPAppInstance -Web $Web | where-object {$_.Title -eq $AppName};

if ($appInstance -ne $null) 
{
	Write-Host -ForegroundColor White "- App instance detected on target web, uninstalling it...";
	Uninstall-SPAppInstance –Identity $appInstance -Confirm:$false -ErrorAction SilentlyContinue -ErrorVariable err;
	if ($err) 
	{
		Write-Host -ForegroundColor White "- An error occured during app uninstallation !";
		throw $err;
	}
	
	Write-Host -ForegroundColor White "- Please wait..." -NoNewline;
	$appInstance = Get-SPAppInstance -Web $Web | where-object {$_.Title -eq $AppName};
	$counter = 1;
	$maximum = 50;
	$sleeptime = 2;
	while (($appInstance -ne $null) -and ($appInstance.Status -eq ([Microsoft.SharePoint.Administration.SPAppInstanceStatus]::Uninstalling)) -and ($counter -lt $maximum))
	{
		Write-Host -ForegroundColor White "." -NoNewline;
		sleep $sleeptime;
		$counter++;
		$appInstance = Get-SPAppInstance -Web $Web | where-object {$_.Title -eq $AppName}	
	}
	Write-Host -ForegroundColor White ".";

	$appInstance = Get-SPAppInstance -Web $Web | where-object {$_.Title -eq $AppName}	
	if ($appInstance -eq $null) 
	{
		Write-Host -ForegroundColor White "- App '$AppName' was successfully uninstalled.";
		Write-Host -ForegroundColor White "- "
	}
	else 
	{
		Write-Host -ForegroundColor Yellow "- App '$AppName' was not successfully uninstalled.";	
	}
}
else
{
	Write-Host -ForegroundColor Yellow "- App '$AppName' not found in web site '$Web'.";	
}

