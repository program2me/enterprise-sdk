/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OpenRisk.models.FactorGroup;
import com.factset.sdk.OpenRisk.models.RiskModelFactor;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OpenRisk.JSON;

import com.fasterxml.jackson.core.type.TypeReference;

import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.factset.sdk.OpenRisk.JSON;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
@JsonDeserialize(using = FactorGroupNodes.FactorGroupNodesDeserializer.class)
@JsonSerialize(using = FactorGroupNodes.FactorGroupNodesSerializer.class)
public class FactorGroupNodes extends AbstractOpenApiSchema implements Serializable {
    private static final Logger log = Logger.getLogger(FactorGroupNodes.class.getName());

    public static class FactorGroupNodesSerializer extends StdSerializer<FactorGroupNodes> {
        public FactorGroupNodesSerializer(Class<FactorGroupNodes> t) {
            super(t);
        }

        public FactorGroupNodesSerializer() {
            this(null);
        }

        @Override
        public void serialize(FactorGroupNodes value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
            jgen.writeObject(value.getActualInstance());
        }
    }

    public static class FactorGroupNodesDeserializer extends StdDeserializer<FactorGroupNodes> {
        public FactorGroupNodesDeserializer() {
            this(FactorGroupNodes.class);
        }

        public FactorGroupNodesDeserializer(Class<?> vc) {
            super(vc);
        }

        @Override
        public FactorGroupNodes deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            JsonNode tree = jp.readValueAsTree();
            Object deserialized = null;
            boolean typeCoercion = ctxt.isEnabled(MapperFeature.ALLOW_COERCION_OF_SCALARS);
            int match = 0;
            JsonToken token = tree.traverse(jp.getCodec()).nextToken();
            // deserialize FactorGroup
            try {
                boolean attemptParsing = true;
                // ensure that we respect type coercion as set on the client ObjectMapper
                if (FactorGroup.class.equals(Integer.class) || FactorGroup.class.equals(Long.class) || FactorGroup.class.equals(Float.class) || FactorGroup.class.equals(Double.class) || FactorGroup.class.equals(Boolean.class) || FactorGroup.class.equals(String.class)) {
                    attemptParsing = typeCoercion;
                    if (!attemptParsing) {
                        attemptParsing |= ((FactorGroup.class.equals(Integer.class) || FactorGroup.class.equals(Long.class)) && token == JsonToken.VALUE_NUMBER_INT);
                        attemptParsing |= ((FactorGroup.class.equals(Float.class) || FactorGroup.class.equals(Double.class)) && token == JsonToken.VALUE_NUMBER_FLOAT);
                        attemptParsing |= (FactorGroup.class.equals(Boolean.class) && (token == JsonToken.VALUE_FALSE || token == JsonToken.VALUE_TRUE));
                        attemptParsing |= (FactorGroup.class.equals(String.class) && token == JsonToken.VALUE_STRING);
                    }
                }
                if (attemptParsing) {
                    deserialized = tree.traverse(jp.getCodec()).readValueAs(new TypeReference<FactorGroup>() { });
                    // TODO: there is no validation against JSON schema constraints
                    // (min, max, enum, pattern...), this does not perform a strict JSON
                    // validation, which means the 'match' count may be higher than it should be.
                    match++;
                    log.log(Level.FINER, "Input data matches schema 'FactorGroup'");
                }
            } catch (Exception e) {
                // deserialization failed, continue
                log.log(Level.FINER, "Input data does not match schema 'FactorGroup'", e);
            }

            // deserialize RiskModelFactor
            try {
                boolean attemptParsing = true;
                // ensure that we respect type coercion as set on the client ObjectMapper
                if (RiskModelFactor.class.equals(Integer.class) || RiskModelFactor.class.equals(Long.class) || RiskModelFactor.class.equals(Float.class) || RiskModelFactor.class.equals(Double.class) || RiskModelFactor.class.equals(Boolean.class) || RiskModelFactor.class.equals(String.class)) {
                    attemptParsing = typeCoercion;
                    if (!attemptParsing) {
                        attemptParsing |= ((RiskModelFactor.class.equals(Integer.class) || RiskModelFactor.class.equals(Long.class)) && token == JsonToken.VALUE_NUMBER_INT);
                        attemptParsing |= ((RiskModelFactor.class.equals(Float.class) || RiskModelFactor.class.equals(Double.class)) && token == JsonToken.VALUE_NUMBER_FLOAT);
                        attemptParsing |= (RiskModelFactor.class.equals(Boolean.class) && (token == JsonToken.VALUE_FALSE || token == JsonToken.VALUE_TRUE));
                        attemptParsing |= (RiskModelFactor.class.equals(String.class) && token == JsonToken.VALUE_STRING);
                    }
                }
                if (attemptParsing) {
                    deserialized = tree.traverse(jp.getCodec()).readValueAs(new TypeReference<RiskModelFactor>() { });
                    // TODO: there is no validation against JSON schema constraints
                    // (min, max, enum, pattern...), this does not perform a strict JSON
                    // validation, which means the 'match' count may be higher than it should be.
                    match++;
                    log.log(Level.FINER, "Input data matches schema 'RiskModelFactor'");
                }
            } catch (Exception e) {
                // deserialization failed, continue
                log.log(Level.FINER, "Input data does not match schema 'RiskModelFactor'", e);
            }

            if (match == 1) {
                FactorGroupNodes ret = new FactorGroupNodes();
                ret.setActualInstance(deserialized);
                return ret;
            }
            throw new IOException(String.format("Failed deserialization for FactorGroupNodes: %d classes match result, expected 1", match));
        }

        /**
         * Handle deserialization of the 'null' value.
         */
        @Override
        public FactorGroupNodes getNullValue(DeserializationContext ctxt) throws JsonMappingException {
            throw new JsonMappingException(ctxt.getParser(), "FactorGroupNodes cannot be null");
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, GenericType> schemas = new HashMap<String, GenericType>();

    public FactorGroupNodes() {
        super("oneOf", Boolean.FALSE);
    }

    public FactorGroupNodes(FactorGroup o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }
    public FactorGroupNodes(RiskModelFactor o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }
    static {
        schemas.put("FactorGroup", new GenericType<FactorGroup>() {
        });
        schemas.put("RiskModelFactor", new GenericType<RiskModelFactor>() {
        });
        JSON.registerDescendants(FactorGroupNodes.class, Collections.unmodifiableMap(schemas));
    }

    @Override
    public Map<String, GenericType> getSchemas() {
        return FactorGroupNodes.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * FactorGroup, RiskModelFactor
     *
     * It could be an instance of the 'oneOf' schemas.
     * The oneOf child schemas may themselves be a composed schema (allOf, anyOf, oneOf).
     */
    @Override
    public void setActualInstance(Object instance) {
        // FactorGroup
        if (JSON.isInstanceOf(FactorGroup.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        // RiskModelFactor
        if (JSON.isInstanceOf(RiskModelFactor.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be FactorGroup, RiskModelFactor");
    }

    /**
     * Get the actual instance, which can be the following:
     * FactorGroup, RiskModelFactor
     *
     * @return The actual instance (FactorGroup, RiskModelFactor)
     */
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `FactorGroup`. If the actual instance is not `FactorGroup`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `FactorGroup`
     * @throws ClassCastException if the instance is not `FactorGroup`
     */
    public FactorGroup getFactorGroup() throws ClassCastException {
        return (FactorGroup)super.getActualInstance();
    }
    
    /**
     * Get the actual instance of `RiskModelFactor`. If the actual instance is not `RiskModelFactor`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `RiskModelFactor`
     * @throws ClassCastException if the instance is not `RiskModelFactor`
     */
    public RiskModelFactor getRiskModelFactor() throws ClassCastException {
        return (RiskModelFactor)super.getActualInstance();
    }
    
}

