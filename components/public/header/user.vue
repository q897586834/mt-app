<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，<span class="username">{{ user }}</span>
      <nuxt-link to="/exit">[退出]</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login"
      >立即登录</nuxt-link>
      <nuxt-link
        to="/register"
        class="register">
        注册</nuxt-link>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
    export default {  
        data(){
          return {
            user: ''
          } 
        },
        async mounted(){
            axios({
                url:'http://localhost:3000/users/getUser',
                method:'get'
            }).then(response=>{
              console.log(response)
                    this.user=data.user
            })
        }
    }
</script>

<style scoped>

</style>
