const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let state = false

//? color picker
let picker = () => {
	if (state == false) {
		let second = document.querySelector(".second")
		second.style.display = "block"
		state = true
	} else {
		let second = document.querySelector(".second")
		second.style.display = "none"
		state = false
	}
}

//?hex
let hex_start = () => {
	let hex_color = "#"

	for (let i = 0; i < 6; i++) {
		let hex_randomizer = Math.floor(Math.random() * hex.length)

		hex_color += hex[hex_randomizer]
	}

	console.log(hex_color)

	document.body.style.backgroundColor = hex_color
	let hex_value = (document.getElementById("color_text").value = hex_color)
}

//? hexa
let hexa_start = () => {
	let hex_color = "#"

	for (let i = 0; i < 8; i++) {
		let hex_randomizer = Math.floor(Math.random() * hex.length)

		hex_color += hex[hex_randomizer]
	}

	console.log(hex_color)

	document.body.style.backgroundColor = hex_color
	let hex_value = (document.getElementById("color_text").value = hex_color)
}

//? rgb
let rgb_start = () => {
	let rgb_color0 = ""
	let rgb_color1 = ""
	let rgb_color2 = ""

	for (let i = 0; i < 3; i++) {
		let rgb_randomizer = Math.floor(Math.random() * 256)

		switch (i) {
			case 0:
				rgb_color0 += rgb_randomizer
				break
			case 1:
				rgb_color1 += rgb_randomizer
				break
			case 2:
				rgb_color2 += rgb_randomizer
				break
		}
	}

	let rgb = `rgb(${rgb_color0},${rgb_color1},${rgb_color2})`

	console.log(rgb)

	document.body.style.backgroundColor = rgb
	let rgb_value = (document.getElementById("color_text").value = rgb)
}

//? rgba
let rgba_start = () => {
	let rgb_color0 = ""
	let rgb_color1 = ""
	let rgb_color2 = ""

	for (let i = 0; i < 3; i++) {
		let rgb_randomizer = Math.floor(Math.random() * 256)

		switch (i) {
			case 0:
				rgb_color0 += rgb_randomizer
				break
			case 1:
				rgb_color1 += rgb_randomizer
				break
			case 2:
				rgb_color2 += rgb_randomizer
				break
		}
	}

	let rgb_color3 = Math.floor(Math.random() * 100)

	let rgb = `rgba(${rgb_color0},${rgb_color1},${rgb_color2}, 0.${rgb_color3})`

	console.log(rgb)

	document.body.style.backgroundColor = rgb
	let rgb_value = (document.getElementById("color_text").value = rgb)
}

//?hsla
let hsla_start = () => {
	let hsl_color0 = Math.floor(Math.random() * 360)
	let hsl_color1 = Math.floor(Math.random() * 100)
	let hsl_color2 = Math.floor(Math.random() * 100)

	let hsl_color3 = Math.floor(Math.random() * 100)

	let hsl = `hsla(${hsl_color0}, ${hsl_color1}%, ${hsl_color2}%, 0.${hsl_color3})`

	console.log(hsl)

	document.body.style.backgroundColor = hsl
	let hsl_value = (document.getElementById("color_text").value = hsl)
}

//?hsl
let hsl_start = () => {
	let hsl_color0 = Math.floor(Math.random() * 360)
	let hsl_color1 = Math.floor(Math.random() * 100)
	let hsl_color2 = Math.floor(Math.random() * 100)

	let hsl = `hsl(${hsl_color0}, ${hsl_color1}%, ${hsl_color2}%)`

	console.log(hsl)

	document.body.style.backgroundColor = hsl
	let hsl_value = (document.getElementById("color_text").value = hsl)
}

//? copy
let copy = () => {
	let copycolor = document.getElementById("color_text")
	copycolor.select()
	copycolor.setSelectionRange(0, 9999)
	document.execCommand("copy")

	let memory = document.getElementById("color_text").value

	let copyied = (document.getElementById("color_text").value = "Copied!")

	document.getElementById("color_text").blur()

	setTimeout(() => {
		let memory_paste = (document.getElementById("color_text").value = memory)
	}, 500)
}
