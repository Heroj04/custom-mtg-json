import { Router, type Request, type Response } from 'express'

const router = Router()

/**
 * @swagger
 * /images/get:
 *   get:
 *     summary: Get an image
 * 	   parameters:
 *       - in: path
 *         name: correctedName
 *         description: The corrected card name to search for
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested image
 *       404:
 *         description: The image could not be found
 */
router.get('/get', (req: Request, res: Response) => {
	const { correctedName } = req.query
	if (correctedName !== undefined && typeof correctedName === 'string') {
		// Search for the image
		const sanitizedName = correctedName.replace(/[/\\]/g, '_')
		res.sendFile(`${sanitizedName}.png`, { root: 'public/images' }, err => {
			if (err !== undefined) {
				res.status(404).send('Failed to retrieve image')
			} else {
				// console.log('File sent successfully')
			}
		})
	} else {
		res.status(400).json({ error: 'Invalid request parameters.' })
	}
})

export default router
