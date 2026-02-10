export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Equity Trading",
        href: "/services/equity-trading",
        description: "PSX-listed equities trading services",
      },
      {
        title: "Online Trading",
        href: "/services/online-trading",
        description: "Secure web-based trading platform",
      },
      {
        title: "Investment Advisory",
        href: "/services/investment-advisory",
        description: "Professional investment guidance",
      },
      {
        title: "Research",
        href: "/services/research",
        description: "Market research & analysis reports",
      },
    ],
  },
  {
    title: "PSX",
    href: "/psx",
  },
  {
    title: "Accounts",
    href: "/accounts",
    children: [
      {
        title: "Open an Account",
        href: "/accounts/open-account",
      },
    ],
  },
  {
    title: "Insights",
    href: "/insights",
  },
  {
    title: "Compliance",
    href: "/compliance",
    children: [
      {
        title: "KYC Policy",
        href: "/compliance/kyc",
      },
      {
        title: "Risk Disclosure",
        href: "/compliance/risk-disclosure",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
