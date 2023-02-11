const detect = document.querySelector("#detect"),
  wrapper = document.querySelector(".wrapper"),
  button = document.querySelector(".wrapper button");

//these are some possible classes that adblocker avoid to render

let adClasses = [
  "ad",
  "ads",
  "adsbox",
  "ad-placement",
  "doubbleclick",
  "ad-placeholder",
  "ad-badge",
];

for (let item of adClasses) {
  //adding all items in a detect element
  detect.classList.add(item);
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

button.addEventListener("click", () => {
  //hide popup on button click
  console.log("cliecl");
  wrapper.classList.remove("show");
});

console.log(getProperty);

// if wrapper doesn't conatine sjow class the check adblocker is enabled or not
if (!wrapper.classList.contains("show")) {
  //if display prperty value is none then show the popup else hide it

  getProperty == "none"
    ? wrapper.classList.add("show")
    : wrapper.classList.remove("show");
}
