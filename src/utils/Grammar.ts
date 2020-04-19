export function getQuantifier(n: number) {
  if ((n % 10 === 1 && n < 10) || n > 20) {
    return "st";
  } else if ((n % 10 === 2 && n < 10) || n > 20) {
    return "nd";
  } else if ((n % 10 === 3 && n < 10) || n > 20) {
    return "rd";
  } else {
    return "th";
  }
}
