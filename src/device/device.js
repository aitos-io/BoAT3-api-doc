
/**
 * @api {post} /v1 导入设备
 * @apiVersion 0.0.1
 * @apiName 导入设备
 * @apiGroup Device
 *
 * @apiDescription 导入设备
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_message_routing_create”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.deviceId        设备id
 * @apiBody {Object} params.publicKey        设备的公钥
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_message_routing_create",
 *     "params": {
 *         "deviceId": "0x65533de28dd2266d791df871",
 *         "publicKey": "0x10000021100"
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
function message_routing_create () { }


/**
 * @api {post} /v1 查看设备信息
 * @apiVersion 0.0.1
 * @apiName 查看设备信息
 * @apiGroup Device
 *
 * @apiDescription 查看设备信息
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_message_routing_update”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.deviceId        deviceId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_device_info",
 *     "params": {
 *         "deviceId": "654b04ded3f02f3bc4c6eabf"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} result                返回结果
 * @apiSuccess {Object} deviceId                deviceId
 * @apiSuccess {Object} publicKey                设备公钥
 * @apiSuccess {Object} createTime                创建时间戳，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":{
 *         "deviceId":"0xddddd",
 *         "publicKey":"0xddddd",
 *         "createTime":122233322,
 *     }
 * }
 */
function device_info () { }



/**
 * @api {post} /v1 查看设备列表
 * @apiVersion 0.0.1
 * @apiName 查看设备列表
 * @apiGroup Device
 *
 * @apiDescription 查看设备列表
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_device_list”
 * @apiBody {Object} params        参数
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_device_list",
 *     "params": {
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Array} result                返回结果
 * @apiSuccess {Object} result               device
 * @apiSuccess {Object} result.deviceId                deviceId
 * @apiSuccess {Object} result.publicKey                设备公钥
 * @apiSuccess {Object} result.createTime                创建时间戳，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":[
 *     {
 *         "deviceId":"0xddddd",
 *         "publicKey":"0xddddd",
 *         "createTime":122233322,
 *     }
 *     ]
 * }
 */
function boat3_device_list () { }


/**
 * @api {post} /iot/report/:accountId/:connectorId 设备上报数据
 * @apiVersion 0.0.1
 * @apiName 设备上报数据
 * @apiGroup Device
 *
 * @apiDescription 设备上报数据
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer e149a2d750bc650c7cd44b861e4f3edf1bbba8f3ab82b446a4799dc8ceb02908"
 *
 * @apiParam {String} accountId  accountId
 * @apiParam {String} connectorId  connectorId
 * @apiParamExample {json} Request-Example:
 *     {
 *       "accountId": “dddss”，
 *       "connectorId": “dddss”
 *     }
 *
 *
 * @apiBody {String} data         设备采集的数据，采用rlp编码
 * @apiBody {String} proof        设备上报的proof格式，采用rlp编码
 * @apiParamExample {json} Request-Example:
 * {
 *     "data": "0xeba0e53bd24c8e44ee2d9a4000fc745d9ce68f4fee3bbd2f932d4dcd868145f9274d84373535318436343431",
 *     "proof": "0xf8a9983635353432303037376262323166373562626664343830328c313130313131313031313131944f36c7045d69c5d475efa4daa834596cdbf78e51843030303084655433aea05cb93eb1b5b5737a9d250746ef07324fea81144005f3fa09163b3938b81e14c8b84145d33a22a8d2b5e96e3fbc8a3e589c0d86bc59788c4d42b55cafc38af00a5e5c48d55a0778636d9bc26a47f89143ae95fe3596d14ba8de248b511f842f6295f71c"
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {object} result                返回结果
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":""
 * }
 */
function boat3_device_report () { }
