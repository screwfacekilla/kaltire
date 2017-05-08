/*************************
    APP Resources files 
 *************************/

/****
    APP Home Page - Default.aspx 
 ****/
var Resource_App_Name = 'Corporate News App';
var Resource_App_Admin = 'Administration de l\'App Corporate News';
var Resource_Home_Intro = 'Bienvenue dans l\'application de gestion des nouveautés d\'entreprise. Cette application fournit des fonctionnalités permettant de gérer 3 différentes App Parts pour afficher des nouveautés sur votre site SharePoint. Cette page vous permet de gérer les référentiels de données (listes, images, etc.) et vous pouvez ensuite insérer les app parts au sein de vos pages web sur votre site SharePoint hôte. Veuillez noter que ces App Parts ne fonctionnent pas sur les sites de types publiques anonymes avec Office 365.';
var Resource_Home_Carousel = 'Administration des nouveautés du Carrousel';
var Resource_Home_Carousel_List = 'Gérer les nouveautés';
var Resource_Home_Carousel_Pics = 'Gérer les images';
var Resource_Home_Carousel_Cfg = 'Configurer l\'apparence';
var Resource_Home_Carousel_Preview = 'Prévisualiser';
var Resource_Home_Carousel_Help = 'Aide';
var Resource_Home_Horizontal = 'Administration des nouveautés horizontales';
var Resource_Home_Horizontal_List = 'Gérer les nouveautés';
var Resource_Home_Horizontal_Pics = 'Gérer les images';
var Resource_Home_Horizontal_Cfg = 'Configurer l\'apparence';
var Resource_Home_Horizontal_Preview = 'Prévisualiser';
var Resource_Home_Horizontal_Help = 'Aide';
var Resource_Home_Micro = 'Administration des micro nouveautés';
var Resource_Home_Micro_List = 'Gérer les nouveautés';
var Resource_Home_Micro_Cfg = 'Configurer l\'apparence';
var Resource_Home_Micro_Preview = 'Prévisualiser';
var Resource_Home_Micro_Help = 'Aide';
var Resource_Home_Footer = 'Cette application est fournie sous licence dite open source GPL v2 par <a href="http://blogs.msdn.com/b/ocarpen/" target="_blank">Olivier Carpentier</a>. Si vous souhaitez, plus d\'informations, vous pouvez consulter le <a href="https://corporatenewsapp.codeplex.com/" target="_blank">site officiel sur Codeplex</a>. Cet outil est basé sur l\'excellente extension JQuery <a href="http://www.kyrielles.net/sliderkit/sliderkit_en.html" target="_blank">JSliderKit</a> créée par Alan Frog.';
var Resource_Home_CurrentVersion = 'Version courante de l\'App:';

/****
    APP Helps Page
 ****/
var Resource_About_App_Part = 'A propos de cette App';
var Resource_How_To_Manage_News = 'Comment gérer les nouveautés';
var Resource_How_To_Use_It = 'Comment utiliser cette app sur votre site';
var Resource_App_Part_Properties = 'Propriétés de l\'App Part';
var Resource_More_Info = 'Support et informations complémentaires';
var Resource_Help_Footer = 'Ce programme étant gratuit et sous licence open source, il n\'y a pas de garantie associée. Si vous souhaitez remonter une anomalie ou effectuer une demande de nouvelle fonctionnalité, vous pouvez utiliser le <a href="https://corporatenewsapp.codeplex.com/workitem/list/basic" target="_blank">Bug Tracker</a> disponible sur le site Codeplex officiel.';
var Resource_Edit_Custom_Fields = 'Lorsque vous éditez les propriétés de l\'app part, vous pouvez modifier les champs suivants :';
var Resource_App_Part_Modify_Properties = 'Lorsque l\'app part est insérée, vous pouvez sauvegarder et fermer le mode édition de la page, ou cliquer sur le menu pour modifier les propriétés de l\'app part :';
var Resource_Field_Header_Name = 'Champs';
var Resource_Field_Header_Description = 'Description';
var Resource_Field_Header_Required = 'Obligatoire';
var Resource_Field_Title = 'Titre';
var Resource_Field_Title_Description = 'Titre de la nouveauté';
var Resource_Field_Order = 'Ordre';
var Resource_Field_Order_Description = 'Ordre d\'affichage des nouveautés, affichées en ordre croissant.';
var Resource_Field_Enabled = 'Active';
var Resource_Field_Enabled_Description = 'Valeur booléene indiquant si la nouveauté est affichée ou non.';
var Resource_Field_PublicationDate = 'Date de publication';
var Resource_Field_PublicationDate_Description = 'Cette date indique le moment où la nouveauté sera visible.';
var Resource_Field_PublicationEndDate = 'Date de fin de publication';
var Resource_Field_PublicationEndDate_Description = 'Cette date indique la date limite de visibilité de la nouveauté.';
var Resource_Field_ImageURL = 'URL de l\'image';
var Resource_Field_ImageURL_Description = 'Ce champs indique le chemin de l\'image associée à la nouveauté. Nous vous conseillons d\'utiliser une adresse relative, comme par exemple "../HorizontalNewsImages/sample.png".';
var Resource_Field_LinkURL = 'URL du lien';
var Resource_Field_LinkURL_Description = 'Utiliser ce champs pour saisir l\'adresse du lien de l\'article associée à la nouveauté.';
var Resource_Field_LinkLabel = 'Libellé du lien';
var Resource_Field_LinkLabel_Description = 'Utiliser ce champs pour modifier le libellé pour inviter les utilisateur à consulter d\'avantage d\'information.';
var Resource_Yes = 'Oui';
var Resource_No = 'Non';
var Resource_Property_Header_Name = 'Propriété';
var Resource_Property_Header_Category = 'Catégorie';
var Resource_Property_Header_Type = 'Type';
var Resource_Property_Header_Description = 'Description';
var Resource_Property_Category_General = 'Paramètres généraux';
var Resource_Property_Category_Effects = 'Paramètres des effets';
var Resource_Property_Type_Boolean = 'Booléen';
var Resource_Property_Type_Enum = 'Enumeration';
var Resource_Property_Type_Int = 'Entier';
var Resource_Property_Type_String = 'Chaîne de caractères';
var Resource_Property_AutoStart = 'Démarrage automatique';
var Resource_Property_AutoStart_Description = 'Indique si les transitions entre les nouveautés démarrent automatiquement ou non.';
var Resource_Property_Circular = 'Circulaire';
var Resource_Property_Circular_Description = 'Indique si l\'utilisateur peut automatiquement passer de la dernière à la première nouveauté.';
var Resource_Property_AllowKeyboard = 'Autoriser le clavier';
var Resource_Property_AllowKeyboard_Description = 'Indique si l\'utilisateur peut utiliser le clavier pour passer d\'une nouveauté à une autre.';
var Resource_Property_Speed = 'Vitesse';
var Resource_Property_Speed_Description = 'Indique la vitesse de défilement des nouveautés en millisecondes. La valeur par défaut est 8000.';
var Resource_Property_Transition = 'Transition';
var Resource_Property_Transition_Description = 'Indique le type de transition entre les nouveautés. Les valeurs possibles sont : <ul><li><strong>None:</strong> Pas d\'animation</li><li><strong>Fading:</strong> Fondu enchaîné (effet par défaut)</li><li><strong>Sliding:</strong> Un effet de glissement</li></ul>';
var Resource_Property_PanelFxSpeed = 'Vitesse des effets';
var Resource_Property_PanelFxSpeed_Description = 'Indique la vitesse des effets de transitions en millisecondes. La valeur par défaut est 500.';
var Resource_Property_CaptionsTransition = 'Transition des sous-titres';
var Resource_Property_CaptionsTransition_Description = 'Indique le type de transition lors de l\'apparition des sous-titres. Les valeurs possibles sont : <ul><li><strong>None:</strong> Pas d\'animation</li><li><strong>Fading:</strong> Fondu enchaîné</li><li><strong>Sliding:</strong> Un effet de glissement (effet par défaut)</li></ul>';
var Resource_Property_CaptionsDelay = 'Délais des sous-titres';
var Resource_Property_CaptionsDelay_Description = 'Indique le délais entre l\'apparition d\'une nouveauté et l\'apparition des sous-titres en millisecondes. La valeur par défaut est 10.';
var Resource_Property_CaptionsTransitionDuration = 'Durée de transition des sous-titres';
var Resource_Property_CaptionsTransitionDuration_Description = 'Indique la vitesse de l\'effet de transition des sous-titres en millisecondes. La valeur par défaut est 300.';
var Resource_Property_CustomCSSFile = 'Fichier CSS';
var Resource_Property_CustomCSSFile_Description = 'Indique l\'adresse relative ou absolue d\'un fichier CSS qui pourra contenir la surcharche des classes CSS de façon à personnaliser graphiquement le composant.';

/****
    APP Carousel News Help Page - CarouselHelp.aspx
 ****/
var Resource_Carousel_Help_Title = 'Aide de l\'App Part du Carrousel de nouveautés';
var Resource_Carousel_Help_Introduction = 'L\'App des nouvautés de Carrousel est une app part permettant de gérer l\'affichage dynamique de nouveauté sous forme verticale au sein des pages de votre site SharePoint. Ce système permet d\'afficher une nouveauté sous la forme d\'une image, un titre, une description et des sous-titres, avec un effet de transition entre les nouveautés. Les nouveautés sont stockées au sein d\'une liste SharePoint et les images associées au sein d\'une bibliothèque d\'images.';
var Resource_Carousel_Lists_Intro = 'Pour ajouter, modifier ou supprimer une nouveauté, vous pouvez utiliser la <a href="../Lists/CarouselNews/">liste des nouveautés du Carrousel</a>. Pour ajouter, modifier ou supprimer une image associée, vous pouvez utiliser <a href="../CarouselNewsImages/">la bibliothèque d\'images associée</a>. Pour modifier l\'apparence du carrousel, vous pouvez utiliser l\'assistant de configuration de l\'apparence.';
var Resource_Carousel_List_Fill = 'Pour chaque nouveauté, vous pouvez modifier les champs suivant dans la liste SharePoint :';
var Resource_Carousel_Add_App_Part = 'Pour utiliser cette app part au sein de votre site SharePoint (dit "app host web"), vous devez éditer une page, de type page de web part ou page wiki. Ensuite, cliquer sur "Insérer" dans le rubban. Cliquer ensuite sur "App part", sélectionner l\'app part appelée "App Part Carrousel de nouveauté", puis enfin cliquer sur le bouton "Ajouter" :';

/****
    APP Carousel News Config Page - CarouselConfig.aspx 
 ****/
var Resource_Carousel_Config_Title = 'Configuration de l\'App Part du Carrousel des nouveautés';
var Resource_Config = 'Configuration des paramètres d\'affichage';
var Resource_Config_Desc = 'Vous pouvez utiliser cette page pour modifier l\'apparence de votre App Part. N\'oubliez pas que si ces paramètres ne vous sont pas suffisant, vous pouvez également directement modifier la propriété \'Custom CSS File\' de l\'app part pour totalement surcharger les styles CSS. <a href="CarouselHelp.aspx">Consulter la documentation</a> pour plus d\'informations.';
var Resource_Config_Loading = 'Chargement de la configuration en cours, veuillez patienter...';
var Resource_Config_Update_In_Progress = 'Sauvegarde de la configuration en cours...';
var Resource_Config_Preview_In_Progress = 'Génération de la prévisualisation en cours...';
var Resource_Config_Updated = 'La configuration a bien été sauvegardée.';
var Resource_Config_Key = 'Paramètre';
var Resource_Config_Value = 'Valeur';
var Resource_Config_Dimension = 'Dimensions';
var Resource_Config_Dimension_Panel = 'Dimensions de la zone d\'images';
var Resource_Config_Dimension_Tab = 'Dimensions des onglets';
var Resource_Config_Dimension_Subtitles = 'Dimensions de la zone de sous-titres';
var Resource_Config_Dimension_Pagination = 'Dimensions d\'un numéro de pagination';
var Resource_Config_Loader = 'Image de chargement';
var Resource_Config_Width = 'Largeur :';
var Resource_Config_Height = 'Hauteur :';
var Resource_Config_Bgcolor = 'Couleur de fond';
var Resource_Config_Save = 'Enregistrer la configuration';
var Resource_Config_Preview = 'Prévisualiser';
var Resource_Config_Cancel = 'Annuler';
var Resource_Config_Default = 'Utiliser les valeurs par défaut';
var Resource_Config_TabBgColor = 'Couleur de fond des onglets';
var Resource_Config_TabHoverBgColor = 'Couleur au survol des onglets';
var Resource_Config_SelectedTabBgColor = 'Couleur de l\'onglet sélectionné';
var Resource_Config_TabFontColor = 'Couleur du texte des onglets';
var Resource_Config_TabSelectedFontColor = 'Couleur du texte de l\'onglet sélectionné';
var Resource_Config_TabHoverFontColor = 'Couleur du texte au survol';
var Resource_Config_Gradient = 'Utiliser un dégradé automatique';
var Resource_Config_Font_Family = 'Police de caractères';
var Resource_Config_Font_Size = 'Taille de la police du titre des onglets';
var Resource_Config_Desc_Font_Size = 'Taille de la description';
var Resource_Config_Tab_Padding = 'Espacement du texte des onglets';
var Resource_Config_Pag_Font_Size = 'Taille de la pagination';
var Resource_Config_Readmore_Font_Size = 'Taille des sous-titres';
var Resource_Config_PaginationBgColor = 'Couleur de fond de la pagination';
var Resource_Config_PaginationHoverBgColor = 'Couleur au survol de la pagination';
var Resource_Config_SelectedPaginationBgColor = 'Couleur de la page active';
var Resource_Config_PaginationFontColor = 'Couleur du texte de pagination';
var Resource_Config_PaginationSelectedFontColor = 'Couleur du texte de la pagination active';
var Resource_Config_PaginationHoverFontColor = 'Couleur du texte de la pagination au survol';
var Resource_Config_Sub_BgColor = 'Couleur de fond de la zone des sous-titres';
var Resource_Config_Sub_Transparent = 'Transparent';
var Resource_Config_Sub_Solid = 'Couleur unie :';
var Resource_Config_SubFontColor = 'Couleur des sous-titres';
var Resource_Config_UpperCase = 'Majuscules automatiques';
var Resource_Config_Padding_Left = 'Gauche :';
var Resource_Config_Padding_Top = 'Haut :';
var Resource_Config_Padding_Right = 'Droit :';
var Resource_Config_Padding_Bottom = 'Bas :';

/****
    APP Horizontal News Help Page - HorizontalNewsHelp.aspx 
 ****/
var Resource_Horizontal_Help_Title = 'Aide de l\'App Part des nouveautés horizontales';
var Resource_Horizontal_Help_Introduction = 'L\'App des nouveautés horizontales est une app part permettant de gérer l\'affichage dynamique de nouveautés sous forme d\'un carrousel horizontal. Ce système permet d\'afficher des nouveautés contenant une image, un titre et une description avec un effet de défilement horizontal. Les nouveautés sont stockées au sein d\'une liste SharePoint et les images associées au sein d\'une bibliothèque d\'images.';
var Resource_Horizontal_Add_App_Part = 'Pour utiliser cette app part au sein de votre site SharePoint (dit "app host web"), vous devez éditer une page, de type page de web part ou page wiki. Ensuite, cliquer sur "Insérer" dans le rubban. Cliquer ensuite sur "App part", sélectionner l\'app part appelée "App Part des nouveautés horizontales", puis enfin cliquer sur le bouton "Ajouter" :';
var Resource_Horizontal_Lists_Intro = 'Pour ajouter, modifier ou supprimer une nouveauté, vous pouvez utiliser la <a href="../Lists/HorizontalNews/">liste des nouveautés horizontales</a>. Pour ajouter, modifier ou supprimer une image associée, vous pouvez utiliser <a href="../HorizontalNewsImages/">la bibliothèque d\'images associée</a>. Vous pouvez également modifier les paramètres d\'affichage de l\'App Part en utilisant l\'assistant d\'apparence.';
var Resource_Horizontal_List_Fill = 'Pour chaque nouveauté, vous pouvez modifier les champs suivant dans la liste SharePoint :';
var Resource_Horizontal_Property_Transition_Description = 'Indique le type de transition entre chaque série de nouveautés. Les choix possibles sont :<ul><li><strong>easeOutExpo</strong></li><li><strong>easeOutBounce</strong></li><li><strong>easeOutBack</strong></li></ul>';
var Resource_Horizontal_Property_Speed_Description = 'Indique la durée d\'affichage entre chaque série de nouveautés. La valeur par défaut est 4000.';

/****
    APP Horizontal News Config Page - HorizontalNewsConfig.aspx 
 ****/
var Resource_Horizontal_Config_Title = 'Configuration de l\'App Part des nouveautés horizontales';
var Resource_Horizontal_Config_Desc = 'Vous pouvez utiliser cette page pour modifier l\'apparence de votre App Part. N\'oubliez pas que si ces paramètres ne vous sont pas suffisant, vous pouvez également directement modifier la propriété \'Custom CSS File\' de l\'app part pour totalement surcharger les styles CSS. <a href="HorizontalNewsHelp.aspx">Consulter la documentation</a> pour plus d\'informations.';
var Resource_Config_Horizontal_TitleFontColor = 'Couleur des titres';
var Resource_Config_Horizontal_TitleFontSize = 'Taille de la police des titres';
var Resource_Config_Horizontal_DescFontColor = 'Couleur des descriptions';
var Resource_Config_Horizontal_DescFontSize = 'Taille de la police des descriptions';
var Resource_Config_Horizontal_LinkFontColor = 'Couleur des liens';
var Resource_Config_Horizontal_LinkFontSize = 'Taille de la police des liens';
var Resource_Config_Horizontal_ArrowStyle = 'Style des flèches';
var Resource_Config_Black = 'Noir';
var Resource_Config_White = 'Blanc';

/****
    APP Micro News Help Page - MicroNewsHelp.aspx 
 ****/
var Resource_Micro_Help_Title = 'Aide de l\'App Part des micro nouveautés';
var Resource_Micro_Help_Introduction = 'L\'App des Micro nouveautés est une app part permettant de gérer l\'affichage dynamique de nouveautés sous forme d\'un défilement simplifié minimaliste. Ce système permet d\'afficher des nouveautés sous la forme de micro nouveautés textuelles et défilantes. Les nouveautés sont stockées d\'une liste SharePoint unique.';
var Resource_Micro_Lists_Intro = 'Pour ajouter, modifier ou supprimer une nouveauté, vous pouvez utiliser la <a href="../Lists/MicroNews/">liste des micro nouveautés</a>. Vous pouvez également modifier les paramètres d\'affichage de l\'App Part en utilisant l\'assistant d\'apparence.';
var Resource_Micro_List_Fill = 'Pour chaque nouveauté, vous pouvez modifier les champs suivant dans la liste SharePoint :';
var Resource_Micro_Add_App_Part = 'Pour utiliser cette app part au sein de votre site SharePoint (dit "app host web"), vous devez éditer une page, de type page de web part ou page wiki. Ensuite, cliquer sur "Insérer" dans le rubban. Cliquer ensuite sur "App part", sélectionner l\'app part appelée "App Part des micro nouveautés", puis enfin cliquer sur le bouton "Ajouter" :';
var Resource_Micro_Property_Transition_Description = 'Indique le type de transition entre chaque nouveauté. Les choix possibles sont :<ul><li><strong>None:</strong> Pas d\'animation</li><li><strong>Fading:</strong> Fondu enchaîné</li><li><strong>Sliding:</strong> Un effet de glissement vertical (effet par défaut)</li></ul>';
var Resource_Property_HeadlineText = 'Texte d\'entête';
var Resource_Property_HeadlineText_Description = 'Texte de l\'entête. La valeur par défaut est \'Latest News:\'';

/****
    APP Micro News Config Page - MicroNewsConfig.aspx 
 ****/
 var Resource_Micro_Config_Title = 'Configuration de l\'App Part des micro nouveautés';
 var Resource_Micro_Config_Desc = 'Vous pouvez utiliser cette page pour modifier l\'apparence de votre App Part. N\'oubliez pas que si ces paramètres ne vous sont pas suffisant, vous pouvez également directement modifier la propriété \'Custom CSS File\' de l\'app part pour totalement surcharger les styles CSS. <a href="MicroNewsHelp.aspx">Consulter la documentation</a> pour plus d\'informations.';
 var Resource_Config_HeadlineBgColor = 'Couleur de fond de l\'entête';
 var Resource_Config_FontColor = 'Couleur de la police';
 var Resource_Config_Underline = 'Sousligné';
 var Resource_Config_HeadlineFontColor = 'Couleur du texte de l\'entête';
 var Resource_Config_Simple_Font_Size = 'Taille du texte';