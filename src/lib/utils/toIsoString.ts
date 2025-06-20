import moment from "moment-timezone";

export const toIsoString = (
  date?: Date,
  time?: string,
  tz?: string
): string => {
  if (!date) return "";

  const [hh = "00", mm = "00"] = (time ?? "00:00").split(":");

  if (tz) {
    return moment
      .tz(
        `${moment(date).format("YYYY-MM-DD")} ${hh}:${mm}:00`,
        "YYYY-MM-DD HH:mm:ss",
        tz
      )
      .toISOString();
  }
  return moment(date)
    .hours(Number(hh))
    .minutes(Number(mm))
    .seconds(0)
    .milliseconds(0)
    .toISOString();
};
