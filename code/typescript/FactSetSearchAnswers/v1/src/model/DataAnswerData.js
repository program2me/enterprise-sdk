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
import Answer from './Answer';
import AnswerWithoutData from './AnswerWithoutData';
import AnswerWithoutDataAllOfTemplateData from './AnswerWithoutDataAllOfTemplateData';
import NoAnswersFound from './NoAnswersFound';

/**
 * The DataAnswerData model module.
 * @module model/DataAnswerData
 */
class DataAnswerData {
    /**
     * Constructs a new <code>DataAnswerData</code>.
     * @alias module:model/DataAnswerData
     * @implements module:model/Answer
     * @implements module:model/AnswerWithoutData
     * @implements module:model/NoAnswersFound
     * @param template {String} 
     * @param templateData {module:model/AnswerWithoutDataAllOfTemplateData} 
     * @param title {String} 
     * @param message {String} 
     * @param querySuggestions {Array.<String>} 
     */
    constructor(template, templateData, title, message, querySuggestions) { 
        Answer.initialize(this, template, templateData, title);AnswerWithoutData.initialize(this, template, message, querySuggestions, title);NoAnswersFound.initialize(this, template, message, querySuggestions);
        DataAnswerData.initialize(this, template, templateData, title, message, querySuggestions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, template, templateData, title, message, querySuggestions) { 
        obj['template'] = template;
        obj['templateData'] = templateData;
        obj['title'] = title;
        obj['message'] = message;
        obj['querySuggestions'] = querySuggestions;
    }

    /**
     * Constructs a <code>DataAnswerData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataAnswerData} obj Optional instance to populate.
     * @return {module:model/DataAnswerData} The populated <code>DataAnswerData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataAnswerData();
            Answer.constructFromObject(data, obj);
            AnswerWithoutData.constructFromObject(data, obj);
            NoAnswersFound.constructFromObject(data, obj);

            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
            if (data.hasOwnProperty('templateData')) {
                obj['templateData'] = AnswerWithoutDataAllOfTemplateData.constructFromObject(data['templateData']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('querySuggestions')) {
                obj['querySuggestions'] = ApiClient.convertToType(data['querySuggestions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} template
 */
DataAnswerData.prototype['template'] = undefined;

/**
 * @member {module:model/AnswerWithoutDataAllOfTemplateData} templateData
 */
DataAnswerData.prototype['templateData'] = undefined;

/**
 * @member {String} title
 */
DataAnswerData.prototype['title'] = undefined;

/**
 * @member {String} message
 */
DataAnswerData.prototype['message'] = undefined;

/**
 * @member {Array.<String>} querySuggestions
 */
DataAnswerData.prototype['querySuggestions'] = undefined;


// Implement Answer interface:
/**
 * @member {String} template
 */
Answer.prototype['template'] = undefined;
/**
 * @member {module:model/TemplateData} templateData
 */
Answer.prototype['templateData'] = undefined;
/**
 * @member {String} title
 */
Answer.prototype['title'] = undefined;
// Implement AnswerWithoutData interface:
/**
 * @member {String} template
 */
AnswerWithoutData.prototype['template'] = undefined;
/**
 * @member {String} message
 */
AnswerWithoutData.prototype['message'] = undefined;
/**
 * @member {Array.<String>} querySuggestions
 */
AnswerWithoutData.prototype['querySuggestions'] = undefined;
/**
 * @member {String} title
 */
AnswerWithoutData.prototype['title'] = undefined;
/**
 * @member {module:model/AnswerWithoutDataAllOfTemplateData} templateData
 */
AnswerWithoutData.prototype['templateData'] = undefined;
// Implement NoAnswersFound interface:
/**
 * @member {String} template
 */
NoAnswersFound.prototype['template'] = undefined;
/**
 * @member {String} message
 */
NoAnswersFound.prototype['message'] = undefined;
/**
 * @member {Array.<String>} querySuggestions
 */
NoAnswersFound.prototype['querySuggestions'] = undefined;




export default DataAnswerData;

