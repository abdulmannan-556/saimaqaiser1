/**
 * Application-wide constants
 * Centralized for consistency and compliance
 */

export const COMPANY_LEGAL_SUFFIX = "(PVT) LIMITED";

export const DEFAULT_LOCALE = "en-PK";

export const CURRENCY = {
  CODE: "PKR",
  SYMBOL: "₨",
  NAME: "Pakistani Rupee",
} as const;

export const MARKET_STATUS = {
  OPEN: "Open",
  CLOSED: "Closed",
  PRE_OPEN: "Pre-Open",
} as const;

export const TRADING_HOURS = {
  REGULAR: "9:30 AM – 3:30 PM (PST)",
  DAYS: "Monday – Friday",
} as const;

export const DISCLAIMER_TEXT = {
  INVESTMENT:
    "Investments in securities are subject to market risks. Past performance is not indicative of future results.",
  ADVISORY:
    "The information provided does not constitute investment advice and is for informational purposes only.",
} as const;

export const FORM_MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Please enter a valid email address",
  SUBMIT_SUCCESS: "Your request has been submitted successfully",
  SUBMIT_ERROR: "Something went wrong. Please try again later.",
} as const;

export const INSIGHTS_CATEGORIES = [
  "Market Update",
  "Equity Research",
  "Economic Analysis",
  "PSX News",
] as const;

export type InsightCategory = (typeof INSIGHTS_CATEGORIES)[number];
