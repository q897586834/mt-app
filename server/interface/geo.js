import Router from "koa-router";
import Config from '../dbs/config';
import axios from "./utils/axios"
import mongoose from "mongoose"
import province from '../dbs/models/province'
import menu from '../dbs/models/menu'
let router = new Router({
  prefix: "/geo"
})
const sign = Config.sign;

/**获取地理位置 */
router.get('/getPosition', async (ctx) => {
  let {
    status,
    data: {
      province,
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})
/**获取左侧菜单 */
router.get('/menu', async (ctx) => {
    const menu = mongoose.model('Menu')
    let result = await menu.find()
    ctx.body = {
      code: 200,
      message: result
    }
    // let {status, data: {menu}} = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`);
    // if(status === 200) {
    //   ctx.body = {
    //     menu
    //   }
    // } else {
    //   ctx.body = {
    //     menu: []
    //   }
    // }
})
/**热门城市搜索 */
router.get('/province', async (ctx) => {
  const province = mongoose.model('Province')
  let result = await province.find();
  console.log(result);
  ctx.body = {
    code: 200,
    message: result
  }
  // ctx.body = {
  //   province: province.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }

  // let {status, data: {province}} = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
  // ctx.body = {
  //   province:status === 200 ? province : []
  // }
})

export default router;