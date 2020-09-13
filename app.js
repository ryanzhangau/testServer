/** @format */

import express from 'express'

const app = express()

const PORT = 80

app.get('/', (req, res, next) => {
	res.json({ message: 'Server 1 is running' })
})

app.listen(PORT, () => {
	console.log(`Server 1 is running on port : ${PORT}`)
})
