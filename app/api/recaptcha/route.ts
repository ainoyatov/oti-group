import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const {captcha} = await request.json();
    const secret_key = process.env.RECAPTCHA_SECRET;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${captcha}`

    const response = await fetch(url)
        .then((res) => res.json())
            .then((google_response) => {if (google_response.success == true) {
                return true;  
            } else {
                return false;
            }
        })
    return NextResponse.json({response})
    
}