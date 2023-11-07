import Koa from "koa";
import * as HttpStatus from "http-status-codes";
import bodyParser from "koa-bodyparser";
import jwt from "koa-jwt";
import helmet from "koa-helmet";
import cors from "@koa/cors";
import UserController from "../controllers/User";
import AuthController from "../controllers/Auth";
import { rateLimiter } from "../middleware/rate-limit";

const app: Koa = new Koa();
app.use(helmet());

app.use(cors());

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status =
      error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit("error", error, ctx);
  }
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// Middleware
app.use(bodyParser());
app.use(rateLimiter);

// these routes do not require authentication
app.use(AuthController.routes());
app.use(AuthController.allowedMethods());

// these routes require authentication
app.use( jwt({ secret: process.env.ACCESS_TOKEN_SECRET }));

// Auth needed routes
app.use(UserController.routes());
app.use(UserController.allowedMethods());

// Application error logging.
app.on("error", console.error);

export default app;
