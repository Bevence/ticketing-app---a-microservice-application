import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("Hi there! This is the current user route.");
});

export { router as signinRouter };
