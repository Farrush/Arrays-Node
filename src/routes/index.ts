import {Router} from 'express'
import * as HomeController from '../controllers/home'

const router = Router()

router.get('/', HomeController.home)
router.post('/newItem', HomeController.pushPost)
router.post('/removeItem', HomeController.splicePost)
router.post('/newItem1', HomeController.unshiftPost)
router.post('/removeRange', HomeController.spliceRangePost)

export default router