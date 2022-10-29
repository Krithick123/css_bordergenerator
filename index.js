document.addEventListener("DOMContentLoaded",()=>{

    const container=document.querySelector('.container');
    const allBorder=document.getElementById('all');
    const allValue=document.getElementById('all_value');
    const code=document.getElementById('code');
    const btnCopy=document.querySelector('#btnCopy');
    const border_style_element=document.getElementById('border_style');

    // border 
    const border=document.getElementById('border');
    const borderValue=document.getElementById('border_value');

    // color
    const colorElement=document.getElementById('favcolor');


    var all_radius;
    var border_style="solid";
    var border_size=3;
    var coding=" ";
    var changeColor="";

    function allBorderupdate(){

        all_radius=allBorder.value;
        border_size=border.value;
        changeColor=colorElement.value;

        allValue.innerText=all_radius+"px";
        borderValue.innerText= border_size+"px";

        coding=` 
        border-radius:${all_radius}px;
        border:${border_size}px ${border_style} ${changeColor};
        `;

        code.value=coding;
        container.style.cssText=coding;

    }

allBorder.addEventListener('change',allBorderupdate);
allBorder.addEventListener('mousemove',allBorderupdate);

border.addEventListener('change',allBorderupdate);
border.addEventListener('mousemove',allBorderupdate);

colorElement.addEventListener('change',allBorderupdate);

btnCopy.addEventListener('click',()=>{

    document.querySelector('textarea').select();
    document.execCommand('copy');

        alert("Code has been copied ") ;
});

allBorderupdate();


// border_style_element
border_style_element.addEventListener('change',function(){
    border_style=this.value;
    allBorderupdate();
});
});

