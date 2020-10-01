//? generate password
let generate = () => {
	const symbols = []
	const password = []

	let chechbox1 = document.getElementById("checkbox1").checked
	let chechbox2 = document.getElementById("checkbox2").checked
	let chechbox3 = document.getElementById("checkbox3").checked
	let chechbox4 = document.getElementById("checkbox4").checked

	if (chechbox1 == true) {
		// prettier-ignore
		symbols.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
	}

	if (chechbox2 == true) {
		// prettier-ignore
		symbols.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
	}

	if (chechbox3 == true) {
		// prettier-ignore
		symbols.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
	}

	if (chechbox4 == true) {
		// prettier-ignore
		symbols.push("!","?","#","$","&","@","-","_","(",")","{","}","[","]","%","+")
	}

	console.log(symbols)

	let password_length = document.getElementById("password_length").value

	for (let i = 0; i < password_length; i++) {
		let random = Math.floor(Math.random() * symbols.length)
		password.push(symbols[random])
	}

	console.log(password)

	let final_password = password.join("")
	let password_text = (document.getElementById("password_text").value = final_password)
}

let e1 = document.getElementById("checkbox1").addEventListener("change", generate)
let e2 = document.getElementById("checkbox2").addEventListener("change", generate)
let e3 = document.getElementById("checkbox3").addEventListener("change", generate)
let e4 = document.getElementById("checkbox4").addEventListener("change", generate)
let e5 = document.getElementById("password_length").addEventListener("change", generate)

//? copy
let copy = () => {
	let copycolor = document.getElementById("password_text")
	copycolor.select()
	copycolor.setSelectionRange(0, 9999)
	document.execCommand("copy")

	let memory = document.getElementById("password_text").value

	let copyied = (document.getElementById("password_text").value = "Copied!")

	document.getElementById("password_text").blur()

	setTimeout(() => {
		let memory_paste = (document.getElementById("password_text").value = memory)
	}, 500)
}
