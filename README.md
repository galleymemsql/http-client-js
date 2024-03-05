# SingleStore HTTP Client for JavaScript
# (@singlestore/http-client)

**Attention**: The code in this repository is intended for experimental use only and is not fully tested, documented, or supported by SingleStore. Visit the [SingleStore Forums](https://www.singlestore.com/forum/) to ask questions about this repository.

This API allows you to execute SQL statements against a SingleStore database.  It supports all statements that can be run in a direct database connection, and uses conventional data type conversion.

For more information, please visit [https://docs.singlestore.com/managed-service/en/reference/http-api.html](https://docs.singlestore.com/managed-service/en/reference/http-api.html).


## Installation

### npm ([Node.js](https://nodejs.org/))

This client is designed to be deployed using [npm](https://www.npmjs.com/).  You can use the `npm` command to automatically install it into your project from the hosted site, as follows:

```shell
npm install @singlestore/http-client
```

## Example

This package contains an [example.js](example.js) file that explains how to use the SingleStore HTTP Client for JavaScript.  The instructions at the top explain how to run it.  Included are a basic example and several extended examples.  The basic example will show you how to get started quickly with a few lines of code.  The extended examples build on the basic one and illustrate other API calls and usage.

## API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SingleStoreClient.HttpApi* | [**exec**](docs/HttpApi.md#exec) | **POST** /api/v2/exec | Exec
*SingleStoreClient.HttpApi* | [**ping**](docs/HttpApi.md#ping) | **GET** /ping | Ping
*SingleStoreClient.HttpApi* | [**rows**](docs/HttpApi.md#rows) | **POST** /api/v2/query/rows | Query
*SingleStoreClient.HttpApi* | [**spec**](docs/HttpApi.md#spec) | **GET** /api/v2/spec | Spec
*SingleStoreClient.HttpApi* | [**tuples**](docs/HttpApi.md#tuples) | **POST** /api/v2/query/tuples | Query


## Models

 - [SingleStoreClient.Column](docs/Column.md)
 - [SingleStoreClient.ExecInput](docs/ExecInput.md)
 - [SingleStoreClient.ExecOutput](docs/ExecOutput.md)
 - [SingleStoreClient.QueryInput](docs/QueryInput.md)
 - [SingleStoreClient.QueryInputArg](docs/QueryInputArg.md)
 - [SingleStoreClient.QueryOutput](docs/QueryOutput.md)
 - [SingleStoreClient.QueryOutputError](docs/QueryOutputError.md)
 - [SingleStoreClient.ResultSet](docs/ResultSet.md)
 - [SingleStoreClient.RowValue](docs/RowValue.md)
 - [SingleStoreClient.StreamOutput](docs/StreamOutput.md)
 - [SingleStoreClient.StreamResult](docs/StreamResult.md)


## Authorization



### BasicAuth


- **Type**: HTTP basic authentication


## About this package

This JavaScript package was automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project, with some custom templating:

- API version: 2.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

