export const homeheaderLinks = [
  {
    label: "home.banner.menu.home",
    path: "/",
    sub: false,
    id: 'banner'
  },
  {
    label: "home.banner.menu.experience",
    path: "/",
    sub: false,
    id: 'experience'
  },

  {
    label: "home.banner.menu.projects",
    path: "/",
    sub: false,
    id: 'projects'
  },
  {
    label: "home.banner.menu.contact",
    path: "/",
    sub: false,
    id: 'contact'
  },
  {
    label: "home.banner.menu.languages.label",
    path: "/",
    sub: true,
    children: [
      {
        label: "home.banner.menu.languages.english",
        value: "en",
      },
      {
        label: "home.banner.menu.languages.spanish",
        value: "es",
      },
    ],
  },
];
