export default async function RecentReviews() {
    const placeID = process.env.PLACE_ID!;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!;

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`;

    // Get the most recent 5 reviews
    const getReviews = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            });


            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching reviews:", error);
            return null;
        }
    };

    const data = await getReviews();

    // Defensive check to ensure data and reviews exist
    const reviews = data?.result?.reviews ?? [];

    return reviews;
}