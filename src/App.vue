<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>
    <nav>
      <AppNav />
    </nav>
    <main>
      <router-view />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from ".//components/App/AppHeader";
import AppFooter from "./components/App/AppFooter";
import AppNav from "./components/App/AppNav";
export default {
  components: {
    AppHeader,
    AppFooter,
    AppNav,
  },
};
</script>


<style>
#app {
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

ul {
  padding-left: 0;
  list-style: none;
}

header,
nav,
footer {
  border: 1px solid black;
  flex: 1;
}

main {
  flex: 5;
}
</style>
