export const SERVER_CONFIG = 'SERVER_CONFIG';
export const TYPEORM_MODULE_CONFIG = 'TYPEORM_MODULE_CONFIG';
export const JWT_MODULE_CONFIG = 'JWT_MODULE_CONFIG';
export const HASH_PROVIDER = 'HASH_PROVIDER';

export const PASSWORD_MIN_LENGTH = 8;

export const USER_NAME_MIN_LENGTH = 3;
export const USER_NAME_MAX_LENGTH = 50;
export const USER_EMAIL_MIN_LENGTH = 5;
export const USER_EMAIL_MAX_LENGTH = 100;

export const BASIC_VALIDATION_MESSAGES =  {
  'string.empty': `{#key} cannot be an empty field`,
  'string.base': `{#key} must be of type text`,
  'string.guid': `{#key} must be a UUID`,
  'any.required': `{#key} is a required field`,
  'string.min': `{#key} cannot be shorter than {#limit} characters`,
  'string.max': `{#key} cannot be longer than {#limit} characters`,
};