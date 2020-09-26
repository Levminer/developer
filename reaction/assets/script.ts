let level: number = 0
let counter: number = 0
let random: number = 0
let time_ms: number = 0

let button1 = <HTMLInputElement>document.getElementById("button1")
let button2 = <HTMLInputElement>document.getElementById("button2")
let text = <HTMLInputElement>document.getElementById("text")

let gg: number = 0

let t1: any
let t2: any

let start = () => {
	switch (level) {
		case 0:
			counter = 0
			random = 0
			random = Math.floor(Math.random() * 15) + 1
			time_ms = random * 1000

			button1.innerHTML = "Látom!"

			t1 = setTimeout(() => {
				document.body.style.backgroundColor = "green"
				t2 = setInterval(() => {
					counter++
					gg = 1
				}, 1)
			}, time_ms)

			level = 1
			break
		case 1:
			if (gg == 0) {
				text.innerHTML = `Reakcióidő: Túl gyors voltál!`
				clearTimeout(t1)
				clearInterval(t2)
			} else if (gg == 1) {
				text.innerHTML = `Reakcióidő: ${counter}ms`
				clearTimeout(t1)
				clearInterval(t2)
			}
			break
	}
}

let restart = () => {
	location.reload()
}
