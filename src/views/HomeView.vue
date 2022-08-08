<template>
  <div>
    <div class="box">New!! {{billboard.content}}</div>
  </div>
</template>

<script>
import { getBillboard } from '@/api/billboard'
export default {
  name: 'HomeView',
  data(){
    return {
      billboard: {
        content: ''
      }
    }
  },
  created(){
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard(){
      getBillboard().then((value)  => {
        const {data} = value
        this.billboard = data
      })
    }
  }
}
</script>
