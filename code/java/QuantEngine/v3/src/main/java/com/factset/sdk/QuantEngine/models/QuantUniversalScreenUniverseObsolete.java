/*
 * Quant API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.QuantEngine.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuantEngine.JSON;


/**
 * QuantUniversalScreenUniverseObsolete
 */
@JsonPropertyOrder({
  QuantUniversalScreenUniverseObsolete.JSON_PROPERTY_SCREEN,
  QuantUniversalScreenUniverseObsolete.JSON_PROPERTY_SOURCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class QuantUniversalScreenUniverseObsolete implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SCREEN = "screen";
  private String screen;

  /**
   * Gets or Sets source
   */
  public enum SourceEnum {
    SCREENINGEXPRESSIONUNIVERSE("ScreeningExpressionUniverse"),
    
    UNIVERSALSCREENUNIVERSE("UniversalScreenUniverse"),
    
    IDENTIFIERUNIVERSE("IdentifierUniverse");

    private String value;

    SourceEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static SourceEnum fromValue(String value) {
      for (SourceEnum b : SourceEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_SOURCE = "source";
  private SourceEnum source;

  public QuantUniversalScreenUniverseObsolete() { 
  }

  @JsonCreator
  public QuantUniversalScreenUniverseObsolete(
    @JsonProperty(value=JSON_PROPERTY_SCREEN, required=true) String screen
  ) {
    this();
    this.screen = screen;
  }

  public QuantUniversalScreenUniverseObsolete screen(String screen) {
    this.screen = screen;
    return this;
  }

   /**
   * Get screen
   * @return screen
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_SCREEN)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getScreen() {
    return screen;
  }


  @JsonProperty(JSON_PROPERTY_SCREEN)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setScreen(String screen) {
    this.screen = screen;
  }


  public QuantUniversalScreenUniverseObsolete source(SourceEnum source) {
    this.source = source;
    return this;
  }

   /**
   * Get source
   * @return source
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SourceEnum getSource() {
    return source;
  }


  @JsonProperty(JSON_PROPERTY_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSource(SourceEnum source) {
    this.source = source;
  }


  /**
   * Return true if this QuantUniversalScreenUniverseObsolete object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QuantUniversalScreenUniverseObsolete quantUniversalScreenUniverseObsolete = (QuantUniversalScreenUniverseObsolete) o;
    return Objects.equals(this.screen, quantUniversalScreenUniverseObsolete.screen) &&
        Objects.equals(this.source, quantUniversalScreenUniverseObsolete.source);
  }

  @Override
  public int hashCode() {
    return Objects.hash(screen, source);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QuantUniversalScreenUniverseObsolete {\n");
    sb.append("    screen: ").append(toIndentedString(screen)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
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

