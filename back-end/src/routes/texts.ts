import express from 'express';
import { returnTextsArray, enterText } from '../services/textsArray';

const router = express.Router();

router.get('/', (_req: express.Request, res: express.Response) => {
        res.send(returnTextsArray());
});

router.post('/', (req: express.Request, res: express.Response) => {
        enterText(req.body.text);
        res.send('Texto guardado');
});

export default router;