var configClientContext;

// Configuration parameters vars & keys labels
var configWidthValue; var configWidthLabel = 'Width';
var configHeightValue; var configHeightLabel = 'Height';
var configPanelWidthValue; var configPanelWidthLabel = 'PanelWidth';
var configPanelHeightValue; var configPanelHeightLabel = 'PanelHeight';
var configLoaderValue; var configLoaderLabel = 'Loader';
var configBgColorValue; var configBgColorLabel = 'BgColor';
var configHeadLineBgColorValue; var configHeadLineBgColorLabel = 'HeadLineBgColor';
var configFontFamilyValue; var configFontFamilyLabel = 'FontFamily';
var configFontSizeValue; var configFontSizeLabel = 'FontSize';
var configTextDecorationValue; var configTextDecorationLabel = 'TextDecoration';
var configFontColorValue; var configFontColorLabel = 'FontColor';
var configHeadlineFontColorValue; var configHeadlineFontColorLabel = 'HeadlineFontColor';

// This function is executed after the DOM is ready and SharePoint scripts are loaded
// Place any code you want to run when Default.aspx is loaded in this function
// The code creates a context object which is needed to use the SharePoint object model
function readyToLoadConfig() 
{
    configClientContext = new SP.ClientContext.get_current();
    var oList = configClientContext.get_web().get_lists().getByTitle('MicroNewsConfig');
    
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
        else if (itemTitle == configLoaderLabel) {
            configLoaderValue = itemKeyValue;
        }
        else if (itemTitle == configBgColorLabel) {
            configBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configHeadLineBgColorLabel) {
            configHeadLineBgColorValue = itemKeyValue;
        }
         else if (itemTitle == configFontFamilyLabel) {
            configFontFamilyValue = itemKeyValue;
        }
        else if (itemTitle == configFontSizeLabel) {
            configFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configTextDecorationLabel) {
            configTextDecorationValue = itemKeyValue;
        }
        else if (itemTitle == configFontColorLabel) {
            configFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configHeadlineFontColorLabel) {
            configHeadlineFontColorValue = itemKeyValue;
        }
    }

    SetConfigFields();
}

function ResetDefaultValue()
{
    $("#input-width").attr('value', '570');
    $("#input-height").attr('value', '16');
    $("#input-width2").attr('value', '450');
    $("#input-height2").attr('value', '16');
    $("#loader1").attr('checked', 'checked');
    $("#input-bgcolor").attr('value', 'FFFFFF');
    $("#input-headline-bgcolor").attr('value', 'B6FF00');
    $("#font").attr('value', 'Segoe UI');
    $("#input-font-size").attr('value', '13px');
    $("#checkbox-font-underline").attr('checked', true);
    $("#input-font-color").attr('value', '463FFF');
    $("#input-headline-font-color").attr('value', '000000');
    
    jscolor.rebind();
}

function SetConfigFields()
{
    $("#input-width").attr('value', configWidthValue);
    $("#input-height").attr('value', configHeightValue);
    $("#input-width2").attr('value', configPanelWidthValue);
    $("#input-height2").attr('value', configPanelHeightValue);
    $("#loader" + configLoaderValue).attr('checked', 'checked');
    $("#input-bgcolor").attr('value', configBgColorValue);
    $("#input-headline-bgcolor").attr('value', configHeadLineBgColorValue);
    if (configTextDecorationValue == "true") {
        $("#checkbox-font-underline").attr('checked', true);
    }
    else {
        $("#checkbox-font-underline").attr('checked', false);
    }
    $("#font").attr('value', configFontFamilyValue);
    $("#input-font-size").attr('value', configFontSizeValue);
    $("#input-font-color").attr('value', configFontColorValue);    
    $("#input-headline-font-color").attr('value', configHeadlineFontColorValue);
    
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
    configLoaderValue = $("input:radio[name=loader]:checked").val();
    configBgColorValue = $("#input-bgcolor").attr('value');
    configHeadLineBgColorValue =  $("#input-headline-bgcolor").attr('value');
    configFontFamilyValue = $("#font").attr('value');
    configFontSizeValue = $("#input-font-size").attr('value');
    configFontColorValue = $("#input-font-color").attr('value');
    configTextDecorationValue = $("#checkbox-font-underline").is(':checked').toString().toLowerCase()
    configHeadlineFontColorValue = $("#input-headline-font-color").attr('value');
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
        else if (itemTitle == configLoaderLabel) {
           oListItem.set_item('KeyValue', configLoaderValue);
        }
        else if (itemTitle == configBgColorLabel) {
           oListItem.set_item('KeyValue', configBgColorValue);
        }
        else if (itemTitle == configFontFamilyLabel) {
           oListItem.set_item('KeyValue', configFontFamilyValue);
        }
        else if (itemTitle == configFontSizeLabel) {
           oListItem.set_item('KeyValue', configFontSizeValue);
        }
        else if (itemTitle == configHeadLineBgColorLabel) {
             oListItem.set_item('KeyValue', configHeadLineBgColorValue);
        }
        else if (itemTitle == configTextDecorationLabel) {
             oListItem.set_item('KeyValue', configTextDecorationValue);
        }
        else if (itemTitle == configFontColorLabel) {
             oListItem.set_item('KeyValue', configFontColorValue);
        }
        else if (itemTitle == configHeadlineFontColorLabel) {
             oListItem.set_item('KeyValue', configHeadlineFontColorValue);
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
    fileCreateInfo.set_url("MicroNewsAppPart.css");
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
    fileCreateInfo.set_url("MicroNewsAppPartPreview.css");
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
        title: "Micro news Preview",
        width: configWidthValue,
        height: configHeightValue,
        url: "MicroNewsAppPart.aspx?CssFile=../Css/MicroNewsAppPartPreview.css&SPAppWebUrl=" + appweburl + "&SPLanguage=" + language
    };

    SP.UI.ModalDialog.showModalDialog(options);
}


function GenerateCssFileContent()
{
    var textDec = 'none';
    if (configTextDecorationValue == "true") {
        textDec = 'underline';
    }

    var res = '     \
/* Body */          \
.bodySliderKit {    \
    margin: 0px;    \
    padding: 0px;   \
}                   \
\
/* Container */ \
.sliderkitContainer { height:' + configHeightValue + 'px;padding:0px;margin:0px; width:' + configWidthValue + 'px; font-family:"' + configFontFamilyValue + '"; font-size:' + configFontSizeValue + '; background-image:url("../Images/loader' + configLoaderValue + '.gif"); background-repeat:no-repeat; background-position:center; background-color:#' + configBgColorValue + ';}  \
\
.sliderkit{display:none;position:relative;overflow:hidden;text-align:left;} \
.sliderkit a,   \
.sliderkit a:hover{text-decoration:none;}   \
.sliderkit a:focus{outline:1px dotted #000;}    \
.sliderkit img{border:0;}   \
.sliderkit .sliderkit-nav{z-index:10;position:absolute;text-align:center;}  \
.sliderkit .sliderkit-nav-clip{position:relative;overflow:hidden;margin:0 auto;}    \
.sliderkit .sliderkit-nav-clip ul{position:relative;left:0;top:0;list-style:none;margin:0;padding:0;}   \
.sliderkit .sliderkit-nav-clip ul li{float:left;}   \
.sliderkit .sliderkit-nav-clip ul li a{display:block;overflow:hidden;}  \
.sliderkit .sliderkit-btn{z-index:10;}  \
.sliderkit .sliderkit-panel{z-index:1;position:absolute;overflow:hidden;}   \
.sliderkit .sliderkit-panel-active{z-index:5;}  \
.sliderkit .sliderkit-panel-old{z-index:4;} \
.sliderkit .sliderkit-panel .sliderkit-panel-textbox{position:absolute;z-index:1;}  \
.sliderkit .sliderkit-panel .sliderkit-panel-text{position:absolute;z-index:3;top:0;left:0;}    \
.sliderkit .sliderkit-panel .sliderkit-panel-overlay{position:absolute;z-index:2;top:0;left:0;} \
.sliderkit .sliderkit-count{position:absolute;top:5px;right:5px;z-index:10;padding:5px;color:#fff;background:#000;} \
.sliderkit .sliderkit-timer{position:absolute;top:0;left:0;z-index:10;height:3px;background:#ccc;}  \
\
.newslider-minimal{width:' + configWidthValue + 'px;height:' + configHeightValue + 'px;}    \
\
/* Navbar */    \
.newslider-minimal .sliderkit-panels{float:left;position:relative;width:' + configPanelWidthValue + 'px;} \
.newslider-minimal .sliderkit-panel{height:' + configPanelHeightValue + 'px;}   \
.newslider-minimal .sliderkit-panel a{display:block; color:#' + configFontColorValue + ';}   \
.newslider-minimal .sliderkit-panel a:hover{text-decoration:' + textDec + ';} \
\
/* Buttons > Disable */ \
.newslider-minimal .sliderkit-legend{float:left;margin-right:10px;background-color:#' + configHeadLineBgColorValue + ';color:#' + configHeadlineFontColorValue + '}   \
';

    return res;
}

