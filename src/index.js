'use strict'
const app = require('express')()

const port = process.env.PORT || 8080

app.use('/', require('adorable-avatars'))

app.listen(port, () => {
  console.log(`Adorable Avatars server started on port ${port}`)
})
