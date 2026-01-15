// require("dotenv").config();
// const app = require("./app");
// const axios = require("axios");

// const PORT = process.env.PORT || 5000;
// const GENAI_SERVICE_URL = process.env.GENAI_SERVICE_URL || "http://localhost:8000";

// // Test GenAI service connection
// axios.get(`${GENAI_SERVICE_URL}/`)
//   .then(response => {
//     console.log("✅ GenAI Service connected:", response.data.status);
//   })
//   .catch(err => {
//     console.warn("⚠️  GenAI Service not yet available. Make sure it's running on", GENAI_SERVICE_URL);
//   });

// app.listen(PORT, () => {
//   console.log(`🚀 Backend Server running at http://localhost:${PORT}`);
//   console.log(`📡 Connecting to GenAI Service at ${GENAI_SERVICE_URL}`);
// });

require("dotenv").config();
const app = require("./app");
const axios = require("axios");

const PORT = process.env.PORT || 5000;

// ✅ SINGLE SOURCE OF TRUTH
const GENAI_SERVICE_URL =
  process.env.GENAI_SERVICE_URL || "http://localhost:8000";

// Axios client
const genaiClient = axios.create({
  baseURL: GENAI_SERVICE_URL,
  timeout: 60000, // HF cold starts
});

// 🔍 Test GenAI service
genaiClient
  .get("/docs")
  .then(() => {
    console.log("✅ GenAI Service connected:", GENAI_SERVICE_URL);
  })
  .catch((err) => {
    console.warn(
      "⚠️  GenAI Service not available at",
      GENAI_SERVICE_URL,
      err.message
    );
  });

app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on port ${PORT}`);
  console.log(`📡 GenAI Service URL: ${GENAI_SERVICE_URL}`);
});

