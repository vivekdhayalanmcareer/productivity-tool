import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  return NextResponse.json({
    data: {
      information_banner: false,
      header: true,
      navigation_menu: false,
      footer: false,
      full_screen_banner: false,
    },
    message: "",
    status: 200,
  });
  // redirect("https://nextjs.org/");
}
