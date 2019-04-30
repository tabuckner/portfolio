---
to: "components/<%= h.inflection.dasherize(name) %>/index.vue"
---
<template src="./<%= h.inflection.dasherize(name) %>.html"></template>
<style src="./<%= h.inflection.dasherize(name) %>.scss" lang="scss"></style>
<script src="./<%= h.inflection.dasherize(name) %>.ts" lang="ts"></script>
