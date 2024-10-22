import { WEBSITE_DOMAIN } from "@/constants";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...args) {
  return twMerge(clsx(args));
}

// return all SEO meta tags
export const metaSeoFields = (data) => {
  const defaultPageTitle =
    "PartyHub";
  const defaultTitle =
    "PartyHub";
  const defaultDescription =
    "Big things are coming! PartyHub is launching soon to make planning your perfect party fun and easy. Stay tuned—we’re almost ready to party with you!";
  return {
    metadataBase: new URL(WEBSITE_DOMAIN),
    title: data?.pageTitle || defaultPageTitle,
    description: data?.description || defaultDescription,
    alternates: {
      canonical: data?.pathName ? `/${data?.pathName}` : "/",
    },
    keywords:
      data?.keywords ||
      "party planning, event management, parties, PartyHub, coming soon, party ideas, event organizer, celebrations",
    robots: "index, follow",
    openGraph: {
      title: data?.title || defaultTitle,
      url: "/",
      description: data?.description || defaultDescription,
      images: [data?.ogImage || "/images/placeholder/og-placeholder.png", "/images/placeholder/twitter-placeholder.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title || defaultTitle,
      description: data?.description || defaultDescription,
      images:
        [data?.twitterImage || "/images/placeholder/twitter-placeholder.png",]
    },
  };
};