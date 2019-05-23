<template>
    <div class="m-geo">
        <i class="el-icon-location">{{city}}</i>
        <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
        [香河 廊坊 天津]
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                provice: '',
                city:''
            }
        },
        async mounted(){
            axios({
                url:'http://localhost:3000/geo/getPosition',
                method:'get'
            }).then(response =>{
                // console.log(response)
                this.provice=response.data.provice
                this.city=response.data.city
            })
        }
    }
</script>

<style scoped>

</style>