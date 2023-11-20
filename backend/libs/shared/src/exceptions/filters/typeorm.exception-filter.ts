// typeorm-exception.filter.ts

import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { QueryFailedError, ErrorDescription  } from 'typeorm';

@Catch(QueryFailedError)
export class TypeORMExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    console.log(exception);
    
    switch (exception.message) {
      // case '23505': // unique_violation in PostgreSQL
      //   response.status(HttpStatus.CONFLICT).json({
      //     statusCode: HttpStatus.CONFLICT,
      //     message: 'The data you provided contains a value that already exists.',
      //     error: exception.message,
      //   });
      //   break;

      // You can add more cases based on different error codes if needed.

      default:
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'An unexpected database error occurred.',
          error: exception.message,
        });
        break;
    }
  }
}
