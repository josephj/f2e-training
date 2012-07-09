import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first starts, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// GLOBALIZATION NOTE:
// Be sure to save this file with UTF-8 Encoding if using any non-ASCII characters
// in strings, etc.

// JScript Reference
// http://www.fiddler2.com/redir/?id=msdnjsnet
//
// FiddlerScript Reference
// http://www.fiddler2.com/redir/?id=fiddlerscriptcookbook
//
// FiddlerScript Editor:
// http://www.fiddler2.com/redir/?id=fiddlerscripteditor

class Handlers
{
    // The following snippet demonstrates a custom-bound column for the web sessions list.
    // See http://www.fiddler2.com/fiddler/help/configurecolumns.asp for more info
    //public static BindUIColumn("Method", 60)
    //function FillMethodColumn(oS: Session){
    //  if ((oS.oRequest != null) && (oS.oRequest.headers != null))
    //  return oS.oRequest.headers.HTTPMethod; else return String.Empty;
    //}

    public static RulesOption("Inject JavaScript.")
    var m_Injection: boolean = false;


    public static RulesOption("Hide 304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    RulesString("&User-Agents", true)
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone7", "Mozilla/4.0 (compatible: MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917)")
    RulesStringValue(2,"WinPhone7.5", "Mozilla/5.0 (compatible: MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)")
    RulesStringValue(3,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(4,"Safari5 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7) AppleWebKit/534.48.3 (KHTML, like Gecko) Version/5.1 Safari/534.48.3")
    RulesStringValue(5,"IPAD", "Mozilla/5.0 (iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10")
    RulesStringValue(6,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(7,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(8,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(9,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(10,"IE 8 (IE7 CompatMode)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0)")
    RulesStringValue(11,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(12,"IE 10 (Win7)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)")
    RulesStringValue(13,"&Opera", "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.10")
    RulesStringValue(14,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(15,"&Firefox 4", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1")
    RulesStringValue(16,"&Firefox 5", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0")
    RulesStringValue(17,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3")
    RulesStringValue(18,"Chrome", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.60 Safari/534.24")
    RulesStringValue(19,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(20,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    // Show the duration between the start of Request.Send and Response.Completed in Milliseconds
    public static RulesOption("&Show Time-to-Last-Byte", "Per&formance")
    var m_ShowTTLB: boolean = false;

    // Show the time of response completion
    public static RulesOption("Show Response &Timestamp", "Per&formance")
    var m_ShowTimestamp: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;

    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload(){
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]){
        for (var x = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
    }

    static function OnBoot(){
//      MessageBox.Show("Fiddler has finished booting");
//      System.Diagnostics.Process.Start("iexplore.exe");

//      FiddlerObject.UI.ActivateRequestInspector("HEADERS");
//      FiddlerObject.UI.ActivateResponseInspector("HEADERS");
    }

    static function OnShutdown(){
//      MessageBox.Show("Fiddler has shutdown");
    }

    static function OnAttach(){
//      MessageBox.Show("Fiddler is now the system proxy");
//      System.Diagnostics.Process.Start("proxycfg.exe", "-u"); // Notify WinHTTP of proxy change
    }

    static function OnDetach(){
//      MessageBox.Show("Fiddler is no longer the system proxy");
//      System.Diagnostics.Process.Start("proxycfg.exe", "-u"); // Notify WinHTTP of proxy change
    }

    static function OnBeforeRequest(oSession: Session)
    {
        // Sample Rule: Color ASPX requests in RED
//      if (oSession.uriContains(".aspx")) {    oSession["ui-color"] = "red";   }

        // Sample Rule: Flag POSTs to fiddler2.com in italics
//      if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) { oSession["ui-italic"] = "yup";  }

        // Sample Rule: Break requests for URLs containing "/sandbox/"
//      if (oSession.uriContains("/sandbox/")){
//          oSession.oFlags["x-breakrequest"] = "yup";  // Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
//      }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)){   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith);
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)){
            oSession["x-overridehost"] = gs_OverrideHostWith;
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)){
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))){
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)){
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem){
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300";
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150";
        }

        if (m_DisableCaching){
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA){
            oSession.oRequest["User-Agent"] = sUA;
        }

        if (m_Japanese){
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }

        // For miiiCasa Bar Simulation (start)
        if (oSession.PathAndQuery  == "/miiicasa_bar_api/proxy.html") {
            oSession.url = "a.mimgs.com/index/bar/api/proxy.html";
        }
        if (oSession.PathAndQuery == "/miiicasa_bar_api/status.html") {
            oSession.url = "a.mimgs.com/index/bar/api/status.html";
        }
        // For miiiCasa Bar Simulation (end)
    }

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders method is called before the response headers are
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers
    // which suggests that tampering with the response body is necessary.
    //
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)){
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }

        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)){
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static function OnBeforeResponse(oSession: Session)
    {
        if (m_ShowTimestamp){
            oSession["ui-customcolumn"] = DateTime.Now.ToString("H:mm:ss.ffff") + " " + oSession["ui-customcolumn"];
        }

        if (m_ShowTTLB){
            oSession["ui-customcolumn"] = oSession.oResponse.iTTLB + "ms " + oSession["ui-customcolumn"];
        }

        if (m_Hide304s && oSession.responseCode == 304){
            oSession["ui-hide"] = "true";
        }

        // Inject Non-blocking JavaScript (start)
        if (m_Injection)
        {
            oSession.utilDecodeResponse();
            if (
                oSession.responseCode == 200 &&
                oSession.oResponse.headers.ExistsAndContains("Content-Type", "html") &&
                oSession.utilFindInResponse("<body", false) > -1
            ) {
                var enc    = Utilities.getResponseBodyEncoding(oSession),
                    html   = enc.GetString(oSession.responseBodyBytes),
                    regExp = /<(body[^>]*)>/,
                    inject = [];
                    inject = [
                            '<!-- This section is injected by Fiddler (start) -->',
                            '<div id="fiddler-root"></div>',
                            '<script type="text/javascript">',
                            '(function () {',
                            '    var execute = function () {',
                            '        e        = document.createElement("script");',
                            '        e.type   = "text/javascript";',
                            '        e.src    = "./test.js";',
                            '        document.getElementById("fiddler-root").appendChild(e);',
                            '    };',
                            '    e        = document.createElement("script");',
                            '    e.type   = "text/javascript";',
                            '    e.src    = "http://yui.yahooapis.com/3.4.1/build/yui/yui-min.js",
                            '    e.onload = execute;',
                            '    document.getElementById("fiddler-root").appendChild(e);',
                            '})();',
                            '</script>',
                            '<!-- This section is injected by Fiddler (end) -->'
                    ];

                html = html.replace(regExp, '<$1>\n' + inject.join("\n"));
                oSession.responseBodyBytes = enc.GetBytes(html);
                oSession.utilSetResponseBody(html);
            }
        }
    }
    // Inject JavaScript (end)

    static function Main()
    {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;
        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // FiddlerObject.UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");
    }

    // These static variables are used for simple breakpointing & other QuickExec rules
    static var bpRequestURI:String = null;
    static var bpResponseURI:String = null;
    static var bpStatus:int = -1;
    static var bpMethod: String = null;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]){
    FiddlerObject.StatusText = "ExecAction: " + sParams[0];

    var sAction = sParams[0].toLowerCase();
    switch (sAction){
    case "bold":
        if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return;}
        uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
        break;
    case "bp":
            FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
        break;
    case "bps":
        if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return;}
        bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
        break;
    case "bpv":
    case "bpm":
        if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return;}
        bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
        break;
    case "bpu":
        if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return;}
        bpRequestURI = sParams[1];
        FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
    break;
    case "bpafter":
        if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return;}
        bpResponseURI = sParams[1];
        FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
    break;
    case "overridehost":
        if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return;}
        gs_OverridenHost = sParams[1].toLowerCase();
        gs_OverrideHostWith = sParams[2];
        FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
        break;
    case "urlreplace":
        if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return;}
        gs_ReplaceToken = sParams[1];
        gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
        FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
        break;
    case "allbut":
    case "keeponly":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return;}
        FiddlerObject.UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
        FiddlerObject.UI.actRemoveUnselectedSessions();
        FiddlerObject.UI.lvSessions.SelectedItems.Clear();
        FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
        break;
    case "stop":
            FiddlerObject.UI.actDetachProxy();
            break;
    case "start":
            FiddlerObject.UI.actAttachProxy();
            break;
    case "cls":
    case "clear":
            FiddlerObject.UI.actRemoveAllSessions();
            break;
    case "g":
    case "go":
        FiddlerObject.UI.actResumeAllSessions();
        break;
    case "help":
        Utilities.LaunchHyperlink("http://www.fiddler2.com/redir/?id=quickexec");
            break;
    case "hide":
            FiddlerObject.UI.actMinimizeToTray();
            break;
    case "log":
        FiddlerApplication.Log.LogString((sParams.Length<2) ? FiddlerApplication.Log.LogString("User couldn't think of anything to say...") : sParams[1]);
        break;
    case "nuke":
        FiddlerObject.UI.actClearWinINETCache();
        FiddlerObject.UI.actClearWinINETCookies();
    break;
    case "show":
            FiddlerObject.UI.actRestoreWindow();
            break;
    case "tail":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return;}
        FiddlerObject.UI.TrimSessionList(int.Parse(sParams[1]));
        break;
    case "quit":
            FiddlerObject.UI.actExit();
            break;
    case "dump":
            FiddlerObject.UI.actSelectAll();
            FiddlerObject.UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
            FiddlerObject.UI.actRemoveAllSessions();
            FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
            break;

        default:
            if (sAction.StartsWith("http") || sAction.StartsWith("www")){
                System.Diagnostics.Process.Start(sParams[0]);
            }
            else
            FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
        }
    }
}
