import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import corsOptions from "../config/cors";
import setupSwagger from "../config/swagger";
import errorHandler from "./api/v1/middleware/errorHandler";
import formRoutes from "./api/v1/routes/formRoutes";

import { wishlistRoute } from "./api/v1/routes/wishlistRoutes";
import rentalRoutes from "../src/api/v1/routes/rentalRoutes";

import { clerkMiddleware } from "@clerk/express";

// initialize express application
const app: Express = express();

// allow use of .env variables
dotenv.config();
// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));

// allow express to parse json
app.use(express.json());

// add Cross-Origin Resource Sharing middleware
// This will refuse requests from origins that do not fulfill corsOptions requirements
// see https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
app.use(cors(corsOptions));

// invoke swagger middleware for serving docs in /api-docs
setupSwagger(app);

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

// Cart routes
app.use("/api/v1", formRoutes);

// Wishlist routes
app.use("/api/v1/wishlist", wishlistRoute);

// Rental routes
app.use("/api/v1", rentalRoutes); // ADD ROUTES HERE

app.use(clerkMiddleware());

//errorhandler catches errors as last element in middleware chain
// occurs when "next" is invoked
app.use(errorHandler); 

export default app;