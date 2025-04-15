export type FormDataPoints = {
    property_address?: string,
    city: string,
    state: string,
    zipcode: string,
    full_name?: string,
    email?: string
    phone?: string
}


export async function sendEmail(data: FormDataPoints) {

    const push = await fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}