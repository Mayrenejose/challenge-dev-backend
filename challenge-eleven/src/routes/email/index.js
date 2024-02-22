import { Router } from 'express'
import { getEmail } from '../../controllers/email/index.js'
import { addLogger } from '../../middleware/loggerMidleware/index.js'

const router = Router()
router.use(addLogger)

router.get('/send', getEmail)

export default router