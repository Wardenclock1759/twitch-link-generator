require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
  TWITCH_SECRET: process.env.TWITCH_SECRET,
  TWICH_TOKEN: process.env.TWICH_TOKEN,
  TWICH_URL: process.env.TWICH_URL,
};
