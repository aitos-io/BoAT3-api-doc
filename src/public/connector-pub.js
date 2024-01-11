/**
 * @api {post} /v1 查询公开connector 列表
 * @apiVersion 0.0.1
 * @apiName 查询公开connector 列表
 * @apiGroup Public
 *
 * @apiDescription 查询公开connector 列表
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_pub_connector_list”
 * @apiBody {Object} params        参数
 * @apiBody {number} params.limit        每页记录数，默认10
 * @apiBody {number} params.skip        跳过多少条记录，默认0，计算公式(pageNo-1)*limit,pageNo 为第几页
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_pub_connector_list",
 *     "params": {
 *          "limit":10,
 *          "skip":0
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccess {String} result.id                connectorId
 * @apiSuccess {String} result.name                name
 * @apiSuccess {String} result.description                description
 * @apiSuccess {String} result.operatorAddress                operatorAddress
 * @apiSuccess {Object} result.config                配置信息
 * @apiSuccess {String} result.config.network                network
 * @apiSuccess {String} result.config.templates                templates
 * @apiSuccess {String} result.config.contracts                contracts
 * @apiSuccess {String} result.createTime       connector 创建的时间，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": [
 *     {
 *         "id": "657c1f079dc6a28c6bf997dd",
 *         "accountId": "65541d697bb21f75bbfd47fd",
 *         "name": "ttttt1111",
 *         "description": "description",
 *         "operatorAddress": "0xF74Fe9e10873cbA8a98B1D4d25531eEbF50EEcb9",
 *         "config":{
 *             "network":"",
 *             "templates":"",
 *             "contracts":"",
 *         },
 *         "createTime": 1702633223117
 *     }
 *     ]
 * }
 */
function connectorlist () { }


/**
 * @api {post} /v1 查询connector 信息
 * @apiVersion 0.0.1
 * @apiName 查询connector 信息
 * @apiGroup Public
 *
 * @apiDescription 查询connector 信息，
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_pub_connector_info”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_pub_connector_info",
 *     "params": {
 *         "connectorId":"65489f888595878944e2cd12"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccess {String} result.id                connectorId
 * @apiSuccess {String} result.name                name
 * @apiSuccess {String} result.description                description
 * @apiSuccess {String} result.operatorAddress                operatorAddress
 * @apiSuccess {Object} result.config                配置信息
 * @apiSuccess {String} result.config.network                network
 * @apiSuccess {String} result.config.templates                templates
 * @apiSuccess {String} result.config.contracts                contracts
 * @apiSuccess {String} result.createTime       connector 创建的时间，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": {
 *         "id": "657c1f079dc6a28c6bf997dd",
 *         "accountId": "65541d697bb21f75bbfd47fd",
 *         "name": "ttttt1111",
 *         "description": "description",
 *         "operatorAddress": "0xF74Fe9e10873cbA8a98B1D4d25531eEbF50EEcb9",
 *         "config":{
 *             "network":"",
 *             "templates":"",
 *             "contracts":"",
 *         },
 *         "createTime": 1702633223117
 *     }
 * }
 */
function connectorInfo () { }

