import { Router } from 'express'
import { getEmail } from '../../controllers/email/index.js'
import { addLogger } from '../../middleware/loggerMidleware/index.js'

const router = Router()
router.use(addLogger)

router.post('/send', getEmail)

export default router