
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = decodeURIComponent(hash[1]);
    }
    return vars;
}

//Init vars
var queryString = getUrlVars();

var autoStartVar = queryString["AutoStart"];
if (autoStartVar == null) {
    autoStartVar = true;
}
var circularVar = queryString["Circular"];
if (circularVar == null) {
    circularVar = true;
}
var panelfxVar = queryString["Transition"];
if (panelfxVar == null) {
    panelfxVar = 'sliding';
}
var panelfxspeedVar = queryString["PanelFxSpeed"];
if (panelfxspeedVar == null) {
    panelfxspeedVar = 400;
}
var headlineText = queryString["HeadlineText"];
if (headlineText == null) {
    headlineText = 'Latest news:';
}
var languageCode = queryString["SPLanguage"];
if (languageCode == null) {
    languageCode = "en-us";
}
languageCode = languageCode.toLowerCase();

var cssFile = queryString["CssFile"];
if (cssFile != null) {
    $('<link>').appendTo('head').attr({
        rel: 'stylesheet',
        type: 'text/css',
        href: cssFile + "?rev=" + Math.random()
    });
}

// This function is executed after the DOM is ready and SharePoint scripts are loaded
// Place any code you want to run when Default.aspx is loaded in this function
// The code creates a context object which is needed to use the SharePoint object model
function sharePointReady(appweburl)
{
    var executor = new SP.RequestExecutor(appweburl);

    var camlQuery = '<View><Query><Where><And><Eq><FieldRef Name=\'LanguageCode\'></FieldRef><Value Type=\'Text\'>' + languageCode + '</Value></Eq><And><Eq><FieldRef Name=\'Enabled\'></FieldRef><Value Type=\'Integer\'>1</Value></Eq>' +
        '<DateRangesOverlap><FieldRef Name=\'PublicationDate\'></FieldRef><FieldRef Name=\'PublicationEndDate\'></FieldRef><Value Type=\'DateTime\'><Now/></Value></DateRangesOverlap></And></And>' +
        '</Where><OrderBy><FieldRef Name=\'Order0\'/></OrderBy></Where></Query></View>';

    executor.executeAsync({
        url: appweburl + "/_api/web/lists/getbytitle('Micro News')/getitems",
        method: "POST",
        body: "{ 'query' : {'__metadata': { 'type': 'SP.CamlQuery' }, \"ViewXml\": \"" + camlQuery + "\" } }",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json; odata=verbose"
        },
        success: onQuerySucceeded,
        error: onQueryFailed
    });
}


function onQuerySucceeded(data) {
    var results = eval(JSON.parse(data.body));

    var allLi = '';
    var allItems = '';

    var i = 0;
    for (i = 0; i < results.d.results.length; i++)
    {
        var oListItem = results.d.results[i];
        var itemTitle = oListItem.Title;
        var itemLinkUrl = oListItem.LinkUrl;

        var itemHtml = '<div class="sliderkit-panel"><a href="' + itemLinkUrl + '" target="_top">' + itemTitle + '</a></div>';
        allItems += itemHtml;
    }

    $('.sliderkitContainer').css("background-image", "none");

    if (i == 0) {
        var noNewsMssg = 'No news found. Please check that you have posted at\nleast one published item with the language code \'' + languageCode + '\'';
        alert(noNewsMssg);
    }
    else {
        $('.sliderkit-panels').append(allItems);

        $('#latestnews').append(headlineText);

        $(".newslider-minimal").sliderkit({
            auto: autoStartVar,
            circular: circularVar,
            shownavitems: 1,
            panelfx: panelfxVar,
            panelfxspeed: panelfxspeedVar,
            panelfxeasing: "easeOutCirc",
            mousewheel: false,
            verticalnav: true,
            verticalslide: true
        });
    }
}

function onQueryFailed(error) {
    $('.sliderkitContainer').css("background-image", "none");
    var errorMessage;
    if (error.statusCode == "403") {
        errorMessage = 'Sorry, this app is not available in O365 public web sites.\n\nError code: ' + error.statusCode + ' ' + error.statusText;
    }
    else {
        errorMessage = 'Request failed. Error code: ' + error.statusCode + ' ' + error.statusText + '\n' + 'Error text: ' + error.body;
    }
    alert(errorMessage);
}
