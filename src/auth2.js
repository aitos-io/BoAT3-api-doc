/**
 * @api {post} /v1 获取access token
 * @apiVersion 0.0.1
 * @apiName 获取accessToken
 * @apiGroup Token
 *
 * @apiDescription 获取access token，使用access token来调用其他接口
 *
 * @apiBody {String} clientId               Client ID
 * @apiBody {String} clientSecret           Client Secret
 * @apiParamExample {json} Request-Example:
 * {
 *     "clientId": "A94A8FE5CCB19BA61C4C0873D391E987982FBBD3",
 *     "clientSecret": "AA63D0B9EF845194574B4E149BB2F3E5745BCBFD"
 * }
 *
 * @apiSuccess {Number} code                请求接口返回的状态码，0:标识成功，其他值标识失败，可根据状态码表查找对应的错误信息
 * @apiSuccess {String} [msg]                 如果code不等于0时，msg才会有值，用来说明调用接口失败的原因
 * @apiSuccess {Object} [data]                如果code等于0时,系统返回的值会放在data结构中
 * @apiSuccess {String} data.accessToken    Access Token.
 * @apiSuccess {String} data.refreshToken   Refresh Token, 可以使用该token来获取新的accesstoken.
 * @apiSuccess {Number} data.expiration     Access Token  失效的时间.
 * @apiSuccessExample {json} Success
 * {
 *     "code": 0,
 *     "msg": null,
 *     "data": {
 *         "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRfaWQiOjMyLCJvcGVuYXBpIjp0cnVlLCJjbGllbnRfaWQiOiJGQ0JBRTVDRDJCMEIwNTcwODdFRjk3QkZENkZGNjMyMDVGMjhFMDMzIiwidGltZXN0YW1wIjoxNjk2NjcwMzU2MTE2fQ.hmfipBIQDkAKK7onHT_JPe0-8HC8gjw4ZcwBJHMHKtzbXAqrAwTmImAwn6Vv7oNB3pBMNsMebYTKzrE0bk3pQQ",
 *         "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRfaWQiOjMyLCJvcGVuYXBpIjp0cnVlLCJhY2Nlc3NUb2tlbiI6ImV5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SjBaVzVoYm5SZmFXUWlPak15TENKdmNHVnVZWEJwSWpwMGNuVmxMQ0pqYkdsbGJuUmZhV1FpT2lKR1EwSkJSVFZEUkRKQ01FSXdOVGN3T0RkRlJqazNRa1pFTmtaR05qTXlNRFZHTWpoRk1ETXpJaXdpZEdsdFpYTjBZVzF3SWpveE5qazJOamN3TXpVMk1URTJmUS5obWZpcEJJUURrQUtLN29uSFRfSlBlMC04SEM4Z2p3NFpjd0JKSE1IS3R6YlhBcXJBd1RtSW1Bd242VnY3b05CM3BCTU5zTWViWVRLenJFMGJrM3BRUSIsImNsaWVudF9pZCI6IkZDQkFFNUNEMkIwQjA1NzA4N0VGOTdCRkQ2RkY2MzIwNUYyOEUwMzMiLCJ0aW1lc3RhbXAiOjE2OTY2NzAzNTYxMTZ9.jMUPZa1TeWzUURWEbSP85mfY3Xdv94vcAecXleGk3drBBQUlQpqDdLCw00oBTwCRvnxY3BVwHi6l_LS0iSmy4w",
 *         "expiration": 3600
 *     }
 * }
 */
function access_token () { }


/**
 * @api {post} /v1 根据refreshToken刷新access token
 * @apiVersion 0.0.1
 * @apiName 根据refreshToken刷新accessToken
 * @apiGroup Token
 *
 * @apiDescription 用来刷新access token
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 *    "Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRfaWQiOjUsIm9wZW5hcGkiOnRydWUsImNsaWVudF9pZCI6IjMzQzZFQzBDQzQwRjhDNURBODNGRUI0NzhFNTJBRDU5MjdFNzQzODYifQ.alnWLhn4Vf1_COAA06coPGa0NFjsqDGKeKIU8eoWbyvM-K3ANtPSKdGQgnf_H9bqalehDOMhE0jF8b8MY_0DVQ"
 *
 * @apiBody {String} clientId               Client ID
 * @apiBody {String} refreshToken           Refresh Token,该值为初次调用access_token接口时返回的refreshToken字段内容
 *
 *
 * @apiParamExample {json} Request-Example:
 * {
 *     "clientId": "A94A8FE5CCB19BA61C4C0873D391E987982FBBD3",
 *     "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRfaWQiOjY3LCJvcGVuYXBpIjp0cnVlLCJhY2Nlc3NUb2tlbiI6ImV5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SjBaVzVoYm5SZmFXUWlPalkzTENKdmNHVnVZWEJwSWpwMGNuVmxMQ0pqYkdsbGJuUmZhV1FpT2lKQk9UUkJPRVpGTlVORFFqRTVRa0UyTVVNMFF6QTROek5FTXpreFJUazROems0TWtaQ1FrUXpJaXdpZEdsdFpYTjBZVzF3SWpveE5qazNNRGt4TVRReE9EUTRmUS4wd21xcVprV2UwMWdScGo4TFNJOXJtMzhxbVdZMUtEUHNtX0dJYVNYbXNGdEY4MncxdlkyR2ItcVFjZzJCVmVHNm0zeEVxN05aN3VYMkNnckh0WVVJQSIsImNsaWVudF9pZCI6IkE5NEE4RkU1Q0NCMTlCQTYxQzRDMDg3M0QzOTFFOTg3OTgyRkJCRDMiLCJ0aW1lc3RhbXAiOjE2OTcwOTExNDIxNTB9.xOD1Q8zwG9jLp0oEP_kmiO3-4lFPFSS7AscXwLQy9YVUQ3f89JgnGTIKQilL0RqhvahxZy81ybQs0-EloVpFBQ"
 * }
 *
 * @apiSuccess {Number} code                请求接口返回的状态码，0:标识成功，其他值标识失败，可根据状态码表查找对应的错误信息
 * @apiSuccess {String} [msg]                 如果code不等于0时，msg才会有值，用来说明调用接口失败的原因
 * @apiSuccess {Object} [data]                如果code等于0时,系统返回的值会放在data结构中
 * @apiSuccess {String} data.accessToken    Access Token.
 * @apiSuccess {String} data.refreshToken   Refresh Token, 可以使用该token来获取新的accesstoken.
 * @apiSuccess {Number} data.expiration     Access Token  失效的时间.
 * @apiSuccessExample {json} Success
 * {
 *     "code": 0,
 *     "msg": null,
 *     "data": {
 *         "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRfaWQiOjMyLCJvcGVuYXBpIjp0cnVlLCJjbGllbnRfaWQiOiJGQ0JBRTVDRDJCMEIwNTcwODdFRjk3QkZENkZGNjMyMDVGMjhFMDMzIiwidGltZXN0YW1wIjoxNjk2NjcwMzU2MTE2fQ.hmfipBIQDkAKK7onHT_JPe0-8HC8gjw4ZcwBJHMHKtzbXAqrAwTmImAwn6Vv7oNB3pBMNsMebYTKzrE0bk3pQQ",
 *         "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJ0ZW5hbnRfaWQiOjMyLCJvcGVuYXBpIjp0cnVlLCJhY2Nlc3NUb2tlbiI6ImV5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SjBaVzVoYm5SZmFXUWlPak15TENKdmNHVnVZWEJwSWpwMGNuVmxMQ0pqYkdsbGJuUmZhV1FpT2lKR1EwSkJSVFZEUkRKQ01FSXdOVGN3T0RkRlJqazNRa1pFTmtaR05qTXlNRFZHTWpoRk1ETXpJaXdpZEdsdFpYTjBZVzF3SWpveE5qazJOamN3TXpVMk1URTJmUS5obWZpcEJJUURrQUtLN29uSFRfSlBlMC04SEM4Z2p3NFpjd0JKSE1IS3R6YlhBcXJBd1RtSW1Bd242VnY3b05CM3BCTU5zTWViWVRLenJFMGJrM3BRUSIsImNsaWVudF9pZCI6IkZDQkFFNUNEMkIwQjA1NzA4N0VGOTdCRkQ2RkY2MzIwNUYyOEUwMzMiLCJ0aW1lc3RhbXAiOjE2OTY2NzAzNTYxMTZ9.jMUPZa1TeWzUURWEbSP85mfY3Xdv94vcAecXleGk3drBBQUlQpqDdLCw00oBTwCRvnxY3BVwHi6l_LS0iSmy4w",
 *         "expiration": 3600
 *     }
 * }
 */
function refresh_token () { }
