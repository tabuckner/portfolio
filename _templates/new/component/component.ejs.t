---
to: "components/<%= h.inflection.dasherize(name) %>/<%= h.inflection.dasherize(name) %>.component.ts"
---
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class <%= h.inflection.classify( h.changeCase.snakeCase(name) ) %>Component extends Vue {}
