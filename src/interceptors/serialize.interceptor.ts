import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    //run something before the request is handled by the request handler 
    console.log('am going to run before the handler', context);
    return handler.handle().pipe(
      map((data: any) => {
        //run something before the response is sent
        console.log('I am running before response is sent', data);
      }),
    );
  }
}