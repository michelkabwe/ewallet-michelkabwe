<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/Form">ADD CARD</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

body {
    height: 100vh;
    background-color: #413F3E;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #413F3E;
    justify-content: center;
    display: flex;
    margin-top: 100px;

}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color:white;
}
</style>
