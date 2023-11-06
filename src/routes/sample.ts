import { Router, type Request, type Response } from 'express'

const router = Router()

/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Get a sample response
 *     responses:
 *       200:
 *         description: A sample response
 */
router.get('/sample', (req: Request, res: Response) => {
	res.json({ message: 'This is a sample response' })
})

export default router
