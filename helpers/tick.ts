export const asyncInterval = (callback: CallableFunction, interval: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      callback();
      res(true);
    }, interval);
  });
};
