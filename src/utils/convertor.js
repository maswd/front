export const getStatusText = (statusJob) => {
  switch (statusJob) {
    case "Completed":
      return "انجام شده";
    case "Cancel":
      return "لغوشده";
    case "Carry_off":
      return "حمل به کارگاه";
    case "High_time":
      return "کار زمان بالا";
    case "Doing":
      return "در حال انجام";
    case "waiting":
      return "در انتظار تایید";
    default:
      return "";
  }
};
export const getStatusClass = (statusJob) => {
  switch (statusJob) {
    case "Completed":
      return "success";
    case "Cancel":
      return "danger";
    case "Carry_off":
      return "primary";
    case "High_time":
      return "warning";
    case "Doing":
      return "info";
    case "waiting":
      return "secondary";
    default:
      return "";
  }
};
export const getStatusIcon = (statusJob) => {
  switch (statusJob) {
    case "Completed":
      return "fa-truck-loading";
    case "Cancel":
      return "fa-times";
    case "Carry_off":
      return "fa-truck";
    case "High_time":
      return "fa-clock";
    case "Doing":
      return "fa-clipboard-list";
    case "waiting":
      return "fa-hourglass";
    default:
      return "";
  }
};

import PersianDate from "persian-date";

export function convertToPersianDate(inputDateTime) {
  const inputDate = new Date(inputDateTime);
  const persianDate = new PersianDate(inputDate);

  const formattedDateTime = persianDate.format("YYYY/MM/DD ساعت: HH:mm:ss");

  return formattedDateTime;
}

export function ToRial(str) {
  if (typeof str === "undefined") {
    return null;
  }
  let number = parseFloat(str);
  if (!isNaN(number) && Number.isFinite(number)) {
    number = Math.floor(number);
  }
  let formattedNumber = number.toString().replace(/\,/g, "");
  var objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
  while (objRegex.test(formattedNumber)) {
    formattedNumber = formattedNumber.replace(objRegex, "$1,$2");
  }
  return formattedNumber;
}