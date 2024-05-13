import {
  isISO8601DateTimeString,
  isISO9075DateString,
  isMongoObjectId,
  isRFC3339DateString,
  isRFC7231DateString,
  isTimestamp,
  isUTCDateString,
  isUnixTimestamp,
} from "./converter.models";

export interface DateFormat {
  name: string;
  fromDate: (date: Date) => string;
  toDate: (value: string) => Date;
  formatMatcher: (dateString: string) => boolean;
}
export type ToDateMapper = (value: string) => Date;
import {
  formatISO,
  formatISO9075,
  formatRFC3339,
  formatRFC7231,
  fromUnixTime,
  getTime,
  getUnixTime,
  isDate,
  isValid,
  parseISO,
  parseJSON,
} from "date-fns";

export const toDate: ToDateMapper = (date) => new Date(date);
export const formats: DateFormat[] = [
  {
    name: "JS locale date string",
    fromDate: (date) => date.toString(),
    toDate,
    formatMatcher: () => false,
  },
  {
    name: "ISO 8601",
    fromDate: formatISO,
    toDate: parseISO,
    formatMatcher: (date) => isISO8601DateTimeString(date),
  },
  {
    name: "ISO 9075",
    fromDate: formatISO9075,
    toDate: parseISO,
    formatMatcher: (date) => isISO9075DateString(date),
  },
  {
    name: "RFC 3339",
    fromDate: formatRFC3339,
    toDate,
    formatMatcher: (date) => isRFC3339DateString(date),
  },
  {
    name: "RFC 7231",
    fromDate: formatRFC7231,
    toDate,
    formatMatcher: (date) => isRFC7231DateString(date),
  },
  {
    name: "Unix timestamp",
    fromDate: (date) => String(getUnixTime(date)),
    toDate: (sec) => fromUnixTime(+sec),
    formatMatcher: (date) => isUnixTimestamp(date),
  },
  {
    name: "Timestamp",
    fromDate: (date) => String(getTime(date)),
    toDate: (ms) => parseJSON(ms),
    formatMatcher: (date) => isTimestamp(date),
  },
  {
    name: "UTC format",
    fromDate: (date) => date.toUTCString(),
    toDate,
    formatMatcher: (date) => isUTCDateString(date),
  },
  {
    name: "Mongo ObjectID",
    fromDate: (date) =>
      `${Math.floor(date.getTime() / 1000).toString(16)}0000000000000000`,
    toDate: (objectId) =>
      new Date(Number.parseInt(objectId.substring(0, 8), 16) * 1000),
    formatMatcher: (date) => isMongoObjectId(date),
  },
];
