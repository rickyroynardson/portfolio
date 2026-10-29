import { type CollectionEntry, getCollection } from "astro:content";

type Leg = CollectionEntry<"travels">["data"]["legs"][number];

export const getTravels = async () =>
	(await getCollection("travels", ({ data }) => !data.draft)).sort(
		(a, b) => b.data.legs[0].date.getTime() - a.data.legs[0].date.getTime(),
	);

// "SG" -> 🇸🇬 (regional indicator letters)
export const flag = (country: string) =>
	String.fromCodePoint(
		...[...country.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0)),
	);

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

// "SG" -> "Singapore"
export const countryName = (country: string) =>
	regionNames.of(country.toUpperCase()) ?? country;

// "29 Oct"
export const fmtDate = (d: Date) =>
	d.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		timeZone: "UTC",
	});

// "29 Oct – 31 Oct · 3d", from first to last leg
export const travelDates = (legs: Leg[]) => {
	const start = legs[0].date;
	const end = legs[legs.length - 1].date;
	const days = Math.round((end.getTime() - start.getTime()) / 864e5) + 1;
	return days === 1
		? fmtDate(start)
		: `${fmtDate(start)} – ${fmtDate(end)} · ${days}d`;
};
