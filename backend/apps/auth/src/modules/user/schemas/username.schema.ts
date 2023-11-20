import { BASIC_VALIDATION_MESSAGES, USER_NAME_MAX_LENGTH, USER_NAME_MIN_LENGTH } from '@app/shared/constants';
import * as Joi from 'joi';


export const username = Joi
  .string()
  .min(USER_NAME_MIN_LENGTH)
  .max(USER_NAME_MAX_LENGTH)
  .required()
  .messages(BASIC_VALIDATION_MESSAGES);


