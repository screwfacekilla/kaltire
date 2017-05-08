<%@ Page language="C#" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head runat="server">
    <meta name="GENERATOR" content="Microsoft SharePoint" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=9"/>
	<meta http-equiv="Expires" content="0" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<SharePoint:RobotsMetaTag ID="RobotsMetaTag1" runat="server"/>
	<title>Micro News App Part</title>

    <script src="/_layouts/MicrosoftAjax.js" type="text/javascript"></script>
    <script type="text/javascript" src="../Scripts/jquery-1.6.4.min.js"></script>
    <link rel="stylesheet" href="../Css/MicroNewsAppPart.css" />
    <script type="text/javascript" src="../Scripts/jquery.easing.1.3.min.js"></script>
    <script type="text/javascript" src="../Scripts/jquery.sliderkit.1.9.2.pack.js"></script>
    <script type="text/javascript" src="../Scripts/sliderkit.delaycaptions.1.1.pack.js"></script>
    <script type="text/javascript" src="../Scripts/MicroNewsAppPart.js"></script>

    <script type="text/javascript">
        var hostweburl;
        var appweburl;

        // Load the required SharePoint libraries.
        $(document).ready(function () {

            // Get the URI decoded URLs.
            hostweburl =
                decodeURIComponent(
                    getQueryStringParameter("SPHostUrl")
            );

            // Get the current app url
            appweburl =
                decodeURIComponent(
                    getQueryStringParameter("SPAppWebUrl")
            );

            // The js files are in a URL in the form:
            // web_url/_layouts/15/resource_file
            var scriptbase = hostweburl + "/_layouts/15/";

            // Load the js files and continue to
            // the execOperation function.
            $.getScript(scriptbase + "SP.Runtime.js",
                function () {
                    $.getScript(scriptbase + "SP.js",
                        function () { $.getScript(scriptbase + "SP.RequestExecutor.js", execOperation); }
                    );
                }
            );
        });

        // Function to execute basic operations.
        function execOperation() {

            // Continue your program flow here.
            sharePointReady(appweburl);
        }

    // Function to retrieve a query string value.
    // For production purposes you may want to use
    // a library to handle the query string.
    function getQueryStringParameter(paramToRetrieve) {
        var params =
            document.URL.split("?")[1].split("&");
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve)
                return singleParam[1];
        }
    }
</script>

    
</head>
<body class="bodySliderKit">
    <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>

    <WebPartPages:AllowFraming ID="AllowFraming1" runat="server" />

    <div class="sliderkitContainer">
        <noscript><div class="noscript">jQuery plugin requires Javascript activation.</div></noscript>
        <!-- Start newslider-minimal -->
		<div class="sliderkit newslider-minimal">						
			<div class="sliderkit-legend"><span id="latestnews"></span></div>
			<div class="sliderkit-panels">
			</div>				
			<!-- // end of newslider-minimal -->
        </div>
    </div>
</body>
</html>
