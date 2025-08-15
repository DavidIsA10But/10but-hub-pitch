import FR from "./fr";
import EN from "./en";

export type LocaleKey = "fr" | "en";
export type Messages = typeof FR | typeof EN;

export const getMessages = (locale: LocaleKey): Messages =>
  locale === "en" ? EN : FR;
