/**
 * @api {post} /v1 创建 connector
 * @apiVersion 0.0.1
 * @apiName 创建 connector
 * @apiGroup Connector
 *
 * @apiDescription 创建 connector
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_connector_register”
 * @apiBody {Object} params        参数
 * @apiBody {number} params.name       connector name
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_connector_register",
 *     "params": {
 *         "name":"test243eee"
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
 * @apiSuccess {String} result.createTime       connector 创建的时间，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": {
 *         "id": "656567e85c7d15d3f86bb7cf",
 *         "operatorAddress": "0x9D10126E0eF3C49887b150a3760ecFf0585fc62d",
 *         "createTime": 1701144552416,
 *         "endpoints": {
 *             "https": "https://dev.boat3.aitos.io/iot/report/65655ab35c7d15d3f86bb7cb/656567e85c7d15d3f86bb7cf",
 *             "mqtt": "mqtt://dev.boat3.aitos.io:1883",
 *             "mqttTopic": "boat3:device:report:65655ab35c7d15d3f86bb7cb:656567e85c7d15d3f86bb7cf"
 *         }
 *     }
 * }
 */
function connectorRegister () { }



/**
 * @api {post} /v1 上传用户代码
 * @apiVersion 0.0.1
 * @apiName 上传用户代码
 * @apiGroup Connector
 *
 * @apiDescription 删除 access token，
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_connector_upload”
 * @apiBody {Object} params        参数
 * @apiBody {number} params.fileContent       文件内容，使用base64编码
 * @apiBody {number} params.connectorId       connectorId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_connector_upload",
 *     "params": {
 *         "fileContent":"ZmFzZGZhZmFmYXNmYXNmYXM=",
 *         "connectorId":"65489f888595878944e2cd12"
 *     }
 * }
 *
 * @apiSuccess {String} id                id
 * @apiSuccess {String} jsonrpc                 2.0
 * @apiSuccess {Object} [result]                返回结果
 * @apiSuccess {String} result.fileHash         上传成功后返回的hash
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result":{
 *         "fileHash":"0xddddddddd"
 *     }
 * }
 */
function connectorUpload () { }



/**
 * @api {post} /v1 查询connector 信息
 * @apiVersion 0.0.1
 * @apiName 查询connector 信息
 * @apiGroup Connector
 *
 * @apiDescription 查询connector 信息，
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_connector_info”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_connector_info",
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
 * @apiSuccess {String} result.createTime       connector 创建的时间，单位毫秒
 * @apiSuccessExample {json} Success
 * {
 *     "id": "11",
 *     "jsonrpc": "2.0",
 *     "result": {
 *         "id": "656567e85c7d15d3f86bb7cf",
 *         "operatorAddress": "0x9D10126E0eF3C49887b150a3760ecFf0585fc62d",
 *         "createTime": 1701144552416,
 *         "endpoints": {
 *             "https": "https://dev.boat3.aitos.io/iot/report/65655ab35c7d15d3f86bb7cb/656567e85c7d15d3f86bb7cf",
 *             "mqtt": "mqtt://dev.boat3.aitos.io:1883",
 *             "mqttTopic": "boat3:device:report:65655ab35c7d15d3f86bb7cb:656567e85c7d15d3f86bb7cf"
 *         }
 *     }
 * }
 */
function connectorInfo () { }
/**
 * @api {post} /v1 connector 执行设备上报的数据
 * @apiVersion 0.0.1
 * @apiName 执行设备上报的数据
 * @apiGroup Connector
 *
 * @apiDescription 执行设备上报的数据，
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_connector_exec”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.data        设备的采集数据
 * @apiBody {Object} params.proof        proof
 * @apiBody {String} params.proof.connectorId        connectorId
 * @apiBody {String} params.proof.templateId        templateId
 * @apiBody {String} params.proof.deviceId        设备id
 * @apiBody {String} params.proof.algorithmSuite   算法组合，目前只支持keccak256和ecdsa
 * @apiBody {number} params.proof.timestamp       时间戳
 * @apiBody {String} params.proof.dataHash        params.data 字段的hash
 * @apiBody {String} params.proof.signature      设备签名 signature
 * @apiBody {String} params.proof.oracleSignature      oracle 签名
 * @apiParamExample {json} Request-Example:
 * {
 *     "id": "1700625329",
 *     "jsonrpc": "2.0",
 *     "method": "boat3_connector_exec",
 *     "params": {
 *         "data": "0xeba0f66c51f74e5443085ea24500472ac0225b15315f26ef646fb1e74ad212af628984383237308431313537",
 *         "proof": {
 *             "connectorId": "655c751f4fe4a49fbe289572",
 *             "templateId": "200222211",
 *             "deviceId": "0x5dc0b2f216a4826f965887c3a2425426d8a9c8a3",
 *             "algorithmSuite": "0000",
 *             "timestamp": 1700625330
 *             "dataHash": "0xa7e397658be2df7629600145ab8775b402bd481bb20233bc61081f9db20f6434",
 *             "signature": "0x286259e78bd221c4500149ebea7ddbb9694386e96f8529ba3282b0ac06142bd867d300c9fb36be57cbe3bd4e9357d60bcce941cd3a262ae4345477f42c5499ad1b",
 *             "oracleSignature": "0xb97463a9cf56fc2f08cb28babf8f489f0dd91c04513dd2add74d4d54be957cb07864765c6ebbb1031bfbba87e5776762d3d948dd1cf25226e2302f48155172cb1c"
 *         }
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
 *     "result":""
 * }
 */
function connectorExec () { }


/**
 * @api {post} /v1 connector 设置vm环境变量
 * @apiVersion 0.0.1
 * @apiName 设置vm环境变量
 * @apiGroup Connector
 *
 * @apiDescription 设置vm环境变量，
 *
 * @apiHeader {String} Authorization Access token
 * @apiHeaderExample {Header} Header-Example
 * "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NTY1NWFiMzVjN2QxNWQzZjg2YmI3Y2IiLCJpYXQiOjE3MDExNDExNzEsImV4cCI6MTcwMTE0NDc3MX0.BrgkMHC7v6ThOR9-kF-KUpOU9vwSTN6lPie-aMyw3T8"
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_connector_env”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiBody {Array} params.vmEnvs        proof
 * @apiBody {String} params.vmEnvs.name  环境变量名称
 * @apiBody {String} params.proof.value        环境变量值
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_connector_env",
 *     "params": {
 *         "connectorId":"655c751f4fe4a49fbe289572",
 *         "vmEnvs":[
 *             {"name":"dbKey","value":"VTc5KHn0Ec4tmD5L40ebElejlRZUeT8K1nQAUZXe2PEeIRlGYPF550d5zt0kGsSv"},
 *             {"name":"dd","value":"tttt"}
 *         ]
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
 *     "result":""
 * }
 */
function updateEnvironmentVariables () { }
