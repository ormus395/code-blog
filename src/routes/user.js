import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send("The admin user profile");
});

router.post("/signup");
export default router;
