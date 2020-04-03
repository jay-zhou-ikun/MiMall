<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  // mounted() {
  //   this.getUser();
  //   this.getCartCount();
  // },
  // mothods: {
  //   getUser() {
  //     this.axios.get("/user").then((res={}) => {
  //       this.$store.dispatch("saveUserName", res.username);
  //       console.log(res.username)
  //     });
  //   },
  //   getCartCount() {
  //     this.axios.get("/carts/products/sum").then((res=0) => {
  //       this.$store.dispatch("saveCartCount", res);
  //       console.log(res)
  //     });
  //   }
  // }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
