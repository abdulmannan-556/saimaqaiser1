export interface NavigationItem {
  title: string;
  href: string;
}

interface NavigationConfig {
  main: NavigationItem[];
  footer: NavigationItem[];
}

export const navigation: NavigationConfig = {
  main: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "PSX",
      href: "/psx",
    },
    {
      title: "Insights",
      href: "/insights",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footer: [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Compliance",
      href: "/compliance",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
