import {Injectable} from '@angular/core';

@Injectable()
export class LoggingServiceService {

  constructor() {
  }

  log(message: any) {
    console.log(message);
  }
}
