import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      if (!name || !email) {
        return res
          .status(400)
          .json({ message: "Please provide name and email!" });
      }

      const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        auth: {
          user: "info@inssatravel.com",
          pass: "Tuguldur95",
        },
      });

      const mailOptions = {
        from: "info@inssatravel.com",
        to: "tuguayla@gmail.com",
        subject: "Request",
        html: `
          <h2>Customer: ${name}</h2>
          <p>Message: ${message}</p>
          <b><p>From:${email}</p></b>
        `,
      };

      await transporter.sendMail(mailOptions);

      const mailOptions2 = {
        from: "info@inssatravel.com",
        to: email,
        subject: "Confirmation", // Correct usage of subject variable
        html: `
          <img src="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/397816326_722808709889614_3297244859647132754_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=5TgvHzDmyQcAX9RZs4n&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAP1kB7ptRUFeenzHnd7j7zvAGiIeOw-n6jRl59AShEJA&oe=65C86C74" />
          <h2>Сайн байна уу багш: ${name}</h2>
          <p>Урилга хүлээн авсан танд баярллаа хөөрхөн мөнхүүш ❤😍  </p>
        `,
      };

      await transporter.sendMail(mailOptions2);

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    return res.status(400).json({ message: "Invalid request method." });
  }
}
