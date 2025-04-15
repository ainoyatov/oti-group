import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request:NextRequest) {

    const {property_address, full_name, city, state, zipcode, phone, email} = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        /* 
          setting service as 'gmail' is same as providing these setings:
          host: "smtp.gmail.com",
          port: 465,
          secure: true
          If you want to use a different email provider other than gmail, you need to provide these manually.
          Or you can go use these well known services and their settings at
          https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
        auth: {
          user: process.env.GMAIL_EMAIL_FROM,
          pass: process.env.GMAIL_PASSWORD,
        },
    });

    const from_email = process.env.GMAIL_EMAIL_FROM

    const mailOptions: Mail.Options = {
        from: `New Client`,
        to: `${process.env.GMAIL_EMAIL_TWO}`,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        // subject: `${purpose}`,
        subject: `${full_name}`,
        text: `
Property Address: ${property_address},
City: ${city},
State: ${state},
Zipcode: ${zipcode},       
Full Name: ${full_name},
Phone: ${phone},
Email: ${email}

`

    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
          transport.sendMail(mailOptions, function (err) {
            if (!err) {
              resolve('Email sent.');
            } else {
              reject(err.message);
            }
          });
        });
    
      try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Your message has been sent.' });
      } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}