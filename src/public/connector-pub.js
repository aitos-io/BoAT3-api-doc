
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
 * @apiSuccess {String} result.operatorAddress                operatorAddress
 * @apiSuccess {Object} result.endpoints                endpoints
 * @apiSuccess {String} result.endpoints.https          设备使用https访问的url地址
 * @apiSuccess {String} result.endpoints.mqtt           设备使用mqtt访问的地址
 * @apiSuccess {String} result.endpoints.mqttTopic      设备使用mqtt访问的topic
 * @apiSuccess {Array} result.vmEnvs        环境变量
 * @apiSuccess {String} result.vmEnvs.name  环境变量名称
 * @apiSuccess {String} result.vmEnvs.value        环境变量值
 * @apiSuccess {String} result.vmEnvs.envType      "system"：系统内置的，"custom": 用户自定义的
 * @apiSuccess {String} result.createTime       connector 创建的时间，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": {
 *         "id": "657c1f079dc6a28c6bf997dd",
 *         "accountId": "65541d697bb21f75bbfd47fd",
 *         "name": "ttttt1111",
 *         "operatorAddress": "0xF74Fe9e10873cbA8a98B1D4d25531eEbF50EEcb9",
 *         "createTime": 1702633223117
 *     }
 * }
 */
function connectorInfo () { }

