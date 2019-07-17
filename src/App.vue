<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn-action {
  background-color: #fff;
  border: none;
  bottom: 0;
  color: #ff3796;
  cursor: pointer;
  display: block;
  outline: none;
  position: fixed;
  text-transform: uppercase;
  width: 100vw;
  font-weight: 300;
  border-radius: 32px;
  font-size: 24px;
  height: 56px;
  max-width: 352px;
  position: relative;
  display: table;
  margin: 0 auto;
}
.btn-action[disabled] {
  background-color: hsla(0, 0%, 100%, 0.4);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
}
.bg {
  background-image: linear-gradient(
    -23deg,
    #00e1cd,
    #4e79ed 52%,
    #635df5 73%,
    #7c3cff
  );
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}
</style>
