import express, { Request, Response } from "express";

const router = express.Router();



router.get('/login' ,(req: Request, res: Response) => {
    return res.send({data: 'user logged in!'});
})


export default router;

