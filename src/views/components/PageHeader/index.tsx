import { useLocation } from "react-router-dom";

import { NavigationToggle } from "./NavigationToggle";
import { CommandBarLink } from "./CommandBarLink";
import { AcrylicPanel } from "@/views/panels/AcrylicPanel";
import { CompanyLogo } from "@/views/components/CompanyLogo";
import { PageLink } from "@/views/components/PageHeader/PageLink";
import { CommandBarButton } from "@/views/components/PageHeader/CommandBarButton";
import { ThemeToggleButton } from "@/views/components/PageHeader/ThemeToggleButton";
import { InfoBadge } from "@/views/components/InfoBadge";
import { HTMLComment } from "@/views/devComponents/HTMLComment";
import { Search, User, Shop, } from "@/views/icons";
import { useToggle } from "@/utils/useToggle";



export function PageHeader(props: PageHeaderProps): JSX.Element
{
	const currentPath = useLocation().pathname;
	const [ isNavFlyoutOpen, toggleNavFlyoutOpen ] = useToggle(false);
	const { logoPath, companyName, pages } = props;

	const iconSize = props.iconSize + "rem";

	return (
		<header className="z-20 text-alt-high" >

			<button className={`fixed top-0 left-0 w-full h-full border-0 cursor-pointer
								backdrop-blur bg-base-color/30 
								${isNavFlyoutOpen ? "opacity-100" : "opacity-0 invisible"} transition-opacity duration-200
								lg:invisible `}
					onClick={dismissFlyout} />

			<HTMLComment>
				top bar
			</HTMLComment>
			<AcrylicPanel className="fixed top-0 w-full flex items-center gap-10" >

				<HTMLComment>
					compact bar items
				</HTMLComment>
				<div className="w-full lg:w-auto px-4 py-1 flex justify-between items-center z-20" >

					<div className="lg:hidden flex-1" >
						<div className="w-5 aspect-square bg-red-300 rounded-md" />
					</div>

					<CompanyLogo companyLogo={logoPath} companyName={companyName} />

					<div className="lg:hidden flex-1  flex items-center justify-end" >
						<NavigationToggle size="1.5rem" isOpen={isNavFlyoutOpen} onClick={dismissFlyout} />
					</div>

				</div>

				<HTMLComment>
					Flyout
				</HTMLComment>
				<div className={`absolute top-12 left-3 right-3 px-1 py-2 rounded-lg
								 flex-col gap-4 
								 bg-base-medium-high border-base-medium-low border-2
								 transition-[opacity,transform] origin-top-right duration-200 
								 ${isNavFlyoutOpen ? "opacity-100" : "opacity-0 scale-50 invisible"}
								 sm:left-auto sm:w-60
								 lg:static lg:visible lg:opacity-100 lg:py-0 lg:transform-none lg:flex-1 lg:flex-row lg:items-center lg:gap-0
								 lg:transition-none lg:bg-transparent lg:border-0 `} >

					<nav className="flex-1 flex-col gap-1 select-none lg:flex-row lg:gap-6 lg:justify-center" >
					{
						pages.map((item, index) =>
							<PageLink key={index}
									  className="p-3 rounded text-md font-semibold underline-offset-[1ex]
									  			 lg:px-0 lg:py-1 hover:bg-zinc-500/10 lg:hover:bg-transparent"
									  title={item.title}
									  to={item.url}
									  isActive={item.url === currentPath}
									  onClick={dismissFlyout} />)
					}
					</nav>

					<HTMLComment>
						Commands
					</HTMLComment>
					<menu className="h-14 px-2  bg-base-high rounded-lg  flex-row items-center justify-between gap-4
									lg:px-0 lg:bg-transparent" >

						<li>
							<CommandBarButton icon={Search} iconSize={iconSize} />
						</li>

						<li>
							<CommandBarLink icon={User} iconSize={iconSize} url="/signIn" click={dismissFlyout} />
						</li>

						<li>
							<CommandBarButton>
								<InfoBadge value={1} background="var(--accent-color-secondary)" foreground="white" >
									<Shop size={iconSize} />
								</InfoBadge>
							</CommandBarButton>
						</li>

						<li className="flex-1 text-end h-fit" >
							<ThemeToggleButton size={iconSize} />
						</li>

					</menu>
				</div>
				<HTMLComment>
					end of detachable items
				</HTMLComment>

			</AcrylicPanel>

		</header>
	);


	function dismissFlyout()
	{
		toggleNavFlyoutOpen();
	}
}


interface PageHeaderProps
{
	logoPath?: string;
	companyName: string | null;
	pages: { title: string, url: string }[];
	iconSize: number;
}