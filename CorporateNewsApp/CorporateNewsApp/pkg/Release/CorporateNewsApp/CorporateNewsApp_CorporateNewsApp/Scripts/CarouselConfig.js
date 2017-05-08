var configClientContext;

// Configuration parameters vars & keys labels
var configWidthValue; var configWidthLabel = 'Width';
var configHeightValue; var configHeightLabel = 'Height';
var configPanelWidthValue; var configPanelWidthLabel = 'PanelWidth';
var configPanelHeightValue; var configPanelHeightLabel = 'PanelHeight';
var configTabWidthValue; var configTabWidthLabel = 'TabWidth';
var configTabHeightValue; var configTabHeightLabel = 'TabHeight';
var configSubWidthValue; var configSubWidthLabel = 'SubWidth';
var configSubHeightValue; var configSubHeightLabel = 'SubHeight';
var configLoaderValue; var configLoaderLabel = 'Loader';
var configBgColorValue; var configBgColorLabel = 'BgColor';
var configTabBgColorValue; var configTabBgColorLabel = 'TabBgColor';
var configTabBgGradientValue; var configTabBgGradientLabel = 'TabBgGradient';
var configTabFontColorValue; var configTabFontColorLabel = 'TabFontColor';
var configTabHoverBgColorValue; var configTabHoverBgColorLabel = 'TabHoverBgColor';
var configTabHoverFontColorValue; var configTabHoverFontColorLabel = 'TabHoverFontColor';
var configSelectedTabBgColorValue; var configSelectedTabBgColorLabel = 'SelectedTabBgColor';
var configSelectedTabFontColorValue; var configSelectedTabFontColorLabel = 'SelectedTabFontColor';
var configTabPaddingLeftValue; var configTabPaddingLeftLabel = 'TabPaddingLeft';
var configTabPaddingTopValue; var configTabPaddingTopLabel = 'TabPaddingTop';
var configTabPaddingRightValue; var configTabPaddingRightLabel = 'TabPaddingRight';
var configTabPaddingBottomValue; var configTabPaddingBottomLabel = 'TabPaddingBottom';
var configFontFamilyValue; var configFontFamilyLabel = 'FontFamily';
var configFontSizeValue; var configFontSizeLabel = 'FontSize';
var configFontSizeUpperCaseValue; var configFontSizeUpperCaseLabel = 'FontSizeUpperCase';
var configDescFontSizeValue; var configDescFontSizeLabel = 'DescriptionFontSize';
var configPagFontSizeValue; var configPagFontSizeLabel = 'PaginationFontSize';
var configReadmoreFontSizeValue; var configReadmoreFontSizeLabel = 'SubTitlesFontSize';
var configPaginationBgColorValue; var configPaginationBgColorLabel = 'PaginationBgColor';
var configPaginationBgGradientValue; var configPaginationBgGradientLabel = 'PaginationBgGradient';
var configPaginationFontColorValue; var configPaginationFontColorLabel = 'PaginationFontColor';
var configPaginationHoverBgColorValue; var configPaginationHoverBgColorLabel = 'PaginationHoverBgColor';
var configPaginationHoverFontColorValue; var configPaginationHoverFontColorLabel = 'PaginationHoverFontColor';
var configSelectedPaginationBgColorValue; var configSelectedPaginationBgColorLabel = 'SelectedPaginationBgColor';
var configSelectedPaginationFontColorValue; var configSelectedPaginationFontColorLabel = 'SelectedPaginationFontColor';
var configPaginationWidthValue; var configPaginationWidthLabel = 'PaginationWidth';
var configPaginationHeightValue; var configPaginationHeightLabel = 'PaginationHeight';
var configSubBgValue; var configSubBgLabel = 'SubTitlesBg';
var configSubBgColorValue; var configSubBgColorLabel = 'SubTitlesBgColor';
var configSubFontColorValue; var configSubFontColorLabel = 'SubTitlesFontColor';

// This function is executed after the DOM is ready and SharePoint scripts are loaded
// Place any code you want to run when Default.aspx is loaded in this function
// The code creates a context object which is needed to use the SharePoint object model
function readyToLoadConfig() 
{
    configClientContext = new SP.ClientContext.get_current();
    var oList = configClientContext.get_web().get_lists().getByTitle('CarouselNewsConfig');
    
    var camlQuery = new SP.CamlQuery();
    this.collListItem = oList.getItems(camlQuery);
        
    configClientContext.load(collListItem);
        
    configClientContext.executeQueryAsync(Function.createDelegate(this, this.ConfigQuerySucceeded), Function.createDelegate(this, this.ConfigQueryFailed));   
}

// This function is called when the configuration list query is loaded
function ConfigQuerySucceeded(sender, args) 
{
    var listItemEnumerator = collListItem.getEnumerator();
    while (listItemEnumerator.moveNext()) 
    {
        var oListItem = listItemEnumerator.get_current();
        var itemTitle = oListItem.get_item('Title');
        var itemKeyValue = oListItem.get_item('KeyValue');

        if (itemTitle == configWidthLabel) {
            configWidthValue = itemKeyValue;
        }
        else if (itemTitle == configHeightLabel) {
            configHeightValue = itemKeyValue;
        }
        else if (itemTitle == configPanelWidthLabel) {
            configPanelWidthValue = itemKeyValue;
        }
        else if (itemTitle == configPanelHeightLabel) {
            configPanelHeightValue = itemKeyValue;
        }
        else if (itemTitle == configTabWidthLabel) {
            configTabWidthValue = itemKeyValue;
        }
        else if (itemTitle == configTabHeightLabel) {
            configTabHeightValue = itemKeyValue;
        }
        else if (itemTitle == configSubWidthLabel) {
            configSubWidthValue = itemKeyValue;
        }
        else if (itemTitle == configSubHeightLabel) {
            configSubHeightValue = itemKeyValue;
        }
        else if (itemTitle == configLoaderLabel) {
            configLoaderValue = itemKeyValue;
        }
        else if (itemTitle == configBgColorLabel) {
            configBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configTabBgColorLabel) {
            configTabBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configTabBgGradientLabel) {
            configTabBgGradientValue = itemKeyValue;
        }
        else if (itemTitle == configTabFontColorLabel) {
            configTabFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configTabHoverBgColorLabel) {
            configTabHoverBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configTabHoverFontColorLabel) {
            configTabHoverFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configSelectedTabBgColorLabel) {
            configSelectedTabBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configSelectedTabFontColorLabel) {
            configSelectedTabFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configFontFamilyLabel) {
            configFontFamilyValue = itemKeyValue;
        }
        else if (itemTitle == configFontSizeLabel) {
            configFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configFontSizeUpperCaseLabel) {
            configFontSizeUpperCaseValue = itemKeyValue;
        }
        else if (itemTitle == configDescFontSizeLabel) {
            configDescFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configTabPaddingLeftLabel) {
            configTabPaddingLeftValue = itemKeyValue;
        }
        else if (itemTitle == configTabPaddingTopLabel) {
            configTabPaddingTopValue = itemKeyValue;
        }
        else if (itemTitle == configTabPaddingRightLabel) {
            configTabPaddingRightValue = itemKeyValue;
        }
        else if (itemTitle == configTabPaddingBottomLabel) {
            configTabPaddingBottomValue = itemKeyValue;
        }
        else if (itemTitle == configPagFontSizeLabel) {
            configPagFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configReadmoreFontSizeLabel) {
            configReadmoreFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationBgColorLabel) {
            configPaginationBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationBgGradientLabel) {
            configPaginationBgGradientValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationFontColorLabel) {
            configPaginationFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationHoverBgColorLabel) {
            configPaginationHoverBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationHoverFontColorLabel) {
            configPaginationHoverFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configSelectedPaginationBgColorLabel) {
            configSelectedPaginationBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configSelectedPaginationFontColorLabel) {
            configSelectedPaginationFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationWidthLabel) {
            configPaginationWidthValue = itemKeyValue;
        }
        else if (itemTitle == configPaginationHeightLabel) {
            configPaginationHeightValue = itemKeyValue;
        }
        else if (itemTitle == configSubBgLabel) {
            configSubBgValue = itemKeyValue;
        } 
        else if (itemTitle == configSubBgColorLabel) {
            configSubBgColorValue = itemKeyValue;
        } 
        else if (itemTitle == configSubFontColorLabel) {
            configSubFontColorValue = itemKeyValue;
        } 

    }

    SetConfigFields();
}

function ResetDefaultValue()
{
    $("#input-width").attr('value', '755');
    $("#input-height").attr('value', '233');
    $("#input-width2").attr('value', '474');
    $("#input-height2").attr('value', '233');
    $("#input-width3").attr('value', '280');
    $("#input-height3").attr('value', '78');
    $("#input-width4").attr('value', '474');
    $("#input-height4").attr('value', '24');
    $("#input-width5").attr('value', '20');
    $("#input-height5").attr('value', '20');
    $("#loader1").attr('checked', 'checked');
    $("#input-bgcolor").attr('value', 'EFEBE7');
    $("#input-tab-bgcolor").attr('value', '898D8D');
    $("#checkbox-radient-tab-bgcolor").attr('checked', true);
    $("#input-tab-font-color").attr('value', 'FFFFFF');
    $("#input-tab-hover-bgcolor").attr('value', 'A1A3A3');
    $("#input-hover-tab-font-color").attr('value', 'FFFFFF');
    $("#input-selected-tab-bgcolor").attr('value', 'F4B100');
    $("#input-selected-tab-font-color").attr('value', 'FFFFFF');
    $("#font").attr('value', 'Segoe UI');
    $("#input-font-size").attr('value', '16px');
    $("#checkbox-font-uppercase").attr('checked', true);
    $("#input-desc-font-size").attr('value', '12px');
    $("#input-tab-padding-left").attr('value', '18');
    $("#input-tab-padding-top").attr('value', '18');
    $("#input-tab-padding-right").attr('value', '18');
    $("#input-tab-padding-bottom").attr('value', '18');
    $("#input-pag-font-size").attr('value', '13px');
    $("#input-pagination-bgcolor").attr('value', 'ADB3B9');
    $("#checkbox-radient-pagination-bgcolor").attr('checked', true);
    $("#input-pagination-font-color").attr('value', 'FFFFFF');
    $("#input-pagination-hover-bgcolor").attr('value', '707273');
    $("#input-hover-pagination-font-color").attr('value', 'FFFFFF');
    $("#input-selected-pagination-bgcolor").attr('value', '707273');
    $("#input-selected-pagination-font-color").attr('value', 'FFFFFF');
    $("#input-sub-color").attr('value', '707273');
    $("#input-sub-font-color").attr('value', 'FFFFFF');
    $("#input-readmore-font-size").attr('value', '11px');
    $("#subcolor1").attr('checked', 'checked');
    
    jscolor.rebind();
}

function SetConfigFields()
{
    $("#input-width").attr('value', configWidthValue);
    $("#input-height").attr('value', configHeightValue);
    $("#input-width2").attr('value', configPanelWidthValue);
    $("#input-height2").attr('value', configPanelHeightValue);
    $("#input-width3").attr('value', configTabWidthValue);
    $("#input-height3").attr('value', configTabHeightValue);
    $("#input-width4").attr('value', configSubWidthValue);
    $("#input-height4").attr('value', configSubHeightValue);
    $("#input-width5").attr('value', configPaginationWidthValue);
    $("#input-height5").attr('value', configPaginationHeightValue);
    $("#loader" + configLoaderValue).attr('checked', 'checked');
    $("#input-bgcolor").attr('value', configBgColorValue);
    $("#input-tab-bgcolor").attr('value', configTabBgColorValue);
    if (configTabBgGradientValue == "true") {
        $("#checkbox-radient-tab-bgcolor").attr('checked', true);
    }
    else {
        $("#checkbox-radient-tab-bgcolor").attr('checked', false);
    }
    $("#input-tab-font-color").attr('value', configTabFontColorValue);
    $("#input-tab-hover-bgcolor").attr('value', configTabHoverBgColorValue);
    $("#input-hover-tab-font-color").attr('value', configTabHoverFontColorValue);
    $("#input-selected-tab-bgcolor").attr('value', configSelectedTabBgColorValue);
    $("#input-selected-tab-font-color").attr('value', configSelectedTabFontColorValue);
    $("#font").attr('value', configFontFamilyValue);
    $("#input-font-size").attr('value', configFontSizeValue);
    if (configFontSizeUpperCaseValue == "true") {
        $("#checkbox-font-uppercase").attr('checked', true);
    }
    else {
        $("#checkbox-font-uppercase").attr('checked', false);
    }
    $("#input-desc-font-size").attr('value', configDescFontSizeValue);
    
    $("#input-tab-padding-left").attr('value', configTabPaddingLeftValue);
    $("#input-tab-padding-top").attr('value', configTabPaddingTopValue);
    $("#input-tab-padding-right").attr('value', configTabPaddingRightValue);
    $("#input-tab-padding-bottom").attr('value', configTabPaddingBottomValue);
    
    $("#input-pag-font-size").attr('value', configPagFontSizeValue);
    $("#input-pagination-bgcolor").attr('value', configPaginationBgColorValue);
    if (configPaginationBgGradientValue == "true") {
        $("#checkbox-radient-pagination-bgcolor").attr('checked', true);
    }
    else {
        $("#checkbox-radient-pagination-bgcolor").attr('checked', false);
    }
    $("#input-pagination-font-color").attr('value', configPaginationFontColorValue);
    $("#input-pagination-hover-bgcolor").attr('value', configPaginationHoverBgColorValue);
    $("#input-hover-pagination-font-color").attr('value', configPaginationHoverFontColorValue);
    $("#input-selected-pagination-bgcolor").attr('value', configSelectedPaginationBgColorValue);
    $("#input-selected-pagination-font-color").attr('value', configSelectedPaginationFontColorValue);
    $("#input-sub-color").attr('value', configSubBgColorValue);
    $("#input-sub-font-color").attr('value', configSubFontColorValue);
    $("#input-readmore-font-size").attr('value', configReadmoreFontSizeValue);
    if (configSubBgValue == "transparent") {
        $("#subcolor1").attr('checked', 'checked');
    }
    else {
        $("#subcolor2").attr('checked', 'checked');
    }
    
    $('.cfg-loading').css("display", "none");
    $('.cfg-content').css("display", "block");

    jscolor.rebind();
}

// This function is called when the query failed
function ConfigQueryFailed(sender, args) 
{
    var errorMessage = 'Request failed: ' + args.get_message() + '\n' + args.get_stackTrace();
    alert(errorMessage);

    $('.cfg-save-in-progress').css("display", "none");
    $('.cfg-generate-preview').css("display", "none");
}

function LoadValues()
{
    configWidthValue = $("#input-width").attr('value');
    configHeightValue = $("#input-height").attr('value');
    configPanelWidthValue = $("#input-width2").attr('value');
    configPanelHeightValue = $("#input-height2").attr('value');
    configTabWidthValue = $("#input-width3").attr('value');
    configTabHeightValue = $("#input-height3").attr('value');
    configSubWidthValue = $("#input-width4").attr('value');
    configSubHeightValue = $("#input-height4").attr('value');
    configPaginationWidthValue = $("#input-width5").attr('value');
    configPaginationHeightValue = $("#input-height5").attr('value');
    configLoaderValue = $("input:radio[name=loader]:checked").val();
    configBgColorValue = $("#input-bgcolor").attr('value');
    configTabBgColorValue = $("#input-tab-bgcolor").attr('value');
    configTabBgGradientValue = $("#checkbox-radient-tab-bgcolor").is(':checked').toString().toLowerCase();
    configTabFontColorValue = $("#input-tab-font-color").attr('value');
    configTabHoverBgColorValue = $("#input-tab-hover-bgcolor").attr('value');
    configTabHoverFontColorValue = $("#input-hover-tab-font-color").attr('value');
    configSelectedTabBgColorValue = $("#input-selected-tab-bgcolor").attr('value');
    configSelectedTabFontColorValue = $("#input-selected-tab-font-color").attr('value');
    configFontFamilyValue = $("#font").attr('value');
    configFontSizeValue = $("#input-font-size").attr('value');
    configFontSizeUpperCaseValue = $("#checkbox-font-uppercase").is(':checked').toString().toLowerCase();
    configDescFontSizeValue = $("#input-desc-font-size").attr('value');
    configTabPaddingLeftValue = $("#input-tab-padding-left").attr('value');
    configTabPaddingTopValue = $("#input-tab-padding-top").attr('value');
    configTabPaddingRightValue = $("#input-tab-padding-right").attr('value');
    configTabPaddingBottomValue = $("#input-tab-padding-bottom").attr('value');
    configPagFontSizeValue = $("#input-pag-font-size").attr('value');
    configPaginationBgColorValue = $("#input-pagination-bgcolor").attr('value');
    configPaginationBgGradientValue = $("#checkbox-radient-pagination-bgcolor").is(':checked').toString().toLowerCase();
    configPaginationFontColorValue = $("#input-pagination-font-color").attr('value');
    configPaginationHoverBgColorValue = $("#input-pagination-hover-bgcolor").attr('value');
    configPaginationHoverFontColorValue = $("#input-hover-pagination-font-color").attr('value');
    configSelectedPaginationBgColorValue = $("#input-selected-pagination-bgcolor").attr('value');
    configSelectedPaginationFontColorValue = $("#input-selected-pagination-font-color").attr('value');
    configSubBgColorValue = $("#input-sub-color").attr('value');
    configSubFontColorValue = $("#input-sub-font-color").attr('value');
    configReadmoreFontSizeValue = $("#input-readmore-font-size").attr('value');
    if ($("#subcolor1").is(':checked')) {
        configSubBgValue = "transparent";
    }
    else {
        configSubBgValue = "solid";
    }
}

// This function is called to save the config 
function SaveConfig() 
{
    $('.cfg-save-in-progress').css("display", "block");
    
    LoadValues();

    var listItemEnumerator = collListItem.getEnumerator();
    while (listItemEnumerator.moveNext()) 
    {
        var oListItem = listItemEnumerator.get_current();
        var itemTitle = oListItem.get_item('Title');
        
        if (itemTitle == configWidthLabel) {
            oListItem.set_item('KeyValue', configWidthValue);
        }
        else if (itemTitle == configHeightLabel) {
           oListItem.set_item('KeyValue', configHeightValue);
        }
        else if (itemTitle == configPanelWidthLabel) {
           oListItem.set_item('KeyValue', configPanelWidthValue);
        }
        else if (itemTitle == configPanelHeightLabel) {
           oListItem.set_item('KeyValue', configPanelHeightValue);
        }
        else if (itemTitle == configTabWidthLabel) {
           oListItem.set_item('KeyValue', configTabWidthValue);
        }
        else if (itemTitle == configTabHeightLabel) {
           oListItem.set_item('KeyValue', configTabHeightValue);
        }
        else if (itemTitle == configSubWidthLabel) {
           oListItem.set_item('KeyValue', configSubWidthValue);
        }
        else if (itemTitle == configSubHeightLabel) {
           oListItem.set_item('KeyValue', configSubHeightValue);
        }
        else if (itemTitle == configLoaderLabel) {
           oListItem.set_item('KeyValue', configLoaderValue);
        }
        else if (itemTitle == configBgColorLabel) {
           oListItem.set_item('KeyValue', configBgColorValue);
        }
        else if (itemTitle == configTabBgColorLabel) {
           oListItem.set_item('KeyValue', configTabBgColorValue);
        }
        else if (itemTitle == configTabBgGradientLabel) {
           oListItem.set_item('KeyValue', configTabBgGradientValue);
        }
        else if (itemTitle == configTabFontColorLabel) {
           oListItem.set_item('KeyValue', configTabFontColorValue);
        }
        else if (itemTitle == configTabHoverBgColorLabel) {
           oListItem.set_item('KeyValue', configTabHoverBgColorValue);
        }
        else if (itemTitle == configTabHoverFontColorLabel) {
           oListItem.set_item('KeyValue', configTabHoverFontColorValue);
        }
        else if (itemTitle == configSelectedTabBgColorLabel) {
           oListItem.set_item('KeyValue', configSelectedTabBgColorValue);
        }
        else if (itemTitle == configSelectedTabFontColorLabel) {
           oListItem.set_item('KeyValue', configSelectedTabFontColorValue);
        }
        else if (itemTitle == configFontFamilyLabel) {
           oListItem.set_item('KeyValue', configFontFamilyValue);
        }
        else if (itemTitle == configFontSizeLabel) {
           oListItem.set_item('KeyValue', configFontSizeValue);
        }
        else if (itemTitle == configFontSizeUpperCaseLabel) {
           oListItem.set_item('KeyValue', configFontSizeUpperCaseValue);
        }
        else if (itemTitle == configDescFontSizeLabel) {
           oListItem.set_item('KeyValue', configDescFontSizeValue);
        }
        else if (itemTitle == configTabPaddingLeftLabel) {
           oListItem.set_item('KeyValue', configTabPaddingLeftValue);
        }
        else if (itemTitle == configTabPaddingTopLabel) {
           oListItem.set_item('KeyValue', configTabPaddingTopValue);
        }
        else if (itemTitle == configTabPaddingRightLabel) {
           oListItem.set_item('KeyValue', configTabPaddingRightValue);
        }
        else if (itemTitle == configTabPaddingBottomLabel) {
           oListItem.set_item('KeyValue', configTabPaddingBottomValue);
        }
        else if (itemTitle == configPagFontSizeLabel) {
           oListItem.set_item('KeyValue', configPagFontSizeValue);
        }
        else if (itemTitle == configReadmoreFontSizeLabel) {
           oListItem.set_item('KeyValue', configReadmoreFontSizeValue);
        }
        else if (itemTitle == configPaginationBgColorLabel) {
           oListItem.set_item('KeyValue', configPaginationBgColorValue);
        }
        else if (itemTitle == configPaginationBgGradientLabel) {
           oListItem.set_item('KeyValue', configPaginationBgGradientValue);
        }
        else if (itemTitle == configPaginationFontColorLabel) {
           oListItem.set_item('KeyValue', configPaginationFontColorValue);
        }
        else if (itemTitle == configPaginationHoverBgColorLabel) {
           oListItem.set_item('KeyValue', configPaginationHoverBgColorValue);
        }
        else if (itemTitle == configPaginationHoverFontColorLabel) {
           oListItem.set_item('KeyValue', configPaginationHoverFontColorValue);
        }
        else if (itemTitle == configSelectedPaginationBgColorLabel) {
           oListItem.set_item('KeyValue', configSelectedPaginationBgColorValue);
        }
        else if (itemTitle == configSelectedPaginationFontColorLabel) {
           oListItem.set_item('KeyValue', configSelectedPaginationFontColorValue);
        }        
        else if (itemTitle == configPaginationWidthLabel) {
           oListItem.set_item('KeyValue', configPaginationWidthValue);
        }
        else if (itemTitle == configPaginationHeightLabel) {
           oListItem.set_item('KeyValue', configPaginationHeightValue);
        }
        else if (itemTitle == configSubBgLabel) {
           oListItem.set_item('KeyValue', configSubBgValue);
        } 
        else if (itemTitle == configSubBgColorLabel) {
           oListItem.set_item('KeyValue', configSubBgColorValue);
        } 
        else if (itemTitle == configSubFontColorLabel) {
           oListItem.set_item('KeyValue', configSubFontColorValue);
        } 

        oListItem.update();
    }

    configClientContext.executeQueryAsync(Function.createDelegate(this, this.UpdateConfigFields), Function.createDelegate(this, this.ConfigQueryFailed));   
}

function UpdateConfigFields(sender, args) 
{
    folderCss = configClientContext.get_web().getFolderByServerRelativeUrl("Css");

    configClientContext.load(folderCss);
    configClientContext.executeQueryAsync(
        Function.createDelegate(this, CssFileGeneration),
        Function.createDelegate(this, ConfigQueryFailed)
    );
}

function CssFileGeneration(sender, args) 
{
    var fileContent = GenerateCssFileContent();

    fileCreateInfo = new SP.FileCreationInformation();
    fileCreateInfo.set_url("CarouselAppPart.css");
    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
    fileCreateInfo.set_overwrite(true);

    for (var i = 0; i < fileContent.length; i++) {
        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
    }

    this.existingFile = folderCss.get_files().add(fileCreateInfo);

    configClientContext.load(this.existingFile);
    configClientContext.executeQueryAsync(
        Function.createDelegate(this, SaveCssSucceed),
        Function.createDelegate(this, ConfigQueryFailed)
    );
}

function SaveCssSucceed(sender, args) 
{
    $('.cfg-save-in-progress').css("display", "none");
    

    alert(Resource_Config_Updated);
}


function ShowPreviewCarousel()
{
    $('.cfg-generate-preview').css("display", "block");
    
    LoadValues();
    SaveCssPreviewFile();
}

var folderCss;

function SaveCssPreviewFile()
{
    folderCss = configClientContext.get_web().getFolderByServerRelativeUrl("Css");

    configClientContext.load(folderCss);
    configClientContext.executeQueryAsync(
        Function.createDelegate(this, LoadFolderSucceed),
        Function.createDelegate(this, ConfigQueryFailed)
    );
}

function LoadFolderSucceed(sender, args)
{
    var fileContent = GenerateCssFileContent();

    fileCreateInfo = new SP.FileCreationInformation();
    fileCreateInfo.set_url("CarouselAppPartPreview.css");
    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
    fileCreateInfo.set_overwrite(true);

    for (var i = 0; i < fileContent.length; i++) {
        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
    }

    this.existingFile = folderCss.get_files().add(fileCreateInfo);

    configClientContext.load(this.existingFile);
    configClientContext.executeQueryAsync(
        Function.createDelegate(this, SavePreviewSucceed),
        Function.createDelegate(this, ConfigQueryFailed)
    );
}

function SavePreviewSucceed(sender, args)
{
    $('.cfg-generate-preview').css("display", "none");
    
    //Using a generic object.
    var options = {
        title: "Carousel Preview",
        width: configWidthValue,
        height: configHeightValue,
        url: "CarouselAppPart.aspx?CssFile=../Css/CarouselAppPartPreview.css&SPAppWebUrl=" + appweburl + "&SPLanguage=" + language
    };

    SP.UI.ModalDialog.showModalDialog(options);
}


function GenerateCssFileContent()
{
    var transformText = 'none';
    if (configFontSizeUpperCaseValue == "true") {
        transformText = 'uppercase';
    }
    var tabTextHeight = parseInt(configTabHeightValue) - parseInt(configTabPaddingTopValue) - parseInt(configTabPaddingBottomValue) - 1;
    var aSubHeight = parseInt(configSubHeightValue) - 10;
    var tabWidthWithMargin = parseInt(configTabWidthValue) + 7;
    var panelRightMargin = parseInt(configTabWidthValue) + 1;
    var tabBgColorG = '';
    if (configTabBgGradientValue == "true") {
        tabBgColorG = 'url("../images/rm-gradients.png") repeat-x 0 -500px';
    }
    var pagBgColorG = '';
    if (configPaginationBgGradientValue == "true") {
        pagBgColorG = 'url("../images/rm-gradients.png") repeat-x 0 -100px';
    }
    var subBgColor = 'transparent url("../images/rm-opacity-bl-50.png") repeat 0 0';
    if (configSubBgValue == "solid") {
        subBgColor = '#' + configSubBgColorValue;
    }

    var res = '     \
/* Body */          \
.bodySliderKit {    \
    margin: 0px;    \
    padding: 0px;   \
}                   \
                    \
/* Container */     \
.sliderkitContainer { height:' + configHeightValue + 'px;padding:0px;margin:0px; width:' + configWidthValue + 'px; background-color:#' + configBgColorValue + '; font-family:"' + configFontFamilyValue + '"; background-image:url("../Images/loader' + configLoaderValue + '.gif"); background-repeat:no-repeat; background-position:center; } \
.sliderkitContainer .rm-slider-default{width:' + configPanelWidthValue + 'px;padding-right:' + panelRightMargin + 'px;height:' + configPanelHeightValue + 'px;} \
\
.sliderkitContainer .sliderkit{display:none;position:relative;overflow:hidden;text-align:left;} \
.sliderkitContainer .sliderkit a, \
.sliderkitContainer .sliderkit a:hover{text-decoration:none;} \
.sliderkitContainer .sliderkit a:focus{outline:1px dotted #000;} \
.sliderkitContainer .sliderkit img{border:0;} \
.sliderkitContainer .sliderkit .sliderkit-btn{z-index:10;} \
.sliderkitContainer .sliderkit .sliderkit-panel{z-index:1;position:absolute;overflow:hidden;} \
.sliderkitContainer .sliderkit .sliderkit-panel-active{z-index:5;} \
.sliderkitContainer .sliderkit .sliderkit-panel-old{z-index:4;} \
.sliderkitContainer .sliderkit .sliderkit-panel .sliderkit-panel-textbox{position:absolute;z-index:1;} \
.sliderkitContainer .sliderkit .sliderkit-panel .sliderkit-panel-text{position:absolute;z-index:3;top:0;left:0;} \
.sliderkitContainer .sliderkit .sliderkit-panel .sliderkit-panel-overlay{position:absolute;z-index:2;top:0;left:0;} \
.sliderkitContainer .sliderkit .sliderkit-count{position:absolute;top:5px;right:5px;z-index:10;padding:5px;color:#fff;background:#000;} \
.sliderkitContainer .sliderkit .sliderkit-timer{position:absolute;top:0;left:0;z-index:10;height:3px;background:#ccc;} \
\
/* Nav */ \
.sliderkitContainer .rm-slider-default .sliderkit-nav{right:0;top:0;width:' + tabWidthWithMargin + 'px;height:' + configHeightValue + 'px;overflow:hidden;z-index:10;position:absolute;text-align:center;} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip{position:relative;overflow:hidden;margin:0 auto;} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip ul{position:relative;left:0;top:0;list-style:none;margin:0;padding:0;} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip ul li{float:left;} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li{height:' + configTabHeightValue + 'px;width:' + configTabWidthValue + 'px;margin:0;padding-left:7px;} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li a{display:block;overflow:hidden;height:' + tabTextHeight + 'px;width:' + configTabWidthValue + 'px;padding-left:' + configTabPaddingLeftValue + 'px;padding-right:' + configTabPaddingRightValue + 'px;padding-top:' + configTabPaddingTopValue + 'px;padding-bottom:' + configTabPaddingBottomValue + 'px;text-align:left;font-size:' + configFontSizeValue + ';font-weight:bold;text-transform:' + transformText + ';color:#' + configTabFontColorValue + ';text-decoration:none;border-bottom:1px solid #' + configBgColorValue + ';background:#' + configTabBgColorValue + ' ' + tabBgColorG + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li a span{display:block;font-weight:normal;text-transform:none;font-size:' + configDescFontSizeValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li a:hover, \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li a:focus{outline:none;background-color:#' + configTabHoverBgColorValue + ';color:#' + configTabHoverFontColorValue + '} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li.sliderkit-selected{background:transparent url("../images/rm-slider-nav-arrow.png") no-repeat 0 center;} \
.sliderkitContainer .rm-slider-default .sliderkit-nav-clip li.sliderkit-selected a{background-color:#' + configSelectedTabBgColorValue + ';color:#' + configSelectedTabFontColorValue + '} \
\
/* Panel */ \
.sliderkitContainer .rm-slider-default .sliderkit-panels{position:absolute;left:0;width:' + configPanelWidthValue + 'px;height:' + configPanelHeightValue + 'px;overflow:hidden;} \
.sliderkitContainer .rm-slider-default .sliderkit-panel{left:0;top:0;width:' + configPanelWidthValue + 'px;height:' + configPanelHeightValue + 'px;} \
.sliderkitContainer .rm-slider-default .sliderkit-panel > a{display:block;} \
\
/* Pagination */ \
.sliderkitContainer .rm-slider-default .sliderkit-pagination{position:absolute;z-index:20;left:10px;top:0;height:' + configPaginationHeightValue + 'px;background:blue;} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul{margin:0;padding:0;} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul li{float:left;width:' + configPaginationWidthValue + 'px;height:' + configPaginationHeightValue + 'px;list-style:none;background:#' + configPaginationBgColorValue + ' ' + pagBgColorG + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul li.selected{background-color:#' + configSelectedPaginationBgColorValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul li a{font-size:' + configPagFontSizeValue + ';display:block;width:6px;height:14px;padding:3px 7px;color:#' + configPaginationFontColorValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul li.selected a{color:#' + configSelectedPaginationFontColorValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul li:hover{background-color:#' + configPaginationHoverBgColorValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-pagination ul li a:hover{color:#' + configPaginationHoverFontColorValue + ';} \
\
/* Panel > Textbox */ \
.sliderkitContainer .rm-slider-default .sliderkit-panel-textbox{bottom:0;left:0;height:' + configSubHeightValue + 'px;width:' + configSubWidthValue + 'px;color:#' + configSubFontColorValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-panel-text{height:' + aSubHeight + 'px;padding:5px 15px;font-size:' + configReadmoreFontSizeValue + ';color:#' + configSubFontColorValue + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-panel-overlay{bottom:0;height:' + configSubHeightValue + 'px;width:' + configSubWidthValue + 'px;background:' + subBgColor + ';} \
.sliderkitContainer .rm-slider-default .sliderkit-panel-textbox a.rm-link-action{margin-right:30px;padding-left:10px;font-size:' + configReadmoreFontSizeValue + ';color:#' + configSubFontColorValue + ';background:transparent url("../images/rm-pictos.png") no-repeat 0 -147px;} \
.sliderkitContainer .rm-slider-default .sliderkit-panel-textbox a:hover{text-decoration:underline;}  \
\
/* Links */\
.sliderkitContainer .rm-link-action{padding-left:10px;background:transparent url("../images/rm-pictos.png") no-repeat 0 3px;} \
';

    return res;
}

