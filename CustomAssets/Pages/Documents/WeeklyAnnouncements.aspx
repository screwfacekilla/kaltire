<%@ Page Inherits="Microsoft.SharePoint.Publishing.TemplateRedirectionPage,Microsoft.SharePoint.Publishing,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %> <%@ Reference VirtualPath="~TemplatePageUrl" %> <%@ Reference VirtualPath="~masterurl/custom.master" %><%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"><head>
<!--[if gte mso 9]><SharePoint:CTFieldRefs runat=server Prefix="mso:" FieldList="FileLeafRef,Comments,PublishingStartDate,PublishingExpirationDate,PublishingContactEmail,PublishingContactName,PublishingContactPicture,PublishingPageLayout,PublishingVariationGroupID,PublishingVariationRelationshipLinkFieldID,PublishingRollupImage,Audience,PublishingIsFurlPage,PublishingPageImage,PublishingPageContent,SummaryLinks,SummaryLinks2,SeoBrowserTitle,SeoMetaDescription,SeoKeywords,RobotsNoIndex,gf32ebf6a7974f1ba895cd5260a51e6c,la632e3c10ba4a008d34c7cfcac211bb,h22e2954837548d3b383c20e79f560ff"><xml>
<mso:CustomDocumentProperties>
<mso:PublishingContact msdt:dt="string">19</mso:PublishingContact>
<mso:PublishingIsFurlPage msdt:dt="string">0</mso:PublishingIsFurlPage>
<mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_PublishingContact msdt:dt="string">Little, Brandon</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_PublishingContact>
<mso:PublishingContactPicture msdt:dt="string"></mso:PublishingContactPicture>
<mso:RobotsNoIndex msdt:dt="string">0</mso:RobotsNoIndex>
<mso:PublishingContactName msdt:dt="string"></mso:PublishingContactName>
<mso:ContentTypeId msdt:dt="string">0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF390064DEA0F50FC8C147B0B6EA0636C4A7D400F49557CAB629624999D40F060F75BE7A</mso:ContentTypeId>
<mso:PublishingPageLayoutName msdt:dt="string">BlankWebPartPage.aspx</mso:PublishingPageLayoutName>
<mso:Comments msdt:dt="string"></mso:Comments>
<mso:PublishingContactEmail msdt:dt="string"></mso:PublishingContactEmail>
<mso:PublishingPageLayout msdt:dt="string">https://kaltire.sharepoint.com/sites/OpsPortalUAT/_catalogs/masterpage/BlankWebPartPage.aspx, Blank Web Part page</mso:PublishingPageLayout>
<mso:PublishingPageContent msdt:dt="string"></mso:PublishingPageContent>
<mso:h22e2954837548d3b383c20e79f560ff msdt:dt="string"></mso:h22e2954837548d3b383c20e79f560ff>
<mso:e1a5b98cdd71426dacb6e478c7a5882f msdt:dt="string"></mso:e1a5b98cdd71426dacb6e478c7a5882f>
<mso:Wiki_x0020_Page_x0020_Categories msdt:dt="string"></mso:Wiki_x0020_Page_x0020_Categories>
<mso:Region msdt:dt="string"></mso:Region>
<mso:PublishingPageImage msdt:dt="string"></mso:PublishingPageImage>
<mso:SummaryLinks msdt:dt="string">&lt;div title=&quot;_schemaversion&quot; id=&quot;_3&quot;&gt;
  &lt;div title=&quot;_view&quot;&gt;
    &lt;span title=&quot;_columns&quot;&gt;1&lt;/span&gt;
    &lt;span title=&quot;_linkstyle&quot;&gt;&lt;/span&gt;
    &lt;span title=&quot;_groupstyle&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</mso:SummaryLinks>
<mso:PublishingRollupImage msdt:dt="string"></mso:PublishingRollupImage>
<mso:Audience msdt:dt="string"></mso:Audience>
<mso:SummaryLinks2 msdt:dt="string">&lt;div title=&quot;_schemaversion&quot; id=&quot;_3&quot;&gt;
  &lt;div title=&quot;_view&quot;&gt;
    &lt;span title=&quot;_columns&quot;&gt;1&lt;/span&gt;
    &lt;span title=&quot;_linkstyle&quot;&gt;&lt;/span&gt;
    &lt;span title=&quot;_groupstyle&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</mso:SummaryLinks2>
<mso:Page_x0020_Type msdt:dt="string"></mso:Page_x0020_Type>
<mso:la632e3c10ba4a008d34c7cfcac211bb msdt:dt="string"></mso:la632e3c10ba4a008d34c7cfcac211bb>
<mso:Stores msdt:dt="string"></mso:Stores>
<mso:oaa91814d39642708036df50e008728c msdt:dt="string"></mso:oaa91814d39642708036df50e008728c>
<mso:Operation_x0020_Type msdt:dt="string">15;#Alert|ff10a7cf-f51a-4dfe-8d42-872d45863aa8;#16;#Memo|018f51c0-1796-4f9a-9bdc-797c78dba6bc</mso:Operation_x0020_Type>
<mso:gf32ebf6a7974f1ba895cd5260a51e6c msdt:dt="string">Alert|ff10a7cf-f51a-4dfe-8d42-872d45863aa8;Memo|018f51c0-1796-4f9a-9bdc-797c78dba6bc</mso:gf32ebf6a7974f1ba895cd5260a51e6c>
<mso:TaxCatchAll msdt:dt="string">16;#Memo|018f51c0-1796-4f9a-9bdc-797c78dba6bc;#15;#Alert|ff10a7cf-f51a-4dfe-8d42-872d45863aa8</mso:TaxCatchAll>
</mso:CustomDocumentProperties>
</xml></SharePoint:CTFieldRefs><![endif]-->
<title>WeeklyAnnouncements</title></head>