// /api/contact
//Assignment create a router here, set it up with server and create a POST route on /api/contact

import { Router } from "express";

const router = Router();

router.post("/api/contact", async (req, res) => {
    const fullName = req.body;
    console.log("FORM:", fullName);
    res.send("/contact");
});

export default router;