import { seoByer } from "../../../seoByer.js";

export default async (req, res) => {
  res.status(200).json(seoByer);
};
