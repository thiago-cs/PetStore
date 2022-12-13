import { LinkInfoGroup } from "models/LinkInfo";
import { FooterLinkTable } from "./FooterLinkTable";
import { CurlyOverlay } from "views/components/CurlyOverlay";
import { CompanyLogo } from "views/components/CompanyLogo";
import { MapPin, Phone } from "views/icons";
import { settings } from "../../../settings";


export function PageFooter(props: PageFooterProps): JSX.Element
{
	const { linkGroups } = props;
	const { logo, name: companyName, address, supportEmail: email, landline } = settings.companyInfo;

	const emailUrl = "mailto:" + email;
	const landlineUrl = landline ? "tel:" + landline.replace(/[\(\)\-]/g, "") : undefined;

	return (
		<footer className="pt-10 bg-base-medium-high" >

			<CurlyOverlay className="w-full h-16" foreground="var(--base-medium)" forceUniformScaling={false} />

			<div className="p-4 md:p-10 bg-base-medium
							flex-col lg:flex-row justify-around" >

				<div className="max-w-[44ch] mb-12 self-center flex-col gap-4" >

					<CompanyLogo className="mb-8" companyLogo={logo} companyName={companyName} />

					{ email &&
						<p className="text-alt-medium-low" >
							If you have any question, please contact us at{' '}
							<a className="text-accent-secondary hover:underline" href={emailUrl} >
								{email}
							</a>
							.
						</p>
					}

					{ address &&
						<p className="font-bold" >
							<MapPin size={20} color={"var(--accent-color-secondary)"} className="mr-3 inline" />
							{address}
						</p>
					}

					{ landline &&
						<p className="font-bold" >
							<Phone size={20} color={"var(--accent-color-secondary)"} className="mr-3 inline" />
							<a className="hover:underline" href={landlineUrl} >
								{landline}
							</a>
						</p>
					}
				</div>

				{/* <div className="mb-12 flex-row justify-around gap-[4vw]" >
				{
					linkGroups.map((item, index) => <FooterLinkList key={index} linkGroup={item} />)
				}
				</div> */}
				<FooterLinkTable linkGroups={linkGroups} />

			</div>
		</footer>
	);
}


interface PageFooterProps
{
	linkGroups: LinkInfoGroup[];
}