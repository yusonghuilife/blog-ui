
export default {
  data() {
    return {
      routes: [],
      transition: '',
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transition = 'slide-left';
      } else {
        this.transition = 'slide-right';
      }
    },
  },
};
