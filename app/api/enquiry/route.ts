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
    console.log("Saving to MongoDB...", { name, email, phone, course, state, campaign });
    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
      state,
      campaign,
      university
    });
    console.log("MongoDB Save Success:", newEnquiry._id);

    // 2. Submit to CRM
    const CRM_URL = process.env.API_ENDPOINT; // Use API_ENDPOINT from .env.local
    console.log("CRM URL:", CRM_URL ? "Defined" : "Undefined");
    
    if (CRM_URL) {
      try {
        console.log("Submitting to CRM (NeoDove)...");
        
        // NeoDove custom integrations often work best with form-urlencoded
        const params = new URLSearchParams();
        params.append("name", name);
        params.append("email", email);
        params.append("phone", phone);
        params.append("mobile", phone); // Some use mobile
        params.append("course", course);
        params.append("state", state);
        params.append("university", university);
        params.append("campaign", campaign);
        params.append("source", "Website Enquiry Form");
        
        // Also include previous names as fallback
        params.append("full_name", name);
        params.append("email_address", email);
        params.append("phone_number", phone);
        params.append("selected_course", course);
        params.append("user_state", state);

        const crmResponse = await axios.post(CRM_URL, params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        });
        
        console.log("CRM Response Data:", JSON.stringify(crmResponse.data));
        console.log("CRM Submission Success Status:", crmResponse.status);
      } catch (crmError: any) {
        console.error("CRM Submission Error:", crmError.response?.data || crmError.message);
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
