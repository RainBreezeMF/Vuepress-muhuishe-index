import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "介绍",
    prefix: "/about",
    icon: "book",
    children: [
      {
        text: "简介",
        icon: "info",
        link: "/intro",
      },
      {
        text: "团队架构",
        icon: "fa-solid fa-user-group",
        link: "/structure",
      },
      {
        text: "制作组员名单",
        icon: "fa-solid fa-address-book",
        link: "/staff-list",
      },

    ],
  },
  {
    text: "公开信息",
    icon: "fa-solid fa-photo-film",
    prefix: "/archive",
    link: "/archive",
  },
  {
    text: "联络",
    icon: "fa-solid fa-sitemap",
    children: [
      {
        text: "哔哩哔哩",
        icon: "fa-brands fa-bilibili",
        link: "https://space.bilibili.com/1039798377",
      },
      {
        text: "Youtube",
        icon: "fa-brands fa-youtube",
        link: "https://www.youtube.com/channel/UCiBTM6mA935YAysLqwv_aMQ",
      },
      {
        text: "推特/X",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/muhuishe",
      },
      {
        text: "Discord",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/SXVan75C",
      },
      {
        text: "Email",
        icon: "fa-solid fa-envelopes-bulk",
        link: "mailto:muhuishe@takagi3.cn",
      },
    ],
  },
  {
    text: "留言板",
    icon: "message",
    prefix: "/message-board",
    link: "/message-board",
  },
  {
    text: "高木站点导航",
    icon: "fa-solid fa-map-location-dot",
    link: "https://takagi3.cn"
  },
]);
