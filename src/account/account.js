/**
 * @api {post} /v1 获取access token
 * @apiVersion 0.0.1
 * @apiName 获取accessToken
 * @apiGroup Account
 *
 * @apiDescription 获取access token，需要使用rlp 字段顺序对 accountAddress、url、timestamp进行编码，使用keccak256算法对编码结果做hash,再使用ecdsa算法对hash进行签名，将签名结果放入signature参数中。
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_account_login”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.accountAddress       owner 的签包地址，用十六进制表示，前面要用0x开头
 * @apiBody {String} params.url       网站的url地址
 * @apiBody {number} params.timestamp       时间戳,单位秒
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_account_login",
 *     "params": {
 *         "accountAddress": "0xD54c57D39A7CCe7Dc55e4087d751A54b142BF15a",
 *         "url": "http://dev.boat3.aitos.io",
 *         "timestamp": 1699612577,
 *         "signature": "0x2bbde9fbc4ae9a2a72eef210f10b8c30471625f283a11cae37971fbf075a5fb51fa2d5eecc836d9411921e6d8e9cced249759faa067661c1cd244489c4ccf3631c"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccess {String} data.accessToken    Access Token.
 * @apiSuccess {String} data.refreshToken   Refresh Token, 可以使用该token来获取新的accesstoken.
 * @apiSuccess {Number} data.expiration     Access Token  失效的时间,单位秒
 * @apiSuccess {String} data.accountId     Account Id.
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": {
 *         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8",
 *         "expiration": 3600,
 *         "accountId": "65655ab35c7d15d3f86bb7cb"
 *     }
 * }
 */
function access_token () { }

