interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  contact: ContactInfo;
}

export const siteConfig: SiteConfig = {
  name: "SAIMA QAISER SECURITIES (PVT) LIMITED",
  shortName: "Saima Qaiser Securities",
  description:
    "SAIMA QAISER SECURITIES (PVT) LIMITED is a licensed Pakistan Stock Exchange broker providing secure, transparent, and professional equity trading services.",
  url: "https://www.saimaqaisersecurities.com",
  contact: {
    phone: "+92-XXX-XXXXXXX",
    email: "info@saimaqaisersecurities.com",
    address:
      "Office No. XX, XX Floor, Stock Exchange Building, Karachi, Pakistan",
  },
};
