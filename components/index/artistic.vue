<template>
  <div>
    <section class="m-istyle">
      <dl @mouseover="over">
        <dt>有格调</dt>
        <dd :class="{active:kind==='all'}" kind="all" keyword="景点">全部</dd>
        <dd :class="{active:kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
        <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
        <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影">电影演出</dd>
        <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">品质出游</dd>
        <ul v-for="(item,index) in menu" :key="index">
          <li>{{item}}</li>
        </ul>
      </dl>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      list: {
        all: [],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    menu: function() {
      return this.list[this.kind];
    }
  },
  methods: {
    over(e) {
      //console.log(e.target.getAttribute("kind"));
      this.kind = e.target.getAttribute("kind");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/index/artistic.scss";
</style>