const s=+prompt('Enter a number');
console.log(s);
let result1;
let result2;
let t=s%10;
let v=s-t;
if(s==11){
    result1=`eleven`;
    result2='';
}
else if(s==12){
    result1=`twelve`;
    result2='';
}
else if(s==13){
    result1=`thirteen`;
    result2='';
}
else if(s==14){
    result1=`fourteen`;
    result2='';
}
else if(s==15){
    result1=`fifteen`;
    result2='';
}
else if(s==16){
    result1=`sixteen`;
    result2='';
}
else if(s==17){
    result1=`seventeen`;
    result2='';
}
else if(s==18){
    result1=`eighteen`;
    result2='';
}
else if(s==19){
    result1=`ninteen`;
    result2='';
}else{
    if(v==20){
        result1=`twenty`;
    }
    else if(v==30){
        result1=`thirty`;
    }
    else if(v==40){
        result1=`forty`;
    }
    else if(v==50){
        result1=`fifty`;
    }
    else if(v==60){
        result1=`sixty`;
    }
    else if(v==70){
        result1=`seventy`;
    }
    else if(v==80){
        result1=`eighty`;
    }
    else if(v==90){
        result1=`ninty`;
    }
    if(t==1){
        result2=`one`;
    }
    else if(t==2){
        result2=`two`;
    }
    else if(t==3){
        result2=`three`;
    }
    else if(t==4){
        result2=`four`;
    }
    else if(t==5){
        result2=`five`;
    }
    else if(t==6){
        result2=`six`;
    }
    else if(t==7){
        result2=`seven`;
    }
    else if(t==8){
        result2=`eight`;
    }
    else if(t==9){
        result2=`nine`;
    }
}
console.log(`Our number is: ${result1} ${result2}`);