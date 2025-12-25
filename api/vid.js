module.exports = async function handler(req, res) {
  try {
    const response = await fetch("https://console.upstash.com/auth/sign-up", {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    // Ambil cookie mentah
    const cookies =
      response.headers.getSetCookie?.() ||
      response.headers.raw?.()["set-cookie"] ||
      [];

    res.status(200).json(cookies);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

