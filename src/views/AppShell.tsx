import { Outlet } from "react-router-dom";

import { createLinkInfoGroupsFromObject } from "@/models/LinkInfo";
import { PageHeader } from "@/views/components/PageHeader";
import { PageFooter } from "@/views/components/PageFooter";
import { PageSizeIndicator } from "@/views/devComponents/PageSizeIndicator";
import { useScrollToTopEffect } from "@/utils/useScrollToTopEffect";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { RenderFallbackProvider } from "@/context/RenderFallbackContext";
import { settings } from "@/settings";


const footerLinkGroups = createLinkInfoGroupsFromObject(settings.footerLinks);


export function AppShell(): JSX.Element
{
	useScrollToTopEffect();

	return (
		<ShoppingCartProvider>
			<PageHeader companyName={settings.companyInfo.name}
						logoPath={settings.companyInfo.logo}
						pages={settings.pages.filter(page => page.showInNavigationBar)}
						iconSize={settings.header.iconSize} />

			<RenderFallbackProvider>
				<Outlet />
			</RenderFallbackProvider>

			<PageFooter linkGroups={footerLinkGroups} />

			<PageSizeIndicator className="fixed bottom-4 right-4 z-50" />
		</ShoppingCartProvider>
	);
}