const button = document.querySelectorAll(".button-color")
const result = document.querySelector(".result")

let str = ""
let res = ""

button.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === '1'){
            str = str+"1";
            res = res+"1"
            result.innerHTML = str;
        }
        if(e.target.id === '2'){
            str = str+"2";
            res = res+"2"
            result.innerHTML = str;
        }
        if(e.target.id === '3'){
            str = str+"3";
            res = res+"3"
            result.innerHTML = str;
        }
        if(e.target.id === '4'){
            str = str+"4";
            res = res+"4"
            result.innerHTML = str;
        }
        if(e.target.id === '5'){
            str = str+"5";
            res = res+"5"
            result.innerHTML = str;
        }
        if(e.target.id === '6'){
            str = str+"6";
            res = res+"6"
            result.innerHTML = str;
        }
        if(e.target.id === '7'){
            str = str+"7";
            res = res+"7"
            result.innerHTML = str;
        }
        if(e.target.id === '8'){
            str = str+"8";
            res = res+"8"
            result.innerHTML = str;
        }
        if(e.target.id === '9'){
            str = str+"9";
            res = res+"9"
            result.innerHTML = str;
        }
        if(e.target.id === '0'){
            str = str+"0";
            res = res+"0"
            result.innerHTML = str;
        }
        if(e.target.id === 'C'){
            result.innerHTML = "";
            res="";
            str="";
        }
        if(e.target.id === '+'){
            str = str+"+";
            res=res+"+";
            result.innerHTML = str;
        }
        if(e.target.id === '-'){
            str = str+"-";
            res = res+"-"
            result.innerHTML = str;
        }
        if(e.target.id === 'X'){
            str = str+"*";
            res = res+"*"
            result.innerHTML = str;
        }
        if(e.target.id === '/'){
            str = str+"/";
            res = res+"/"
            result.innerHTML = str;
        }
        if(e.target.id === '%'){
            str = str/100;
            result.innerHTML = str;
            res=str
            str=str
        }
        if(e.target.id === '.'){
            str = str+".";
            res = res+"."
            result.innerHTML = str;
        }
        if(e.target.id === 'back'){
            str = str.substring(0,str.length-1);
            res = res.substring(0,res.length-1)
            result.innerHTML = str;
        }
        if(e.target.id === "="){
            // str= eval(str);
            // result.innerHTML = str;
            res = eval(res);
            result.innerHTML = res;
            str=res       
        }
        
    })
})