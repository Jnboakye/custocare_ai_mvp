// Not important for now 


import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get your secret key and assistant ID from env
    const secretKey = process.env.VAPI_SECRET_KEY;
    const assistantId = process.env.VAPI_ASSISTANT_ID;

    if (!secretKey || !assistantId) {
      return NextResponse.json(
        { error: "VAPI_SECRET_KEY or VAPI_ASSISTANT_ID is missing" },
        { status: 500 }
      );
    }

    // Make a request to Vapi to create a new session / call token
    const vapiResponse = await fetch("https://api.vapi.io/v1/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        assistantId,
      }),
    });

    const data = await vapiResponse.json();

    if (!vapiResponse.ok) {
      return NextResponse.json({ error: data }, { status: 500 });
    }

    // Return session/token info to frontend
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating Vapi session:", error);
    return NextResponse.json({ error: "Failed to create Vapi session" }, { status: 500 });
  }
}
