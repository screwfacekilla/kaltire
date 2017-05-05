
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
var keyboardVar = queryString["AllowKeyboard"];
if (keyboardVar == null) {
    keyboardVar = true;
}
var autospeedVar = queryString["Speed"];
if (autospeedVar == null) {
    autospeedVar = 8000;
}
var panelfxVar = queryString["Transition"];
if (panelfxVar == null) {
    panelfxVar = 'fading';
}
var panelfxspeedVar = queryString["PanelFxSpeed"];
if (panelfxspeedVar == null) {
    panelfxspeedVar = 500;
}
var delayVar = queryString["CaptionsDelay"];
if (delayVar == null) {
    delayVar = 10;
}
var transitionVar = queryString["CaptionsTransition"];
if (transitionVar == null) {
    transitionVar = 'sliding';
}
var durationVar = queryString["CaptionsTransitionDuration"];
if (durationVar == null) {
    durationVar = 300;
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

var RLTTools = {


    RLTHPSlider: function( $el ){
        $el.sliderkit({
            verticalnav: true,
            shownavitems: 3,
            auto: autoStartVar,
            circular: circularVar,
            keyboard: keyboardVar,
            autospeed: autospeedVar,
            panelfx: panelfxVar,
            panelfxspeed: panelfxspeedVar,
            delaycaptions: {
                delay: delayVar,
                transition: transitionVar,
                duration: durationVar
            }
        });

        // Get the sliderkit object data
        var myHPSlider = $el.data( 'sliderkit' );

        //	External pagination
        var myPaginStr = '';
        var myPaginCount = 0;
		
        // Building the pagination tag
        $( 'li', myHPSlider.navUL).each(function(){
            myPaginStr += '<li><a href="#" rel="'+myPaginCount+'">'+ (myPaginCount+1) +'</a></li>';
            myPaginCount++;
        });
        myHPSlider.domObj.append('<div class="sliderkit-pagination"><ul>'+myPaginStr+'</ul></div>');

        // Selecting first item
        var myPaginTag = $( '.sliderkit-pagination', myHPSlider.domObj ),
        myPaginItems = $( 'li', myPaginTag );
        myPaginItems.eq( myHPSlider.options.start ).addClass( 'selected' );
		
        // Pagination items click event
        $( 'a', myPaginTag ).click(function(){
            var $a = $(this);
            if( ! $a.parent().hasClass( 'selected' ) ){
                myHPSlider.changeWithId( $a.attr( 'rel' ) );
            }
            return false;
        });

        // Selecting current pagination item
        myHPSlider.options.panelfxbefore = function () {
            myPaginItems.removeClass('selected');
            myPaginItems.eq(myHPSlider.currId).addClass('selected');
        }

    }
};

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
        url: appweburl + "/_api/web/lists/getbytitle('Carousel News')/getitems",
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

function onQuerySucceeded(data)
{
    var results = eval(JSON.parse(data.body));

    var allLi = '';
    var allItems = '';

    var i = 0;
    for (i = 0; i < results.d.results.length; i++)
    {
        var oListItem = results.d.results[i];
        var itemTitle = oListItem.Title;
        var itemSummary = oListItem.Summary;
        var itemLinkUrl = oListItem.LinkUrl;
        var itemLinkLabel = oListItem.LinkLabel;
        var itemImageUrl = oListItem.ImageUrl;

        var liHtml = '<li><a href="' + itemLinkUrl + '" title="' + itemTitle + '" target="_top">' + itemTitle + '<span>' + itemSummary + '</span></a></li>';
        var itemHtml = '<div class="sliderkit-panel"><a href="' + itemLinkUrl + '" class="rm-corpNews-' + i + '" target="_top"><img src="' + itemImageUrl + '" border="0"></a><div class="sliderkit-panel-textbox"><div class="sliderkit-panel-text"><a href="' + itemLinkUrl + '" class="rm-link-action" target="_top">' + itemLinkLabel + '</a></div><div class="sliderkit-panel-overlay"></div></div></div>'
        allLi += liHtml;
        allItems += itemHtml;
    }

    if (i == 0) {
        var noNewsMssg = 'No news found. Please check that you have posted at\nleast one published item with the language code \'' + languageCode + '\'';
        alert(noNewsMssg);
    }
    else {

        $('#sliderkit-nav-ul').append(allLi);
        $('.sliderkit-panels').append(allItems);

        if ($.fn.sliderkit) {
            var sliderTag = $('.sliderkitContainer .rm-slider-default');
            if (sliderTag.size() > 0) {
                RLTTools.RLTHPSlider(sliderTag);
            }
        }
    }

    $('.sliderkitContainer').css("background-image", "none");
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

