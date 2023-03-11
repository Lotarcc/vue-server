const express = require("express");
const router = express.Router();

// Index router
router.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello World!");
});

export default router;
