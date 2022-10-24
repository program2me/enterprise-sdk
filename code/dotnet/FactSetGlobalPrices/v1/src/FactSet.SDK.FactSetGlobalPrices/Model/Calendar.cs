/*
 * FactSet Global Prices API
 *
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = FactSet.SDK.FactSetGlobalPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetGlobalPrices.Model
{
    /// <summary>
    /// Calendar of data returned. SEVENDAY includes weekends.
    /// </summary>
    /// <value>Calendar of data returned. SEVENDAY includes weekends.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Calendar
    {
        /// <summary>
        /// Enum FIVEDAY for value: FIVEDAY
        /// </summary>
        [EnumMember(Value = "FIVEDAY")]
        FIVEDAY = 1,

        /// <summary>
        /// Enum SEVENDAY for value: SEVENDAY
        /// </summary>
        [EnumMember(Value = "SEVENDAY")]
        SEVENDAY = 2,

        /// <summary>
        /// Enum US for value: US
        /// </summary>
        [EnumMember(Value = "US")]
        US = 3

    }

}
