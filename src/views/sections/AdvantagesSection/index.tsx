import { DuoToneHeader } from "@/views/components/DuoToneHeader";
import { Icon, Package, PhoneCall, ShieldCheck, Truck } from "@/views/icons";

import serviceImage from "/src/assets/images/service-image.jpg";


export function AdvantagesSection(): JSX.Element
{
	return (
		<section className="p-20" >
			<img className="w-60 max-w-[50vw] aspect-square rounded-xl mx-auto" src={serviceImage} />

			<DuoToneHeader className="mt-8 sm:flex sm:flex-col lg:block" >
				{[ "What your pet needs,\u00A0", "when they need it." ]}
			</DuoToneHeader>

			<div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 place-content-around" >
				<Advantage icon={Truck} header="Free Same-Day Delivery" content="Order by 2pm local time to get free delivery on orders $35+ today." />
				<Advantage icon={Package} header="30 Day Return" content="35% off your first order plus 5% off all future orders." />
				<Advantage icon={ShieldCheck} header="Secure payment" content="25% off your online order of $50+. Available at most locations." />
				<Advantage icon={PhoneCall} header="24/7 Support" content="Shop online to get orders over $35 shipped fast and free." />
			</div>

		</section>
	);
}


export function Advantage(props: AdvantageProps): JSX.Element
{
	const { icon: Icon, header, content } = props;

	return (
		<div className="max-w-xs mx-auto flex-col gap-2 text-center items-center" >

			<Icon size={60} color="var(--accent-color-secondary)" />

			<h3 className="text-2xl" >
				{header}
			</h3>
			
			<p className="text-alt-medium-low" >
				{content}
			</p>
		</div>
	);
}


interface AdvantageProps
{
	icon: Icon;
	header: string;
	content: string;
}