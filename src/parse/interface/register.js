import {FormatParser} from './parser'

// ============================================================================
// Type definitions
// ============================================================================

/**
 * @typedef Cite.plugins.input~format
 * @type String
 */

/**
 * @typedef Cite.plugins.input~parser
 * @type Object
 *
 * @property {Cite.plugins.input~parse} data
 * @property {Cite.plugins.input~parseAsync} dataAsync
 * @property {Cite.plugins.input~typeParser|Cite.plugins.input~predicate|RegExp} type
 */

/**
 * @callback Cite.plugins.input~parse
 * @param {InputData} input
 * @return parsed data
 */

/**
 * @async
 * @callback Cite.plugins.input~parseAsync
 * @param {InputData} input
 * @return parsed data
 */

/**
 * @typedef Cite.plugins.input~typeParser
 * @type Object
 *
 * @property {Cite.plugins.input~predicate|RegExp} predicate
 * @property {Cite.plugins.input~dataType} dataType
 * @property {Cite.plugins.input~propertyConstraint|Array<Cite.plugins.input~propertyConstraint>} propertyConstraint
 * @property {Cite.plugins.input~elementConstraint|Array<Cite.plugins.input~elementConstraint>} elementConstraint
 * @property {Cite.plugins.input~format|Array<Cite.plugins.input~format>} extends
 */

/**
 * @callback Cite.plugins.input~predicate
 * @param {InputData} input
 * @return {Boolean} pass
 */

/**
 * @typedef Cite.plugins.input~dataType
 * @type String
 */

/**
 * @typedef Cite.plugins.input~propertyConstraint
 * @type Object
 * @property {String|Array<String>} [props=[]]
 * @property {String} [match='every']
 * @property {Cite.plugins.input~valuePredicate} [value]
 */

/**
 * @callback Cite.plugins.input~valuePredicate
 * @param value
 * @return {Boolean} pass
 */

/**
 * @typedef Cite.plugins.input~elementConstraint
 * @type Cite.plugins.input~format
 */

// ============================================================================
// Interface
// ============================================================================

/**
 * See the relevant tutorial: {@tutorial input_plugins}
 *
 * @access public
 * @memberof Cite.plugins.input
 *
 * @param {Cite.plugins.input~format} format - input format name
 * @param {Cite.plugins.input~parserObject} parsers - parsers
 *
 * @tutorial input_plugins
 */
export const add = (format, parsers) => {
  const formatParser = new FormatParser(format, parsers)
  formatParser.validate()
  formatParser.add()
}