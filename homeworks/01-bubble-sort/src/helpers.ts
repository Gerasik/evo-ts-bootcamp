type CustomArr = (length: number) => number[];

export const customArr: CustomArr = (length) => {
  const randomArr: number[] = [];

  for (let i = 0; i < length; i++) {
    const a = Math.round(Math.random() * 100);
    if (~randomArr.indexOf(a)) {
      i--;
    } else {
      randomArr.push(a);
    }
  }
  return randomArr;
};
