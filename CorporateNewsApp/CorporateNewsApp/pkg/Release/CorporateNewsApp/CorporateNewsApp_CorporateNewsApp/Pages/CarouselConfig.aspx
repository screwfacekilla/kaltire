<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" language="C#" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ID="ContentTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
</asp:Content>

<asp:Content ID="ContentPageTitle" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    <span id="page-cfg-title-area"></span>
    <script type="text/javascript">$('#page-cfg-title-area').append(Resource_Carousel_Config_Title);</script>
</asp:Content>


<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ID="Content1" ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <link rel="stylesheet" href="../Css/AppBack.css" />
    <script type="text/javascript" src="../Scripts/jquery-1.6.4.min.js"></script>
    <script type="text/javascript" src="../Scripts/Resources.js"></script>
    <script type="text/javascript" src="../Scripts/jscolor.js"></script>
    <script type="text/javascript" src="../Scripts/jquery.fontselect.js"></script>
    <script type="text/javascript" src="../Scripts/CarouselConfig.js"></script>
    
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
                $.getScript(scriptbase + "SP.js", execOperation);
            }
        );
    });

    // Function to execute basic operations.
    function execOperation() {

        // Continue your program flow here.
        readyToLoadConfig();
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
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ID="Content2" ContentPlaceHolderId="PlaceHolderMain" runat="server">

        <script type="text/javascript">$(document).attr('title', Resource_Carousel_Config_Title);</script>

        <div class="help-content">

        <div class="cfg-loading">
            <img src="../Images/loader.gif" width="16" height="16" alt="Loading..." />
            <span id="loading-mssg"></span>
            <script type="text/javascript">$('#loading-mssg').append(Resource_Config_Loading);</script>
        </div>

        <div class="cfg-content">

            <!-- TITLE -->
            <h2 id="configuration"></h2>
            <script type="text/javascript">$('#configuration').append(Resource_Config);</script>

            <div class="config-description">
                <span id="description-config"></span>
                <script type="text/javascript">$('#description-config').append(Resource_Config_Desc);</script>
            </div>

            <table>
                <thead>
                    <tr>
                        <td><span id="header-key"></span>
                            <script type="text/javascript">$('#header-key').append(Resource_Config_Key);</script>
                        </td>
                        <td><span id="header-value"></span>
                            <script type="text/javascript">$('#header-value').append(Resource_Config_Value);</script>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-dimension"></span>
                            <script type="text/javascript">$('#configuration-label-dimension').append(Resource_Config_Dimension);</script>
                        </td>
                        <td>
                            <span id="configuration-label-width"></span>
                            <script type="text/javascript">$('#configuration-label-width').append(Resource_Config_Width);</script>
                            <input type="text" id="input-width" style="width:30px" />
                            px &nbsp;&nbsp;&nbsp;
                            <span id="configuration-label-height"></span>
                            <script type="text/javascript">$('#configuration-label-height').append(Resource_Config_Height);</script>
                            <input type="text" id="input-height" style="width:30px" />
                            px
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-dimension-panel"></span>
                            <script type="text/javascript">$('#configuration-label-dimension-panel').append(Resource_Config_Dimension_Panel);</script>
                        </td>
                        <td>
                            <span id="configuration-label-width2"></span>
                            <script type="text/javascript">$('#configuration-label-width2').append(Resource_Config_Width);</script>
                            <input type="text" id="input-width2" style="width:30px" />
                            px &nbsp;&nbsp;&nbsp;
                            <span id="configuration-label-height2"></span>
                            <script type="text/javascript">$('#configuration-label-height2').append(Resource_Config_Height);</script>
                            <input type="text" id="input-height2" style="width:30px" />
                            px
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-dimension-tab"></span>
                            <script type="text/javascript">$('#configuration-label-dimension-tab').append(Resource_Config_Dimension_Tab);</script>
                        </td>
                        <td>
                            <span id="configuration-label-width3"></span>
                            <script type="text/javascript">$('#configuration-label-width3').append(Resource_Config_Width);</script>
                            <input type="text" id="input-width3" style="width:30px" />
                            px &nbsp;&nbsp;&nbsp;
                            <span id="configuration-label-height3"></span>
                            <script type="text/javascript">$('#configuration-label-height3').append(Resource_Config_Height);</script>
                            <input type="text" id="input-height3" style="width:30px" />
                            px
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-dimension-subtitles"></span>
                            <script type="text/javascript">$('#configuration-label-dimension-subtitles').append(Resource_Config_Dimension_Subtitles);</script>
                        </td>
                        <td>
                            <span id="configuration-label-width4"></span>
                            <script type="text/javascript">$('#configuration-label-width4').append(Resource_Config_Width);</script>
                            <input type="text" id="input-width4" style="width:30px" />
                            px &nbsp;&nbsp;&nbsp;
                            <span id="configuration-label-height4"></span>
                            <script type="text/javascript">$('#configuration-label-height4').append(Resource_Config_Height);</script>
                            <input type="text" id="input-height4" style="width:30px" />
                            px
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-dimension-pagination"></span>
                            <script type="text/javascript">$('#configuration-label-dimension-pagination').append(Resource_Config_Dimension_Pagination);</script>
                        </td>
                        <td>
                            <span id="configuration-label-width5"></span>
                            <script type="text/javascript">$('#configuration-label-width5').append(Resource_Config_Width);</script>
                            <input type="text" id="input-width5" style="width:30px" />
                            px &nbsp;&nbsp;&nbsp;
                            <span id="configuration-label-height5"></span>
                            <script type="text/javascript">$('#configuration-label-height5').append(Resource_Config_Height);</script>
                            <input type="text" id="input-height5" style="width:30px" />
                            px
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-bgcolor"></span>
                            <script type="text/javascript">$('#configuration-label-bgcolor').append(Resource_Config_Bgcolor);</script>
                        </td>
                        <td><input type="text" class="color" id="input-bgcolor" /></td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-loader"></span>
                            <script type="text/javascript">$('#configuration-label-loader').append(Resource_Config_Loader);</script>
                        </td>
                        <td>
                            <input type="radio" name="loader" id="loader1" value="1" checked="checked" /> 
                            <img src="../Images/loader1.gif" alt="Loader 1" width="16" height="16" />
                            <input type="radio" name="loader" id="loader2" value="2" /> 
                            <img src="../Images/loader2.gif" alt="Loader 2" width="16" height="16" />
                            <input type="radio" name="loader" id="loader3" value="3" /> 
                            <img src="../Images/loader3.gif" alt="Loader 3"  width="16" height="11"/>
                            <input type="radio" name="loader" id="loader4" value="4" /> 
                            <img src="../Images/loader4.gif" alt="Loader 4"  width="16" height="16"/>
                            <input type="radio" name="loader" id="loader5" value="5" /> 
                            <img src="../Images/loader5.gif" alt="Loader 5"  width="15" height="15"/>
                            <input type="radio" name="loader" id="loader6" value="6" /> 
                            <img src="../Images/loader6.gif" alt="Loader 6"  width="16" height="16"/>
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                             <span id="configuration-label-font-family"></span>
                             <script type="text/javascript">$('#configuration-label-font-family').append(Resource_Config_Font_Family);</script>
                        </td>
                        <td>
                            <input id="font" type="text" />
                            <script type="text/javascript">
                              $(function(){
                                $('#font').fontselect();
                              });
                            </script>
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                             <span id="configuration-label-tab-bgcolor"></span>
                             <script type="text/javascript">$('#configuration-label-tab-bgcolor').append(Resource_Config_TabBgColor);</script>
                        </td>
                        <td>
                            <input type="text"  class="color" id="input-tab-bgcolor" />
                            <input type="checkbox" id="checkbox-radient-tab-bgcolor" name="checkbox-radient-tab-bgcolor" checked="checked" value="True" />
                            <span id="label-checkbox-radient-tab-bgcolor"></span>
                            <script type="text/javascript">
                                $('#checkbox-radient-tab-bgcolor').attr('value', Resource_Config_Gradient);
                                $('#label-checkbox-radient-tab-bgcolor').append(Resource_Config_Gradient);
                            </script>
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-tab-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-tab-font-color').append(Resource_Config_TabFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-tab-font-color" />
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-hover-tab-bgcolor"></span>
                            <script type="text/javascript">$('#configuration-label-hover-tab-bgcolor').append(Resource_Config_TabHoverBgColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-tab-hover-bgcolor" />
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-hovertab-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-hovertab-font-color').append(Resource_Config_TabHoverFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-hover-tab-font-color" />
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-selected-tab-bgcolor"></span>
                            <script type="text/javascript">$('#configuration-label-selected-tab-bgcolor').append(Resource_Config_SelectedTabBgColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-selected-tab-bgcolor" />
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-selectedtab-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-selectedtab-font-color').append(Resource_Config_TabSelectedFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-selected-tab-font-color" />
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-font-size"></span>
                            <script type="text/javascript">$('#configuration-label-font-size').append(Resource_Config_Font_Size);</script>
                        </td>
                        <td>
                            <input type="text" id="input-font-size" style="width:40px" />
                            <input type="checkbox" id="checkbox-font-uppercase" name="checkbox-font-uppercase" checked="checked" value="true" />
                            <span id="label-font-uppercase"></span>
                            <script type="text/javascript">
                                $('#checkbox-font-uppercase').attr('value', Resource_Config_UpperCase);
                                $('#label-font-uppercase').append(Resource_Config_UpperCase);
                            </script>
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-desc-font-size"></span>
                            <script type="text/javascript">$('#configuration-label-desc-font-size').append(Resource_Config_Desc_Font_Size);</script>
                        </td>
                        <td><input type="text" id="input-desc-font-size" style="width:40px" /></td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-padding"></span>
                            <script type="text/javascript">$('#configuration-label-padding').append(Resource_Config_Tab_Padding);</script>
                        </td>
                        <td>
                            <span id="configuration-label-padding-left"></span>
                            <script type="text/javascript">$('#configuration-label-padding-left').append(Resource_Config_Padding_Left);</script>
                            <input type="text" id="input-tab-padding-left" style="width:30px" />
                            px &nbsp;&nbsp;
                            <span id="configuration-label-padding-top"></span>
                            <script type="text/javascript">$('#configuration-label-padding-top').append(Resource_Config_Padding_Top);</script>
                            <input type="text" id="input-tab-padding-top" style="width:30px" />
                            px &nbsp;&nbsp;
                            <span id="configuration-label-padding-right"></span>
                            <script type="text/javascript">$('#configuration-label-padding-right').append(Resource_Config_Padding_Right);</script>
                            <input type="text" id="input-tab-padding-right" style="width:30px" />
                            px &nbsp;&nbsp;
                            <span id="configuration-label-padding-bottom"></span>
                            <script type="text/javascript">$('#configuration-label-padding-bottom').append(Resource_Config_Padding_Bottom);</script>
                            <input type="text" id="input-tab-padding-bottom" style="width:30px" />
                            px 
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                             <span id="configuration-label-pagination-bgcolor"></span>
                             <script type="text/javascript">$('#configuration-label-pagination-bgcolor').append(Resource_Config_PaginationBgColor);</script>
                        </td>
                        <td>
                            <input type="text"  class="color" id="input-pagination-bgcolor" />
                            <input type="checkbox" id="checkbox-radient-pagination-bgcolor" name="checkbox-radient-pagination-bgcolor" checked="checked" value="True" />
                            <span id="label-checkbox-radient-pagination-bgcolor"></span>
                            <script type="text/javascript">
                                $('#checkbox-radient-pagination-bgcolor').attr('value', Resource_Config_Gradient);
                                $('#label-checkbox-radient-pagination-bgcolor').append(Resource_Config_Gradient);
                            </script>
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-pagination-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-pagination-font-color').append(Resource_Config_PaginationFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-pagination-font-color" />
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-hover-pagination-bgcolor"></span>
                            <script type="text/javascript">$('#configuration-label-hover-pagination-bgcolor').append(Resource_Config_PaginationHoverBgColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-pagination-hover-bgcolor" />
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-hoverpagination-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-hoverpagination-font-color').append(Resource_Config_PaginationHoverFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-hover-pagination-font-color" />
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-selected-pagination-bgcolor"></span>
                            <script type="text/javascript">$('#configuration-label-selected-pagination-bgcolor').append(Resource_Config_SelectedPaginationBgColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-selected-pagination-bgcolor" />
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-selectedpagination-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-selectedpagination-font-color').append(Resource_Config_PaginationSelectedFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-selected-pagination-font-color" />
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-pag-font-size"></span>
                            <script type="text/javascript">$('#configuration-label-pag-font-size').append(Resource_Config_Pag_Font_Size);</script>
                        </td>
                        <td><input type="text" id="input-pag-font-size" style="width:40px" /></td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-subtitles-color"></span>
                            <script type="text/javascript">$('#configuration-label-subtitles-color').append(Resource_Config_Sub_BgColor);</script>
                        </td>
                        <td>
                            <input type="radio" id="subcolor1" name="subcolor" checked="checked" value="transparent" /> <span id="configuration-label-sub-transparent"></span> 
                            <br />
                            <input type="radio" id="subcolor2" name="subcolor" value="solid" /> <span id="configuration-label-sub-solid"></span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="color" id="input-sub-color" />
                            <script type="text/javascript">
                                $('#configuration-label-sub-transparent').append(Resource_Config_Sub_Transparent);
                                $('#configuration-label-sub-solid').append(Resource_Config_Sub_Solid);
                            </script>
                        </td>
                    </tr>
                    <tr class="alternate">
                        <td class="first">
                            <span id="configuration-label-sub-font-color"></span>
                            <script type="text/javascript">$('#configuration-label-sub-font-color').append(Resource_Config_SubFontColor);</script>
                        </td>
                        <td>
                            <input type="text" class="color" id="input-sub-font-color" />
                        </td>
                    </tr>
                    <tr class="classical">
                        <td class="first">
                            <span id="configuration-label-readmore-font-size"></span>
                            <script type="text/javascript">$('#configuration-label-readmore-font-size').append(Resource_Config_Readmore_Font_Size);</script>
                        </td>
                        <td><input type="text" id="input-readmore-font-size" style="width:40px" /></td>
                    </tr>
                    
                </tbody>
            </table>

            <div class="cfg-generate-preview">
                <img src="../Images/loader.gif" width="16" height="16" alt="Loading..." />
                <span id="preview-mssg"></span>
                <script type="text/javascript">$('#preview-mssg').append(Resource_Config_Preview_In_Progress);</script>
            </div>

            <div class="cfg-save-in-progress">
                <img src="../Images/loader.gif" width="16" height="16" alt="Loading..." />
                <span id="save-in-progress"></span>
                <script type="text/javascript">$('#save-in-progress').append(Resource_Config_Update_In_Progress);</script>
            </div>

            <div id="buttons-div" style="padding-top:10px">
                <input type="button" id="button-submit" value="Update configuration" onclick="javascript:SaveConfig();" />
                <input type="button" id="button-preview" value="Preview" onclick="javascript:ShowPreviewCarousel(); return false;" />
                <div style="display:none;" ><input type="reset" id="rst_form"/></div>
                <input type="button" id="button-cancel" value="Cancel" onclick="javascript:$('#rst_form').click(); jscolor.rebind(); return false;" />
                <input type="button" id="button-default" value="Set default values" onclick="javascript: ResetDefaultValue(); return false;" />
                <script type="text/javascript">$('#button-submit').attr('value', Resource_Config_Save);</script>
                <script type="text/javascript">$('#button-preview').attr('value', Resource_Config_Preview);</script>
                <script type="text/javascript">$('#button-cancel').attr('value', Resource_Config_Cancel);</script>
                <script type="text/javascript">$('#button-default').attr('value', Resource_Config_Default);</script>
            </div>

        </div>

      </div>

</asp:Content>


