export default function getHealthSort(arr) {
     return arr.sort(function (a, b) {return b.health - a.health});
}
