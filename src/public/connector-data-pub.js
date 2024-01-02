
/**
 * @api {post} /v1 查询一条device数据
 * @apiVersion 0.0.1
 * @apiName 查询一条device数据
 * @apiGroup Public
 *
 * @apiDescription 查询一条device数据
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_pub_connector_data_findOne”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiBody {Object} params.filter        查询条件，里面和mongodb查询条件语法一致,如 {"type":1}
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_pub_connector_data_findOne",
 *     "params": {
 *         "connectorId":"658a4e946bcef62ee2f2df7f",
 *         "filter":{
 *             "duUnitId": "0x827720d0d8f4cdf52d0c50a487c1f5e827f985c505dd07cb70d9816cfd784ee3"
 *         }
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
 *     "result": {
 *         "id": "657c1f079dc6a28c6bf997dd",
 *     }
 * }
 */
function deviceInfo () { }



/**
 * @api {post} /v1 查询多条device数据
 * @apiVersion 0.0.1
 * @apiName 查询多条device数据
 * @apiGroup Public
 *
 * @apiDescription 查询多条device数据
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_pub_connector_data_find”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiBody {Object} [params.filter]        查询条件，里面和mongodb查询条件语法一致,如 {"type":3},默认为{}
 * @apiBody {Object} [params.sort]        查询条件，里面和mongodb查询条件语法一致,如倒序 {"timestamp":-1},默认为{}
 * @apiBody {number} [params.limit]        每页的条数，默认为10
 * @apiBody {number} [params.skip]         跳过多少条数据，计算公式为 (pageNo-1)*limit，默认为0
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_pub_connector_data_find",
 *     "params": {
 *         "connectorId":"658a4e946bcef62ee2f2df7f",
 *         "filter":{},
 *         "sort":{
 *             "craeteTime":-1
 *         },
 *         "limit":2,
 *         "pageNumber":2,
 *         "skip":0
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
 *     "result": {
 *         "id": "657c1f079dc6a28c6bf997dd",
 *     }
 * }
 */
function deviceListInfo () { }


/**
 * @api {post} /v1 查询聚合device数据
 * @apiVersion 0.0.1
 * @apiName 查询聚合device数据
 * @apiGroup Public
 *
 * @apiDescription 查询聚合device数据
 *
 * @apiBody {String} jsonrpc               2.0
 * @apiBody {String} id           id
 * @apiBody {String} method        接口标识,值为“boat3_pub_connector_data_aggregate”
 * @apiBody {Object} params        参数
 * @apiBody {String} params.connectorId        connectorId
 * @apiBody {array} [params.pipeline]        查询条件，里面和mongodb查询条件语法一致,如 {"type":3},默认为[]
 * @apiBody {Object} [params.pipeline]        查询条件，里面和mongodb查询条件语法一致,如 {"type":3},默认为[]
 * @apiBody {Object} [params.sort]        查询条件，里面和mongodb查询条件语法一致,如倒序 {"timestamp":-1},默认为{}
 * @apiBody {number} [params.limit]        每页的条数，默认为10
 * @apiBody {number} [params.skip]         跳过多少条数据，计算公式为 (pageNo-1)*limit，默认为0
 * @apiParamExample {json} Request-Example:
 * {
 *     "jsonrpc": "2.0",
 *     "id": "11",
 *     "method": "boat3_pub_connector_data_aggregate",
 *     "params": {
 *         "connectorId":"65489f888595878944e2cd12",
 *         "pipeline":[
 *             {
 *                 "$group": {
 *                     "_id": "$duUnitId",
 *                     "count": {
 *                         "$sum": 1
 *                     }
 *                 }
 *             },
 *             {
 *                 "$project": {
 *                     "_id": 0,
 *                     "id": "$_id",
 *                     "count": 1
 *                 }
 *             },
 *             {
 *                 "$sort": {
 *                     "count": 1
 *                 }
 *             },
 *             {
 *                 "$limit": 10
 *             },
 *             {
 *                 "$skip": 0
 *             }
 *         ]
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
 *     "result": {
 *         "id": "657c1f079dc6a28c6bf997dd",
 *     }
 * }
 */
function deviceAggInfo () { }
