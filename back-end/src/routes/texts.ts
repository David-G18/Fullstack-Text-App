import express from 'express';
import { returnTextsArray, enterText } from '../services/textsArray';

const router = express.Router();

router.get('/', (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
                res.send(returnTextsArray());
        } catch (error) {
                next(error);
        }
        
});

router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
                enterText(req.body.text);
                res.status(201).send('Texto guardado');
        } catch (error) {
                next(error)
        }
});

export default router;