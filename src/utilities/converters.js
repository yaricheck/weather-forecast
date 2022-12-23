export const toTimeFormat = (num) => {
  if (num > 9) return num;
  return '0' + num.toString();
}