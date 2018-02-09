# Errors

Code  | Description
----  | ---------------------------------------------------------------------------------------------------------------------------
`400` | Bad Request
`401` | Unauthorized. Occurs when you are using an invalid or expired access token.
`403` | Forbidden. The request was valid but you are not authorized to access the resource.
`404` | Not Found. Occurs when you are requesting a resource which doesn't exist such as an incorrect URL or incorrect ID.
`429` | Too Many Requests. Exceeded the rate limit set. Currently, there is no rate limit on the APIs.
`500` | Internal Server Error.
`503` | Service Unavailable. If the API is down for maintenance you will see this error.

<br/>

**Status Codes**

Code  | Description
----- | ---------------------------------------------------------------------------------------------------------------------------------------------
`200` | Ok. The request was successful.