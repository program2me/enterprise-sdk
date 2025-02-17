[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# Model Portfolio client library for JavaScript

[![npm](https://img.shields.io/npm/v/@factset/sdk-modelportfolio)](https://www.npmjs.com/package/@factset/sdk-modelportfolio)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

Allow clients to fetch ModelAccounts Analytics through APIs.

This TypeScript/JavaScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3
- Package version: 0.21.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

## Requirements

* Node.js >= 14

## Installation

### npm

```shell
npm install @factset/sdk-utils @factset/sdk-modelportfolio
```

### yarn

```shell
yarn add @factset/sdk-utils @factset/sdk-modelportfolio
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
const { ApiClient, ModelAccountsApi } = require('@factset/sdk-modelportfolio');
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

const apiInstance = new ModelAccountsApi();
const name = "name_example"; // String | The path and filename of the model account to create or update
const opts = {
  'modelAccountFieldsRoot': {"data":{"iterative":{"20191010":{"FDS":{"weight":"20","price":"50","priceiso":"USD"},"GOOGL":{"weight":"20","price":"50","priceiso":"USD"}}},"nonIterative":{"GOOGL":{"taxable":"false"},"FDS":{"taxable":"false"}},"additionalFields":[{"iteration":false,"name":"TAXABLE","type":"STRING","description":"Taxable","splitDirection":"NONE","size":0}]},"meta":{"description":"Test desc"}} // ModelAccountFieldsRoot | The object containing the input values
};

// Call api endpoint
apiInstance.createOrUpdateModelAccount(name, opts).then(
  () => {
    console.log('API called successfully.');
  },
  error => {
    console.error(error);
  },
);

```


## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*modelportfolio.ModelAccountsApi* | [**createOrUpdateModelAccount**](docs/ModelAccountsApi.md#createOrUpdateModelAccount) | **PUT** /analytics/accounts/v3/models/{name} | Create or update an existing model account
*modelportfolio.ModelAccountsApi* | [**deleteAModelAccount**](docs/ModelAccountsApi.md#deleteAModelAccount) | **DELETE** /analytics/accounts/v3/models/{name} | Delete model account, takes an account path and name and deletes it.
*modelportfolio.ModelAccountsApi* | [**getAccountForDate**](docs/ModelAccountsApi.md#getAccountForDate) | **GET** /analytics/accounts/v3/models/{name}/dates/{date} | Get account endpoint, takes an account name, date and returns underlying data for that date
*modelportfolio.ModelAccountsApi* | [**getAccountForDateAndSymbol**](docs/ModelAccountsApi.md#getAccountForDateAndSymbol) | **GET** /analytics/accounts/v3/models/{name}/dates/{date}/symbols/{symbol} | Get account endpoint, takes an account name and returns underlying data
*modelportfolio.ModelAccountsApi* | [**getAccountForSymbol**](docs/ModelAccountsApi.md#getAccountForSymbol) | **GET** /analytics/accounts/v3/models/{name}/symbols/{symbol} | Get account endpoint, takes an account name, symbol and returns underlying data for that symbol
*modelportfolio.ModelAccountsApi* | [**getAccountSchema**](docs/ModelAccountsApi.md#getAccountSchema) | **GET** /analytics/accounts/v3/models/{name}/schema | Get account schema endpoint, takes an account name and returns its schema


## Documentation for Models

 - [modelportfolio.ModelAccountAdditionalField](docs/ModelAccountAdditionalField.md)
 - [modelportfolio.ModelAccountFields](docs/ModelAccountFields.md)
 - [modelportfolio.ModelAccountFieldsRoot](docs/ModelAccountFieldsRoot.md)
 - [modelportfolio.ProblemDetails](docs/ProblemDetails.md)


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
