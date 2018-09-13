<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* @import url('../src/static/'); */
     /* @import url('../src/static/css/font-awesome.min.css');
    @import url('../src/static/css/animate/animate.min.css');
    @import url('../src/static/css/bootstrapValidator/bootstrapValidator.min.css');
    @import url('../src/static/css/iCheck/all.css');
    @import url('../src/static/css/style.css');  */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

html,
body,
#app,
.wrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
