import { seoByer } from "../../../seoByer.js";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET // POST and OPTIONS
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  const result = seoByer.filter(
    (city) => city.name == req.query.byId.toLowerCase()
  );

  // Run cors
  await cors(req, res);

  // Rest of the API logic
  if (result.length > 0) {
    res
      .set({ "content-type": "application/json; charset=utf-8" })
      .body(result[0]);
  } else {
    res
      .set({ "content-type": "application/json; charset=utf-8" })
      .body({ name: req.query.byId });
  }
}
