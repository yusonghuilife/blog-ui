export default {
  data() {
    return {
      uuid: this.createId(),
    };
  },
  methods: {
    createId() {
      return Math.random().toString(36).substring(3, 8);
    },
  },
};
