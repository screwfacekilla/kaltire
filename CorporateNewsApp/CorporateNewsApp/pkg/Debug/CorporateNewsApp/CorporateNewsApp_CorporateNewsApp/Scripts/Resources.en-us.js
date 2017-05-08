/*************************
    APP Resources files 
 *************************/

/****
    APP Home Page - Default.aspx 
 ****/
var Resource_App_Name = 'KalTire News App';
var Resource_App_Admin = 'KalTire News App Admin';
var Resource_Home_Intro = 'Welcome to the Kaltire News App for SharePoint. This app provides 3 app parts to add different kinds of corporate news inside your SharePoint site. You can manage data referentials here, and after you can add client app parts in your SharePoint host web. Please note that these app parts do not work on Office 365 public anonymous web sites.';
var Resource_Home_Carousel = 'Carousel News Administration links';
var Resource_Home_Carousel_List = 'Manage Carousel News';
var Resource_Home_Carousel_Pics = 'Manage Carousel Pics';
var Resource_Home_Carousel_Cfg = 'Layout Config';
var Resource_Home_Carousel_Preview = 'Carousel Preview';
var Resource_Home_Carousel_Help = 'Help about Carousel';
var Resource_Home_Horizontal = 'Horizontal News Administration links';
var Resource_Home_Horizontal_List = 'Manage Horizontal News';
var Resource_Home_Horizontal_Pics = 'Manage Horizontal Pics';
var Resource_Home_Horizontal_Cfg = 'Layout Config';
var Resource_Home_Horizontal_Preview = 'Horizontal Preview';
var Resource_Home_Horizontal_Help = 'Help about Horizontal';
var Resource_Home_Micro = 'Micro News Administration links';
var Resource_Home_Micro_List = 'Manage Micro News';
var Resource_Home_Micro_Cfg = 'Layout Config';
var Resource_Home_Micro_Preview = 'Micro News Preview';
var Resource_Home_Micro_Help = 'Help about Micro News';
var Resource_Home_Footer = 'The Kaltire News App is an open source tool distributed under the GPL v2 license by <a href="http://devfacto.com/" target="_blank">DevFacto</a>. More information about this tool is available on the <a href="https://corporatenewsapp.codeplex.com/" target="_blank">Codeplex web site</a>. This tool is based on the excellent <a href="http://www.kyrielles.net/sliderkit/sliderkit_en.html" target="_blank">JSliderKit</a> jquery extension by Alan Frog, and utilizes <a href="http://blogs.msdn.com/b/ocarpen/" target="_blank">Olivier Carpentiers amazing work.</a>';
var Resource_Home_CurrentVersion = 'App current version:';

/****
    APP Helps Page
 ****/
var Resource_About_App_Part = 'About this App Part';
var Resource_How_To_Manage_News = 'How to manage news';
var Resource_How_To_Use_It = 'How to use it in your web site';
var Resource_App_Part_Properties = 'App Part properties';
var Resource_More_Info = 'More information and support';
var Resource_Help_Footer = 'Because the program is licensed free of charge, there is no warranty for the program, to the extent permitted by applicable law.  Except when otherwise stated in writing the copyright holders and/or other parties provide the program "as is" without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose.  The entire risk as to the quality and performance of the program is with you.  Should the program prove defective, you assume the cost of all necessary servicing, repair or correction. If you want to report a bug or a feature request, you can use the <a href="https://corporatenewsapp.codeplex.com/workitem/list/basic" target="_blank">Issue Tracker</a> of the Codeplex site. ';
var Resource_Edit_Custom_Fields = 'When you\'re editing the app part properties, you can change the following custom fields:';
var Resource_App_Part_Modify_Properties = 'When the app part is inserted, you can save and close the page edit mode, or click on the app part edit menu to modify properties:';
var Resource_Field_Header_Name = 'Field';
var Resource_Field_Header_Description = 'Description';
var Resource_Field_Header_Required = 'Required';
var Resource_Field_Title = 'Title';
var Resource_Field_Title_Description = 'News title displayed under the news pic.';
var Resource_Field_Order = 'Order';
var Resource_Field_Order_Description = 'This integerer field indicates the display order (in ascending order).';
var Resource_Field_Enabled = 'Enabled';
var Resource_Field_Enabled_Description = 'Use this boolean to specify if this news will be display or not.';
var Resource_Field_PublicationDate = 'Publication Date';
var Resource_Field_PublicationDate_Description = 'This datetime field indicates when the news will be available.';
var Resource_Field_PublicationEndDate = 'Publication End Date';
var Resource_Field_PublicationEndDate_Description = 'This datetime field indicates the deadline for the publication of the news.';
var Resource_Field_ImageURL = 'Image URL';
var Resource_Field_ImageURL_Description = 'Use this field to specify the full or relative address of the news picture. If your pictures are in the dedicated picture library, you can use relative address, like "../HorizontalNewsImages/sample.png".';
var Resource_Field_LinkURL = 'Link URL';
var Resource_Field_LinkURL_Description = 'Use this field to specify the full address of the news article.';
var Resource_Field_LinkLabel = 'Link Label';
var Resource_Field_LinkLabel_Description = 'Use this field to specify the "read more" label. By default, we recommand to use "Read more" for example.';
var Resource_Yes = 'Yes';
var Resource_No = 'No';
var Resource_Property_Header_Name = 'Property';
var Resource_Property_Header_Category = 'Category';
var Resource_Property_Header_Type = 'Type';
var Resource_Property_Header_Description = 'Description';
var Resource_Property_Category_General = 'General Settings';
var Resource_Property_Category_Effects = 'Effects Settings';
var Resource_Property_Type_Boolean = 'Boolean';
var Resource_Property_Type_Enum = 'Enum';
var Resource_Property_Type_Int = 'Integer';
var Resource_Property_Type_String = 'String';
var Resource_Property_AutoStart = 'AutoStart';
var Resource_Property_AutoStart_Description = 'Indicates if the transitions between each news will start automatically or not. ';
var Resource_Property_Circular = 'Circular';
var Resource_Property_Circular_Description = 'Indicates if the transition restarts automatically on the first news after the last one. Default is false.';
var Resource_Property_AllowKeyboard = 'Allow Keyboard';
var Resource_Property_AllowKeyboard_Description = 'Indicates if the user can use the keyboard arrows to navigate between news. The default value is true.';
var Resource_Property_Speed = 'Speed';
var Resource_Property_Speed_Description = 'Indicates the default speed between each news panel in milliseconds. The default value is 8000.';
var Resource_Property_Transition = 'Transition';
var Resource_Property_Transition_Description = 'Indicates the kind of transitions used between each news. The available values are : <ul><li><strong>None:</strong> No animation</li><li><strong>Fading:</strong> A fading effect between each news (default one)</li><li><strong>Sliding:</strong> A top sliding effect between each news</li></ul>';
var Resource_Property_PanelFxSpeed = 'Panel Fx Speed';
var Resource_Property_PanelFxSpeed_Description = 'Indicates the default speed of the transition in milliseconds. The default value is 500.';
var Resource_Property_CaptionsTransition = 'Captions Transition';
var Resource_Property_CaptionsTransition_Description = 'Indicates the kind of transitions to display the captions. The available values are: <ul><li><strong>None:</strong> No animation</li><li><strong>Fading:</strong> A fading effect</li><li><strong>Sliding:</strong> A top sliding effect (default one)</li></ul>';
var Resource_Property_CaptionsDelay = 'Captions Delay';
var Resource_Property_CaptionsDelay_Description = 'Indicates the delay to display the captions after the news, in milliseconds. The default value is 10.';
var Resource_Property_CaptionsTransitionDuration = 'Captions Transition Duration';
var Resource_Property_CaptionsTransitionDuration_Description = 'Indicates if time of a captions transition in milliseconds. The default value is 300.';
var Resource_Property_CustomCSSFile = 'Custom CSS File';
var Resource_Property_CustomCSSFile_Description = 'Indicates a relative or full address of a custom CSS file to override the app part styles.';

/****
    APP Carousel News Help Page - CarouselHelp.aspx 
 ****/
var Resource_Carousel_Help_Title = 'Kaltire Carousel News App Part Help';
var Resource_Carousel_Help_Introduction = 'The Carousel News App is client app part to add a dynamic vertical carousel news system in your web site. This news system displays news with image, title, description  and caption with a vertical scrolling effect between them. The displayed news links come from two SharePoint lists, one for the text, and another for the pictures.';
var Resource_Carousel_Lists_Intro = 'To add, edit or remove news, you must manage items in the <a href="../Lists/CarouselNews/">Carousel News list</a>. To add, edit or remove news pictures, you can manage items in the <a href="../CarouselNewsImages/">Carousel News Pictures Library</a>. To change the layout and dispaly settings of the App Part, you can use the layout config wizard.';
var Resource_Carousel_List_Fill = 'For each news, you can fill the following fields in the Carousel News list:';
var Resource_Carousel_Add_App_Part = 'To use this app in your sharepoint site (aka "app host web"), you need to have an editable page (web part page or wiki page). Edit the page, and click on the "Insert" tab in the ribban. Click on "App part", choose the app part called "Carousel News App Part", and finally click on "Add" button:';

/****
    APP Carousel News Config Page - CarouselConfig.aspx 
 ****/
var Resource_Carousel_Config_Title = 'Kaltire News App Part Configuration';
var Resource_Config = 'Configure layout settings';
var Resource_Config_Desc = 'You can use this wizard to manage the display settings of your App Part. Do not forget that if these parameters are not enought for you to configure the layout, you can also override the CSS classes with the \'Custom CSS File\' parameter of the app part. <a href="CarouselHelp.aspx">See the documentation</a> for more information.';
var Resource_Config_Loading = 'Loading configuration, please wait...';
var Resource_Config_Update_In_Progress = 'Configuration update in progress...';
var Resource_Config_Preview_In_Progress = 'Preview generation in progress...';
var Resource_Config_Updated = 'Configuration successfully updated';
var Resource_Config_Key = 'Parameter';
var Resource_Config_Value = 'Value';
var Resource_Config_Dimension = 'Window size';
var Resource_Config_Dimension_Panel = 'Picture area size';
var Resource_Config_Dimension_Tab = 'Tabs size';
var Resource_Config_Dimension_Subtitles = 'Subtitles area size';
var Resource_Config_Dimension_Pagination = 'Pagination item size';
var Resource_Config_Loader = 'Loader style';
var Resource_Config_Width = 'Width:';
var Resource_Config_Height = 'Height:';
var Resource_Config_Bgcolor = 'Background color';
var Resource_Config_Save = 'Save Configuration';
var Resource_Config_Preview = 'Preview';
var Resource_Config_Cancel = 'Cancel';
var Resource_Config_Default = 'Reset default values';
var Resource_Config_TabBgColor = 'Tab background color';
var Resource_Config_TabHoverBgColor = 'Tab hover color';
var Resource_Config_SelectedTabBgColor = 'Selected tab color';
var Resource_Config_TabFontColor = 'Tab text color';
var Resource_Config_TabSelectedFontColor = 'Selected tab text color';
var Resource_Config_TabHoverFontColor = 'Tab hover text color';
var Resource_Config_Gradient = 'Use auto radient effect';
var Resource_Config_Font_Family = 'Font family';
var Resource_Config_Font_Size = 'Tab title font size';
var Resource_Config_Desc_Font_Size = 'Tab description font size';
var Resource_Config_Tab_Padding = 'Tab text padding';
var Resource_Config_Pag_Font_Size = 'Pagination font size';
var Resource_Config_Readmore_Font_Size = 'Sub titles font size';
var Resource_Config_PaginationBgColor = 'Pagination background color';
var Resource_Config_PaginationHoverBgColor = 'Pagination hover color';
var Resource_Config_SelectedPaginationBgColor = 'Selected Page color';
var Resource_Config_PaginationFontColor = 'Pagination text color';
var Resource_Config_PaginationSelectedFontColor = 'Selected Page text color';
var Resource_Config_PaginationHoverFontColor = 'Pagination hover text color';
var Resource_Config_Sub_BgColor = 'Sub titles background color';
var Resource_Config_Sub_Transparent = 'Transparent';
var Resource_Config_Sub_Solid = 'Solid color:';
var Resource_Config_SubFontColor = 'Sub titles font color';
var Resource_Config_UpperCase = 'Auto upper case';
var Resource_Config_Padding_Left = 'Left:';
var Resource_Config_Padding_Top = 'Top:';
var Resource_Config_Padding_Right = 'Right:';
var Resource_Config_Padding_Bottom = 'Bottom:';

/****
    APP Horizontal News Help Page - HorizontalNewsHelp.aspx 
 ****/
var Resource_Horizontal_Help_Title = 'Horizontal News App Part Help';
var Resource_Horizontal_Help_Introduction = 'The Hozizontal News App is client app part to add a dynamic horizontal carousel news system in your web site. This news system displays news with image, title and description with a horizontal scrolling effect between them. The displayed news links come from two SharePoint lists, one for the text, and another for the pictures.';
var Resource_Horizontal_Add_App_Part = 'To use this app in your sharepoint site (aka "app host web"), you need to have an editable page (web part page or wiki page). Edit the page, and click on the "Insert" tab in the ribban. Click on "App part", choose the app part called "Horizontal News App Part", and finally click on "Add" button:';
var Resource_Horizontal_Lists_Intro = 'To add, edit or remove news, you must manage items in the <a href="../Lists/HorizontalNews/">Horizontal News list</a>. To add, edit or remove news pictures, you can manage items in the <a href="../HorizontalNewsImages/">Horizontal News Pictures Library</a>. To manage the layout settings of this App Part, you can use the layout wizard page.';
var Resource_Horizontal_List_Fill = 'For each news, you can fill the following fields in the Horizontal News list:';
var Resource_Horizontal_Property_Transition_Description = 'Indicates the kind of transitions used between each news panel. The available values are:<ul><li><strong>easeOutExpo</strong></li><li><strong>easeOutBounce</strong></li><li><strong>easeOutBack</strong></li></ul>';
var Resource_Horizontal_Property_Speed_Description = 'Indicates the default speed between each news panel in milliseconds. The default value is 4000.';

/****
    APP Horizontal News Config Page - HorizontalNewsConfig.aspx 
 ****/
var Resource_Horizontal_Config_Title = 'Horizontal News App Part Configuration';
var Resource_Horizontal_Config_Desc = 'You can use this wizard to manage the display settings of your App Part. Do not forget that if these parameters are not enought for you to configure the layout, you can also override the CSS classes with the \'Custom CSS File\' parameter of the app part. <a href="HorizontalNewsHelp.aspx">See the documentation</a> for more information.';
var Resource_Config_Horizontal_TitleFontColor = 'Titles font color';
var Resource_Config_Horizontal_TitleFontSize = 'Titles font size';
var Resource_Config_Horizontal_DescFontColor = 'Descriptions font color';
var Resource_Config_Horizontal_DescFontSize = 'Descriptions font size';
var Resource_Config_Horizontal_LinkFontColor = 'Links font color';
var Resource_Config_Horizontal_LinkFontSize = 'Links font size';
var Resource_Config_Horizontal_ArrowStyle = 'Arrow buttons style';
var Resource_Config_Black = 'Black';
var Resource_Config_White = 'White';

/****
    APP Micro News Help Page - MicroNewsHelp.aspx 
 ****/
var Resource_Micro_Help_Title = 'Micro News App Part Help';
var Resource_Micro_Help_Introduction = 'The Micro News App is client app part to add a dynamic minimal news system in your web site. This news system displays short news with text with a scrolling effect between them. The displayed news links come from a dedicated custom SharePoint list that a administrator can fill.';
var Resource_Micro_Lists_Intro = 'To add, edit or remove news, you must manage items in the <a href="../Lists/MicroNews/">Micro News list</a>. To manage the layout settings of this App Part, you can use the layout wizard page.';
var Resource_Micro_List_Fill = 'For each news, you can fill the following fields:';
var Resource_Micro_Add_App_Part = 'To use this app in your sharepoint site (aka "app host web"), you need to have an editable page (web part page or wiki page). Edit the page, and click on the "Insert" tab in the ribban. Click on "App part", choose the app part called "Micro News App Part", and finally click on "Add" button:';
var Resource_Micro_Property_Transition_Description = 'Indicates the kind of transitions used between each news. The available values are:<ul><li><strong>None:</strong> No animation</li><li><strong>Fading:</strong> A fading effect between each news</li><li><strong>Sliding:</strong> A top sliding effect between each news (default one)</li></ul>';
var Resource_Property_HeadlineText = 'Headline text';
var Resource_Property_HeadlineText_Description = 'Text to display in the headline. The default value is \'Latest News:\'';

/****
    APP Micro News Config Page - MicroNewsConfig.aspx 
 ****/
 var Resource_Micro_Config_Title = 'Micro News App Part Configuration';
 var Resource_Micro_Config_Desc = 'You can use this wizard to manage the display settings of your App Part. Do not forget that if these parameters are not enought for you to configure the layout, you can also override the CSS classes with the \'Custom CSS File\' parameter of the app part. <a href="MicroNewsHelp.aspx">See the documentation</a> for more information.';
 var Resource_Config_HeadlineBgColor = 'Headline background color';
 var Resource_Config_FontColor = 'Font color';
 var Resource_Config_Underline = 'Underline';
 var Resource_Config_HeadlineFontColor = 'Headline font color';
  var Resource_Config_Simple_Font_Size = 'Font size';
