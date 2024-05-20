function indexOfIgnoreCase(s1, s2) {
	let st=s1.length;
    let searcht=s2.length;
    console.log(st.indexOf(searcht)); // -1


console.log(st.toLowerCase().indexOf(searcht.toLowerCase()));
       
   

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));