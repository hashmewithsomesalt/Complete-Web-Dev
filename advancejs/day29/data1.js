export const data = [
    {
        name: "Waitomo Glowworm Caves",
        location: "Waitomo",
        country: "New Zealand",
        continent: "Oceania",
        is_open_to_public: true,
        details: [
            {
                fun_fact: "The glowworms create a star-like effect on the cave ceiling using bioluminescence."
            },
            {
                description: "A subterranean network of limestones caverns famous for its magical boat rides under winkling glowworm-lit ceilings.",
            },
        ],
        uuid: "550e8400-e29b-41d4-a716-446655440001",
    },
    {
        name: "The Door to Hell",
        location: "Derweze",
        country: "Turkmenistan",
        continent: "Asia",
        is_open_to_public: true,
        details: [
            {
                fun_fact: "The crater has been burning continuously since 1971 after a natural gas field collapsed during a Soviet drilling operation."
            },
            {
                description: "A massive natural gas crater, officially known as the Darvaza Gas Crater, famous for its continuously burning flames that illuminate the desert, earning it the nickname 'The Door to Hell'."
            },
        ],
        uuid: "550e8400-e29b-41d4-a716-446655440002",
    }
]

/*
3 ways users can get data:
1. /api
2. /api/country/india
3. /api?country=turkey&is_open_to_public=true

We will be studying:
The core HTTP module: creating a server, sending status codes (200, 400, etc.), setting headers, handling requests/responses, filtering data, extracting query params
*/