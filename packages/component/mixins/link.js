function isValidURL(value) {
  const pattern = new RegExp('^(https?:\\/\\/)?'
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'
    + '((\\d{1,3}\\.){3}\\d{1,3}))'
    + '(\\:\\d+)?'
    + '(\\/[-a-z\\d%@_.~+&:]*)*'
    + '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'
    + '(\\#[-a-z\\d_]*)?$', 'i');
  if (pattern.test(value)) {
    return true;
  }
  return false;
}

export default {
  props: {
    href: {
      type: String,
    },
    replace: {
      type: Boolean,
      default: false,
    },
    isRouter: {
      type: Boolean,
      default: true,
    },
    target: {
      type: String,
      default: '_blank',
      validator(value) {
        return ['_self', '_blank', '_parent', '_top'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      isHttp: false,
    };
  },
  methods: {
    onLinkHandler(e) {
      const isTagA = e.currentTarget.tagName === 'A';
      if (this.isRouter || !isTagA) {
        this.gotoUrl(this.href, this.isRouter);
        e.preventDefault();
        return false;
      }
    },
    gotoUrl(url, isRouter = true) {
      url = url || this.href;
      if (url && url !== '') {
        if (!isRouter || this.isHttp) {
          window.open(url, this.target);
        } else if (isRouter && this.$router) {
          this.replace ? this.$router.replace(url) : this.$router.push(url);
        }
      }
    },
  },
  watch: {
    href: {
      handler(value) {
        if (isValidURL(value)) {
          this.isHttp = true;
        } else {
          this.isHttp = false;
        }
      },
      immediate: true,
    },
  },
};
