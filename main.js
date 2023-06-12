function rand(min, max) {
  if (typeof min !== 'number') {
    min = 1;
    max = 100;
  } else if (typeof max !== 'number') {
    max = min;
    min = 1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(rand(20, 1));
document.write("<br>")
document.write(rand(1, 10));
document.write("<br>")
document.write(rand(6));
document.write("<br>")
document.write(rand());
document.write("<br>")
