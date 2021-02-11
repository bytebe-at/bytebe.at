import prisma from "@lib/prisma";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method.toUpperCase() !== "POST") {
    res.statusCode = 400;
    res.statusMessage = "Must be a POST request";
    return res.json({
      code: res.statusCode,
      message: res.statusMessage,
      methods: ["POST"],
    });
    // res.status(404).json('bad route');
    return;
  }
  const missing = [];
  if (!req.body.email) missing.push("email");
  if (!req.body.captcha) missing.push("captcha");

  if (missing.length > 0) {
    res.statusMessage = `missing ${missing} parameter`;
    res.status(400).json({ code: 400, message: res.statusMessage, missing });
  }

  // Verify CAPTCHA
  const cap = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env["RECAPTCHA_SECRET"]}&response=${req.body.captcha}`,
  });
  const capres = await cap.json();
  if (!capres.success) {
    res
      .status(400)
      .json({ code: 400, message: "reCAPTCHA error", body: capres });
    return;
  }
  // prisma.verification.create({
  //   data: {
  //     email: req.body.
  //   }
  // })
};

export default handler;
