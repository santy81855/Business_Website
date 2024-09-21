// import { GeneralMessageTemplate } from "@/lib/EmailTemplate";
// import { Resend } from "resend";

export async function send(data: {
    name: string;
    email: string;
    content: string;
}) {
    // wait for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return { success: "email sesnt" + data.email };
    /*
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
        from = "MyResumeHero <general-message@myresumehero.com>";

        const response = await resend.emails.send({
            from: from,
            to: "santyg81855@gmail.com",
            subject: "General Message from " + name,
            react: template,
            text: "",
        });
        return { success: "Email sent" };
    } catch (error) {
        return { error: "Error sending emai" };
    }
    */
}
