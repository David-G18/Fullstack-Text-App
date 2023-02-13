import express from 'express';

export default function errorHandler (err: { status: number; message: string; }, _req: express.Request, res: express.Response, _next: express.NextFunction) {
    const status: number = err.status || 500;
    const message: string | Object = err.message || err;
    
    res.status(status).send(message);
};