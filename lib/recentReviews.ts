
export default async function TotalReviewCount() {
    const placeID = process.env.PLACE_ID!;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!;

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=user_ratings_total&key=${apiKey}`;

    // Get the total number of reviews
    const reviewTotal = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching total review count:", error);
            return null;
        }
    };

    const data = await reviewTotal();

    // Defensive check with optional chaining and fallback value
    const reviewTotalnum = data?.result?.user_ratings_total ?? 0;

    return reviewTotalnum;
}