

# PeopleMatch

People Match object showing the decision reached for each Entity. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **Integer** | Identifier denoting a specific Concordance task submitted by the user. This value will be null for /people-match endpoint responses and is only available when using the \&quot;Bulk\&quot; workflow.  |  [optional]
**activeRole** | **String** | This tells whether the person is now active in the entity |  [optional]
**clientEntity** | **String** | The entity for which the person is working.  |  [optional]
**clientFirstName** | **String** | First Name provided in the input file which is used in the &#x60;people-task&#x60; endpoint |  [optional]
**clientLastName** | **String** | Last Name provided in the input file which is used in the &#x60;people-task&#x60; endpoint |  [optional]
**clientMiddleName** | **String** | Middle Name provided in the input file which is used in the &#x60;people-task&#x60; endpoint |  [optional]
**clientSalutation** | **String** | Salutation provided in the input file which is used in the &#x60;people-task&#x60; endpoint |  [optional]
**clientSuffix** | **String** | Suffix provided in the input file which is used in the &#x60;people-task&#x60; endpoint |  [optional]
**clientPriority** | **String** | Priority provided in the input file which is used in the &#x60;people-task&#x60; endpoint |  [optional]
**clientPersonName** | **String** | The person name as provided in request. |  [optional]
**firstName** | **String** | The first name of the client. |  [optional]
**personId** | **String** | The id of the person. |  [optional]
**lastName** | **String** | The last name of the person. |  [optional]
**middleName** | **String** | The middle name of the client. |  [optional]
**suffix** | **String** | The suffix in the name of the person |  [optional]
**salutation** | **String** | Title of a person&#39;s name |  [optional]
**personName** | **String** | Full name of the person matched |  [optional]
**email** | **String** | Email of the person |  [optional]
**clientId** | **String** | User defined person id provided when matched with FactSet person. |  [optional]
**entity** | **String** | Full name corresponding to the matched entity. |  [optional]
**mapStatus** | [**MapStatusEnum**](#MapStatusEnum) | Concordance status of the submitted, where -    * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)   * UNMAPPED - The requested Entity Name is unmapped by FactSet.   * INDETERMINATE - The requested Entity Name has unable to make a mapping.  |  [optional]
**matchFlag** | **String** | Probability of the match being similar to the entity requested as determined by the Concordance algorithm. A similarityScore of 1 is the highest level of similarity.  |  [optional]
**nameMatchSource** | **String** | Additional statistic calculated by the algorithm that is used to ensure the validity of the match result. A confidenceScore of 1 is the highest level of confidence.  |  [optional]
**nameMatchString** | **String** | String on which the Concordance algorithm mapped the submitted entity. |  [optional]
**rowIndex** | **Integer** | Country name corresponding to the location of the matched entity |  [optional]
**similarityScore** | **Double** | Probability of the match being similar to the entity requested as determined by the Concordance algorithm. A similarityScore of 1 is the highest level of similarity.  |  [optional]
**title** | **String** | The title that the person is holding. |  [optional]
**universeId** | **Integer** | The universe identifier |  [optional]



## Enum: MapStatusEnum

Name | Value
---- | -----
MAPPED | &quot;MAPPED&quot;
UNMAPPED | &quot;UNMAPPED&quot;
INDETERMINATE | &quot;INDETERMINATE&quot;


## Implemented Interfaces

* Serializable


