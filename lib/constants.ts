/**
 * Application-wide constants.
 * Keep this file free of business logic.
 * Only static, reusable values should live here.
 */

/* -----------------------------
   REGULATORY CONSTANTS
-------------------------------- */
export const REGULATORS = {
  SECP: "Securities and Exchange Commission of Pakistan",
  PSX: "Pakistan Stock Exchange",
} as const;

/* -----------------------------
   MARKET CONSTANTS
-------------------------------- */
export const MARKET_STATUS = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
  PRE_OPEN: "PRE_OPEN",
} as const;

export type MarketStatus =
  typeof MARKET_STATUS[keyof typeof MARKET_STATUS];

/* -----------------------------
   ACCOUNT TYPES
-------------------------------- */
export const ACCOUNT_TYPES = {
  INDIVIDUAL: "Individual",
  JOINT: "Joint",
  CORPORATE: "Corporate",
} as const;

export type AccountType =
  typeof ACCOUNT_TYPES[keyof typeof ACCOUNT_TYPES];

/* -----------------------------
   CONTACT / BUSINESS HOURS
-------------------------------- */
export const BUSINESS_HOURS = {
  WEEKDAYS: "Monday – Friday",
  HOURS: "9:00 AM – 5:00 PM (PKT)",
  MARKET_NOTE: "Market timings are subject to PSX schedule.",
} as const;

/* -----------------------------
   DISCLAIMER TEXTS
-------------------------------- */
export const DISCLAIMERS = {
  GENERAL:
    "All investments in securities are subject to market risks. Past performance is not indicative of future results.",
  MARKET_DATA:
    "Market data is delayed and provided for informational purposes only.",
} as const;
