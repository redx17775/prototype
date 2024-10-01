const img = document.getElementById("img");

let count = 0;

function change() {
  switch (count) {
    case 0:
      img.src = "img/2.png";
      count++;
      break;
    case 1:
      img.src = "img/3.png";
      count++;
      break;
    default:
      break;
  }
}
