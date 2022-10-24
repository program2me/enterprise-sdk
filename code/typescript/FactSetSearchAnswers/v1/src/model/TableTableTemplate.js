/**
 * FactSet Search Answers API
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApplicationLink from './ApplicationLink';
import Fdc3Context from './Fdc3Context';
import Table from './Table';
import TableTableTemplateAllOf from './TableTableTemplateAllOf';
import TemplateWithLinks from './TemplateWithLinks';

/**
 * The TableTableTemplate model module.
 * @module model/TableTableTemplate
 */
class TableTableTemplate {
    /**
     * Constructs a new <code>TableTableTemplate</code>.
     * @alias module:model/TableTableTemplate
     * @implements module:model/TemplateWithLinks
     * @implements module:model/TableTableTemplateAllOf
     * @param templateName {String} 
     * @param headline {String} 
     */
    constructor(templateName, headline) { 
        TemplateWithLinks.initialize(this, templateName, headline);TableTableTemplateAllOf.initialize(this);
        TableTableTemplate.initialize(this, templateName, headline);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, templateName, headline) { 
        obj['templateName'] = templateName;
        obj['headline'] = headline;
    }

    /**
     * Constructs a <code>TableTableTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableTableTemplate} obj Optional instance to populate.
     * @return {module:model/TableTableTemplate} The populated <code>TableTableTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableTableTemplate();
            TemplateWithLinks.constructFromObject(data, obj);
            TableTableTemplateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('templateName')) {
                obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
            }
            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
            }
            if (data.hasOwnProperty('fdc3Context')) {
                obj['fdc3Context'] = Fdc3Context.constructFromObject(data['fdc3Context']);
            }
            if (data.hasOwnProperty('applicationLinks')) {
                obj['applicationLinks'] = ApiClient.convertToType(data['applicationLinks'], [ApplicationLink]);
            }
            if (data.hasOwnProperty('table1')) {
                obj['table1'] = Table.constructFromObject(data['table1']);
            }
            if (data.hasOwnProperty('table2')) {
                obj['table2'] = Table.constructFromObject(data['table2']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} templateName
 */
TableTableTemplate.prototype['templateName'] = undefined;

/**
 * @member {String} headline
 */
TableTableTemplate.prototype['headline'] = undefined;

/**
 * @member {String} footer
 */
TableTableTemplate.prototype['footer'] = undefined;

/**
 * @member {module:model/Fdc3Context} fdc3Context
 */
TableTableTemplate.prototype['fdc3Context'] = undefined;

/**
 * @member {Array.<module:model/ApplicationLink>} applicationLinks
 */
TableTableTemplate.prototype['applicationLinks'] = undefined;

/**
 * @member {module:model/Table} table1
 */
TableTableTemplate.prototype['table1'] = undefined;

/**
 * @member {module:model/Table} table2
 */
TableTableTemplate.prototype['table2'] = undefined;


// Implement TemplateWithLinks interface:
/**
 * @member {String} templateName
 */
TemplateWithLinks.prototype['templateName'] = undefined;
/**
 * @member {String} headline
 */
TemplateWithLinks.prototype['headline'] = undefined;
/**
 * @member {String} footer
 */
TemplateWithLinks.prototype['footer'] = undefined;
/**
 * @member {module:model/Fdc3Context} fdc3Context
 */
TemplateWithLinks.prototype['fdc3Context'] = undefined;
/**
 * @member {Array.<module:model/ApplicationLink>} applicationLinks
 */
TemplateWithLinks.prototype['applicationLinks'] = undefined;
// Implement TableTableTemplateAllOf interface:
/**
 * @member {module:model/Table} table1
 */
TableTableTemplateAllOf.prototype['table1'] = undefined;
/**
 * @member {module:model/Table} table2
 */
TableTableTemplateAllOf.prototype['table2'] = undefined;




export default TableTableTemplate;

