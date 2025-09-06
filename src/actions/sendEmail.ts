'use server';
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async(FormData: FormData) => {
    const senderEmail = FormData.get("senderEmail") as string;
    const message = FormData.get("message") as string;
    if(!message || typeof message !== 'string') {
        return { success: false, error: "Invalid message" };
    }
    try {
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'rajsingh18904@gmail.com',
            subject: 'Message from Portfolio Contact Form',
            text: message,
            reply_to: senderEmail,
        });
        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
};