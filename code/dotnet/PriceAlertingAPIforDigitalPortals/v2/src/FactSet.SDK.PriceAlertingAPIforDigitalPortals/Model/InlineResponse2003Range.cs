/*
 * Price Alerting API For Digital Portals
 *
 * The Price Alerting API is designed to inform the users of an application directly about important changes in the data on the platform. The endpoint group *basic price alerting* deals with generation of alerts based on current price data. For notations, users can define an upper or lower limit and choose on which price type those limit conditions apply.  Alerting uses the concepts of triggers and alerts.  A trigger is an entity that is set up by an application to watch a certain condition in the market data around a financial instrument. The standard conditions that can be applied are lower limit and upper limit for the value of the price for a given financial instrument.  When the condition of a trigger is met, an alert is created. Each alert thus represents one event where a trigger condition was met.  An application can learn about the creation of alerts in two ways: The application can actively request the list of alerts (pull approach) or it can subscribe to the list of existing alerts. If a new alert is created, that list changes and the application is notified about the new alert with an update that contains the details on the new alert (push approach).  The API supports both approaches. The push approach is realized most easily by using the subscription support that the client libraries provide.  See the [Quotes API for Digital Portals](https://developer.factset.com/api-catalog/quotes-api-digital-portals) for access to detailed price information. 
 *
 * The version of the OpenAPI document: 2
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
using OpenAPIDateConverter = FactSet.SDK.PriceAlertingAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.PriceAlertingAPIforDigitalPortals.Model
{
    /// <summary>
    /// Price range for the trigger to monitor.
    /// </summary>
    [DataContract(Name = "inline_response_200_3_range")]
    public partial class InlineResponse2003Range : IEquatable<InlineResponse2003Range>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2003Range" /> class.
        /// </summary>
        /// <param name="upperLimit">Upper limit..</param>
        /// <param name="lowerLimit">Lower limit..</param>
        public InlineResponse2003Range(Object upperLimit = default(Object), Object lowerLimit = default(Object))
        {
            this.UpperLimit = upperLimit;
            this.LowerLimit = lowerLimit;
        }

        /// <summary>
        /// Upper limit.
        /// </summary>
        /// <value>Upper limit.</value>
        [DataMember(Name = "upperLimit", EmitDefaultValue = true)]
        public Object UpperLimit { get; set; }

        /// <summary>
        /// Lower limit.
        /// </summary>
        /// <value>Lower limit.</value>
        [DataMember(Name = "lowerLimit", EmitDefaultValue = true)]
        public Object LowerLimit { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2003Range {\n");
            sb.Append("  UpperLimit: ").Append(UpperLimit).Append("\n");
            sb.Append("  LowerLimit: ").Append(LowerLimit).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as InlineResponse2003Range);
        }

        /// <summary>
        /// Returns true if InlineResponse2003Range instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2003Range to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2003Range input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.UpperLimit == input.UpperLimit ||
                    (this.UpperLimit != null &&
                    this.UpperLimit.Equals(input.UpperLimit))
                ) && 
                (
                    this.LowerLimit == input.LowerLimit ||
                    (this.LowerLimit != null &&
                    this.LowerLimit.Equals(input.LowerLimit))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.UpperLimit != null)
                {
                    hashCode = (hashCode * 59) + this.UpperLimit.GetHashCode();
                }
                if (this.LowerLimit != null)
                {
                    hashCode = (hashCode * 59) + this.LowerLimit.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
