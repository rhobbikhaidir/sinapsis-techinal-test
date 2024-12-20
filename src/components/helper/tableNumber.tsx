const tableNumber = (start: number) =>
  Array.from(Array(10 * (start)).keys()).slice(-10);

export default tableNumber;
