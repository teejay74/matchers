export default function getHealthSort(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
