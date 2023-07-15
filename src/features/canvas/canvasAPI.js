export function fetchRandomColor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: getRandomColor() }), 1000);
  });
}

const getRandomColor = () => {
  const color = [
    "#ff7f50",
    "#87cefa",
    "#da70d6",
    "#32cd32",
    "#6495ed",
    "#ff69b4",
    "#ba55d3",
    "#cd5c5c",
    "#ffa500",
    "#40e0d0",
  ];
  return color[getRandomNumber(0, color.length - 1)];
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
