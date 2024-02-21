import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import i18n from "i18next";
export const uzLocale = {
  // months list by order
  months: [
    i18n.t("Yanvar"),
    i18n.t("Fevral"),
    i18n.t("Mart"),
    i18n.t("Aprel"),
    i18n.t("May"),
    i18n.t("Iyun"),
    i18n.t("Iyul"),
    i18n.t("Avgust"),
    i18n.t("Sentyabr"),
    i18n.t("Oktyabr"),
    i18n.t("Noyabr"),
    i18n.t("Dekabr"),
  ],

  // week days by order
  weekDays: [
    {
      name: i18n.t("Dushanba"),
      short: i18n.t("Du"),
    },
    {
      name: i18n.t("Seshanba"),
      short: i18n.t("Sesh"),
    },
    {
      name: i18n.t("Chorshanba"),
      short: i18n.t("Chor"),
    },
    {
      name: i18n.t("Payshanba"),
      short: i18n.t("Pay"),
    },
    {
      name: i18n.t("Juma"),
      short: i18n.t("Jum"),
    },
    {
      name: i18n.t("Shanba"),
      short: i18n.t("Shan"),
      isWeekend: true,
    },
    {
      name: i18n.t("Yakshanba"), // used for accessibility
      short: i18n.t("Yak"), // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 6,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: Components.ICalendar) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: any) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: any) {
    return digit;
  },

  // texts in the date picker
  nextMonth: "Next Month",
  previousMonth: "Previous Month",
  openMonthSelector: "Open Month Selector",
  openYearSelector: "Open Year Selector",
  closeMonthSelector: "Close Month Selector",
  closeYearSelector: "Close Year Selector",
  defaultPlaceholder: "Select...",

  // for input range value
  from: "from",
  to: "to",

  // used for input value when multi dates are selected
  digitSeparator: ",",

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};
export const today = utils("en").getToday();

export function getDateFromString(
  str: string = ""
): Components.ICalendar | null {
  if (!str) {
    return null;
  }

  const date = new Date(str);
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}
