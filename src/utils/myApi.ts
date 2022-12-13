import { Brand } from "models/Brand";
import { Offer } from "models/Offer";
import { Product } from "models/Product";
import { ProductTag } from "models/ProductTag";
import { sleep } from "utils/sleep";


export const myApi =
{
	async getProductsAsync(): Promise<Product[]>
	{
		await sleep(1500);

		for (const item of products)
			for (let i = 0; i < item.images.length; i++)
				item.images[i] = getImageUrl(item.images[i]);

		return products;
	},

	async getTopBrandsAsync(): Promise<Brand[]>
	{
		await sleep(1500);
		const copy = brands.slice(0, 5);

		for (const item of copy)
			item.image = getImageUrl(item.image);

		return copy;
	},

	async getOffersAsync(): Promise<Offer[]>
	{
		await sleep(1500);
		const copy = offers.map(item => ({...item}));

		for (const item of copy)
			item.image = getImageUrl(item.image);

		return copy;
	},
};

console.log("base url:", import.meta.url);

function getImageUrl(path: string): string
{
	if (path.startsWith("http"))
		return path;

	const filePath = `/images/${path}`;
	return new URL(filePath, import.meta.url).href;
}


const products: Product[] =
[
	{
		id: "p001",
		description: "Dry Dog Food",
		tags: [ ProductTag.Food, ProductTag.Dog ],
		productPageUrl: "",
		images: ["products/product001_pic00.png", "products/product001_pic01.png",],
		price: 15.00,
		numberOfReviews: 2,
		ratingScore: 3.5,
		isFavorite: false,
	},
	{
		id: "p002",
		description: "Shrimp pellets",
		tags: [ ProductTag.Food, ProductTag.Fish ],
		productPageUrl: "",
		images: ["products/product002_pic00.png", "products/product002_pic01.png",],
		price: 4.5,
		numberOfReviews: 0,
		ratingScore: 0,
		isFavorite: false,
	},
	{
		id: "p003",
		description: "More Shrimp Pellets",
		tags: [ ProductTag.Food, ProductTag.Fish ],
		productPageUrl: "",
		images: ["products/product003_pic00.png", "products/product003_pic01.png",],
		price: 49.00,
		numberOfReviews: 0,
		ratingScore: 0,
		isFavorite: false,
	},
	{
		id: "p004",
		description: "Pellet bird food",
		tags: [ ProductTag.Food, ProductTag.Bird ],
		productPageUrl: "",
		images: ["products/product004_pic00.png", "products/product004_pic01.png",],
		price: 85.00,
		numberOfReviews: 0,
		ratingScore: 0,
		isFavorite: false,
	},
	{
		id: "p005",
		description: "Interactive 3-Tier Cat Toy",
		tags: [ ProductTag.Toy, ProductTag.Cat ],
		productPageUrl: "",
		images: ["products/product005_pic00.png", "products/product005_pic01.png",],
		price: 80.00,
		numberOfReviews: 0,
		ratingScore: 0,
		isFavorite: false,
	},
	{
		id: "p006",
		description: "Cat Calming Pheromone",
		tags: [ ProductTag.Medicine, ProductTag.Cat ],
		productPageUrl: "",
		images: ["products/product006_pic00.png", "products/product006_pic01.png",],
		price: 86.00,
		numberOfReviews: 10,
		ratingScore: 5,
		isFavorite: false,
	},
	{
		id: "p007",
		description: "Canine Formula",
		tags: [ ProductTag.Food, ProductTag.Dog ],
		productPageUrl: "",
		images: ["products/product007_pic00.png", "products/product007_pic01.png",],
		price: 18.00,
		numberOfReviews: 18,
		ratingScore: 5,
		isFavorite: true,
	},
	{
		id: "p008",
		description: "Dog Urinary Care",
		tags: [ ProductTag.Medicine, ProductTag.Dog ],
		productPageUrl: "",
		images: ["products/product008_pic00.png", "products/product008_pic01.png",],
		price: 49.99,
		numberOfReviews: 0,
		ratingScore: 0,
		isFavorite: false,
	},
];

const brands: Brand[] =
[
	{ header: "", url: "", image: "brands/brand-1.jpg", },
	{ header: "", url: "", image: "brands/brand-2.jpg", },
	{ header: "", url: "", image: "brands/brand-3.jpg", },
	{ header: "", url: "", image: "brands/brand-4.jpg", },
	{ header: "", url: "", image: "brands/brand-5.jpg", },
];

const offers: Offer[] =
[
	{
		header: "Selected Items. Online Only.",
		content: "Hot Summer Deals",
		url: "",
		image: "offers/offer-banner-1.jpg",
	},
	{
		header: "Treats & Grooming",
		content: "Spoil your true love",
		url: "",
		image: "offers/offer-banner-2.jpg",
	},
	{
		header: "Brands You Will Love",
		content: "New in this year",
		url: "",
		image: "offers/offer-banner-3.jpg",
	},
];