export const parseToFixedFloat = (num: number) => {
  return parseFloat((num * 10).toFixed(2));
};
