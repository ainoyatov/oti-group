import { type NextRequest, NextResponse } from "next/server";
import RecentReviews from "@/lib/recentReviews";

export async function POST(request:NextRequest) {
    
    const Reviews = await RecentReviews()

    return NextResponse.json({Reviews})

}