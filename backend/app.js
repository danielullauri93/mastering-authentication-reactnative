const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/users')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

//! URL de conexión a MongoDB local en Docker
const MONGO_URI = 'mongodb://localhost:27017/auth-api'

mongoose
	.connect(MONGO_URI)
	.then(() => console.log('✅ Conectado a MongoDB en Docker'))
	.catch(err => console.error('❌ Error conectando a MongoDB:', err))

//! Middlewares
app.use(express.json()) // Permitir recibir JSON en las solicitudes

//! Rutas
app.use('/', router)

//! Manejador de errores
app.use(errorHandler)

//! Iniciar el servidor
const PORT = 8000
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
