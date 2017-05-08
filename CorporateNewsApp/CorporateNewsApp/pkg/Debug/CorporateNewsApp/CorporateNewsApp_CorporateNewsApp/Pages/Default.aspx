<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" language="C#" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ID="Content1" ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <link rel="stylesheet" href="../Css/AppBack.css" />
    <script type="text/javascript" src="../Scripts/jquery-1.6.4.min.js"></script>
    <script type="text/javascript" src="../Scripts/Resources.js"></script>
</asp:Content>

<asp:Content ID="ContentPageTitle" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    <span id="page-help-title-area"></span>
    <script type="text/javascript">$('#page-help-title-area').append(Resource_App_Admin);</script>
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ID="Content2" ContentPlaceHolderId="PlaceHolderMain" runat="server">

    <script type="text/javascript">$(document).attr('title', Resource_App_Admin);</script>

    <p class="intro" id="intro"></p>
    <script type="text/javascript">$('#intro').text(Resource_Home_Intro);</script>

    <h2 id="carouseltext"></h2>
    <script type="text/javascript">$('#carouseltext').text(Resource_Home_Carousel);</script>
    
    <script type="text/javascript">

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

        // Get the URI decoded URLs.
        var hostweburl =
            decodeURIComponent(
                getQueryStringParameter("SPHostUrl")
        );

        // Get the current app url
        var appweburl =
            decodeURIComponent(
                getQueryStringParameter("SPAppWebUrl")
        );

        function ShowPreviewCarousel() {
            //Using a generic object.
            var options = {
                title: "Carousel Preview",
                width: 755,
                height: 233,
                url: "CarouselAppPart.aspx?SPHostUrl=" + hostweburl + "&SPAppWebUrl=" + appweburl + "&SPLanguage=" + language
            };

            SP.UI.ModalDialog.showModalDialog(options);
        }
    </script>

    <div class="admin-links">
        <a href="../Lists/CarouselNews/">
            <div class="admin-link carouselnews">
                <div class="box-content"><div class="box-content-text" id="manage-carousel-news"></div></div>
                <script type="text/javascript">$('#manage-carousel-news').text(Resource_Home_Carousel_List);</script>
            </div>
        </a>
        <a href="../CarouselNewsImages/">
            <div class="admin-link manage-carousel-pics">
                <div class="box-content"><div class="box-content-text" id="manage-carousel-pics"></div></div>
                <script type="text/javascript">$('#manage-carousel-pics').text(Resource_Home_Carousel_Pics);</script>
            </div>
        </a>
        <a href="CarouselConfig.aspx?SPLanguage=" id="carousel-config-link">
            <div class="admin-link cfg">
                <div class="box-content"><div class="box-content-text" id="manage-carousel-cfg"></div></div>
                <script type="text/javascript">$('#manage-carousel-cfg').text(Resource_Home_Carousel_Cfg);</script>
            </div>
        </a>
        <script type="text/javascript">$('#carousel-config-link').attr('href', 'CarouselConfig.aspx?SPLanguage=' + language + '&SPHostUrl=' + spHostUrl + '&SPAppWebUrl=' + appweburl);</script>
        <a href="#" onclick="javascript:ShowPreviewCarousel(); return false;">
            <div class="admin-link sample">
                <div class="box-content"><div class="box-content-text" id="manage-carousel-preview"></div></div>
                <script type="text/javascript">$('#manage-carousel-preview').text(Resource_Home_Carousel_Preview);</script>
            </div>
        </a>
        <a href="CarouselHelp.aspx?SPLanguage="  id="carousel-help-link">
            <div class="admin-link help">
                <div class="box-content"><div class="box-content-text" id="manage-carousel-help"></div></div>
                <script type="text/javascript">$('#manage-carousel-help').text(Resource_Home_Carousel_Help);</script>
            </div>
        </a>
        <script type="text/javascript">$('#carousel-help-link').attr('href', 'CarouselHelp.aspx?SPLanguage=' + language);</script>
    </div>

    <h2 id="horizontaltext"></h2>
    <script type="text/javascript">$('#horizontaltext').text(Resource_Home_Horizontal);</script>

    <script type="text/javascript">
        function ShowPreviewHorizontal() {
            //Using a generic object.
            var options = {
                title: "Horizontal News Preview",
                width: 730,
                height: 210,
                url: "HorizontalNewsAppPart.aspx?SPHostUrl=" + hostweburl + "&SPAppWebUrl=" + appweburl + "&SPLanguage=" + language
            };

            SP.UI.ModalDialog.showModalDialog(options);
        }
    </script>

    <div class="admin-links">
        <a href="../Lists/HorizontalNews/">
            <div class="admin-link horizontal">
                <div class="box-content"><div class="box-content-text" id="manage-horizontal-news"></div></div>
                <script type="text/javascript">$('#manage-horizontal-news').text(Resource_Home_Horizontal_List);</script>
            </div>
        </a>
        <a href="../HorizontalNewsImages/">
            <div class="admin-link manage-carousel-pics">
                <div class="box-content"><div class="box-content-text" id="manage-horizontal-pics"></div></div>
                <script type="text/javascript">$('#manage-horizontal-pics').text(Resource_Home_Horizontal_Pics);</script>
            </div>
        </a>
        <a href="HorizontalNewsConfig.aspx?SPLanguage=" id="horizontal-config-link">
            <div class="admin-link cfg">
                <div class="box-content"><div class="box-content-text" id="manage-horizontal-cfg"></div></div>
                <script type="text/javascript">$('#manage-horizontal-cfg').text(Resource_Home_Horizontal_Cfg);</script>
            </div>
        </a>
        <script type="text/javascript">$('#horizontal-config-link').attr('href', 'HorizontalNewsConfig.aspx?SPLanguage=' + language + '&SPHostUrl=' + spHostUrl + '&SPAppWebUrl=' + appweburl);</script>
        <a href="#" onclick="javascript:ShowPreviewHorizontal(); return false;">
            <div class="admin-link sample">
                <div class="box-content"><div class="box-content-text" id="manage-horizontal-preview"></div></div>
                <script type="text/javascript">$('#manage-horizontal-preview').text(Resource_Home_Horizontal_Preview);</script>
            </div>
        </a>
        <a href="HorizontalNewsHelp.aspx?SPLanguage=" id="horizontal-help-link">
            <div class="admin-link help">
                <div class="box-content"><div class="box-content-text" id="manage-horizontal-help"></div></div>
                <script type="text/javascript">$('#manage-horizontal-help').text(Resource_Home_Horizontal_Help);</script>
            </div>
        </a>
        <script type="text/javascript">$('#horizontal-help-link').attr('href', 'HorizontalNewsHelp.aspx?SPLanguage=' + language);</script>
    </div>

    <h2 id="microtext"></h2>
    <script type="text/javascript">$('#microtext').text(Resource_Home_Micro);</script>
    
    <script type="text/javascript">
        function ShowPreviewMicro() {
            //Using a generic object.
            var options = {
                title: "Micro News Preview",
                width: 600,
                height: 80,
                url: "MicroNewsAppPart.aspx?SPHostUrl=" + hostweburl + "&SPAppWebUrl=" + appweburl + "&SPLanguage=" + language
            };

            SP.UI.ModalDialog.showModalDialog(options);
        }
    </script>
    <div class="admin-links">
         <a href="../Lists/MicroNews/">
            <div class="admin-link micro">
                <div class="box-content"><div class="box-content-text"  id="manage-micro-news"></div></div>
                <script type="text/javascript">$('#manage-micro-news').text(Resource_Home_Micro_List);</script>
            </div>
        </a>
         <a href="MicroNewsConfig.aspx?SPLanguage=" id="micro-cfg-link">
            <div class="admin-link cfg">
                <div class="box-content"><div class="box-content-text"  id="manage-micro-cfg"></div></div>
                <script type="text/javascript">$('#manage-micro-cfg').text(Resource_Home_Micro_Cfg);</script>
            </div>
        </a>
        <script type="text/javascript">$('#micro-cfg-link').attr('href', 'MicroNewsConfig.aspx?SPLanguage=' + language + '&SPHostUrl=' + spHostUrl + '&SPAppWebUrl=' + appweburl);</script>
        <a href="#" onclick="javascript:ShowPreviewMicro(); return false;">
            <div class="admin-link sample">
                <div class="box-content"><div class="box-content-text" id="manage-micro-preview"></div></div>
                <script type="text/javascript">$('#manage-micro-preview').text(Resource_Home_Micro_Preview);</script>
            </div>
        </a>
        <a href="MicroNewsHelp.aspx?SPLanguage=" id="micro-help-link">
            <div class="admin-link help">
                <div class="box-content"><div class="box-content-text" id="manage-micro-help"></div></div>
                <script type="text/javascript">$('#manage-micro-help').text(Resource_Home_Micro_Help);</script>
            </div>
        </a>
        <script type="text/javascript">$('#micro-help-link').attr('href', 'MicroNewsHelp.aspx?SPLanguage=' + language);</script>
    </div>

    <p class="footer" id="footer"></p>
    <script type="text/javascript">$('#footer').append(Resource_Home_Footer);</script>

    <p class="footer"><span id="app-current-version"></span> 1.6.2.0</p>
    <script type="text/javascript">$('#app-current-version').text(Resource_Home_CurrentVersion);</script>

</asp:Content>


