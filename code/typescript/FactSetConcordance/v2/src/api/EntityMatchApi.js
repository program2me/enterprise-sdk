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


import ApiClient from "../ApiClient";
import EntityMatchRequest from '../model/EntityMatchRequest';
import EntityMatchesResponse from '../model/EntityMatchesResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* EntityMatch service.
* @module api/EntityMatchApi
*/
export default class EntityMatchApi {

    /**
    * Constructs a new EntityMatchApi. 
    * @alias module:api/EntityMatchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Entity Candidates and Matches for a single name and attributes.
     * Finds the best candidate entities matching the given entity name. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /entity-match to fetch up to 25 names. Otherwise, use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> 
     * @param {String} name Name of Entity to match.
     * @param {Object} opts Optional parameters
     * @param {String} opts.country ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754).
     * @param {String} opts.state Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported.
     * @param {String} opts.url URL corresponding to the entity name that is used when evaluating candidates for a match.
     * @param {Array.<String>} opts.includeEntityType Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| 
     * @param {Array.<String>} opts.excludeEntityType Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture| 
     * @param {Array.<String>} opts.includeEntitySubType Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| 
     * @param {Array.<String>} opts.excludeEntitySubType Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |---|---|---|---| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking| 
     * @param {Boolean} opts.includeParent Flag to include parent entities in the list of candidates. This parameter does not influence the match result. (default to false)
     * @param {String} opts.bic Input identifiers for the BICCode - Bank Indentification Code symbol Type.
     * @param {String} opts.bbgTicker Input identifiers for the Bloomberg Listing and Regional Ticker symbol Type
     * @param {String} opts.cik Input identifiers for the CIK - Edgar Central Index Keys symbol type
     * @param {String} opts.crd Input identifiers for the CRD - Central Registration Depository symbol type
     * @param {String} opts.cusip Input identifiers for the CUSIP symbol type
     * @param {String} opts.duns Input identifiers for the DUNS - Dun & Bradstreet Data Universal Numbering System symbol type
     * @param {String} opts.ein Input identifiers for the EIN - Employer Identification Number symbol type
     * @param {String} opts.rssd Input identifiers for the RSSD - Federal Reserve RSSD symbol type
     * @param {String} opts.fitch Input identifiers for the Fitch - Fitch Ratings symbol type
     * @param {String} opts.isin Input identifiers for the ISIN - International Securities Identification Number symbol type
     * @param {String} opts.lei Input identifiers for the LEI - Legal Entity Identifier symbol type
     * @param {String} opts.bbgFigi Input identifiers for the Bloomberg Listing/Regional/Security ID symbol type
     * @param {String} opts.md Input identifiers for the Moody's Ratings Identifier type
     * @param {String} opts.ticker Input identifiers for the Price Ticker symbol type
     * @param {String} opts.spr Input identifiers for the S&PRating - S&P Ratings Identifier symbol type
     * @param {String} opts.sedol Input identifiers for the SEDOL symbol type
     * @param {String} opts.tickerExchange Input identifiers for the TickerExchange
     * @param {String} opts.tickerRegion Input identifiers for the TickerRegion.
     * @param {String} opts.ukch Input identifiers for the UKCH - UK Company House symbol type
     * @param {String} opts.valoren Input identifiers for the Valoren (\"Valor\") symbol type
     * @param {String} opts.wkn Input identifiers for the WKN - German Securities symbol type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityMatchesResponse} and HTTP response
     */
    getEntityMatchWithHttpInfo(name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getEntityMatch");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': name,
        'country': opts['country'],
        'state': opts['state'],
        'url': opts['url'],
        'includeEntityType': this.apiClient.buildCollectionParam(opts['includeEntityType'], 'multi'),
        'excludeEntityType': this.apiClient.buildCollectionParam(opts['excludeEntityType'], 'multi'),
        'includeEntitySubType': this.apiClient.buildCollectionParam(opts['includeEntitySubType'], 'multi'),
        'excludeEntitySubType': this.apiClient.buildCollectionParam(opts['excludeEntitySubType'], 'multi'),
        'includeParent': opts['includeParent'],
        'bic': opts['bic'],
        'bbgTicker': opts['bbgTicker'],
        'cik': opts['cik'],
        'crd': opts['crd'],
        'cusip': opts['cusip'],
        'duns': opts['duns'],
        'ein': opts['ein'],
        'rssd': opts['rssd'],
        'fitch': opts['fitch'],
        'isin': opts['isin'],
        'lei': opts['lei'],
        'bbgFigi': opts['bbgFigi'],
        'md': opts['md'],
        'ticker': opts['ticker'],
        'spr': opts['spr'],
        'sedol': opts['sedol'],
        'tickerExchange': opts['tickerExchange'],
        'tickerRegion': opts['tickerRegion'],
        'ukch': opts['ukch'],
        'valoren': opts['valoren'],
        'wkn': opts['wkn']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json;charset=utf-8', 'application/json'];


      let returnType = EntityMatchesResponse;

      return this.apiClient.callApi(
        '/factset-concordance/v2/entity-match', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Entity Candidates and Matches for a single name and attributes.
     * Finds the best candidate entities matching the given entity name. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. <p>**Max of 1 Name permitted in a single GET request.** Use the POST method for /entity-match to fetch up to 25 names. Otherwise, use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> 
     * @param {String} name Name of Entity to match.
     * @param {Object} opts Optional parameters
     * @param {String} opts.country ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754).
     * @param {String} opts.state Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported.
     * @param {String} opts.url URL corresponding to the entity name that is used when evaluating candidates for a match.
     * @param {Array.<String>} opts.includeEntityType Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| 
     * @param {Array.<String>} opts.excludeEntityType Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture| 
     * @param {Array.<String>} opts.includeEntitySubType Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| 
     * @param {Array.<String>} opts.excludeEntitySubType Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |---|---|---|---| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking| 
     * @param {Boolean} opts.includeParent Flag to include parent entities in the list of candidates. This parameter does not influence the match result. (default to false)
     * @param {String} opts.bic Input identifiers for the BICCode - Bank Indentification Code symbol Type.
     * @param {String} opts.bbgTicker Input identifiers for the Bloomberg Listing and Regional Ticker symbol Type
     * @param {String} opts.cik Input identifiers for the CIK - Edgar Central Index Keys symbol type
     * @param {String} opts.crd Input identifiers for the CRD - Central Registration Depository symbol type
     * @param {String} opts.cusip Input identifiers for the CUSIP symbol type
     * @param {String} opts.duns Input identifiers for the DUNS - Dun & Bradstreet Data Universal Numbering System symbol type
     * @param {String} opts.ein Input identifiers for the EIN - Employer Identification Number symbol type
     * @param {String} opts.rssd Input identifiers for the RSSD - Federal Reserve RSSD symbol type
     * @param {String} opts.fitch Input identifiers for the Fitch - Fitch Ratings symbol type
     * @param {String} opts.isin Input identifiers for the ISIN - International Securities Identification Number symbol type
     * @param {String} opts.lei Input identifiers for the LEI - Legal Entity Identifier symbol type
     * @param {String} opts.bbgFigi Input identifiers for the Bloomberg Listing/Regional/Security ID symbol type
     * @param {String} opts.md Input identifiers for the Moody's Ratings Identifier type
     * @param {String} opts.ticker Input identifiers for the Price Ticker symbol type
     * @param {String} opts.spr Input identifiers for the S&PRating - S&P Ratings Identifier symbol type
     * @param {String} opts.sedol Input identifiers for the SEDOL symbol type
     * @param {String} opts.tickerExchange Input identifiers for the TickerExchange
     * @param {String} opts.tickerRegion Input identifiers for the TickerRegion.
     * @param {String} opts.ukch Input identifiers for the UKCH - UK Company House symbol type
     * @param {String} opts.valoren Input identifiers for the Valoren (\"Valor\") symbol type
     * @param {String} opts.wkn Input identifiers for the WKN - German Securities symbol type
     * @return { Promise.< module:model/EntityMatchesResponse > } a Promise, with data of type {@link module:model/EntityMatchesResponse }
     */
    getEntityMatch(name, opts) {
      return this.getEntityMatchWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.
     * Finds the best candidate entities matching the given entity name. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search.  <p>**Max of 25 Names inputted.** Use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> Supported types of Entities in which the names can match to include -   * Corporations, Joint Ventures, and Holding Companies   * Fund Managers and various Fund Types (Open-end, Closed End, Hedge, Soverign Wealth, Pension, Exchange Traded, and more).</p> 
     * @param {module:model/EntityMatchRequest} entityMatchRequest A request to match a Entity.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityMatchesResponse} and HTTP response
     */
    getEntityMatchForListWithHttpInfo(entityMatchRequest) {
      let postBody = entityMatchRequest;
      // verify the required parameter 'entityMatchRequest' is set
      if (entityMatchRequest === undefined || entityMatchRequest === null) {
        throw new Error("Missing the required parameter 'entityMatchRequest' when calling getEntityMatchForList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json;charset=utf-8'];
      let accepts = ['application/json;charset=utf-8', 'application/json'];


      let returnType = EntityMatchesResponse;

      return this.apiClient.callApi(
        '/factset-concordance/v2/entity-match', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.
     * Finds the best candidate entities matching the given entity name. If a `universeId` is provided, any match for an input including a `clientId` will be saved to that universe. Additional attributes can be supplied to narrow the search, such as State, URL, and Entity Types. Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search.  <p>**Max of 25 Names inputted.** Use the \"Entity Match - Bulk\" workflow to submit larger universes of names to be concorded via a file.</p><p> Supported types of Entities in which the names can match to include -   * Corporations, Joint Ventures, and Holding Companies   * Fund Managers and various Fund Types (Open-end, Closed End, Hedge, Soverign Wealth, Pension, Exchange Traded, and more).</p> 
     * @param {module:model/EntityMatchRequest} entityMatchRequest A request to match a Entity.
     * @return { Promise.< module:model/EntityMatchesResponse > } a Promise, with data of type {@link module:model/EntityMatchesResponse }
     */
    getEntityMatchForList(entityMatchRequest) {
      return this.getEntityMatchForListWithHttpInfo(entityMatchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





