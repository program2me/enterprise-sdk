[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Ownership Report Builder client library for Java

[![Maven Central](https://img.shields.io/maven-central/v/com.factset.sdk/factsetownershipreportbuilder)](https://search.maven.org/artifact/com.factset.sdk/factsetownershipreportbuilder)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Java package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.1
- Build package: org.openapitools.codegen.languages.JavaClientCodegen

## Requirements

* Java JDK >= 1.8

## Installation

### Maven

Add these dependencies to your project's POM:

```xml
<dependency>
  <groupId>com.factset.sdk</groupId>
  <artifactId>utils</artifactId>
  <version>1.0.0</version>
</dependency>
<dependency>
  <groupId>com.factset.sdk</groupId>
  <artifactId>factsetownershipreportbuilder</artifactId>
  <version>1.0.1</version>
  <scope>compile</scope>
</dependency>
```

### Gradle

Add these dependencies to your project's build file:

```groovy
  repositories {
    mavenCentral()
  }

  dependencies {
    implementation "com.factset.sdk:utils:1.0.0"
    implementation "com.factset.sdk:factsetownershipreportbuilder:1.0.1"
  }
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup Java environment.
   1. Install and activate Java 1.8+
   2. Install [maven](https://maven.apache.org/install.html) or [gradle](https://gradle.org/install/)
3. [Install dependencies](#installation).
4. Run the following:

```java
import com.factset.sdk.FactSetOwnershipReportBuilder.*;
import com.factset.sdk.FactSetOwnershipReportBuilder.auth.*;
import com.factset.sdk.FactSetOwnershipReportBuilder.models.*;
import com.factset.sdk.FactSetOwnershipReportBuilder.api.OwnershipApi;

import com.factset.sdk.utils.authentication.ConfidentialClient;


public class OwnershipApiExample {

    public static void main(String[] args) throws Exception {
        // Examples for each supported authentication method are below,
        // choose one that satisfies your use case.

        /* (Preferred) OAuth 2.0: FactSetOAuth2 */
        // See https://github.com/FactSet/enterprise-sdk#oauth-20
        // for information on how to create the app-config.json file
        // See https://github.com/FactSet/enterprise-sdk-utils-java#authentication
        // for more information on using the ConfidentialClient class
        ConfidentialClient confidentialClient = new ConfidentialClient("./path/to/config.json");
        ApiClient defaultClient = new ApiClient()
          .setFactSetOAuth2Client(confidentialClient);

        /* Basic authentication: FactSetApiKey */
        // See https://github.com/FactSet/enterprise-sdk#api-key
        // ApiClient defaultClient = new ApiClient()
        //   .setUsername("YOUR USERNAME")
        //   .setPassword("YOUR PASSWORD");

        OwnershipApi apiInstance = new OwnershipApi(defaultClient);
        String id = "FDS"; // String | Company or Fund Identifier
        String assetType = "EQUITY"; // String | Controls the Asset Type of the data returned
        String holderType = "ALL_HOLDERS"; // String | Controls the Holder Type of the data returned
        String topn = "ALL"; // String | Limits the number of holders returned based on their Market Value position in the security.   Default is ALL, otherwise use a valid number above 0. 
        String date = "2019-12-31"; // String | Top Holders as of date expressed in YYYY-MM-DD format. Defaults to latest month-end close; non-month-end dates are converted to month-end dates.
        try {
            Response result = apiInstance.getOwnershipHolders(id, assetType, holderType, topn, date);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OwnershipApi#getOwnershipHolders");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Using a Proxy

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.FactSetOwnershipReportBuilder.*;
import com.factset.sdk.FactSetOwnershipReportBuilder.api.OwnershipApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

OwnershipApi apiInstance = new OwnershipApi(defaultClient);

```


## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/report/ownership/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OwnershipApi* | [**getOwnershipHolders**](docs/OwnershipApi.md#getOwnershipHolders) | **GET** /holders | Holders of a company or fund


## Documentation for Models

 - [Category](docs/Category.md)
 - [CategoryCategory](docs/CategoryCategory.md)
 - [CurrencyCode](docs/CurrencyCode.md)
 - [CurrencyCodeCurrencyCode](docs/CurrencyCodeCurrencyCode.md)
 - [CurrencySymbol](docs/CurrencySymbol.md)
 - [CurrencySymbolCurrencySymbol](docs/CurrencySymbolCurrencySymbol.md)
 - [Description](docs/Description.md)
 - [DescriptionDescription](docs/DescriptionDescription.md)
 - [ErrorObject](docs/ErrorObject.md)
 - [ErrorObjectLinks](docs/ErrorObjectLinks.md)
 - [ErrorObjectSource](docs/ErrorObjectSource.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [Frequency](docs/Frequency.md)
 - [FrequencyFrequency](docs/FrequencyFrequency.md)
 - [FsymId](docs/FsymId.md)
 - [FsymIdFsymId](docs/FsymIdFsymId.md)
 - [MetadataEntry](docs/MetadataEntry.md)
 - [Response](docs/Response.md)
 - [Scale](docs/Scale.md)
 - [ScaleScale](docs/ScaleScale.md)
 - [ValueType](docs/ValueType.md)
 - [ValueTypeValueType](docs/ValueTypeValueType.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### FactSetApiKey


- **Type**: HTTP basic authentication

### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multi-threaded environment to avoid any potential issues.

# Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

# Copyright

Copyright 2022 FactSet Research Systems Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
