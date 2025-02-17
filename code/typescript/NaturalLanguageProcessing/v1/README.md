[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# Natural Language Processing client library for JavaScript

[![npm](https://img.shields.io/npm/v/@factset/sdk-naturallanguageprocessing)](https://www.npmjs.com/package/@factset/sdk-naturallanguageprocessing)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text

This TypeScript/JavaScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.0
- Package version: 0.21.3
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Requirements

* Node.js >= 14

## Installation

### npm

```shell
npm install @factset/sdk-utils @factset/sdk-naturallanguageprocessing
```

### yarn

```shell
yarn add @factset/sdk-utils @factset/sdk-naturallanguageprocessing
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
const { ApiClient, AITextSummarizationApi } = require('@factset/sdk-naturallanguageprocessing');
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

const apiInstance = new AITextSummarizationApi();
const opts = {
  'summarizationRequest': new naturallanguageprocessing.SummarizationRequest() // SummarizationRequest | 
};

// Call api endpoint
apiInstance.cognitiveNlpV1SummarizationHeadlineAndSummaryPost(opts).then(
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

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*naturallanguageprocessing.AITextSummarizationApi* | [**cognitiveNlpV1SummarizationHeadlineAndSummaryPost**](docs/AITextSummarizationApi.md#cognitiveNlpV1SummarizationHeadlineAndSummaryPost) | **POST** /cognitive/nlp/v1/summarization/headline-and-summary | Endpoint to summarize and generate a headline from text
*naturallanguageprocessing.AITextSummarizationApi* | [**cognitiveNlpV1SummarizationHeadlinePost**](docs/AITextSummarizationApi.md#cognitiveNlpV1SummarizationHeadlinePost) | **POST** /cognitive/nlp/v1/summarization/headline | Endpoint to generate a headline from text
*naturallanguageprocessing.AITextSummarizationApi* | [**cognitiveNlpV1SummarizationResultResultIdGet**](docs/AITextSummarizationApi.md#cognitiveNlpV1SummarizationResultResultIdGet) | **GET** /cognitive/nlp/v1/summarization/result/{result_id} | Endpoint to obtain result of a particular summarization job
*naturallanguageprocessing.AITextSummarizationApi* | [**cognitiveNlpV1SummarizationSummaryPost**](docs/AITextSummarizationApi.md#cognitiveNlpV1SummarizationSummaryPost) | **POST** /cognitive/nlp/v1/summarization/summary | Endpoint to summarize text
*naturallanguageprocessing.AIThemesApi* | [**cognitiveNlpV1ThemesPost**](docs/AIThemesApi.md#cognitiveNlpV1ThemesPost) | **POST** /cognitive/nlp/v1/themes | Endpoint to extract themes from text
*naturallanguageprocessing.NamedEntityRecognitionApi* | [**cognitiveNlpV1NerEntitiesPost**](docs/NamedEntityRecognitionApi.md#cognitiveNlpV1NerEntitiesPost) | **POST** /cognitive/nlp/v1/ner/entities | Endpoint to detect entities from text


## Documentation for Models

 - [naturallanguageprocessing.Error](docs/Error.md)
 - [naturallanguageprocessing.ErrorsRoot](docs/ErrorsRoot.md)
 - [naturallanguageprocessing.HTTPError](docs/HTTPError.md)
 - [naturallanguageprocessing.NEREntity](docs/NEREntity.md)
 - [naturallanguageprocessing.NEREntityList](docs/NEREntityList.md)
 - [naturallanguageprocessing.NERErrorSchema](docs/NERErrorSchema.md)
 - [naturallanguageprocessing.NERInputDataSchema](docs/NERInputDataSchema.md)
 - [naturallanguageprocessing.NERInputSchema](docs/NERInputSchema.md)
 - [naturallanguageprocessing.NEROrganization](docs/NEROrganization.md)
 - [naturallanguageprocessing.NERResponseSchema](docs/NERResponseSchema.md)
 - [naturallanguageprocessing.NERValidationError](docs/NERValidationError.md)
 - [naturallanguageprocessing.SummarizationRequest](docs/SummarizationRequest.md)
 - [naturallanguageprocessing.SummarizationResult](docs/SummarizationResult.md)
 - [naturallanguageprocessing.SummarizationResultID](docs/SummarizationResultID.md)
 - [naturallanguageprocessing.Theme](docs/Theme.md)
 - [naturallanguageprocessing.ThemeParameters](docs/ThemeParameters.md)
 - [naturallanguageprocessing.ThemeParametersRoot](docs/ThemeParametersRoot.md)
 - [naturallanguageprocessing.ThemesRoot](docs/ThemesRoot.md)
 - [naturallanguageprocessing.ValidationError](docs/ValidationError.md)
 - [naturallanguageprocessing.ValidationErrorDetail](docs/ValidationErrorDetail.md)
 - [naturallanguageprocessing.ValidationErrorDetailLocation](docs/ValidationErrorDetailLocation.md)


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
