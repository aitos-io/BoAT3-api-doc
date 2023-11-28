
/**
 * @api {post} /v1 创建路由 message routing
 * @apiVersion 0.0.1
 * @apiName 创建路由 message routing
 * @apiGroup Connector
 *
 * @apiDescription 创建路由 message routing
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_message_routing_create”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiBody {Object} params.templateId        templateId
 * @apiBody {String} params.handler        handler
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_message_routing_create",
 *     "params": {
 *         "connectorId": "65533de28dd2266d791df871",
 *         "templateId": "10000021100",
 *         "handler": "reportData"
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
 * @api {post} /v1 更新路由 message routing
 * @apiVersion 0.0.1
 * @apiName 更新路由 message routing
 * @apiGroup Connector
 *
 * @apiDescription 更新路由 message routing
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_message_routing_update”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.id        message router id
 * @apiBody {String} params.connectorId        connectorId
 * @apiBody {Object} params.templateId        templateId
 * @apiBody {String} params.handler        handler
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_message_routing_update",
 *     "params": {
 *         "id": "654b04ded3f02f3bc4c6eabf",
 *         "connectorId": "65489f888595878944e2cd12",
 *         "templateId": "10000021100",
 *         "handler": "reportData"
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
function message_routing_update () { }



/**
 * @api {post} /v1 创建路由 message routing
 * @apiVersion 0.0.1
 * @apiName 创建路由 message routing
 * @apiGroup Connector
 *
 * @apiDescription 创建路由 message routing
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_message_routing_remove”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.id        message router id
 * @apiBody {String} params.connectorId        connectorId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_message_routing_update",
 *     "params": {
 *         "id": "654b04ded3f02f3bc4c6eabf",
 *         "connectorId": "65489f888595878944e2cd12",
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
 *     "result":""
 * }
 */
function message_routing_update () { }



/**
 * @api {post} /v1 查询 message routing 列表
 * @apiVersion 0.0.1
 * @apiName 查询 message routing 列表
 * @apiGroup Connector
 *
 * @apiDescription 查询 message routing 列表
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_message_routing_list”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.id        message router id
 * @apiBody {String} params.connectorId        connectorId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_message_routing_list",
 *     "params": {
 *         "connectorId": "65489f888595878944e2cd12"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Array} [result]                返回结果
 * @apiSuccess {Object} result                connector
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":[
 *         {
 *             "id":"dddd",
 *             "accountId":"dddd",
 *             "connectorId":"dddd",
 *             "templateId":"dddd",
 *             "handler":"dddd",
 *             "createTime":"dddd",
 *         }
 *     ]
 * }
 */
function message_routing_update () { }
