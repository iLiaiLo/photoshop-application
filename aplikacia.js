document.getElementById("content").style.display="none";
var flag=true;
function show_content(){
    if(flag){
        document.getElementById("content").style.display="block";
        
    }
    else{
        document.getElementById("content").style.display="none";
    }
    flag=!flag;
   
}




function change(){
    let brightness=document.getElementById("brightness").value;
    let contrast=document.getElementById("contrast").value;
    let grayscale=document.getElementById("grayscale").value;
    let hue_rotate=document.getElementById("hue-rotate").value;
    let invert=document.getElementById("invert").value;
    let opacity=document.getElementById("opacity").value;
    let saturate=document.getElementById("saturate").value;
    let sepia=document.getElementById("sepia").value;
    let blur=document.getElementById("blur").value;
    document.getElementById("photo").style.filter=`brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)
     hue-rotate(${hue_rotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}) sepia(${sepia}%) blur(${blur}px) `

     let border_width=document.getElementById("border_width").value;
     let border_radius=document.getElementById("border_radius").value;

     document.getElementById("div").style.borderRadius=`${border_radius}px`;
     document.getElementById("photo").style.borderRadius=`${radius(border_radius,border_width)}px`;
     document.getElementById("div").style.borderWidth=`${border_width}px`;
     

     function radius(border_radius,border_width){
        let val=0;
        if((border_radius-border_width)<0){
            val=0;
        }
        else{
            val=border_radius - border_width;
        }
        return val;
    }
}

function solid(){
    document.getElementById("div").style.borderStyle="solid";
}
function dotted(){
    document.getElementById("div").style.borderStyle="dotted";
}
function dashed(){
    document.getElementById("div").style.borderStyle="dashed";
}
function double(){
    document.getElementById("div").style.borderStyle="double";
}
function groove(){
    document.getElementById("div").style.borderStyle="groove";
}
function inset(){
    document.getElementById("div").style.borderStyle="inset";
}
function outset(){
    document.getElementById("div").style.borderStyle="outset";
}
function ridge(){
    document.getElementById("div").style.borderStyle="ridge";
}
function no(){
    document.getElementById("div").style.borderStyle="none";
}

function set_color(){
    let val=document.getElementById("col").value;
    document.getElementById("div").style.borderColor=val;
}


