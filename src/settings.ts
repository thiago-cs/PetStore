import { PageData } from "@/models/PageData";
import { LinkInfo } from "@/models/LinkInfo";
import { ProductCategory } from "@/models/ProductCategory";

import CompanyLogo from "/src/assets/images/favicon.svg";
import Category1Image from "/src/assets/images/category-1.jpg";
import Category2Image from "/src/assets/images/category-2.jpg";
import Category3Image from "/src/assets/images/category-3.jpg";
import Category4Image from "/src/assets/images/category-4.jpg";
import Category5Image from "/src/assets/images/category-5.jpg";


const companyInfo =
{
	name: "Kitter",
	logo: CompanyLogo,
	address: "30 Buttonwood St.Pataskala OH 43062",
	supportEmail: "support@gmail.com",
	landline: "(+1)-6234-56-789-1011",
};

const pages: PageData[] =
[
	{
		title: "Home",
		path: "/" ,
		componentName: "HomePage",
		showInNavigationBar: true,
	},
	{
		title: "Shop",
		path: "/shop",
		componentName: "ShopPage",
		showInNavigationBar: true,
	},
	{
		title: "Blogs",
		path: "/blogs",
		componentName: "ContactPage",
		showInNavigationBar: true,
	},
	{
		title: "Contact",
		path: "/contact",
		componentName: "ContactPage",
		showInNavigationBar: true,
	},
	{
		title: "Sign in",
		path: "/signIn",
		componentName: "SignInPage",
		showInNavigationBar: false,
	},
	{
		title: "Not found",
		path: "*",
		componentName: "PageNotFoundPage",
		showInNavigationBar: false,
	},
];

const header =
{
	iconSize: 1.25,
};

const topCategories: ProductCategory[] =
[
	{ header: "Cat food", url: "/shop?for=😺&category=🌮", image: Category1Image, },
	{ header: "Cat toys", url: "/shop?for=😺&category=🪀", image: Category2Image, },
	{ header: "Dog food", url: "/shop?for=🐶&category=🌮", image: Category3Image, },
	{ header: "Dog toys", url: "/shop?for=🐶&category=🪀", image: Category4Image, },
	{ header: "Dog supplements", url: "/shop?for=🐶&category=💊", image: Category5Image, },
];

const footerLinks: { [header: string]: LinkInfo[] } =
{
	Services:
	[
		{ header: "Grooming", url: "" },
		{ header: "Positive Dog Training", url: "" },
		{ header: "Veterinary Services", url: "" },
		{ header: "Petco Insurance", url: "" },
		{ header: "Pet Adoption", url: "" },
		{ header: "Resource Center", url: "" },
	],
	Information:
	[
		{ header: "Online Store", url: "" },
		{ header: "Privacy Policy", url: "" },
		{ header: "Refund Policy", url: "" },
		{ header: "Shipping Policy", url: "" },
		{ header: "Terms of Service", url: "" },
		{ header: "Track Order", url: "" },
	],
	Corporate:
	[
		{ header: "Careers", url: "" },
		{ header: "About Us", url: "" },
		{ header: "Contact Us", url: "" },
		{ header: "FAQs", url: "" },
		{ header: "Vendors", url: "" },
		{ header: "Affiliate Program", url: "" },
	],
};

const api =
{
	url: new URL(import.meta.url).origin,
	basePath: "/api",
};

const attributions =
[
	{ content: "Pet Shop Vectors by Vecteezy", url: "https://www.vecteezy.com/free-vector/pet-shop", },
	{ content: "Package Vectors by Vecteezy",  url: "https://www.vecteezy.com/free-vector/package", },
];


export const settings = { companyInfo, pages, header, topCategories, footerLinks, api, attributions, };