import { Resend } from "resend";

import config from "../config/config.js";

const resend = new Resend(config.emailApiKey);

const sendEmail = async (recipent, { subject, html }) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [recipent],
    subject,
    html,
  });
};

export default sendEmail;
