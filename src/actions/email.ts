"use server";
import { GeneralMessageTemplate } from "@/lib/EmailTemplate";
import { Resend } from "resend";

export async function send(data: {
    name: string;
    email: string;
    content: string;
}) {
    const { email, name, content } = data;
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        var template;
        var from = "";
        template = GeneralMessageTemplate({
            name: name,
            email: email,
            content: content,
        });
        from = "Website Inquiry <general-message@spwebmanagement.com>";

        const response = await resend.emails.send({
            from: from,
            to: "communications@spwebmanagement.com",
            subject: "Website Inquiry from " + name,
            react: template,
            text: "",
        });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return { success: "Email sent" };
    } catch (error) {
        return { error: "Error sending email" };
    }
}
