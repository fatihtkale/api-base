import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { DecodedJwtToken } from "../models/auth";
import { Context } from "koa";

dotenv.config();

/**
 * Signs a new jwt access token
 *
 * @param {{
 *  id: string
 *  email: string
 *  expiresIn: number
 * }} param0 - an object with params to sign the jwt token
 * @returns {string} the signed(encoded) jwt access token
 */
export const signAccessToken = function ({
  id,
  email,
  expiresIn,
}: DecodedJwtToken): string {
  return jwt.sign({ id, email, expiresIn }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });
};

/**
 * Signs a new jwt refresh token
 *
 * @param  {string} email email of the user
 * @returns {string} the signed(encoded) jwt refresh token
 */
export const signRefreshToken = function (email: string): string {
  return jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_LIFE,
  });
};

/**
 * Verifies the signature of a token
 *
 * @param  {Context} context Koa Context object for error handling
 * @param  {string} token the token to be verified
 * @param  {string} type the type of token. Either 'access' or 'refresh'
 * @returns {DecodedJwtToken} the object that is the decoded jwt token
 */
export const verifyToken = function (
  context: Context,
  token: string,
  type: string
): DecodedJwtToken {
  const secret =
    type === "access"
      ? process.env.ACCESS_TOKEN_SECRET
      : process.env.REFRESH_TOKEN_SECRET;
  const result = jwt.verify(token, secret, { ignoreExpiration: true });

  if (
    typeof result === "string" ||
    (result.constructor === Object && !result.hasOwnProperty("email"))
  )
    context.throw("Invalid Token");

  return <DecodedJwtToken>result;
};
