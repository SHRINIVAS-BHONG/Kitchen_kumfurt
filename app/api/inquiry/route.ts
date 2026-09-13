import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, details } = body;

        if (!firstName || !phone) {
            return NextResponse.json(
                { error: "First Name and Phone Number are required." },
                { status: 400 }
            );
        }

        // Log enquiry to server console for recording
        console.log("=== NEW INQUIRY RECEIVED ===");
        console.log({
            Name: `${firstName} ${lastName || ""}`.trim(),
            Email: email || "N/A",
            Phone: phone,
            Details: details || "N/A",
            ReceivedAt: new Date().toISOString(),
        });
        console.log("============================");

        return NextResponse.json(
            { success: true, message: "Inquiry received successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Inquiry API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
