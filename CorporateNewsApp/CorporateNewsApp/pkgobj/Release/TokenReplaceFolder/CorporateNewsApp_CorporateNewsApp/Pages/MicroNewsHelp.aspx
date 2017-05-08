﻿<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" language="C#" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ID="ContentTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
</asp:Content>

<asp:Content ID="ContentPageTitle" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    <span id="page-help-title-area"></span>
    <script type="text/javascript">$('#page-help-title-area').append(Resource_Micro_Help_Title);</script>
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ID="Content1" ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <link rel="stylesheet" href="../Css/AppBack.css" />
    <script type="text/javascript" src="../Scripts/jquery-1.6.4.min.js"></script>
    <script type="text/javascript" src="../Scripts/Resources.js"></script>
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ID="Content2" ContentPlaceHolderId="PlaceHolderMain" runat="server">

    <script type="text/javascript">$(document).attr('title', Resource_Micro_Help_Title);</script>

    <div class="help-content">

        <h2 id="about-app-part"></h2>
        <script type="text/javascript">$('#about-app-part').append(Resource_About_App_Part);</script>

        <p id="help-intro"></p>
        <script type="text/javascript">$('#help-intro').append(Resource_Micro_Help_Introduction);</script>
        
        <h2 id="how-to-manage-news"></h2>
        <script type="text/javascript">$('#how-to-manage-news').append(Resource_How_To_Manage_News);</script>

        <p id="micro-lists-intro"></p>
        <script type="text/javascript">$('#micro-lists-intro').append(Resource_Micro_Lists_Intro);</script>
        
        <p id="micro-lists-fill"></p>
        <script type="text/javascript">$('#micro-lists-fill').append(Resource_Micro_List_Fill);</script>

        <table>
            <thead>
                <tr>
                    <td><span id="header-field"></span></td>
                    <td><span id="header-description"></span></td>
                    <td><span id="header-required"></span></td>
                </tr>
            </thead>
            <tbody>
                <tr class="classical">
                    <td class="first"><span id="table-field-title"></span></td>
                    <td><span id="table-field-title-description"></span></td>
                    <td class="center"><span id="table-field-title-required"></span></td>
                </tr>
                <tr class="alternate">
                    <td class="first"><span id="table-field-enabled"></span></td>
                    <td><span id="table-field-enabled-description"></span></td>
                    <td class="center"><span id="table-field-enabled-required"></span></td>
                </tr>
                <tr class="classical">
                    <td class="first"><span id="table-field-publicationdate"></span></td>
                    <td><span id="table-field-publicationdate-description"></span></td>
                    <td class="center"><span id="table-field-publicationdate-required"></span></td>
                </tr>
                <tr class="alternate">
                    <td class="first"><span id="table-field-publicationenddate"></span></td>
                    <td><span id="table-field-publicationenddate-description"></span></td>
                    <td class="center"><span id="table-field-publicationenddate-required"></span></td>
                </tr>
                <tr class="classical">
                    <td class="first"><span id="table-field-order"></span></td>
                    <td><span id="table-field-order-description"></span></td>
                    <td class="center"><span id="table-field-order-required"></span></td>
                </tr>
                <tr class="alternate">
                    <td class="first"><span id="table-field-linkurl"></span></td>
                    <td><span id="table-field-linkurl-description"></span></td>
                    <td class="center"><span id="table-field-linkurl-required"></span></td>
                </tr>
            </tbody>
        </table>
        <script type="text/javascript">
            $('#header-field').append(Resource_Field_Header_Name);
            $('#header-description').append(Resource_Field_Header_Description);
            $('#header-required').append(Resource_Field_Header_Required);
            $('#table-field-title').append(Resource_Field_Title);
            $('#table-field-title-description').append(Resource_Field_Title_Description);
            $('#table-field-title-required').append(Resource_Yes);
            $('#table-field-enabled').append(Resource_Field_Enabled);
            $('#table-field-enabled-description').append(Resource_Field_Enabled_Description);
            $('#table-field-enabled-required').append(Resource_Yes);
            $('#table-field-publicationdate').append(Resource_Field_PublicationDate);
            $('#table-field-publicationdate-description').append(Resource_Field_PublicationDate_Description);
            $('#table-field-publicationdate-required').append(Resource_Yes);
            $('#table-field-publicationenddate').append(Resource_Field_PublicationEndDate);
            $('#table-field-publicationenddate-description').append(Resource_Field_PublicationEndDate_Description);
            $('#table-field-publicationenddate-required').append(Resource_No);
            $('#table-field-order').append(Resource_Field_Order);
            $('#table-field-order-description').append(Resource_Field_Order_Description);
            $('#table-field-order-required').append(Resource_Yes);
            $('#table-field-linkurl').append(Resource_Field_LinkURL);
            $('#table-field-linkurl-description').append(Resource_Field_LinkURL_Description);
            $('#table-field-linkurl-required').append(Resource_Yes);
        </script>

        <h2 id="how-to-use"></h2>
        <script type="text/javascript">$('#how-to-use').append(Resource_How_To_Use_It);</script>

        <p id="edit-carousel-add-app-part"></p>
        <script type="text/javascript">$('#edit-carousel-add-app-part').append(Resource_Micro_Add_App_Part);</script>

        <img src="../Images/MicroNewsHelp01.png" alt="Micro News Help"/>

        <p id="edit-menu-modify-properties"></p>
        <script type="text/javascript">$('#edit-menu-modify-properties').append(Resource_App_Part_Modify_Properties);</script>

        <img src="../Images/MicroNewsHelp02.png" alt="Micro News Help"/>
        <p>&nbsp;</p>

        <h2 id="app-part-properties"></h2>
        <script type="text/javascript">$('#app-part-properties').append(Resource_App_Part_Properties);</script>
    
        <p id="edit-app-part-properties"></p>
        <script type="text/javascript">$('#edit-app-part-properties').append(Resource_Edit_Custom_Fields);</script>

        <table>
            <thead>
                <tr>
                    <td><span id="table-property-header-name"></span></td>
                    <td><span id="table-property-header-category"></span></td>
                    <td><span id="table-property-header-type"></span></td>
                    <td><span id="table-property-header-description"></span></td>
                </tr>
            </thead>
            <tbody>
                <tr class="classical">
                    <td class="first"><span id="table-property-autostart"></span></td>
                    <td><span id="table-property-autostart-category"></span></td>
                    <td><span id="table-property-autostart-type"></span></td>
                    <td><span id="table-property-autostart-description"></span></td>
                </tr>
                <tr class="alternate">
                    <td class="first"><span id="table-property-circular"></span></td>
                    <td><span id="table-property-circular-category"></span></td>
                    <td><span id="table-property-circular-type"></span></td>
                    <td><span id="table-property-circular-description"></span></td>
                </tr>
                <tr class="classical">
                    <td class="first"><span id="table-property-transition"></span></td>
                    <td><span id="table-property-transition-category"></span></td>
                    <td><span id="table-property-transition-type"></span></td>
                    <td><span id="table-property-transition-description"></span></td>
                </tr>
                <tr class="alternate">
                    <td class="first"><span id="table-property-panelfx"></span></td>
                    <td><span id="table-property-panelfx-category"></span></td>
                    <td><span id="table-property-panelfx-type"></span></td>
                    <td><span id="table-property-panelfx-description"></span></td>
                </tr>
                <tr class="classical">
                    <td class="first"><span id="table-property-customcss"></span></td>
                    <td><span id="table-property-customcss-category"></span></td>
                    <td><span id="table-property-customcss-type"></span></td>
                    <td><span id="table-property-customcss-description"></span></td>
                </tr>
                <tr class="alternate">
                    <td class="first"><span id="table-property-headlinetext"></span></td>
                    <td><span id="table-property-headlinetext-category"></span></td>
                    <td><span id="table-property-headlinetext-type"></span></td>
                    <td><span id="table-property-headlinetext-description"></span></td>
                </tr>
            </tbody>
        </table>
        <script type="text/javascript">
            $('#table-property-header-name').append(Resource_Property_Header_Name);
            $('#table-property-header-category').append(Resource_Property_Header_Category);
            $('#table-property-header-type').append(Resource_Property_Header_Type);
            $('#table-property-header-description').append(Resource_Property_Header_Description);
            $('#table-property-autostart').append(Resource_Property_AutoStart);
            $('#table-property-autostart-category').append(Resource_Property_Category_General);
            $('#table-property-autostart-type').append(Resource_Property_Type_Boolean);
            $('#table-property-autostart-description').append(Resource_Property_AutoStart_Description);
            $('#table-property-circular').append(Resource_Property_Circular);
            $('#table-property-circular-category').append(Resource_Property_Category_General);
            $('#table-property-circular-type').append(Resource_Property_Type_Boolean);
            $('#table-property-circular-description').append(Resource_Property_Circular_Description);
            $('#table-property-transition').append(Resource_Property_Transition);
            $('#table-property-transition-category').append(Resource_Property_Category_Effects);
            $('#table-property-transition-type').append(Resource_Property_Type_Enum);
            $('#table-property-transition-description').append(Resource_Micro_Property_Transition_Description);
            $('#table-property-panelfx').append(Resource_Property_PanelFxSpeed);
            $('#table-property-panelfx-category').append(Resource_Property_Category_Effects);
            $('#table-property-panelfx-type').append(Resource_Property_Type_Int);
            $('#table-property-panelfx-description').append(Resource_Property_PanelFxSpeed_Description);
            $('#table-property-customcss').append(Resource_Property_CustomCSSFile);
            $('#table-property-customcss-category').append(Resource_Property_Category_General);
            $('#table-property-customcss-type').append(Resource_Property_Type_String);
            $('#table-property-customcss-description').append(Resource_Property_CustomCSSFile_Description);
            $('#table-property-headlinetext').append(Resource_Property_HeadlineText);
            $('#table-property-headlinetext-category').append(Resource_Property_Category_General);
            $('#table-property-headlinetext-type').append(Resource_Property_Type_String);
            $('#table-property-headlinetext-description').append(Resource_Property_HeadlineText_Description);
        </script>

        <h2 id="more-information-and-support"></h2>
        <script type="text/javascript">$('#more-information-and-support').append(Resource_More_Info);</script>

        <p id="help-footer"></p>
        <script type="text/javascript">$('#help-footer').append(Resource_Help_Footer);</script>
    
    </div>

</asp:Content>


