const normalizedSum = sum => {
  const sumFixed = sum.toFixed(2);
  const sumArr = sumFixed.split('.');
  const normalizedSum = Number(sumArr[0]).toLocaleString();
  const result = `${normalizedSum}.${sumArr[1]}`;
  return result;
};

export { normalizedSum };
