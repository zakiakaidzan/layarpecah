import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://console.upstash.com/auth/sign-up", {
      validateStatus: () => true,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    // Ambil cookie mentah
    const cookies = response.headers["set-cookie"] || [];

    res.status(200).json({
      success: true,
      cookies
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
