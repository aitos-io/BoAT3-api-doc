/**
 * @api {post} /v1 创建access token
 * @apiVersion 0.0.1
 * @apiName 创建access token
 * @apiGroup Account
 *
 * @apiDescription 创建access token
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_account_token_create”
 * @apiBody {Object} params        参数
 * @apiBody {number} params.expiration       Access Token  失效的时间,单位秒
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_account_token_create",
 *     "params": {
 *         "expiration": 120
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":
 * }
 */
function accountTokenCreate () { }



/**
 * @api {post} /v1 删除 access token
 * @apiVersion 0.0.1
 * @apiName 删除 access token
 * @apiGroup Account
 *
 * @apiDescription 删除 access token，
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_account_token_remove”
 * @apiBody {Object} params        参数
 * @apiBody {number} params.id       Access Token 记录的ID
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_account_token_create",
 *     "params": {
 *         "id": "6544d355d2a31594095ee708"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":
 * }
 */
function accountTokenRemove () { }



/**
 * @api {post} /v1 获取 accessToken 列表
 * @apiVersion 0.0.1
 * @apiName 获取 accessToken 列表
 * @apiGroup Account
 *
 * @apiDescription 获取 accessToken 列表，
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_account_token_list”
 * @apiBody {Object} params        参数
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_account_token_create",
 *     "params": {
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccess {String} result.id                返回结果
 * @apiSuccess {String} result.accountId         ownerId
 * @apiSuccess {String} result.accessToken       accessToken
 * @apiSuccess {number} result.expiresIn       失效时间，单位秒
 * @apiSuccess {number} result.createTime       创建时间，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": [
 *         {
 *             "id":"ddddddd",
 *             "accountId":"ddddddd",
 *             "accessToken":"ddddddd",
 *             "expiresIn":120,
 *             "createTime":1699612577000,
 *         }
 *     ]
 * }
 */
function accountTokenList () { }
