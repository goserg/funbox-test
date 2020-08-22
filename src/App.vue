<template>
  <div id="app">
    <div class="shadow"></div>
    <div class="container">
      <Title/>
      <CardContainer :products="products"/>
    </div>
  </div>
</template>

<script>

import CardContainer from './components/CardContainer'
import Title from './components/Title'
export default {
  name: 'App',
  components: { Title, CardContainer },
  data () {
    return {
      products: [
        {
          name: 'с фуа-гра',
          mass: '0,5',
          portions: '10',
          gift: 'мышь',
          description: 'Печень утки разварная с артишоками.',
          customerIsHappy: false,
          available: true
        },
        {
          name: 'с рыбой',
          mass: '2',
          portions: '40',
          gift: '2 мыши',
          description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
          customerIsHappy: false,
          available: true
        },
        {
          name: 'с курицей',
          mass: '5',
          portions: '100',
          gift: '5 мышей',
          description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
          customerIsHappy: true,
          available: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: 'Trebuchet MS', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background-image: url("./assets/Pattern_single.png");
  .shadow {
    position: fixed;
    background: linear-gradient(black, transparent, black);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    z-index: 0;
  }
  display: table;
}
.container {
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  margin: auto;
}
</style>
