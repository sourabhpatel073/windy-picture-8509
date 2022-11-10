// let search = "panty";
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3bf207a79emsh121fd90e6a9fd50p1904d4jsn13e06ac9d846',
// 		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
// 	}
// };

// fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${search}&currency=USD&sizeSchema=US&lang=en-US`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     let a = "";
//     let b = "";
//     console.log(a==b);

let offer_clothes_data = [
	{
		img:"https://images.asos-media.com/products/asos-design-puffer-jacket-in-lime-tiger-print/202858821-2?$n_640w$&wid=513&fit=constrain",
		p:"COLD WEATHER WINS"
	},
	{
		img:"https://images.asos-media.com/products/collusion-oversized-sweatshirt-with-print-in-black/201126474-2?$n_640w$&wid=513&fit=constrain",
		p:"STYLES UNDER £15"
	},
	{
		img:"https://images.asos-media.com/products/french-connection-slim-fit-prince-of-wales-check-waistcoat/21178962-4?$n_640w$&wid=513&fit=constrain",
		p:"SUITS AND STUFF"
	},
	{
		img:"https://images.asos-media.com/products/dtt-baggy-fit-jeans-in-light-blue/202261958-1-blue?$n_640w$&wid=513&fit=constrain",
		p:"JEANS"
	},
	{
		img:"https://images.asos-media.com/products/adidas-running-run-icons-t-shirt-in-orange/202145849-1-orange?$n_640w$&wid=513&fit=constrain",
		p:"SPORTSWEAR"
	},
	{
		img:"https://images.asos-media.com/products/adidas-originals-zx-22-boost-trainers-in-green-and-off-white/201524779-1-white?$n_640w$&wid=513&fit=constrain",
		p:"SNEAKS & MORE"
	}
]

const show = (data) => {
	let div = document.getElementById("images");
	data.forEach(({img,p}) => {
		let card = document.createElement("div");
		let card1 = document.createElement("div");
		let div1 = document.createElement("div");
		div1.setAttribute("class","type")

		let image = document.createElement("img");
		image.src=img
		
		let heading = document.createElement("label");
		heading.textContent = p;

		div1.append(heading)
		card.append(image,div1);
		card1.append(card)
		div.append(card1);
	})
}
show(offer_clothes_data);

let by_season = [
	{
		img:"https://content.asos-media.com/-/media/homepages/mw/2022/nov/07/moments/mw_global_the_north_face_moment_870x1110.jpg",
		p1:"THE NORTH FACE",
		P2:"As Seen Outdoors",
	},
	{
		img:"https://content.asos-media.com/-/media/homepages/mw/2022/nov/07/moments/mw_global_winter_essentials_moment_870x1110.jpg",
		p1:"WINTER WINS",
		P2:"From £ 10",
	},
	{
		img:"https://content.asos-media.com/-/media/homepages/mw/2022/nov/07/moments/mw_global_western_moment_870x1110.jpg",
		p1:"WILD WILD WEST",
		P2:"Giddy up",
	},
	{
		img:"https://content.asos-media.com/-/media/homepages/mw/2022/nov/07/moments/mw_global_hugo_moment_870x1110.jpg",
		p1:"HUGO",
		P2:"Like a Boss",
	},
]
let append = (data) => {
	let container = document.getElementById("by_season");
	data.forEach(({img,p1,P2}) => {
		let div = document.createElement("div");

		let image = document.createElement("img");
		image.src = img;

		let head = document.createElement("h3");
		head.textContent = p1;

		let pa = document.createElement("p");
		pa.textContent=P2;

		div.append(image,head,pa);
		container.append(div);
	})
}
append(by_season);

let trending_brand=[
	"https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/asos-design-logo_256_v4.png","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/topman_logo_256x128_v3.png","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/new-balance-hp-logos-256x256.jpg","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/jack-jones-hp-logos-256x256.jpg","https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256.jpg"
]
let show_trend = (data) => {
	let container = document.getElementById("brands");
	
	data.forEach((el) => {
		let div = document.createElement("div");
		
		let image = document.createElement("img");
		image.src = el;
		
		div.append(image);
		container.append(div)
	})
}
show_trend(trending_brand);