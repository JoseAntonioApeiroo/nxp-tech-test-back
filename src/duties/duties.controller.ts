import { Router } from "express";
import { getDuties, insertDuty, updateDuty } from "./duties.service";

const router = Router();

router.get('/getDuties', async (req, res) => {
    try {
        const response = await getDuties();

        res.json(response);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
});

router.post('/', async (req, res) => {
    try {
        const response = await insertDuty(req.body);
        res.status(201).json(response);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
});

router.put('/', async (req, res) => {
    try {
        const response = await updateDuty(req.body)

        res.json(response);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
})

export default router;