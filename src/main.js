let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*你好，我叫刘铭宇*/
/*
 *首先先准备一个div
 */
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/*将这个div变成八卦图
 *看好了
 *首先把它变成一个圆
*/
#div1{
    border-radius:50%;
    border-shadow:0 0 5px rgba(0,0,0,1);
}
/*八卦一黑一白
 *由阴阳构成
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}
/*加两个神秘小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    border-radius:50%;
    background:#000;
    transform:translateX(-50%);
    background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}

#div1::after{
    width:100px;
    height:100px;    
    top:50%;
    left:50%;
    border-radius:50%;
    background:#fff;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = ``;
let n = 0;  
let step = ()=>{
    if(string[n] === '\n'){
        string2 = string2 + '<br>'
    }else if(string[n] === ' '){
        string2 = string2 + '&nbsp'
    }else{
        string2 = string2 + string[n];
    }
    // string2 = string2 + (string[n] === '\n' ? '<br>':string[n]); 
    html.innerHTML = string2;
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    style.innerHTML = string.substring(0,n);
    if(n < string.length-1){
        setTimeout(()=>{
            n = n + 1
            step();  
        },10);
    }
}

step()