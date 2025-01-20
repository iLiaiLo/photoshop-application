import { radius } from "./calculateRadius.js";

const photo=document.getElementById("photo");
const ranges=document.querySelectorAll(".range");
const filterContaier=ranges[0];

const borderStylesContainer=ranges[1];

const frame=document.getElementById("image-frame");

export const styleController=(e)=>{
    if(e.target.tagName!=="INPUT") return;
    const values= [...filterContaier.children].map(item=>item.value)

    const [brightness,contrast,grayscale,hueRotate,invert,opacity,saturate,sepia,blur]=values;

    photo.style.filter=`brightness(${brightness}%) contrast(${contrast}%)
    grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%)
    saturate(${saturate}) sepia(${sepia}%) blur(${blur}px)`;
}

export const changestyles=()=>{
    const values=[...borderStylesContainer.children];

    photo.style.borderRadius=`${radius(values[1].value,values[0].value)}px`;
    frame.style.borderWidth=`${values[0].value}px`;
    frame.style.borderRadius=`${values[1].value}px`;
}

export const borderStyleSetter=(e)=>{
    frame.style.borderStyle=e.target.innerText;
}

export const colorInputSetter=(e)=>{
    frame.style.borderColor=e.target.value;
}