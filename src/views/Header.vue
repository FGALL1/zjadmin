<template>
  <header>
    <!-- 在这里放置页眉内容 -->
    <h1>支教管理系统</h1>
    <nav>
      <ul>
        <li class="personSpace"><a href="/">个人空间</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
header {
  background-image: url('../assets/headerBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
}

h1 {
  text-align: center;
}

nav {
  margin-top: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li.personSpace {

  text-align: right;
}

a {
  text-decoration: none;
  color: #006400;
}
</style>