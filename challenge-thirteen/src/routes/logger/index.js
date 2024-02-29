import { Router } from 'express'
import { addLogger } from '../../middleware/loggerMidleware/index.js'
import { getLogger } from '../../controllers/logger/index.js'

const router = Router()

router.use(addLogger)

router.get('/loggerTest', getLogger)

export default router