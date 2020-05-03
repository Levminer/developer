"use strict";
//? hex
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hex_start = () => {
    let hex_color = "#";
    for (let i = 0; i < 6; i++) {
        let hex_randomizer = Math.floor(Math.random() * hex.length);
        hex_color += hex[hex_randomizer];
    }
    console.log(hex_color);
    document.body.style.backgroundColor = hex_color;
    let hex_value = (document.getElementById("color_text").value = hex_color);
};
//? rgb
let rgb_start = () => {
    let rgb_color0 = "";
    let rgb_color1 = "";
    let rgb_color2 = "";
    for (let i = 0; i < 3; i++) {
        let rgb_randomizer = Math.floor(Math.random() * 256);
        switch (i) {
            case 0:
                rgb_color0 += rgb_randomizer;
                break;
            case 1:
                rgb_color1 += rgb_randomizer;
                break;
            case 2:
                rgb_color2 += rgb_randomizer;
                break;
        }
    }
    let rgb = `rgb(${rgb_color0},${rgb_color1},${rgb_color2})`;
    console.log(rgb);
    document.body.style.backgroundColor = rgb;
    let rgb_value = (document.getElementById("color_text").value = rgb);
};
//? copy
let copy = () => {
    let copypassword = document.getElementById("color_text");
    copypassword.select();
    copypassword.setSelectionRange(0, 99999);
    document.execCommand("copy");
    let memory = document.getElementById("color_text").value;
    let copyied = (document.getElementById("color_text").value = "Copied!");
    setTimeout(() => {
        let memory_paste = (document.getElementById("color_text").value = memory);
    }, 1000);
};
