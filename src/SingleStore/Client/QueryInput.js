/**
 * SingleStore HTTP API Spec
 * This API allows you to execute SQL statements against a SingleStore database.  It supports all statements that can be run in a direct database connection, and uses conventional data type conversion.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import QueryInputArg from './QueryInputArg';

/**
 * The QueryInput model module.
 * @module SingleStore/Client/QueryInput
 * @version 1.0.0
 */
class QueryInput {
    /**
     * Constructs a new <code>QueryInput</code>.
     * @alias module:SingleStore/Client/QueryInput
     * @param sql {String} The SQL statement to execute.
     */
    constructor(sql) { 
        
        QueryInput.initialize(this, sql);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sql) { 
        obj['sql'] = sql;
    }

    /**
     * Constructs a <code>QueryInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:SingleStore/Client/QueryInput} obj Optional instance to populate.
     * @return {module:SingleStore/Client/QueryInput} The populated <code>QueryInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryInput();

            if (data.hasOwnProperty('sql')) {
                obj['sql'] = ApiClient.convertToType(data['sql'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [QueryInputArg]);
            }
            if (data.hasOwnProperty('database')) {
                obj['database'] = ApiClient.convertToType(data['database'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The SQL statement to execute.
 * @member {String} sql
 */
QueryInput.prototype['sql'] = undefined;

/**
 * If specified: A list of arguments to be used in the SQL statement. The command uses question marks (?) for placeholders, which will be replaced by the specified arguments during execution. The command must have exactly as many placeholders as arguments, or the request will fail.  If not specified: The query will be run as-is
 * @member {Array.<module:SingleStore/Client/QueryInputArg>} args
 */
QueryInput.prototype['args'] = undefined;

/**
 * If specified: The database on which the SQL statement must be executed. 
 * @member {String} database
 */
QueryInput.prototype['database'] = undefined;






export default QueryInput;

