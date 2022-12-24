import { Link } from "react-router-dom";

import { Page } from "../Page";
import { SignInForm } from "./SignInForm";

import "./index.css";


export function SignInPage(/* props: SignInPageProps */): JSX.Element
{
	return (
		<Page title="Sign in" className="pt-20 pb-20" >
			<section>
				<div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 max-w-7xl mx-auto px-4" >

					{/* <CompanyLogo companyName={settings.companyInfo.name} logoPath={settings.companyInfo.logoPath} /> */}

					<div className="my-5 sm:my-8  p-4 md:p-6
									bg-transparent border-0 border-base-medium-low rounded-lg
									sm:bg-base-color/20 sm:border sm:shadow-lg" >

						<h1 className="mb-10 text-xl font-light text-alt-medium text-left sm:text-center" >
							Log in to your account
						</h1>

						<SignInForm />

					</div>

					<div className="flex-row gap-4 text-sm text-left text-alt-medium-low sm:text-center" >

						<Link to="#" className="btn btn-link" >
							Forgot password
						</Link>

						<Link to="#" className="btn btn-link" >
							Create an account
						</Link>
					</div>

				</div>
			</section>
		</Page>
	);
}