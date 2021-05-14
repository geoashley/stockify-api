/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {quotesRouter} from "./quote/quote.router"
import {companyRouter} from "./company/company.router"
import {ratiosRouter} from "./company/ratio.router"
import { errorHandler } from "./middleware/error.middleware";
import {notFoundHandler} from "./middleware/notFound.middleware";

dotenv.config();

const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/quote", quotesRouter);
app.use("/company", companyRouter);
app.use("/ratios", ratiosRouter);

app.use(errorHandler);
app.use(notFoundHandler);
module.exports = app;