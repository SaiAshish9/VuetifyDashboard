import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark:true,
    themes: {
      light: {
        primary: {
          base: "#9652ff",
        },
        ongoing: "#ffaa2c",
        complete: "#3cd1c2",
        success: "#3cd1c2",
        info: "#ffaa2c",
        error: "#f83e70",
        overdue: "#f83e70",
        background: "#f5f5f5",
      },
      dark: {
        background: "#000",
        primary: {
          base: "#333",
        },
        ongoing: "#ffaa2c",
        complete: "#3cd1c2",
        success: "#3cd1c2",
        info: "#ffaa2c",
        error: "#f83e70",
        overdue: "#f83e70",
      },
      options: {
        customProperties: true,
      },
    },
  },
  icons: {
    iconfont: "md",
  },
});
