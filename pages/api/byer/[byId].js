import { seoByer } from "../../../seoByer.js";

export default async (req, res) => {
  const result = seoByer.filter(
    (city) => city.name == req.query.byId.toLowerCase()
  );

  if (result.length > 0) {
    res.status(200).json(result[0]);
  } else {
    res.status(200).json({ name: req.query.byId });
  }
};
