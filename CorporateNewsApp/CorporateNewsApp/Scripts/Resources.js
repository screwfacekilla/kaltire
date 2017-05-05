// Init vars
var defaultLanguage = 'en-us';
var languagesArray = ['en-us', 'fr-fr', 'de-de', 'es-es'];

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = decodeURIComponent(hash[1]);
    }
    return vars;
}

var queryString = getUrlVars();

var spHostUrl = queryString["SPHostUrl"];

var language = queryString["SPLanguage"];
if (language == null)
{
    language = defaultLanguage;
}
else
{
    language = language.toLowerCase();
    var langExists = false;

    //Checks if this language is available
    for (var i = 0; i < languagesArray.length; i++) {
        var testedLang = languagesArray[i];
        if (testedLang == language) {
            langExists = true;
            break;
        }
    }

    //Try to find the regional language
    if (langExists == false) {
        var regionalLng = language.substring(0, 2);
        for (var i = 0; i < languagesArray.length; i++) {
            var testedLang = languagesArray[i].substring(0, 2);
            if (testedLang == regionalLng) {
                langExists = true;
                language = languagesArray[i];
                break;
            }
        }
    }

    //Finally use the default language
    if (langExists == false) {
        language = defaultLanguage;
    }
}

var resourcesFile = '../Scripts/Resources.' + language + '.js';
document.writeln("<script src=\"" + resourcesFile + "\" type=\"text\/javascript\" language=\"javascript\"><\/script>")

