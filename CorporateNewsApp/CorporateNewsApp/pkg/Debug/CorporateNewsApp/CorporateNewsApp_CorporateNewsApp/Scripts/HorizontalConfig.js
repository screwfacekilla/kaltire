var configClientContext;

// Configuration parameters vars & keys labels
var configWidthValue; var configWidthLabel = 'Width';
var configHeightValue; var configHeightLabel = 'Height';
var configPicWidthValue; var configPicWidthLabel = 'PicWidth';
var configPicHeightValue; var configPicHeightLabel = 'PicHeight';
var configLoaderValue; var configLoaderLabel = 'Loader';
var configBgColorValue; var configBgColorLabel = 'BgColor';
var configFontFamilyValue; var configFontFamilyLabel = 'FontFamily';
var configTitleFontSizeValue; var configTitleFontSizeLabel = 'TitleFontSize';
var configTitleFontColorValue; var configTitleFontColorLabel = 'TitleFontColor';
var configDescFontSizeValue; var configDescFontSizeLabel = 'DescFontSize';
var configDescFontColorValue; var configDescFontColorLabel = 'DescFontColor';
var configLinkFontSizeValue; var configLinkFontSizeLabel = 'LinkFontSize';
var configLinkFontColorValue; var configLinkFontColorLabel = 'LinkFontColor';
var configLinkUnderlineValue; var configLinkUnderlineLabel = 'LinkUnderline';
var configArrowStyleValue; var configArrowStyleLabel = 'ArrowStyle';

// This function is executed after the DOM is ready and SharePoint scripts are loaded
// Place any code you want to run when Default.aspx is loaded in this function
// The code creates a context object which is needed to use the SharePoint object model
function readyToLoadConfig() 
{
    configClientContext = new SP.ClientContext.get_current();
    var oList = configClientContext.get_web().get_lists().getByTitle('HorizontalNewsConfig');
    
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
        else if (itemTitle == configPicWidthLabel) {
            configPicWidthValue = itemKeyValue;
        }
        else if (itemTitle == configPicHeightLabel) {
            configPicHeightValue = itemKeyValue;
        }
        else if (itemTitle == configLoaderLabel) {
            configLoaderValue = itemKeyValue;
        }
        else if (itemTitle == configBgColorLabel) {
            configBgColorValue = itemKeyValue;
        }
        else if (itemTitle == configFontFamilyLabel) {
            configFontFamilyValue = itemKeyValue;
        }
        else if (itemTitle == configTitleFontSizeLabel) {
            configTitleFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configTitleFontColorLabel) {
            configTitleFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configDescFontSizeLabel) {
            configDescFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configDescFontColorLabel) {
            configDescFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configLinkFontSizeLabel) {
            configLinkFontSizeValue = itemKeyValue;
        }
        else if (itemTitle == configLinkFontColorLabel) {
            configLinkFontColorValue = itemKeyValue;
        }
        else if (itemTitle == configLinkUnderlineLabel) {
            configLinkUnderlineValue = itemKeyValue;
        }
        else if (itemTitle == configArrowStyleLabel) {
            configArrowStyleValue = itemKeyValue;
        }
    }

    SetConfigFields();
}

function ResetDefaultValue()
{
    $("#input-width").attr('value', '700');
    $("#input-height").attr('value', '180');
    $("#input-width2").attr('value', '130');
    $("#input-height2").attr('value', '87');
    $("#input-bgcolor").attr('value', 'FFFFFF');
    $("#loader1").attr('checked', 'checked');
    $("#font").attr('value', 'Segoe UI');
    $("#input-title-font-size").attr('value', '13px');
    $("#input-title-font-color").attr('value', '000000');
    $("#input-desc-font-size").attr('value', '11px');
    $("#input-desc-font-color").attr('value', '000000');
    $("#input-link-font-size").attr('value', '11px');
    $("#input-link-font-color").attr('value', '463FFF');
    $("#checkbox-link-underline").attr('checked', true);
    $("#arrow1").attr('checked', 'checked');
    
    jscolor.rebind();
}

function SetConfigFields()
{
    $("#input-width").attr('value', configWidthValue);
    $("#input-height").attr('value', configHeightValue);
    $("#input-width2").attr('value', configPicWidthValue);
    $("#input-height2").attr('value', configPicHeightValue);
    $("#input-bgcolor").attr('value', configBgColorValue);
    $("#loader" + configLoaderValue).attr('checked', 'checked');
    $("#font").attr('value', configFontFamilyValue);
    $("#input-title-font-size").attr('value', configTitleFontSizeValue);
    $("#input-title-font-color").attr('value', configTitleFontColorValue);    
    $("#input-desc-font-size").attr('value', configDescFontSizeValue);
    $("#input-desc-font-color").attr('value', configDescFontColorValue);    
    $("#input-link-font-size").attr('value', configLinkFontSizeValue);
    $("#input-link-font-color").attr('value', configLinkFontColorValue);    
    if (configLinkUnderlineValue == "true") {
        $("#checkbox-link-underline").attr('checked', true);
    }
    else {
        $("#checkbox-link-underline").attr('checked', false);
    }
    $("#arrow" + configArrowStyleValue).attr('checked', 'checked');
        
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
    configPicWidthValue = $("#input-width2").attr('value');
    configPicHeightValue = $("#input-height2").attr('value');
    configLoaderValue = $("input:radio[name=loader]:checked").val();
    configBgColorValue = $("#input-bgcolor").attr('value');
    configFontFamilyValue = $("#font").attr('value');
    configTitleFontSizeValue = $("#input-title-font-size").attr('value');
    configTitleFontColorValue = $("#input-title-font-color").attr('value');
    configDescFontSizeValue = $("#input-desc-font-size").attr('value');
    configDescFontColorValue = $("#input-desc-font-color").attr('value');
    configLinkFontSizeValue = $("#input-link-font-size").attr('value');
    configLinkFontColorValue = $("#input-link-font-color").attr('value');
    configLinkUnderlineValue = $("#checkbox-link-underline").is(':checked').toString().toLowerCase()
    configArrowStyleValue = $("input:radio[name=arrow]:checked").val();
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
        else if (itemTitle == configPicWidthLabel) {
            oListItem.set_item('KeyValue', configPicWidthValue);
        }
        else if (itemTitle == configPicHeightLabel) {
            oListItem.set_item('KeyValue', configPicHeightValue);
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
        else if (itemTitle == configTitleFontSizeLabel) {
            oListItem.set_item('KeyValue', configTitleFontSizeValue);
        }
        else if (itemTitle == configTitleFontColorLabel) {
            oListItem.set_item('KeyValue', configTitleFontColorValue);
        }
        else if (itemTitle == configDescFontSizeLabel) {
            oListItem.set_item('KeyValue', configDescFontSizeValue);
        }
        else if (itemTitle == configDescFontColorLabel) {
            oListItem.set_item('KeyValue', configDescFontColorValue);
        }
        else if (itemTitle == configLinkFontSizeLabel) {
            oListItem.set_item('KeyValue', configLinkFontSizeValue);
        }
        else if (itemTitle == configLinkFontColorLabel) {
            oListItem.set_item('KeyValue', configLinkFontColorValue);
        }
        else if (itemTitle == configLinkUnderlineLabel) {
            oListItem.set_item('KeyValue', configLinkUnderlineValue);
        }
        else if (itemTitle == configArrowStyleLabel) {
            oListItem.set_item('KeyValue', configArrowStyleValue);
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
    fileCreateInfo.set_url("HorizontalNewsAppPart.css");
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
    fileCreateInfo.set_url("HorizontalNewsAppPartPreview.css");
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
        title: "Horizontal News Preview",
        width: configWidthValue,
        height: configHeightValue,
        url: "HorizontalNewsAppPart.aspx?CssFile=../Css/HorizontalNewsAppPartPreview.css&SPAppWebUrl=" + appweburl + "&SPLanguage=" + language
    };

    SP.UI.ModalDialog.showModalDialog(options);
}


function GenerateCssFileContent()
{
    var imgPadding = (parseInt(configHeightValue) / 2) - 16;
    var newsHeight = parseInt(configHeightValue) - 10;
    var linkTextTransform = 'none';
    if (configLinkUnderlineValue == "true") {
        linkTextTransform = 'underline';
    } 

    var res = '     \
/* Body */          \
.bodySliderKit {    \
    margin: 0px;    \
    padding: 0px;   \
}                   \
                    \
/* Container */     \
.sliderkitContainer {width:' + configWidthValue + 'px;height:' + configHeightValue + 'px;padding:0px;margin:0px; font-family:"' + configFontFamilyValue + '"; background-image:url("../Images/loader' + configLoaderValue + '.gif"); background-repeat:no-repeat; background-position:center; background-color:#' + configBgColorValue + ';} \
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
/*--------------------------------- \
 *  Carousel    \
 *---------------------------------*/   \
#carousel-horizontal{width:' + configWidthValue + 'px;height:' + configHeightValue + 'px;} \
\
/* Navbar */    \
#carousel-horizontal .sliderkit-nav{left:0;bottom:0;width:' + configWidthValue + 'px;height:' + configHeightValue + 'px;padding:0;background:none;}    \
#carousel-horizontal .sliderkit-nav-clip ul li{float:left;width:' + configPicWidthValue + 'px;height:' + newsHeight + 'px;margin:0 60px 0 0;text-align:left;}   \
#carousel-horizontal .sliderkit-nav-clip ul li > a{display:block;width:' + configPicWidthValue + 'px;height:' + configPicHeightValue + 'px;overflow:hidden;margin:0;opacity:0.8;border:0px;}   \
#carousel-horizontal .sliderkit-nav-clip ul li > a:hover{opacity:1;}    \
#carousel-horizontal .sliderkit-nav-clip ul li h3{margin:5px 0 0 0;font-size:' + configTitleFontSizeValue + ';color:#' + configTitleFontColorValue + ';}  \
#carousel-horizontal .sliderkit-nav-clip ul li p{font-size:' + configDescFontSizeValue + '; color:#' + configDescFontColorValue + '; margin-top:0px;}  \
#carousel-horizontal .sliderkit-nav-clip ul li p a.custom-readmore {font-size:' + configLinkFontSizeValue + ';color:#' + configLinkFontColorValue + ';} \
#carousel-horizontal .sliderkit-nav-clip ul li p a:hover{text-decoration:' + linkTextTransform + ';} \
\
/* Buttons */   \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-btn{position:absolute;top:' + imgPadding + 'px;} \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-btn span{display:none;}  \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-btn a{display:block;width:30px;height:31px;background:transparent url("../Images/arrows-h-btn' + configArrowStyleValue + '.png") no-repeat 0 0;}  \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-prev{left:20px;} \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-next{right:20px;}    \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-prev a{background-position:0 0;} \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-next a{background-position:0 -31px;} \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-prev a:hover,    \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-prev a:focus{background-position:-30px 0;}   \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-next a:hover,    \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-next a:focus{background-position:-30px -31px;}   \
#carousel-horizontal .sliderkit-nav .sliderkit-btn-disable a{cursor:default;}   \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-prev.sliderkit-btn-disable a{background-position:-60px 0;}   \
#carousel-horizontal .sliderkit-nav .sliderkit-nav-next.sliderkit-btn-disable a{background-position:-60px -31px;}   \
';

    return res;
}

