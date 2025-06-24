export type FormDataPoints = {
    property_address?: string,
    city: string,
    state: string,
    zipcode: string,
    full_name?: string,
    email?: string
    phone?: string
}


export async function sendEmail({property_address, full_name, city, state, zipcode, phone, email}: FormDataPoints) {

    const push = await fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({property_address, full_name, city, state, zipcode, phone, email})
    })
}