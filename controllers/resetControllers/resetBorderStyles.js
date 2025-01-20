const ranges=document.querySelectorAll(".range");
const frame=document.getElementById("image-frame");
const photo=document.getElementById("photo");

const borderStylesContainer=ranges[1];

export const resetBorderStyles=()=>{
    [...borderStylesContainer.children].forEach(item=>item.value=0);
    photo.style.borderRadius="0";
    frame.style.borderWidth="0";
    frame.style.borderRadius="0";
}