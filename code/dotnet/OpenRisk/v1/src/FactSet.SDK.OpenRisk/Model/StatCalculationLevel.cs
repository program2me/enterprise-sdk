/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OpenRisk.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OpenRisk.Model
{
    /// <summary>
    /// Stat levels available for calculation
    /// </summary>
    /// <value>Stat levels available for calculation</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum StatCalculationLevel
    {
        /// <summary>
        /// Enum Portfolio for value: Portfolio
        /// </summary>
        [EnumMember(Value = "Portfolio")]
        Portfolio = 1,

        /// <summary>
        /// Enum Security for value: Security
        /// </summary>
        [EnumMember(Value = "Security")]
        Security = 2,

        /// <summary>
        /// Enum SecurityGroup for value: SecurityGroup
        /// </summary>
        [EnumMember(Value = "SecurityGroup")]
        SecurityGroup = 3,

        /// <summary>
        /// Enum SecuritySecurity for value: SecuritySecurity
        /// </summary>
        [EnumMember(Value = "SecuritySecurity")]
        SecuritySecurity = 4,

        /// <summary>
        /// Enum Factor for value: Factor
        /// </summary>
        [EnumMember(Value = "Factor")]
        Factor = 5,

        /// <summary>
        /// Enum FactorGroup for value: FactorGroup
        /// </summary>
        [EnumMember(Value = "FactorGroup")]
        FactorGroup = 6,

        /// <summary>
        /// Enum FactorFactor for value: FactorFactor
        /// </summary>
        [EnumMember(Value = "FactorFactor")]
        FactorFactor = 7,

        /// <summary>
        /// Enum FactorSecurity for value: FactorSecurity
        /// </summary>
        [EnumMember(Value = "FactorSecurity")]
        FactorSecurity = 8,

        /// <summary>
        /// Enum FactorGroupSecurity for value: FactorGroupSecurity
        /// </summary>
        [EnumMember(Value = "FactorGroupSecurity")]
        FactorGroupSecurity = 9,

        /// <summary>
        /// Enum FactorSecurityGroup for value: FactorSecurityGroup
        /// </summary>
        [EnumMember(Value = "FactorSecurityGroup")]
        FactorSecurityGroup = 10,

        /// <summary>
        /// Enum FactorGroupSecurityGroup for value: FactorGroupSecurityGroup
        /// </summary>
        [EnumMember(Value = "FactorGroupSecurityGroup")]
        FactorGroupSecurityGroup = 11

    }

}
