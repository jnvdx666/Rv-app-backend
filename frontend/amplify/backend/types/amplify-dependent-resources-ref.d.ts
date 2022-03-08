export type AmplifyDependentResourcesAttributes = {
    "api": {
        "Rvappbackendfrontend": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "Rvappbackendfrontend": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3rvappbackendstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "rvappbackendfrontend": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}