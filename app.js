console.log(eval("2 + 2"))
let inputScreen = document.getElementById('input');
let resultScreen = document.getElementById('result');

let getInput = (input)=>{
	inputScreen.value += input;
}

let clearScreen = ()=>{
	inputScreen.value = "";
	resultScreen.value = "";
}

let calc = ()=>{
	try{
	resultScreen.value = eval(inputScreen.value);
	}catch(error){
		
	}
}