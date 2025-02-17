[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# OFDB client library for JavaScript

[![npm](https://img.shields.io/npm/v/@factset/sdk-ofdb)](https://www.npmjs.com/package/@factset/sdk-ofdb)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

OFDB api

This TypeScript/JavaScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.21.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Requirements

* Node.js >= 14

## Installation

### npm

```shell
npm install @factset/sdk-utils @factset/sdk-ofdb
```

### yarn

```shell
yarn add @factset/sdk-utils @factset/sdk-ofdb
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
const { ApiClient, CreateApi } = require('@factset/sdk-ofdb');
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

const apiInstance = new CreateApi();
const path = "path_example"; // String | Encode database path
const addSymbolDate = new ofdb.AddSymbolDate(); // AddSymbolDate | Required data for creating date in the database. At least one iterative field is required otherwise it will throw 400.

// Call api endpoint
apiInstance.addSymbolDate(path, addSymbolDate).then(
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

All URIs are relative to *https://api.factset.com/analytics/ofdb*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ofdb.CreateApi* | [**addSymbolDate**](docs/CreateApi.md#addSymbolDate) | **POST** /v1/database/{path}/dates | 
*ofdb.CreateApi* | [**addSymbolDate3D**](docs/CreateApi.md#addSymbolDate3D) | **POST** /v1/database/{path}/dates/{date}/symbols | 
*ofdb.CreateApi* | [**addSymbols**](docs/CreateApi.md#addSymbols) | **POST** /v1/database/{path}/symbols | 
*ofdb.CreateApi* | [**createDatabase**](docs/CreateApi.md#createDatabase) | **POST** /v1/database/ | 
*ofdb.ModifyApi* | [**deleteDates**](docs/ModifyApi.md#deleteDates) | **DELETE** /v1/database/{path}/dates/{date} | 
*ofdb.ModifyApi* | [**deleteSymbolDate3D**](docs/ModifyApi.md#deleteSymbolDate3D) | **DELETE** /v1/database/{path}/dates/{date}/symbols/{symbol} | 
*ofdb.ModifyApi* | [**deleteSymbols**](docs/ModifyApi.md#deleteSymbols) | **DELETE** /v1/database/{path}/symbols/{symbol} | 
*ofdb.ModifyApi* | [**updateSymbolDate**](docs/ModifyApi.md#updateSymbolDate) | **PUT** /v1/database/{path}/dates/{date} | 
*ofdb.ModifyApi* | [**updateSymbolDate3D**](docs/ModifyApi.md#updateSymbolDate3D) | **PUT** /v1/database/{path}/dates/{date}/symbols/{symbol} | 
*ofdb.ModifyApi* | [**updateSymbols**](docs/ModifyApi.md#updateSymbols) | **PUT** /v1/database/{path}/symbols/{symbol} | 
*ofdb.ViewApi* | [**getDatabase**](docs/ViewApi.md#getDatabase) | **GET** /v1/database/{path} | 
*ofdb.ViewApi* | [**getDates**](docs/ViewApi.md#getDates) | **GET** /v1/database/{path}/dates | 
*ofdb.ViewApi* | [**getFields**](docs/ViewApi.md#getFields) | **GET** /v1/database/{path}/fields | 
*ofdb.ViewApi* | [**getSymbols**](docs/ViewApi.md#getSymbols) | **GET** /v1/database/{path}/symbols | 


## Documentation for Models

 - [ofdb.AddDatabase](docs/AddDatabase.md)
 - [ofdb.AddSymbolDate](docs/AddSymbolDate.md)
 - [ofdb.AddSymbolDate3D](docs/AddSymbolDate3D.md)
 - [ofdb.AddSymbolDate3DData](docs/AddSymbolDate3DData.md)
 - [ofdb.AddSymbolDateData](docs/AddSymbolDateData.md)
 - [ofdb.AddSymbols](docs/AddSymbols.md)
 - [ofdb.AddSymbolsData](docs/AddSymbolsData.md)
 - [ofdb.DatabaseSchema](docs/DatabaseSchema.md)
 - [ofdb.InlineResponse202](docs/InlineResponse202.md)
 - [ofdb.InlineResponse400](docs/InlineResponse400.md)
 - [ofdb.InlineResponse400Errors](docs/InlineResponse400Errors.md)
 - [ofdb.InlineResponse400Source](docs/InlineResponse400Source.md)
 - [ofdb.InlineResponse403](docs/InlineResponse403.md)
 - [ofdb.InlineResponse403Errors](docs/InlineResponse403Errors.md)
 - [ofdb.InlineResponse404](docs/InlineResponse404.md)
 - [ofdb.InlineResponse404Errors](docs/InlineResponse404Errors.md)
 - [ofdb.InlineResponse413](docs/InlineResponse413.md)
 - [ofdb.InlineResponse413Errors](docs/InlineResponse413Errors.md)
 - [ofdb.InlineResponse429](docs/InlineResponse429.md)
 - [ofdb.InlineResponse429Errors](docs/InlineResponse429Errors.md)
 - [ofdb.SuccessPostResponse](docs/SuccessPostResponse.md)
 - [ofdb.UpdateSymbolDate](docs/UpdateSymbolDate.md)
 - [ofdb.UpdateSymbolDate3D](docs/UpdateSymbolDate3D.md)
 - [ofdb.UpdateSymbolDate3DData](docs/UpdateSymbolDate3DData.md)
 - [ofdb.UpdateSymbols](docs/UpdateSymbols.md)
 - [ofdb.UpdateSymbolsData](docs/UpdateSymbolsData.md)


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
