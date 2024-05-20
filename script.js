function indexOfIgnoreCase(s1, s2) {
    for(let i=0;i<s1.length();i++){
    let  ans =s1.substring(i+1,s1)
        for(let j=i+1;j<s1.length();j++){
              let an=s2.substring(i,j);
            
             if(ans<1){
                ans=a[i];
             }
             else if(an<1){
              an=[i];
             }
             else{
                 return -1;
             }
                
             

        }
    }

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
