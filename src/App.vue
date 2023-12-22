<template>
  <div>
    <Header />
    <div class="main-content">
      <Aside />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Aside from './views/Aside.vue';

export default {
  name: 'App',
  components: {
    Header,
    Aside,
  },
};
</script>

<style>
.main-content {
  display: flex;
}
</style>