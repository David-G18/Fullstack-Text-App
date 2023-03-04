import express from 'express'
import textsController from '../controllers/texts'

const router = express.Router()

router.get('/', textsController.getTexts)
router.post('/', textsController.createText)
router.delete('/:id', textsController.deleteText)

export default router
