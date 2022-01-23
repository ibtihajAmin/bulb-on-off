//When user press the 'Turn On Light' button, this function will be invoked and light will be on.
let turnOn = () => {
  let onLight = document.getElementById("light2");
  let offLight = document.getElementById("light1");

  onLight.style.marginLeft = "-200px";

  onLight.style.visibility = "visible";
  offLight.style.visibility = "hidden";
};

//When user press the 'Turn Off Light' button, this function will be invoked and light will be off.
let turnOff = () => {
  let onLight = document.getElementById("light2");
  let offLight = document.getElementById("light1");

  onLight.style.visibility = "hidden";
  offLight.style.visibility = "visible";
};
