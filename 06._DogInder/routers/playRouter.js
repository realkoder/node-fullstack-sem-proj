import { Router } from "express";

const router = Router();

router.get("/playpoint", (req, res) => {
    res.send({ data: "yayy" });
})

export default router;