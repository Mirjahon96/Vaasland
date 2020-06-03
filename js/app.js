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
      names: [".com", ".net", ".org", ".uz", ".uk"],

      domens: [
        { name: ".com", cost: "$6.50" },
        { name: ".net", cost: "$10" },
        { name: ".co", cost: "$12" },
        { name: ".info", cost: "$7.5" },
        { name: ".org", cost: "$11" }
      ]
    };
  },
  methods: {}
});
