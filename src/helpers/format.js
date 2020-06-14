const formatter = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

const format = (value) => {
  return formatter.format(value);
};

const percent = (value) => {
  return value.toFixed(2);
};

export { format, percent };
