<template>
  <header class="re my_header">
    <img class="ab my_back" @click="$router.go(-1)" src="@/assets/img/back.png">
    <span class="my_head_b"><b>{{title}}</b></span>
    <img v-show="introShow" @click="routerToInstru" class="ab my_instruction" src="@/assets/img/instructions.png"
         alt="">
    <img v-show="showSetUp" class="ab my_instruction" src="@/assets/img/setup.png" alt="">
  </header>
</template>

<script>
  export default {
    name: "Head",
    props: ['data'],
    data() {
      return {
        showSetUp: false,
        title: '',
        introShow: true,
      }
    },
    methods: {
      routerToInstru() {
        this.$emit("listenHeadEvent")
      }
    },
    watch: {
      data: {
        handler(newVal, oldVal) {
          if (newVal.showSetUp) {
            this.introShow = false;
            this.showSetUp = newVal;
          }
          this.title = newVal;
          if (newVal.introShow != undefined && newVal.introShow != null) {
            this.introShow = newVal.introShow;
          }
          if (newVal.title) {
            this.title = newVal.title;
          }

        },
        immediate: true,
        deep: true,
      }
    }
  }
</script>

<style scoped src="../../assets/css/head.css"></style>
<style scoped src="../../assets/css/common/common.css"></style>
