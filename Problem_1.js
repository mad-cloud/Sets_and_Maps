let strin="abcadeecfb";
let rd=(str)=>{
    let s=new Set();
    for(let i=0;i<str.length;i++){
        s.add(str[i]);
    }
    for(let j of s){
        console.log(j);
    }
}
rd(strin);
