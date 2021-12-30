import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#C84B31',
                secondary: '#191919',
                accent: '#475051',
            },
            light: {
                primary: '#C84B31',
                secondary: '#E3E1DD',
                accent: '#e1e6ea',
            },
        },
    },
});
