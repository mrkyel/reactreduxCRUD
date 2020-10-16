import moment from "moment";

export default function converDt(date, format = "yyyy-MM-dd HH:mm:ss") {
  return moment(date).format(format);
}
