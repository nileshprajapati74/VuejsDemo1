<template>
  <div class="layoutmain">
    <div class="wrapper">
      <my-header></my-header>
      <my-sidebar></my-sidebar>
      <router-view></router-view>
      <my-footer></my-footer>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "my-header": Header,
    "my-sidebar": Sidebar,
    "my-footer": Footer
  },
  mounted() {
    // console.log("============ Layout");
    // $(document).ready(function() {
    // console.log("=============asdasdasd");
    // });
  }
};
</script>