export const wait = async (milisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milisec);
  });
};
