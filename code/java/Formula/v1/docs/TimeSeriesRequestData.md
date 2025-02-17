

# TimeSeriesRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **java.util.List&lt;String&gt;** | Array of entity identifiers.  The &#x60;ids&#x60; and &#x60;universe&#x60; parameters provide two different ways to specify the identifiers for which you want data retrieved. Please enter either the &#x60;ids&#x60; or &#x60;universe&#x60; parameter.  |  [optional]
**universe** | **String** | Screening expression to limit the universe  Please enter either the &#x60;ids&#x60; or &#x60;universe&#x60; parameter.  |  [optional]
**universeType** | [**UniverseTypeEnum**](#UniverseTypeEnum) | Specify the universe type to calculate the &#x60;universe&#x60; in.  Find documentation below on how to build a screen for each universe type - * Equity Screen - [Online Assistant Page 20606](https://my.apps.factset.com/oa/pages/20606)  * Debt Screen - [Online Assistant Page 20888](https://my.apps.factset.com/oa/pages/20888)  * Fund Screen - [Online Assistant Page 21384](https://my.apps.factset.com/oa/pages/21384)  This parameter may only be used in conjunction with the &#x60;universe&#x60; parameter.  |  [optional]
**formulas** | **java.util.List&lt;String&gt;** | Array of FQL formulas | 
**calendar** | **String** | Calendar of data returned. The default value is FIVEDAY which displays Monday through Friday, regardless of whether there were trading holidays. |  [optional]
**fsymId** | [**FsymIdEnum**](#FsymIdEnum) | Specify **Y** for the &#x60;fsymId&#x60; parameter to return the **fsymId** (FactSet Default Permanent Identifier) of the &#x60;requestId&#x60;, in addition to the **requestId** field, in each response object. The default value for the &#x60;fsymId&#x60; parameter is **N**.  The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881).  |  [optional]
**displayName** | **java.util.List&lt;String&gt;** | Define display names for the formulas inputted. Enter the list of display names in the same order as the formulas inputted. An additional field **displayName** will be returned in the data object for a formula.  If the number of display names does not match the number of formulas provided, an error will be returned.  To define the display name for a subset of the formulas, leave a blank in the position of the formula that won&#39;t be renamed. For example - If three formulas are inputted, to define display names only for the first and third formula, enter *displayName&#x3D;FORMULA_1,,FORMULA_3*. The **displayName** field will still be included in that formula, but will contain the formula as inputted.  |  [optional]
**flatten** | [**FlattenEnum**](#FlattenEnum) | Specify **Y** for &#x60;flatten&#x60; to return a flat, table-like JSON response model instead of the standard nested JSON response model. This option is provided for easier data processing and visualization. The default value for &#x60;flatten&#x60; is **N**.  See the **Time-Series Result Object Flattened** schema for more detail on the response structure for flattened output.  |  [optional]
**batch** | [**BatchEnum**](#BatchEnum) | Enables the ability to asynchronously \&quot;batch\&quot; the request, supporting a long-running request up to **10 minutes**. Upon requesting \&quot;batch\&quot;: \&quot;Y\&quot;, the service will respond back with an HTTP Status Code of 202.  A user is limited to running 5 Batch Requests in a 10 minute period.  *This feature is available to Individual Users subscribed to the Performance Package and Performance Package Plus Performance Tiers and all Production Users. If you are unsure which Performance Tier you are subscribed to or you would like to gain access to the batch capabilities, please contact your FactSet Account Team or \&quot;Report Issue\&quot; above and our support teams can assist.*  Once a batch request is submitted, use &#x60;/batch-status&#x60; to see if the job has completed. Once completed, retrieve the results of the request via &#x60;/batch-result&#x60;. See the endpoints listed under *Batch Processing* for more information.  |  [optional]



## Enum: UniverseTypeEnum

Name | Value
---- | -----
EQUITY | &quot;EQUITY&quot;
DEBT | &quot;DEBT&quot;
FUND | &quot;FUND&quot;



## Enum: FsymIdEnum

Name | Value
---- | -----
Y | &quot;Y&quot;
N | &quot;N&quot;



## Enum: FlattenEnum

Name | Value
---- | -----
Y | &quot;Y&quot;
N | &quot;N&quot;



## Enum: BatchEnum

Name | Value
---- | -----
Y | &quot;Y&quot;
N | &quot;N&quot;


## Implemented Interfaces

* Serializable


