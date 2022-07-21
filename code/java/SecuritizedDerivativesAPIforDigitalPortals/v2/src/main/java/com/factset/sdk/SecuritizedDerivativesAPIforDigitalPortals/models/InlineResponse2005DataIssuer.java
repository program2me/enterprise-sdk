/*
 * Securitized Derivatives API For Digital Portals
 * Search for securitized derivative instruments, using a criteria-based screener. The API provides also fundamental data, notation-based key figures, list of barrier types, and details regarding the underlyings, their respective barriers and related cash flows, coupon lists and derived basic interest rate information.  The screener is based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifier types used as parameters must be valid and application must have permissions for them.  Available search criteria include:  * validation: filter for only active listings, by price quality and latest/previous available price dates * traded markets: filter and indicate a market priority for the validation * life cycle: important dates in and features of the life cycle of the securitized derivatives instruments * filter by issuer, country of registration of the securitized derivatives * underlying and related barriers, including level and distance, and resulting cash flows * coupon data: where applicable, occurrence and frequency of coupon payments, current interest rate range * performance and volatility * product-specific ask-based key figures (not all key figures are available for all product types):     * bonus yield, sideways yield, maximum yield based on the ask price     * agio, discount     * spread     * break even, outperformance point, parity     * delta, weekly theta, vega, implied volatility     * leverage, omega     * intrinsic value, time value         Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term *level* is used instead of *price*, e.g. underlying level instead of underlying price. The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity and fixed income instruments: See the Stocks API and the Bonds API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataIssuerGroup;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataIssuerJuristicPerson;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * List of issuers. See endpoint &#x60;/securitizedDerivative/issuer/search&#x60; for possible values.
 */
@ApiModel(description = "List of issuers. See endpoint `/securitizedDerivative/issuer/search` for possible values.")
@JsonPropertyOrder({
  InlineResponse2005DataIssuer.JSON_PROPERTY_JURISTIC_PERSON,
  InlineResponse2005DataIssuer.JSON_PROPERTY_GROUP
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005DataIssuer implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_JURISTIC_PERSON = "juristicPerson";
  private java.util.List<InlineResponse2005DataIssuerJuristicPerson> juristicPerson = null;

  public static final String JSON_PROPERTY_GROUP = "group";
  private java.util.List<InlineResponse2005DataIssuerGroup> group = null;

  public InlineResponse2005DataIssuer() { 
  }

  public InlineResponse2005DataIssuer juristicPerson(java.util.List<InlineResponse2005DataIssuerJuristicPerson> juristicPerson) {
    this.juristicPerson = juristicPerson;
    return this;
  }

  public InlineResponse2005DataIssuer addJuristicPersonItem(InlineResponse2005DataIssuerJuristicPerson juristicPersonItem) {
    if (this.juristicPerson == null) {
      this.juristicPerson = new java.util.ArrayList<>();
    }
    this.juristicPerson.add(juristicPersonItem);
    return this;
  }

   /**
   * List of issuers that represent an actual juristic person.
   * @return juristicPerson
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of issuers that represent an actual juristic person.")
  @JsonProperty(JSON_PROPERTY_JURISTIC_PERSON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataIssuerJuristicPerson> getJuristicPerson() {
    return juristicPerson;
  }


  @JsonProperty(JSON_PROPERTY_JURISTIC_PERSON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setJuristicPerson(java.util.List<InlineResponse2005DataIssuerJuristicPerson> juristicPerson) {
    this.juristicPerson = juristicPerson;
  }


  public InlineResponse2005DataIssuer group(java.util.List<InlineResponse2005DataIssuerGroup> group) {
    this.group = group;
    return this;
  }

  public InlineResponse2005DataIssuer addGroupItem(InlineResponse2005DataIssuerGroup groupItem) {
    if (this.group == null) {
      this.group = new java.util.ArrayList<>();
    }
    this.group.add(groupItem);
    return this;
  }

   /**
   * List of issuer groups. The issuer group is defined by FactSet and does not represent an actual juristic person.
   * @return group
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of issuer groups. The issuer group is defined by FactSet and does not represent an actual juristic person.")
  @JsonProperty(JSON_PROPERTY_GROUP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataIssuerGroup> getGroup() {
    return group;
  }


  @JsonProperty(JSON_PROPERTY_GROUP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGroup(java.util.List<InlineResponse2005DataIssuerGroup> group) {
    this.group = group;
  }


  /**
   * Return true if this inline_response_200_5_data_issuer object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005DataIssuer inlineResponse2005DataIssuer = (InlineResponse2005DataIssuer) o;
    return Objects.equals(this.juristicPerson, inlineResponse2005DataIssuer.juristicPerson) &&
        Objects.equals(this.group, inlineResponse2005DataIssuer.group);
  }

  @Override
  public int hashCode() {
    return Objects.hash(juristicPerson, group);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005DataIssuer {\n");
    sb.append("    juristicPerson: ").append(toIndentedString(juristicPerson)).append("\n");
    sb.append("    group: ").append(toIndentedString(group)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

