const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')
const session = require('express-session');



const app = express()

dotenv.config();
app.use(express.json());
app.use(cors())

app.use(errorHandler)
app.use(notFound)
app.use(session({ secret: 'notagoodsecret' }))


// Routes imports
const testRoute = require('./routes/testRoutes')


// Routes configurations
app.use('/api/test', testRoute)


// morgan logging configuration
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 8000

app.listen(PORT , () => {
     console.log(`Server running on port ${PORT}`)
})


