import { Router } from 'express'
import fs from 'fs'
import path from 'path'

const router = Router()
const currentFile = path.basename(__filename)

// Dynamically load all route files in the routes directory
fs.readdirSync(__dirname)
	.filter((file) => file !== currentFile && !file.endsWith('.d.ts')) // Exclude the current file and declaration files
	.forEach((file) => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const module = require(`./${file}`)
		router.use('/', module.default)
	})

export default router
