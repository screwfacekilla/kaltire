$(document).ready(function () {
    SP.SOD.executeOrDelayUntilScriptLoaded(function ()
    {
        //read the simple link ID and store it
        var oldLogoId = $("#DeltaSiteLogo > a").attr('id');
        //change the id to something custom, so O365 doesn't touch this
        $("#" + oldLogoId).attr('id', 'CustomSiteLogo');
        //create temporary hidden element
        $("#DeltaSiteLogo > a").after("<a id='tmpUrl' href='#' style='display:none'>Temp</a>");
        //set the hidden element id with old id value
        $("#tmpUrl").attr("id", oldLogoId);
        //alter the link to point to the siteroot 
        $("#CustomSiteLogo").attr('href', _spPageContextInfo.siteServerRelativeUrl);
        //change title to home
        $("#CustomSiteLogo").attr('title', "Home");
    }, 'sp.js');
});
