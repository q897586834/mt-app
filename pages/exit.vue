<template>
  <div class=""/>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'blank',
  middleware: async (ctx)=>{
    axios({
      url:"http://localhost:3000/users/exit",
      methods:'get'
    }).then(({status,data})=>{
      if(status===200&&data&&data.code===0){
        window.location.href="/"
      }
    })
  }
}
</script>
