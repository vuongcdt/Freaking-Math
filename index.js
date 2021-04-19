let score = document.getElementById("score");
let result = document.getElementById("calculation");
let a = (b = c = d = ketqua = 0);

let xacsuat = Math.round(Math.random() * 10);

function main() {
  document.getElementById("reset").style.display = "none";

  document.getElementById("buttonTrue").disabled = false;
  document.getElementById("buttonFalse").disabled = false;
  let str = "";
  xacsuat = Math.round(Math.random() * 10);
  a = Math.round(Math.random() * 10 + 1);
  b = Math.round(Math.random() * 10 + 1);
  c = Math.round(Math.random() * 10 + 2);
  console.log(a + b);
  if (xacsuat < 5) {
    str = str + a + `+` + b + `=` + c;
    result.innerText = str;
  } else {
    c = a + b;
    str = str + a + `+` + b + `=` + c;
    result.innerText = str;
  }
  console.log("xacsuat", xacsuat);
  
  return xacsuat;
}

function buttonTrue() {
  let score = document.getElementById("score");
  let result = document.getElementById("calculation");
  console.log(xacsuat);

  if (xacsuat < 5) {
    result.innerText = "GAME OVER";
    document.getElementById("buttonFalse").disabled = true;
    document.getElementById("reset").style.display = "block";
  } else {
    d++;
    score.innerText = d;
    str = "";
    main();
  }
}

function buttonFalse() {
  let score = document.getElementById("score");
  let result = document.getElementById("calculation");
  console.log(xacsuat);
  if (xacsuat >= 5) {
    result.innerText = "GAME OVER";
    document.getElementById("reset").style.display = "block";
    document.getElementById("buttonTrue").disabled = true;
  } else {
    d++;

    score.innerText = d;
    str = "";
    main();
  }
}
main();
function reset() {
  d = 0;
  score.innerText = d;
  main();
}
// setInterval(main,5000)
// // if(result.innerText = "gameover"){
// //     clearInterval
// // }
