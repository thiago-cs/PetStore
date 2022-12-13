export function SignInForm(): JSX.Element
{
	return (
		<form className="flex-col gap-6" >

			<label className="block" >
				<span className="block mb-1 text-xs font-medium text-alt-medium" >
					Your Email
				</span>

				<input type="email" className="form-input" placeholder="Ex. james@bond.com" inputMode="email" required />
			</label>

			<label className="block" >
				<span className="block mb-1 text-xs font-medium text-alt-medium" >
					Your Password
				</span>

				<input type="password" className="form-input" placeholder="••••••••" required />
			</label>

			<div className="flex-row items-center justify-between" >

				<label className="flex items-center" >
					<input type="checkbox" className="form-checkbox accent-orange-600 " />

					<span className="block ml-2 text-xs font-medium text-alt-medium cursor-pointer" >
						Remember me
					</span>
				</label>

				<input type="submit" className="btn bg-accent-primary hover:bg-accent-secondary active:bg-accent-secondary text-white" value="Login" />
			</div>

		</form>
	);
}