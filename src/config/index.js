// import "dotenv/config";
import dotenv from "dotenv";

dotenv.config();

const config = {
  name: process.env.NAME || " ",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || " ",
  status: "ok",
  feature: {
    admin: {
      enabled: parseInt(process.env.FEATURE_ADMIN_PANNELD) || false,
    },
  },
};

export default config;
