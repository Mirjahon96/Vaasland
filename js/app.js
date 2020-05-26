new Vue({
  el: "#Vaasland",
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: false,
      // App Bar
      links: [
        { name: "Home", href: "#Vassland" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ],
      // Services
      servicesSelect: ".com",
      names: [".com", ".net", ".org", ".uz", ".uk"]
    };
  },
  methods: {}
});
