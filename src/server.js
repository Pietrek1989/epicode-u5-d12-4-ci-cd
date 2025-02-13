import Express from "express";
import cors from "cors";
import productsRouter from "./api/products/index.js";
import {
  badRequestHandler,
  forbiddenErrorHandler,
  genericErrorHandler,
  notfoundHandler,
  unauthorizedHandler,
} from "./errorHandlers.js";

const server = Express();

// ************************************* MIDDLEWARES **********************************
server.use(cors());
server.use(Express.json());

// ************************************** ENDPOINTS ***********************************
server.use("/products", productsRouter);

// server.get("/test", (req, res, next) => {
//   res.status(201).send({ message: "TEST SUCCESSFULL" })
// })

// ************************************* ERROR HANDLERS *******************************

server.use(badRequestHandler);
server.use(unauthorizedHandler);
server.use(notfoundHandler);
server.use(genericErrorHandler);
server.use(forbiddenErrorHandler);
export default server;
