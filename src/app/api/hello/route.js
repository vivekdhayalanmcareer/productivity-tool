import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  return NextResponse.json({ message: "Hello from Next.js!", status: 200 });
  // redirect("https://nextjs.org/");
}
