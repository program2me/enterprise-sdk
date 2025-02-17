[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# IRN Custom Symbols client library for JavaScript

[![npm](https://img.shields.io/npm/v/@factset/sdk-irncustomsymbols)](https://www.npmjs.com/package/@factset/sdk-irncustomsymbols)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

Allows users to extract, create, update and configure IRN data.

This TypeScript/JavaScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Requirements

* Node.js >= 14

## Installation

### npm

```shell
npm install @factset/sdk-utils @factset/sdk-irncustomsymbols
```

### yarn

```shell
yarn add @factset/sdk-utils @factset/sdk-irncustomsymbols
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup Node.js environment
   1. Install and activate Node.js >=14. If you're using [nvm](https://github.com/nvm-sh/nvm):

      ```sh
      nvm install 16
      nvm use 16
      ```

   2. (optional) [Install yarn](https://yarnpkg.com/getting-started/install).
3. [Install dependencies](#installation).
4. Run the following:

```javascript
const { ApiClient, CustomSymbolsApi } = require('@factset/sdk-irncustomsymbols');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new CustomSymbolsApi();
const opts = {
  'createCustomSymbolDto': new irncustomsymbols.CreateCustomSymbolDto() // CreateCustomSymbolDto | createCustomSymbolDto object to save
};

// Call api endpoint
apiInstance.createCustomSymbol(opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/research/irn*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*irncustomsymbols.CustomSymbolsApi* | [**createCustomSymbol**](docs/CustomSymbolsApi.md#createCustomSymbol) | **POST** /v1/custom-symbols | Create a custom symbol
*irncustomsymbols.CustomSymbolsApi* | [**deleteCustomSymbol**](docs/CustomSymbolsApi.md#deleteCustomSymbol) | **DELETE** /v1/custom-symbols/{customSymbolId} | Delete a custom symbol
*irncustomsymbols.CustomSymbolsApi* | [**getCustomSymbol**](docs/CustomSymbolsApi.md#getCustomSymbol) | **GET** /v1/custom-symbols/{customSymbolId} | Get all custom field and standard field details on a specific custom symbol
*irncustomsymbols.CustomSymbolsApi* | [**getCustomSymbolRecords**](docs/CustomSymbolsApi.md#getCustomSymbolRecords) | **GET** /v1/custom-symbols/{customSymbolId}/records | Get all notes and meetings where a specific customSymbol was tagged as primary or related identifier
*irncustomsymbols.CustomSymbolsApi* | [**getCustomSymbols**](docs/CustomSymbolsApi.md#getCustomSymbols) | **GET** /v1/custom-symbols | Get list of all custom symbols in your group along with some of their standard field and custom fields data
*irncustomsymbols.CustomSymbolsApi* | [**linkCustomSymbolToStandardSymbol**](docs/CustomSymbolsApi.md#linkCustomSymbolToStandardSymbol) | **POST** /v1/custom-symbols/{customSymbolId}/link-standard-symbol | Link custom symbol to standard symbol
*irncustomsymbols.CustomSymbolsApi* | [**patchCustomSymbol**](docs/CustomSymbolsApi.md#patchCustomSymbol) | **PATCH** /v1/custom-symbols/{customSymbolId} | Edit a custom symbol’s standard field and custom field data
*irncustomsymbols.CustomSymbolsRelationshipsApi* | [**createSymbolRelationship**](docs/CustomSymbolsRelationshipsApi.md#createSymbolRelationship) | **POST** /v1/symbol-relationships | Create a symbol relationship
*irncustomsymbols.CustomSymbolsRelationshipsApi* | [**deleteSymbolRelationship**](docs/CustomSymbolsRelationshipsApi.md#deleteSymbolRelationship) | **DELETE** /v1/symbol-relationships/{symbolRelationshipId} | Delete a symbol relationship
*irncustomsymbols.CustomSymbolsRelationshipsApi* | [**editAndAddSymbolRelationship**](docs/CustomSymbolsRelationshipsApi.md#editAndAddSymbolRelationship) | **PUT** /v1/symbol-relationships/{symbol} | Edit a symbol relationship
*irncustomsymbols.CustomSymbolsRelationshipsApi* | [**getSymbolRelationship**](docs/CustomSymbolsRelationshipsApi.md#getSymbolRelationship) | **GET** /v1/symbol-relationships/{symbolRelationshipId} | Get details on a specific symbol relationship
*irncustomsymbols.CustomSymbolsRelationshipsApi* | [**getSymbolRelationships**](docs/CustomSymbolsRelationshipsApi.md#getSymbolRelationships) | **GET** /v1/symbol-relationships/{symbolId}/relationships | Returns a list of a symbol’s relationships
*irncustomsymbols.HybridSymbolsApi* | [**createStandardSymbolMetadata**](docs/HybridSymbolsApi.md#createStandardSymbolMetadata) | **POST** /v1/custom-symbols/standard-symbol-metadata | Create standard symbol metadata
*irncustomsymbols.HybridSymbolsApi* | [**getStandardSymbolMetadataGuid**](docs/HybridSymbolsApi.md#getStandardSymbolMetadataGuid) | **GET** /v1/custom-symbols/standard-symbol-metadata/{standardSymbol} | Get all custom field and standard field details on a specific standard symbol
*irncustomsymbols.HybridSymbolsApi* | [**patchStandardSymbol**](docs/HybridSymbolsApi.md#patchStandardSymbol) | **PATCH** /v1/custom-symbols/standard-symbol-metadata/{standardSymbolId} | Edit a standard symbol’s standard field and custom field data


## Documentation for Models

 - [irncustomsymbols.CreateCustomSymbolCustomFieldValueDto](docs/CreateCustomSymbolCustomFieldValueDto.md)
 - [irncustomsymbols.CreateCustomSymbolDto](docs/CreateCustomSymbolDto.md)
 - [irncustomsymbols.CreateStandardSymbolMetadataDto](docs/CreateStandardSymbolMetadataDto.md)
 - [irncustomsymbols.CustomSymbolAddressDto](docs/CustomSymbolAddressDto.md)
 - [irncustomsymbols.CustomSymbolContact](docs/CustomSymbolContact.md)
 - [irncustomsymbols.CustomSymbolCustomFieldValueDto](docs/CustomSymbolCustomFieldValueDto.md)
 - [irncustomsymbols.CustomSymbolDto](docs/CustomSymbolDto.md)
 - [irncustomsymbols.CustomSymbolSubTypeSummaryDto](docs/CustomSymbolSubTypeSummaryDto.md)
 - [irncustomsymbols.CustomSymbolTypeSummaryDto](docs/CustomSymbolTypeSummaryDto.md)
 - [irncustomsymbols.InstrumentDto](docs/InstrumentDto.md)
 - [irncustomsymbols.NewItemDto](docs/NewItemDto.md)
 - [irncustomsymbols.Operation](docs/Operation.md)
 - [irncustomsymbols.OperationType](docs/OperationType.md)
 - [irncustomsymbols.ProblemDetails](docs/ProblemDetails.md)
 - [irncustomsymbols.RecordPreviewDto](docs/RecordPreviewDto.md)
 - [irncustomsymbols.StandardSymbolDto](docs/StandardSymbolDto.md)
 - [irncustomsymbols.SymbolIdNameDto](docs/SymbolIdNameDto.md)
 - [irncustomsymbols.SymbolRelationshipDto](docs/SymbolRelationshipDto.md)
 - [irncustomsymbols.SymbolRelationshipSaveDto](docs/SymbolRelationshipSaveDto.md)
 - [irncustomsymbols.SymbolRelationshipUpdateDto](docs/SymbolRelationshipUpdateDto.md)
 - [irncustomsymbols.SymbolsRelationshipIdNameDto](docs/SymbolsRelationshipIdNameDto.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


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
