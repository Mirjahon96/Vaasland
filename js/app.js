new Vue({
  el: "#Vaasland",
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: false,
      // App Bar
      links: [
        { name: "Home", href: "#Vaasland" },
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
      ],

      // Features
      featuresBox: [
        {
          img: "img/icon1.png",
          title: "Shared Hosting",
          text:
            "Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"
        },
        {
          img: "img/icon2.png",
          title: "Domain Sale",
          text:
            "Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"
        },
        {
          img: "img/icon3.png",
          title: "Reduce Complexity",
          text:
            "Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"
        },
        {
          img: "img/icon4.png",
          title: "Access Globally",
          text:
            "Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"
        },
        {
          img: "img/icon5.png",
          title: "Move Faster",
          text:
            "Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"
        },
        {
          img: "img/icon6.png",
          title: "Easily Integrate",
          text:
            "Hunky dory barney fanny around up the duff no biggie loo cup of tea jolly good ruddy say arse.!"
        }
      ]
    };
  },
  methods: {}
});
