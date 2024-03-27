import PageModel from "../models/pageModel.js";
import User from "../models/userModel.js";
import cron from "node-cron";
import nodemailer from "nodemailer"

cron.schedule("*/10 * * * * *", () => {
  console.log(
    "Checking page status every 10 seconds...",
    new Date(Date.now()).toLocaleTimeString()
  );

  checkAndUpdatePageStatus();
});

async function checkAndUpdatePageStatus() {
  try {
    // Find all pages
    const pages = await PageModel.find();

    // Iterate over each page
    pages.forEach(async (page) => {
      if (
        page.status === "scheduled" &&
        new Date(page.publish_datetime) <= Date.now()
      ) {
        await PageModel.findByIdAndUpdate(page._id, { status: "published" });
        console.log(`Page ${page._id} status updated to published.`);
        const user = await User.findOne(page.created_by);

        await sendMail(user);
      }
    });
  } catch (error) {
    console.error("Error checking and updating page status:", error);
  }
}

async function sendMail(user) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_ID}`,
      pass: `${process.env.EMAIL_PASS}`
    }
  });

  const info = await transporter.sendMail({
    from: `${process.env.EMAIL_ID}`,
    to: user.email,
    subject: 'new blog published!!',
    text: `check new blogs!!!`
  });
  // console.log(info);
  console.log('Blog Email sent successfully:');
}