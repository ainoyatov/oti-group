import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import TotalReviewCount from "@/lib/recentReviews";

export async function POST(request:NextRequest) {
    
    const DynamicReviewCount = await TotalReviewCount()

    return NextResponse.json({DynamicReviewCount})

}