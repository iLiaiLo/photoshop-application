import { resetFilter } from "./controllers/resetControllers/resetFilter.js";
import { resetBorderStyles } from "./controllers/resetControllers/resetBorderStyles.js";
import { showHide } from "./controllers/displayControllers/displaycontroller.js";
import { styleController } from "./controllers/styleControllers/stylecontroller.js";
import { changestyles } from "./controllers/styleControllers/stylecontroller.js";
import { borderStyleSetter } from "./controllers/styleControllers/stylecontroller.js";
import { colorInputSetter } from "./controllers/styleControllers/stylecontroller.js";

const ranges=document.querySelectorAll(".range");
const filterReset=document.querySelector(".filterReset");
const borderReset=document.querySelector(".borderReset");
const filterContaier=ranges[0];
const borderStylesContainer=ranges[1];
const borderStyles=document.querySelector(".border-styles");
const showBorderStyles=document.querySelector(".button");
const colorInput=document.querySelector(".color-input");

filterReset.addEventListener("click",resetFilter)

borderReset.addEventListener("click",resetBorderStyles)

showBorderStyles.addEventListener("click",showHide)

filterContaier.addEventListener("change",styleController)

borderStylesContainer.addEventListener("click",changestyles)

borderStyles.addEventListener("click",borderStyleSetter)

colorInput.addEventListener("change",colorInputSetter)