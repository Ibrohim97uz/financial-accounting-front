export function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
export function getMultipleColors(count: number): string[] {
  const colorList: string[] = [];

  for (let i = 0; i < count; i++) {
    colorList.push(getRandomColor());
  }

  return colorList;
}
