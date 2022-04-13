let strin="abcadeecfb";
let ca=(st)=>{
   let m=new Map();
   let count=0;
   for(let i=0;i<st.length;i++){
    m.set(st[i],count);
       }
    for(let key of st){
            let count=m.get(key);
            m.set(key,count+1)
   }
   console.log(m);
}
ca(strin);
