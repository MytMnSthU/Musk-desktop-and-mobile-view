// // import Glide, { Autoplay } from "@glidejs/glide/dist/glide.modular.esm";

// //UI
// const mainimg = document.querySelector("img");
// const imageslider = document.querySelector(".img-slider");
// const images = ["./img/sm-el-3.jpg", "./img/sm-el-1.png", "./img/lg-el-2.png"];

// // WAY-1

// // let start = 0;
// // // mainimg.src = images[start];

// // const slideshow = () => {
// // 	start++;
// // 	if (start == images.length) {
// // 		start = 0;
// // 	}
// // 	mainimg.animate(
// // 		[
// // 			// keyframes
// // 			{ transform: "translateX(-100%)" },
// // 			{ transform: "translateX(0%)" },
// // 		],
// // 		{
// // 			// timing options
// // 			duration: 2000,
// // 			iterations: Infinity,
// // 		}
// // 	);
// // 	console.log(start);
// // 	mainimg.src = images[start];
// // };

// // WAY 2

// let start = 0;
// function createimg() {
// 	start++;
// 	if (start > images.length - 1) {
// 		start = 0;
// 	}
// 	// imageslider.style.transition = "all ease 0.5s";
// 	const imgdiv = document.createElement("div");
// 	imgdiv.classList.add("img");
// 	const img = document.createElement("img");

// 	img.src = images[start];
// 	console.log(img.src);
// 	img.style.width = "755px";
// 	img.style.height = "100vh";
// 	// const img = `
// 	//     <div class="img">
// 	//         <img src="${images[start]}" width="750px" height="100%" >
// 	//     </div>
// 	// `;
// 	imgdiv.appendChild(img);
// 	imageslider.appendChild(imgdiv);

// 	// img.animate([{ transform: "translateX(0%)" }, { transform: "translateX(-100%)" }], {
// 	// 	duration: 1000,
// 	// 	iterations: 1,
// 	// 	fill: "forwards",
// 	// });

// 	// img.style.transition = "all ease 0.5s";
// }

// function move() {
// 	const imgs = document.querySelectorAll(".img > img");
// 	imgs.forEach((img) => {
// 		// img.style.transition = "all ease 0.5s";
// 		img.style.transform += "translateX(-100%)";
// 	});
// }

// setInterval(createimg, 4000);
// setInterval(move, 4000);

const nav = document.querySelector("nav");
// const logo = document.querySelector(".logo");
const navbarmenu = document.querySelector(".nav-bar-menu");
const navbar = document.querySelector(".nav-menu-bar");
const navlinks = document.querySelectorAll(".nav-link");
const bars = document.querySelectorAll(".bar");
const middlebar = document.querySelector(".bar:nth-child(2)");
const html = document.querySelector('html');

let scrollHeight = 0;
window.addEventListener("scroll", () => {
	if (scrollHeight < document.documentElement.scrollTop) {
		nav.style.top = "-10vh";
	} else {
		nav.style.top = "0vh";
	}
	if (window.scrollY > 0) {
		// nav.style.backgroundColor = "#333";
		// logo.style.color = "#fff";
		// bars.forEach((bar) => {
		// 	bar.style.backgroundColor = "#fff";
		// });
		html.classList.add('dark');
		// navbarmenu.addEventListener("click", () => {
		// 	bars.forEach((bar) => {
		// 		bar.classList.toggle("clicked");
		// 	});
		// 	middlebar.classList.toggle("transparent");
		// });
	} else {
		// nav.style.backgroundColor = "transparent";
		// logo.style.color = "#333";
		// bars.forEach((bar) => {
		// 	bar.style.backgroundColor = "#333";
		// });

		html.classList.remove("dark");

	}

	scrollHeight = document.documentElement.scrollTop;

	// if (clicked) {
	// 	navbar.style.transform = "translateY(-150%)";
	// 	clicked = false;
	// } else {
	// 	// navbar.style.transform = "translateY(0)";
	// 	clicked = true;
	// }
	if (clicked) {
		navbar.classList.toggle("open-close");
		middlebar.classList.toggle("transparent");
		bars.forEach((bar) => {
			bar.classList.toggle("clicked");
		});
		clicked = false;
	}
});

function removeactive() {
	for (let i = 0; i < navlinks.length; i++) {
		navlinks[i].classList.remove("active");
	}
}
navlinks.forEach((navlink) => {
	navlink.addEventListener("click", () => {
		removeactive();
		navlink.classList.add("active");
	});
});

let clicked = false;

navbarmenu.addEventListener("click", () => {
	middlebar.classList.toggle("transparent");
	bars.forEach((bar) => {
		bar.classList.toggle("clicked");
	});
	// if (!clicked) {
	// 	navbar.style.transform = "translateY(0)";
	// 	clicked = true;
	// } else {
	// 	navbar.style.transform = "translateY(-150%)";
	// 	clicked = false;
	// }
	navbar.classList.toggle("open-close");
	if (!clicked) {
		clicked = true;
	} else {
		clicked = false;
	}
});
