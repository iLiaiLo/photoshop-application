const photo=document.getElementById("photo");
const ranges=document.querySelectorAll(".range");
const filterContaier=ranges[0];

export const resetFilter=()=>{

    const defaultValues=[100,100,0,0,100,1,0,0];
    [...filterContaier.children].forEach((item,index)=>item.value=defaultValues[index])

    photo.style.filter=`brightness(${100}%) contrast(${100}%)
    grayscale(${0}%) hue-rotate(${0}deg) invert(${0}%) opacity(${100}%)
    saturate(${1}) sepia(${0}%) blur(${0}px)`;
}