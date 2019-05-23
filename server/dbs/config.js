export default {
    dbs: "mongodb://127.0.0.1:27017/student",
    redis: {
      get host(){
        return "127.0.0.1"
      },
      get port(){
        return 6379
      }
    },
    smtp: {
      get host(){
        return "smtp.qq.com"
      },
      get user(){
        return "897586834@qq.com"
      },
      get pass(){
        return "pohmmddblntybbea"
      },
      get code(){
        return ()=>{
          return Math.random().toString(16).slice(2,6).toUpperCase()
        }
      },
      get expire(){
        return ()=>{
          return parseInt(new Date().getTime()) + (60*1000);
        }
      }
    },
    sign: "6ce8fc068b22ef6606e2eadc6c5a5ac1",
    requestUrl: "http://cp-tools.cn"
  }
  