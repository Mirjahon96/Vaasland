new Vue({
  el: "#Vaasland",
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: false,
      // App Bar
      links: [
        { name: "Home", href: "#Vaasland" },
        { name: "About", href: "#services" },
        { name: "Services", href: "#features" },
        { name: "Products", href: "#cta" },
        { name: "Price", href: "#pricing" }
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
      ],

      // Pricing
      pricingTab: null,
      priceHeaders: [
        {
          text: "Memory",
          align: "center",
          value: "memory"
        },
        { text: "Vspus", align: "center", value: "vspus" },
        { text: "SSD Disk", align: "center", value: "ssdDisk" },
        { text: "Transfer", align: "center", value: "transfer" },
        { text: "Price", align: "center", value: "price" },
        { text: "Plan", align: "center", value: "plan" }
      ],
      dataPrice: [
        {
          memory: "1 GB",
          vspus: "1 vCPU",
          ssdDisk: "125GB",
          transfer: "1 TB",
          price: "$10/mo $0.025/hr",
          plan: "Choose Plan"
        },
        {
          memory: "2 GB",
          vspus: "2 vCPU",
          ssdDisk: "100GB",
          transfer: "2 TB",
          price: "$15/mo $0.025/hr",
          plan: "Choose Plan"
        },
        {
          memory: "3 GB",
          vspus: "3 vCPU",
          ssdDisk: "50GB",
          transfer: "1 TB",
          price: `$25/mo $0.025/hr`,
          plan: "Choose Plan"
        },
        {
          memory: "4 GB",
          vspus: "4 vCPU",
          ssdDisk: "120GB",
          transfer: "4 TB",
          price: `$75/mo $0.725/hr`,
          plan: "Choose Plan"
        },
        {
          memory: "8 GB",
          vspus: "5 vCPU",
          ssdDisk: "120GB",
          transfer: "5 TB",
          price: `$75/mo $0.725/hr`,
          plan: "Choose Plan"
        },
        {
          memory: "16 GB",
          vspus: "6 vCPU",
          ssdDisk: "200GB",
          transfer: "6 TB",
          price: `$120/mo $0.160/hr`,
          plan: "Choose Plan"
        },
        {
          memory: "32 GB",
          vspus: "7 vCPU",
          ssdDisk: "260GB",
          transfer: "4 TB",
          price: `$150mo $0.125/hr`,
          plan: "Choose Plan"
        },
        {
          memory: "8 GB",
          vspus: "3 vCPU",
          ssdDisk: "120GB",
          transfer: "1 TB",
          price: `$25/mo $0.025/hr`,
          plan: "Choose Plan"
        }
      ],

      // Blogs
      blogs: [
        {
          img: "img/h_blog1.jpg",
          subtitle: "June 20, 2020",
          title: "How To Deploy a PHP Application with Kubernetes on Ubuntu",
          comments: "3"
        },
        {
          img: "img/h_blog2.jpg",
          subtitle: "June 25, 2020",
          title: "How To Build a Node.js Application with Docker",
          comments: "7"
        }
      ],

      // Footer
      socialBtn: [
        { icon: "mdi-facebook" },
        { icon: "mdi-twitter" },
        { icon: "mdi-vimeo" },
        { icon: "mdi-pinterest" }
      ]
    };
  },
  methods: {}
});
