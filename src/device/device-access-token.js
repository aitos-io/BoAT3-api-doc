
/**
 * @api {post} /v1 创建设备 access token
 * @apiVersion 0.0.1
 * @apiName 创建设备 access token
 * @apiGroup Device
 *
 * @apiDescription 创建设备 access token
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_device_accesstoken_create”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId       connectorId
 * @apiBody {Object} params.username        用户名
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_device_accesstoken_create",
 *     "params": {
 *         "connectorId": "654b5bb07c70d93343cde55c",
 *         "username": "test22"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} result                返回结果
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":""
 * }
 */
function boat3_device_accesstoken_create () { }


/**
 * @api {post} /v1 删除设备 access token
 * @apiVersion 0.0.1
 * @apiName 删除设备 access token
 * @apiGroup Device
 *
 * @apiDescription 删除设备 access token
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_device_accesstoken_remove”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.deviceId        deviceId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_device_accesstoken_remove",
 *     "params": {
 *         "id": "654b04ded3f02f3bc4c6eabf"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} result                返回结果
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":""
 * }
 */
function device_info () { }



/**
 * @api {post} /v1 查看设备 Access token 列表
 * @apiVersion 0.0.1
 * @apiName 查看设备 Access token 列表
 * @apiGroup Device
 *
 * @apiDescription 查看设备 Access token 列表
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_device_accesstoken_list”
 * @apiBody {Object} params        参数
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_device_accesstoken_list",
 *     "params": {
 *        "connectorId":"ddddsss"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Array} result                返回结果
 * @apiSuccess {Object} result               device
 * @apiSuccess {Object} result.id                id
 * @apiSuccess {Object} result.connectorId                connectorId
 * @apiSuccess {Object} result.username                username
 * @apiSuccess {Object} result.accessToken                accessToken
 * @apiSuccess {Object} result.createTime                创建时间戳，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":[
 *     {
 *         "id":"0xddddd",
 *         "connectorId":"0xddddd",
 *         "username":"0xddddd",
 *         "accessToken":"0xddddd",
 *         "createTime":122233322,
 *     }
 *     ]
 * }
 */
function boat3_device_accesstoken_list () { }


