// Place used in a travel leg -> [longitude, latitude]. Airports by IATA code, harbours by name
// (the key is what the itinerary shows). Add a line here for every new place.
export const places: Record<string, [number, number]> = {
	// airports
	BTH: [104.119, 1.121], // Hang Nadim, Batam
	SIN: [103.9915, 1.3644], // Changi, Singapore
	PNK: [109.40522432244177, -0.14739995264527095], // Supadio, Pontianak
	// harbours
	"Harbour Bay": [103.998, 1.157], // Harbour Bay Ferry Terminal, Batam
	"Johor Bahru": [103.783, 1.469], // Stulang Laut Ferry Terminal
	Harbourfront: [103.8203, 1.2644], // HarbourFront Centre, Singapore
	Punggur: [104.141, 1.056], // Telaga Punggur Ferry Terminal, Batam
	"Tanjung Uban": [104.214, 1.072], // Tanjung Uban Harbour, Bintan
};
