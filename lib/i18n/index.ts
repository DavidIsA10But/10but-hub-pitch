import FR from "./fr";
import EN from "./en";

export type LocaleKey = "fr" | "en";
export const getMessages = (locale: LocaleKey) => (locale === "en" ? EN : FR);
