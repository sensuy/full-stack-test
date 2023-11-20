import * as Joi from "joi";
import { email } from "@app/shared/schemas/email.schema";
import { password } from "@app/shared/schemas/password.schema";
import { username } from "./username.schema";

export const userCreateSchema = Joi.object({
  username,
  email,
  password
});  
