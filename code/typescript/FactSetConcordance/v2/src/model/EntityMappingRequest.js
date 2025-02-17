/**
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EntityMappingRequest model module.
 * @module model/EntityMappingRequest
 */
class EntityMappingRequest {
    /**
     * Constructs a new <code>EntityMappingRequest</code>.
     * @alias module:model/EntityMappingRequest
     * @param universeId {Number} The universe to save this mapping to.
     * @param clientId {String} A unique identifier supplied by the user. ClientId is saved to the user's Concordance universe and will be used as the identifier for that entity within the universe.
     * @param clientName {String} Name of entity to match.
     */
    constructor(universeId, clientId, clientName) { 
        
        EntityMappingRequest.initialize(this, universeId, clientId, clientName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, universeId, clientId, clientName) { 
        obj['universeId'] = universeId;
        obj['clientId'] = clientId;
        obj['clientName'] = clientName;
    }

    /**
     * Constructs a <code>EntityMappingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityMappingRequest} obj Optional instance to populate.
     * @return {module:model/EntityMappingRequest} The populated <code>EntityMappingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityMappingRequest();

            if (data.hasOwnProperty('universeId')) {
                obj['universeId'] = ApiClient.convertToType(data['universeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('clientCountry')) {
                obj['clientCountry'] = ApiClient.convertToType(data['clientCountry'], 'String');
            }
            if (data.hasOwnProperty('clientState')) {
                obj['clientState'] = ApiClient.convertToType(data['clientState'], 'String');
            }
            if (data.hasOwnProperty('clientUrl')) {
                obj['clientUrl'] = ApiClient.convertToType(data['clientUrl'], 'String');
            }
            if (data.hasOwnProperty('clientBic')) {
                obj['clientBic'] = ApiClient.convertToType(data['clientBic'], 'String');
            }
            if (data.hasOwnProperty('clientBbgTicker')) {
                obj['clientBbgTicker'] = ApiClient.convertToType(data['clientBbgTicker'], 'String');
            }
            if (data.hasOwnProperty('clientCik')) {
                obj['clientCik'] = ApiClient.convertToType(data['clientCik'], 'String');
            }
            if (data.hasOwnProperty('clientCrd')) {
                obj['clientCrd'] = ApiClient.convertToType(data['clientCrd'], 'String');
            }
            if (data.hasOwnProperty('clientCusip')) {
                obj['clientCusip'] = ApiClient.convertToType(data['clientCusip'], 'String');
            }
            if (data.hasOwnProperty('clientDuns')) {
                obj['clientDuns'] = ApiClient.convertToType(data['clientDuns'], 'String');
            }
            if (data.hasOwnProperty('clientEin')) {
                obj['clientEin'] = ApiClient.convertToType(data['clientEin'], 'String');
            }
            if (data.hasOwnProperty('clientRssd')) {
                obj['clientRssd'] = ApiClient.convertToType(data['clientRssd'], 'String');
            }
            if (data.hasOwnProperty('clientFitch')) {
                obj['clientFitch'] = ApiClient.convertToType(data['clientFitch'], 'String');
            }
            if (data.hasOwnProperty('clientIsin')) {
                obj['clientIsin'] = ApiClient.convertToType(data['clientIsin'], 'String');
            }
            if (data.hasOwnProperty('clientLei')) {
                obj['clientLei'] = ApiClient.convertToType(data['clientLei'], 'String');
            }
            if (data.hasOwnProperty('clientBbgFigi')) {
                obj['clientBbgFigi'] = ApiClient.convertToType(data['clientBbgFigi'], 'String');
            }
            if (data.hasOwnProperty('clientMd')) {
                obj['clientMd'] = ApiClient.convertToType(data['clientMd'], 'String');
            }
            if (data.hasOwnProperty('clientTicker')) {
                obj['clientTicker'] = ApiClient.convertToType(data['clientTicker'], 'String');
            }
            if (data.hasOwnProperty('clientPriority')) {
                obj['clientPriority'] = ApiClient.convertToType(data['clientPriority'], 'String');
            }
            if (data.hasOwnProperty('clientSpr')) {
                obj['clientSpr'] = ApiClient.convertToType(data['clientSpr'], 'String');
            }
            if (data.hasOwnProperty('clientSedol')) {
                obj['clientSedol'] = ApiClient.convertToType(data['clientSedol'], 'String');
            }
            if (data.hasOwnProperty('clientTickerExchange')) {
                obj['clientTickerExchange'] = ApiClient.convertToType(data['clientTickerExchange'], 'String');
            }
            if (data.hasOwnProperty('clientTickerRegion')) {
                obj['clientTickerRegion'] = ApiClient.convertToType(data['clientTickerRegion'], 'String');
            }
            if (data.hasOwnProperty('clientUkch')) {
                obj['clientUkch'] = ApiClient.convertToType(data['clientUkch'], 'String');
            }
            if (data.hasOwnProperty('clientValoren')) {
                obj['clientValoren'] = ApiClient.convertToType(data['clientValoren'], 'String');
            }
            if (data.hasOwnProperty('clientWkn')) {
                obj['clientWkn'] = ApiClient.convertToType(data['clientWkn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The universe to save this mapping to.
 * @member {Number} universeId
 */
EntityMappingRequest.prototype['universeId'] = undefined;

/**
 * A unique identifier supplied by the user. ClientId is saved to the user's Concordance universe and will be used as the identifier for that entity within the universe.
 * @member {String} clientId
 */
EntityMappingRequest.prototype['clientId'] = undefined;

/**
 * FactSet Entity Identifier mapped to the submitted entity.
 * @member {String} entityId
 */
EntityMappingRequest.prototype['entityId'] = undefined;

/**
 * Name of entity to match.
 * @member {String} clientName
 */
EntityMappingRequest.prototype['clientName'] = undefined;

/**
 * ISO2 country code corresponding to the Entity name.
 * @member {String} clientCountry
 */
EntityMappingRequest.prototype['clientCountry'] = undefined;

/**
 * ISO Code of State or Province location to map Entity.
 * @member {String} clientState
 */
EntityMappingRequest.prototype['clientState'] = undefined;

/**
 * URL corresponding to the entity name.
 * @member {String} clientUrl
 */
EntityMappingRequest.prototype['clientUrl'] = undefined;

/**
 * User provided input for the - BICCode, bank indentification code symbol type
 * @member {String} clientBic
 */
EntityMappingRequest.prototype['clientBic'] = undefined;

/**
 * User provided input for Bloomberg Listing and Regional Ticker
 * @member {String} clientBbgTicker
 */
EntityMappingRequest.prototype['clientBbgTicker'] = undefined;

/**
 * User provided input CIK, Edgar Central Index Keys symbol type
 * @member {String} clientCik
 */
EntityMappingRequest.prototype['clientCik'] = undefined;

/**
 * User provided input -  CRD, Central Registration Depository symbol type
 * @member {String} clientCrd
 */
EntityMappingRequest.prototype['clientCrd'] = undefined;

/**
 * User provided input for CUSIP symbol type
 * @member {String} clientCusip
 */
EntityMappingRequest.prototype['clientCusip'] = undefined;

/**
 * User provided input for DUNS, Dun&Bradstreet symbol type'
 * @member {String} clientDuns
 */
EntityMappingRequest.prototype['clientDuns'] = undefined;

/**
 * User provided input for  EmployerIdentificationNumber, EIN symbol type'
 * @member {String} clientEin
 */
EntityMappingRequest.prototype['clientEin'] = undefined;

/**
 * User provided input for FederalReserveRSSDIdentifier, RSSD symbol type'
 * @member {String} clientRssd
 */
EntityMappingRequest.prototype['clientRssd'] = undefined;

/**
 * User provided input for  FitchCreditRating, Fitch Ratings Identifier symbol type
 * @member {String} clientFitch
 */
EntityMappingRequest.prototype['clientFitch'] = undefined;

/**
 * User provided input for ISIN symbol type
 * @member {String} clientIsin
 */
EntityMappingRequest.prototype['clientIsin'] = undefined;

/**
 * User provided input for LegalEntityIdentifier, LEI symbol type
 * @member {String} clientLei
 */
EntityMappingRequest.prototype['clientLei'] = undefined;

/**
 * User provided input for Bloomberg Listing/Regional/Security ID symbol type
 * @member {String} clientBbgFigi
 */
EntityMappingRequest.prototype['clientBbgFigi'] = undefined;

/**
 * User provided input for MoodysIssuer, Moody''s Ratings symbol type
 * @member {String} clientMd
 */
EntityMappingRequest.prototype['clientMd'] = undefined;

/**
 * User provided input for PriceTicker identifiers
 * @member {String} clientTicker
 */
EntityMappingRequest.prototype['clientTicker'] = undefined;

/**
 * Name of the priority column as provided by the user.
 * @member {String} clientPriority
 */
EntityMappingRequest.prototype['clientPriority'] = undefined;

/**
 * User provided input for S&PRatings Identifiers
 * @member {String} clientSpr
 */
EntityMappingRequest.prototype['clientSpr'] = undefined;

/**
 * User provided input for SEDOL identifiers
 * @member {String} clientSedol
 */
EntityMappingRequest.prototype['clientSedol'] = undefined;

/**
 * User provided input for TickerExch identifiers
 * @member {String} clientTickerExchange
 */
EntityMappingRequest.prototype['clientTickerExchange'] = undefined;

/**
 * User provided input for TickerRegion identifiers
 * @member {String} clientTickerRegion
 */
EntityMappingRequest.prototype['clientTickerRegion'] = undefined;

/**
 * User provided input for UKCompanyHouse identifiers
 * @member {String} clientUkch
 */
EntityMappingRequest.prototype['clientUkch'] = undefined;

/**
 * User provided input for Valoren (\"Valor\") symbol type
 * @member {String} clientValoren
 */
EntityMappingRequest.prototype['clientValoren'] = undefined;

/**
 * User provided input for  WKN, German Securities symbol type
 * @member {String} clientWkn
 */
EntityMappingRequest.prototype['clientWkn'] = undefined;






export default EntityMappingRequest;

