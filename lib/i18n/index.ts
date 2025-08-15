import FR from "./fr";
import EN from "./en";

export type LocaleKey = "fr" | "en";
export type Messages = typeof FR; // même structure pour EN

export const getMessages = (locale: LocaleKey): Messages =>
  locale === "en" ? EN : FR;
