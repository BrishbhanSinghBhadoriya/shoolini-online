import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import axios from "axios";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, phone, course, state, campaign } = body;
    const university = "Shoolini University";

    // 1. Save to MongoDB
    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
      state,
      campaign,
      university
    });

    // 2. Submit to CRM (Example using environment variables)
    // You can customize the CRM endpoint and data format as needed
    const CRM_URL = process.env.CRM_URL;
    if (CRM_URL) {
      try {
        await axios.post(CRM_URL, {
          full_name: name,
          email_address: email,
          phone_number: phone,
          selected_course: course,
          user_state: state,
          campaign: campaign,
          university: university,
          source: "Website Enquiry Form",
        });
      } catch (crmError) {
        console.error("CRM Submission Error:", crmError);
        // We don't fail the whole request if CRM fails, but we log it
      }
    }

    return NextResponse.json(
      { message: "Enquiry submitted successfully", data: newEnquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Enquiry Submission Error:", error);
    return NextResponse.json(
      { message: "Failed to submit enquiry", error: error.message },
      { status: 500 }
    );
  }
}
