import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { captcha } = await request.json();
    const secret = process.env.RECAPTCHA_SECRET;

    // Verify with Google reCAPTCHA
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secret}&response=${captcha}`
    });

    const response = await verifyRes.json();

    if (response.success) {
        // CAPTCHA passed
        return NextResponse.json({ success: true, message: "Your message has been sent. Thank you for contacting us" });
    } else {
        // CAPTCHA failed
        return NextResponse.json({ success: false, message: "reCAPTCHA verification failed.", error: response });
    }
}

// import { type NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export async function POST(request: NextRequest) {

//     const {captcha} = await request.json();
//     const secret_key = process.env.RECAPTCHA_SECRET;
//     const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${captcha}`

//     const response = await fetch(url)
//         .then((res) => res.json())
//             .then((google_response) => {if (google_response.success == true) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })
//     return NextResponse.json({response})

// }
