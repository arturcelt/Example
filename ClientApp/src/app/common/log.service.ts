import { Injectable, InjectionToken } from "@angular/core";
export const LOG_SERVICE = new InjectionToken("logger");
export enum LogLevel { DEBUG, INFO, ERROR }
export const LOG_LEVEL = new InjectionToken("log_level");

@Injectable()
export class LogService {
  minimumLevel: LogLevel = LogLevel.INFO;

  logInfoMessage(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }

  logDebugMessage(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }

  logErrorMessage(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }

  logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Komunikat (${LogLevel[level]}): ${message}`);
    } 
  }
}


@Injectable()
export class SpecialLogService extends LogService {
  constructor() {
    super();
    this.minimumLevel = LogLevel.DEBUG;

  }

  logMessage(level: LogLevel, message: string) {
    if (level >= this.minimumLevel) {
      console.log(`Komunikat specjalny (${LogLevel[level]}): ${message}`);
    }
  }
}
