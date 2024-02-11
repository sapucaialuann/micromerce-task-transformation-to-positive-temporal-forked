type PositiveTemporal = {
  days?: string;
  weeks?: string;
  months?: string;
  years?: string;
  hours?: string;
  minutes?: string;
};

const toPositiveTemporal = (
  amount: string,
  unit: string,
  nonNegative?: string | boolean,
): PositiveTemporal | string => {
  const numericAmount = parseInt(amount, 10);
  const allowZero = nonNegative === true || nonNegative === "true";

  if (numericAmount === 0 && !allowZero) {
    return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
  }

  unit = unit.toLowerCase();
  const result: PositiveTemporal = {};

  switch (unit) {
    case "d":
    case "day":
    case "days":
      result.days = amount;
      break;
    case "w":
    case "week":
    case "weeks":
      result.weeks = amount;
      break;
    case "m":
    case "month":
    case "months":
      result.months = amount;
      break;
    case "y":
    case "year":
    case "years":
      result.years = amount;
      break;
    case "h":
    case "hour":
    case "hours":
      result.hours = amount;
      break;
    case "min":
    case "minute":
    case "minutes":
      result.minutes = amount;
      break;
    default:
      return `Invalid unit: ${unit}`;
  }

  if (isNaN(numericAmount)) {
    return `Invalid amount: ${amount}`;
  }

  return result;
};

export default toPositiveTemporal;
