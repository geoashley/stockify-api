/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as CompanyService from "./company.service_av"
import {Company} from "./company.interface"

/**
 * Router Definition
 */
export const companyRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items/

// GET items/:symbol
companyRouter.get("/:symbol", async (req: Request, res: Response) => {
    const symbol: string = req.params.symbol;
  
    try {
      const record: Company = await CompanyService.find(symbol);
  
      res.status(200).send(record);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });

// POST items/

// PUT items/

// DELETE items/:id