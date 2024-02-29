import { logger } from "../../utils/logger/index.js"

export const addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.debug(`[${req.method}] ${req.url} - ${new Date().toLocaleTimeString()}`)
    req.logger.info(`[${req.method}] ${req.url} - ${new Date().toLocaleTimeString()}`)
    next()
}