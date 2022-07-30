<template>
  <div>
    <div class="box">New!! {{billboard}}</div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return {
      billboard: 'Version Update'
    }
  }
}
</script>
