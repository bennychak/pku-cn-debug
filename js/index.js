window.onload=function ()
{
    var oNav=document.getElementById('nav_box');
    var oDiv=document.getElementById('nav');
    var aLi=oDiv.getElementsByTagName('li');
    var aSpan=oDiv.getElementsByTagName('span');
    var oBox=document.getElementById('datalist');
    var aDiv=oBox.getElementsByTagName('div');
    var timer = null;
    oNav.onmouseover=function(){
        clearTimeout( timer );
    };
    for(var i=0;i<aLi.length;i++){
        var aSp=aLi[i].getElementsByTagName('span');
        if(aSp){
            clearTimeout( timer );
            fn();
        }else {
            aLi[i].className='';
            for (var i = 0; i < aSpan.length; i++) {
                aDiv[i].style.display = 'none';
            }
            oBox.style.height = 0 + 'px';
        }
    }
    oBox.onmouseout=time;
    function fn(){
        for(var i=0;i<aSpan.length; i++){
            aSpan[i].index=i;
            aSpan[i].onmouseover=function(){
                clearTimeout( timer );
                for(var i=0;i<aSpan.length; i++){
                    aSpan[i].parentNode.className='';
                    aDiv[i].style.display='none';
                }
                this.parentNode.className='active';
                oBox.style.height=288+'px';
                aDiv[this.index].style.display='block';
            };
        }
    }
    function time() {
        clearTimeout( timer );
        timer = setTimeout(function () {
            for (var i = 0; i < aSpan.length; i++) {
                aSpan[i].parentNode.className = '';
                aDiv[i].style.display = 'none';
            }
            oBox.style.height = 0 + 'px';
        }, 300)
    }

   /* var oBtn=document.getElementById('mbtn');
    var oMnav=document.getElementById('navm');
    var onoff=true;
    var Height=367;
    oBtn.onclick=function(){
        if(!onoff){
            oMnav.style.height=0+'px';
            oMnav.style.display='none';
            onoff=true;
        }else{
            oMnav.style.display='block';
            oMnav.style.height=367+'px';
            onoff=false;
        }

    }*/
};
