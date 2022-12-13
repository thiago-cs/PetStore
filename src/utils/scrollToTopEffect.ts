import { useEffect } from "react";
import { useLocation } from "react-router";


export function useScrollToTopEffect(): void
{
  	useEffect(() => window.scrollTo(0, 0), [useLocation()]);
}