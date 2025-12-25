const axios = require("axios");

async function getCookies() {
  try {
    const response = await axios.get("https://console.upstash.com/auth/sign-up", {
      withCredentials: true,
      validateStatus: () => true, // biar tidak error kalau status bukan 200
    });

    const rawCookies = response.headers["set-cookie"] || [];

    // ubah cookie ke bentuk JSON
    const cookies = rawCookies.map(cookie => {
      const parts = cookie.split(";");
      const [name, value] = parts[0].split("=");

      return {
        name: name.trim(),
        value: value?.trim() || "",
        raw: cookie
      };
    });

    console.log(JSON.stringify(cookies, null, 2));
  } catch (error) {
    console.error("Gagal ambil cookie:", error.message);
  }
}

getCookies();
