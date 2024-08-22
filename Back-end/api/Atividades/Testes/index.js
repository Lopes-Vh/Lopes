const express = require(express)
const app = express()

/* random declaration
app.get('/',(req, res) => {
    let msg = ({msg: 'hello world!'})
    res.json ({msg: 'hello world!'});
})
*/

app.get('/',(req, res) => {
    let msg = ({msg: 'hello world!'})
    res.json (msg);
})


app.listen(8080, () => {
    let data = new Date()
    console.log("Servidor Node iniciado em: "+ data)
})