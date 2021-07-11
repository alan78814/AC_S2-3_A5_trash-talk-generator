const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const generateTrashTalk = require('./generate_trash_talk.js')
// ./generate_trash_talk.js' = /Users/tri78/Desktop/寫程式/vscode/Alpha camp/S2/S2-3/AC_S2-3_A5_trash-talk-generator/generate_trash_talk.js

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  //test
  helpers: {
    checkEngineer: function (name) {
      if(name === "engineer")
      return "checked"
    },
    checkDesigner: function (name) {
      if(name === "designer")
      return "checked"
    },
    checkEntrepreneur: function (name) {
      if(name === "entrepreneur")
      return "checked"
    }
  }
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true })) 

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/generate', (req, res) => {
  const trashTalk = generateTrashTalk(req.body.name)
  const options = req.body
  //test
  console.log(req.body.name)
  res.render('index', { trashTalk: trashTalk, options: options})
})


// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})

