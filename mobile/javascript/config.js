	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#3d85c6";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Show";bookConfig.aboutContactInfoTxt="<info><title>QWJvdXQgdGhlIEF1dGhvcg</title><desc>SGkgdGhlcmUhIEknbSBTYXJyYSBCZW4gQW1hcmEsIGEgVEVTT0wgcXVhbGlmaWVkIHRlYWNoZXIgd2hvIGlzIGFic29sdXRlbHkgaW4gbG92ZSB3aXRoIHRlYWNoaW5nIEVuZ2xpc2guIFdpdGggZml2ZSB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZCwgaW5jbHVkaW5nIHR3byB5ZWFycyBhcyBhbiBFbmdsaXNoIHRlYWNoZXIgaW4gVHVya2V5IGFuZCBvbmUgYW5kIGEgaGFsZiB5ZWFycyBhcyBhIHJlc2VhcmNoIGFzc2lzdGFudCBhdCB0aGUgVW5pdmVyc2l0eSBvZiBNaW5uZXNvdGEsIEknbSBvbiBhIG1pc3Npb24gdG8gbWFrZSBsZWFybmluZyBFbmdsaXNoIGEgYnJlZXplLCBlc3BlY2lhbGx5IGZvciBraWRzIGluIFR1bmlzaWEuIE15IGdvYWwgaXMgdG8gY3JlYXRlIGEgZnVuIGFuZCBlbmpveWFibGUgZW52aXJvbm1lbnQgd2hlcmUgc3R1ZGVudHMgY2FuIGxlYXJuIEVuZ2xpc2ggd2hpbGUgaGF2aW5nIGEgZ3JlYXQgdGltZS4gQXMgYSBwcml2YXRlIEVuZ2xpc2ggdHV0b3IsIEkgYnJpbmcgbXkgZXhwZXJ0aXNlIGFuZCBpbm5vdmF0aXZlIHRlYWNoaW5nIHRlY2huaXF1ZXMgdG8gZXZlcnkgbGVzc29uLCBpbnNwaXJpbmcgYW5kIGVtcG93ZXJpbmcgbXkgc3R1ZGVudHMgd2l0aCBlc3NlbnRpYWwgbGFuZ3VhZ2Ugc2tpbGxzIGZvciB0aGVpciBicmlnaHQgZnV0dXJlLiBMZXQncyBlbWJhcmsgb24gdGhpcyBleGNpdGluZyBqb3VybmV5IG9mIGxlYXJuaW5nIHRvZ2V0aGVyIQ</desc><logo>Li9maWxlcy9leHRmaWxlcy9hYm91dC8zNDQyOTc4NTRfNTg3MDEyOTQyMzA5NjIzMF81NTAwOTE2MjU0MjJqaDg1NDAxOTZfbi5qcGc</logo><keys><key name=\"YXV0aG9y\" type=\"Author\">U2FycmEgQmVuIEFtYXJh</key><key name=\"RW1haWw\" type=\"Link\">d3d3Lm9ubGluZXNjaG9vbHR1dG9yLmNvbQ</key></keys></info> ";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#783f04";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thicker";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="20";bookConfig.rightMargin="20";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="Please contact the <a href=\'mailto:author@sample.com\'><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#940283";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=12;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1800;;bookConfig.securityType="1";bookConfig.CreatedTime ="230711092800";bookConfig.bookTitle="Maya in the Enchanted Forest";bookConfig.bookmarkCR="0abf231e2e16d03c853c63d39ab79c97f322b48a";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202311927197302","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.329871","y":"0.978492","width":"0.340154","height":"-0.031042999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.onlinetutorschool.com","linkTarget":"Blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202311927197679","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.042696962946461726","y":"0.2023464765723621","width":"0.9281948466622114","height":"0.7704017227296355","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p1 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202311927196543","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape2","x":"0.03341501447983961","y":"0.022276676319893073","width":"0.9337640157421848","height":"0.7518378257963912","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p2 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202311927197751","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape3","x":"0.03712779386648846","y":"0.2042028662656865","width":"0.939333184822158","height":"0.7741145021162843","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p3 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202311927197118","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape4","x":"0.027845845399866342","y":"0.024133066013217495","width":"0.9356204054355092","height":"0.7778272815029331","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p4 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202311927196020","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape5","x":"0.03155862478651519","y":"0.23204871166555285","width":"0.9374767951288336","height":"0.7295611494764982","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p5 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"202311927198198","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape6","x":"0.029702235093190765","y":"0.014851117546595382","width":"0.9244820672755626","height":"0.7833964505829064","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p6 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoRectangle","annoId":"20231192719579","alpha":"1","spType":"null","fillStyle":"gradient","color":"16777215","gradientColorA":"16777215","gradientColorB":"13421772","angle":"90","spalpha":"0","borderWidth":"1","borderColor":"6710886","borderAlpha":"0","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape7","x":"0.029702235093190765","y":"0.19306452810573999","width":"0.939333184822158","height":"0.7704017227296355","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"false","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/p7 - Made with Clipchamp.mp3","H5Replay":"false","H5PlaybackNumber":"0"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202311927196740","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.46349","y":"0.965802","width":"0.318744","height":"-0.031084000000000004","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.onlinetutorschool.com","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"202311927196782","alpha":"1","location":{"tannoName":"text1","x":"0.2580381673720948","y":"0.30630429939852977","width":"0.467160466325091","height":"0.11695255067943863","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"538.68","pageHeight":"538.68"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Empty Page DEMO\" SIZE=\"41\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">Let&apos;s practise </FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Empty Page DEMO\" SIZE=\"41\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">Let&apos;s practise </FONT></P></TEXTFORMAT>","pageH":"538.68","pageW":"538.68"}},"background":{"alpha":"0","fillBg":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"720","windowHeight":"540","caption":"","windowURL":"https://sarrbenamara.github.io/Quiz-Maya-in-the-enchanted-forest/"}}]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}