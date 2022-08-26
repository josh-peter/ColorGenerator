// Generate RGB Values
// Detect click event on button
// Generate new RGB Color
// Apply new RGB Color
//Update RGB Color Description
//run genNewRgb and change bg color on load

const genNewRgbColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const rgb = "rgb(" + r + "," + g + "," + b + ")";
  changeBackgroundColor(rgb);
  updateRgbDescription (rgb);
};

const changeBackgroundColor = (rgb) => {
  document.querySelector("body").style.backgroundColor = rgb;
};

const updateRgbDescription = (rgb) => {
    document.querySelector(".rgb-values").innerHTML = rgb;  
} 

const button = document
  .querySelector("button")
  .addEventListener("click", genNewRgbColors);

  document.addEventListener("DOMContentLoaded",genNewRgbColors);
