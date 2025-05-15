const parseCode = (str) => {
  // your code here
	let newStr = split(' ');
	
	return {firstName : `${newStr[0]}`, lastName: `${newStr[1]}`,id : `${newStr[2]}`};
};

// Do not change the code below
const str = prompt("Enter str: ");

alert(JSON.stringify(parseCode(str)));
