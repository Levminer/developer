//? generate password
let generate = () => {
	// prettier-ignore
	const symbols: any = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
						  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
						  "!", "?", "_", "-", "@", "%", "#", "$", "€", "&",
	                      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
	const password: any = []

	let password_length: any = (<HTMLInputElement>document.getElementById("password_length")).value

	for (let i = 0; i < password_length; i++) {
		let randomizer: number = Math.floor(Math.random() * symbols.length)

		let random_symbol: any = symbols[randomizer]

		password.push(random_symbol)
	}
	let final_password: any = password.join("")
	let password_text: any = ((<HTMLInputElement>document.getElementById("password_text")).value = final_password)
}

//? copy password
let copy = () => {
	let copypassword: any = document.getElementById("password_text")
	copypassword.select()
	copypassword.setSelectionRange(0, 99999)
	document.execCommand("copy")

	let memory: any = (<HTMLInputElement>document.getElementById("password_text")).value

	let copyied: any = ((<HTMLInputElement>document.getElementById("password_text")).value = "Copied!")

	setTimeout(() => {
		let memory_paste: any = ((<HTMLInputElement>document.getElementById("password_text")).value = memory)
	}, 1000)
}
