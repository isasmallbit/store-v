import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, twitter } = body;
        console.log("Email:", email);
        console.log("Twitter:", twitter);

        // TODO: Register the user in the database
        const response = await fetch("https://api.neova.io/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, twitter }),
        });

        if (!response.ok) {
            console.error("Error registering user:", response.statusText);
            return NextResponse.json({ message: "Error registering user", error: response.statusText }, { status: 500 });
        }

        return NextResponse.json({ message: "Success", data: { email, twitter } });
    } catch (error) {
        // Gérer les erreurs et renvoyer une réponse appropriée
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Error processing request", error }, { status: 500 });
    }
}
