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
import Template from './Template';
import TemplateWithLinksAllOf from './TemplateWithLinksAllOf';

/**
 * The TemplateWithLinks model module.
 * @module model/TemplateWithLinks
 */
class TemplateWithLinks {
    /**
     * Constructs a new <code>TemplateWithLinks</code>.
     * @alias module:model/TemplateWithLinks
     * @implements module:model/Template
     * @implements module:model/TemplateWithLinksAllOf
     * @param templateName {String} 
     * @param headline {String} 
     */
    constructor(templateName, headline) { 
        Template.initialize(this, templateName, headline);TemplateWithLinksAllOf.initialize(this);
        TemplateWithLinks.initialize(this, templateName, headline);
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
     * Constructs a <code>TemplateWithLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateWithLinks} obj Optional instance to populate.
     * @return {module:model/TemplateWithLinks} The populated <code>TemplateWithLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateWithLinks();
            Template.constructFromObject(data, obj);
            TemplateWithLinksAllOf.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

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


// Implement Template interface:
/**
 * @member {String} templateName
 */
Template.prototype['templateName'] = undefined;
/**
 * @member {String} headline
 */
Template.prototype['headline'] = undefined;
/**
 * @member {String} footer
 */
Template.prototype['footer'] = undefined;
/**
 * @member {module:model/Fdc3Context} fdc3Context
 */
Template.prototype['fdc3Context'] = undefined;
// Implement TemplateWithLinksAllOf interface:
/**
 * @member {Array.<module:model/ApplicationLink>} applicationLinks
 */
TemplateWithLinksAllOf.prototype['applicationLinks'] = undefined;




export default TemplateWithLinks;

