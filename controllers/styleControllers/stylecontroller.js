import { radius } from "./calculateRadius.js";

const photo=document.getElementById("photo");
const ranges=document.querySelectorAll(".range");
const filterContaier=ranges[0];
const borderStylesContainer=ranges[1];

const code=document.querySelector(".get-code");
const frame=document.getElementById("image-frame");

code.textContent=`brightness(${100}%) contrast(${100}%) grayscale(${0}%) hue-rotate(${0}deg) invert(${0}%) opacity(${100}%) saturate(${1}) sepia(${0}%) blur(${0}px)`;

export const styleController=(e)=>{
    if(e.target.tagName!=="INPUT") return;
    const values= [...filterContaier.children].map(item=>item.value)
    

    const [brightness,contrast,grayscale,hueRotate,invert,opacity,saturate,sepia,blur]=values;

    const filterStyles=`brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}) sepia(${sepia}%) blur(${blur}px)`;

    code.textContent=filterStyles;


    photo.style.filter=filterStyles

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