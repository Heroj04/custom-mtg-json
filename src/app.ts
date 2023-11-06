import express from 'express'
import * as swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import routes from './routes' // Import the dynamically loaded routes

const app = express()
const port = 3000

// Middleware to parse JSON requests
app.use(express.json())

// Swagger setup
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Custom MTG JSON API',
			version: '1.0.0',
			description: 'A basic API to customise a MTG JSON file'
		}
	},
	apis: ['./src/routes/*.ts'] // Path to the API routes
}

const specs = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Use the dynamically loaded routes
app.use('/', routes)

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})

export default app
