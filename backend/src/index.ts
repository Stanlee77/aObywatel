import express, { Express } from 'express'
import { makeCrudRouter } from './controller/crud'

var cors = require('cors')

const app: Express = express()
const port = 9125

app.use(express.json())
app.use(cors())

app.use(makeCrudRouter('/api/user', '/workspaces/aObywatel/backend/data/users'))

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
