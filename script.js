function indexOfIgnoreCase(s1, s2) {
	let st = s1.toLowerCase();
    let searcht = s2.toLowerCase();

    // Return the index of the first occurrence of searcht in st
    return st.indexOf(searcht);

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));