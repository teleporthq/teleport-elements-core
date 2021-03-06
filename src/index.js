const definitions = require('./definitions/definitions.json')
const mappingHtml = require('./definitions/mapping-html.json')
const mappingReact = require('./definitions/mapping-react.json')
const mappingReactNative = require('./definitions/mapping-react-native.json')
const mappingNext = require('./definitions/mapping-next.json')
const mappingNuxt = require('./definitions/mapping-nuxt.json')
const mappingVue = require('./definitions/mapping-vue.json')

const core = {
  definitions: definitions,
  mappingHtml: mappingHtml,
  mappingReact: mappingReact,
  mappingReactNative: mappingReactNative,
  mappingNext: mappingNext,
  mappingNuxt: mappingNuxt,
  mappingVue: mappingVue,
}

module.exports = core
