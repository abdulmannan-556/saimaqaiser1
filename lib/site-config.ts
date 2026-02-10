export const siteConfig = {
  name: "SAIMA QAISER SECURITIES (PVT) LIMITED",
  shortName: "Saima Qaiser Securities",
  description:
    "SAIMA QAISER SECURITIES (PVT) LIMITED is a licensed Pakistan Stock Exchange broker providing equity trading, online trading, investment advisory, and research services in Pakistan.",

  url: "https://www.saimaqaisersecurities.com",

  contact: {
    phone: "+92-XXX-XXXXXXX",
    email: "info@saimaqaisersecurities.com",
    supportEmail: "support@saimaqaisersecurities.com",
  },

  address: {
    registeredOffice:
      "Office No. XX, Floor XX, Business Center, Karachi, Pakistan",
    city: "Karachi",
    country: "Pakistan",
  },

  regulatory: {
    psx: "Trading Right Entitlement Certificate (TREC) Holder – Pakistan Stock Exchange",
    secp: "Licensed by Securities & Exchange Commission of Pakistan (SECP)",
    uin: "XXXXXX",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/company/saima-qaiser-securities",
    twitter: "https://twitter.com/",
    facebook: "https://facebook.com/",
  },

  openingHours: {
    weekdays: "Monday – Friday",
    timing: "9:00 AM – 5:00 PM (PST)",
  },

  seo: {
    defaultTitle: "SAIMA QAISER SECURITIES (PVT) LIMITED",
    titleTemplate: "%s | SAIMA QAISER SECURITIES",
    defaultDescription:
      "Trusted Pakistan Stock Exchange broker offering compliant, secure, and professional financial services.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
