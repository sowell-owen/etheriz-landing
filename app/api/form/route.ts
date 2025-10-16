import { NextRequest, NextResponse } from "next/server";
import { Telegraf } from "telegraf";

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const { email, name, description } = await request.json();
    console.log("Received user data:", { email, name, description });

    if (!botToken || !chatId) {
      console.error(
        "Telegram bot token or chat ID not set in environment variables."
      );
    } else {
      const bot = new Telegraf(botToken);
      const message = `New user data received:\nName: ${name}\nEmail: ${email}\nDescription: ${description}`;
      try {
        await bot.telegram.sendMessage(chatId, message);
        console.log("Notification sent to Telegram bot.");
      } catch (err) {
        console.error("Failed to send Telegram notification:", err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error parsing user data:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
