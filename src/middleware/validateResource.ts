// when a req comes in we validate a schema
// we are validating a req against that schema
// using validation library Zod

import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from 'zod';

const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try{
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next();
    } catch(e: any) {
        return res.status(400).send(e.errors);
    }
};

export default validateResource;