<template>
  <v-app id="main">
    <PlaceHolder />
  </v-app>
</template>

<script>
import PlaceHolder from './components/PlaceHolder';

export default {
  name: 'App',

  components: {
    PlaceHolder,
  },

  data: () => ({}),

  mounted() {
    window.addEventListener('message', (e) => {});
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        axios.post('https://boilerplate/close');
      }
    });
  },
  unmounted() {
    window.removeEventListener('message');
    window.removeEventListener('keydown');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#main {
  font-family: montserrat;
  background: none !important;
}
</style>
