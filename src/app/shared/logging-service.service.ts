import {Injectable} from '@angular/core';

@Injectable()
export class LoggingServiceService {

  constructor() {
  }

  public log(message: any) {
    console.log(message);
  }
}
