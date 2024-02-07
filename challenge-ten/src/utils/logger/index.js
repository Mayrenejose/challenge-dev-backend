import winston from 'winston'
import config from "../../config/config.js"

const levelOptions = {
    levels:
    {
        debug: 0,
        http: 1,
        info: 2,
        warn: 3,
        error: 4,
        fatal: 5
      }
}

let transports

if (config.env === 'PRODUCTION') {
    transports = [
      new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
      new winston.transports.Console({ level: 'info' })
    ]
  } else {
    transports = [
      new winston.transports.Console({ level: 'debug' })
    ]
  }

export const logger = winston.createLogger({
    levels: levelOptions.levels,
    transports: transports,
    format: winston.format.simple()
})