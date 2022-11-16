import { languages, views } from "../const";

export type Values<T> = T[keyof T];

export type Language = Values<typeof languages>;

export type View = Values<typeof views>;
