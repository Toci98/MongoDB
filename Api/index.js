const app =  require ('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log("Im alive")
)
app.get('/users', (req, res) => {
    res.status(200).send({
        "1" : {
            Nombre: "Pablo",
            Apellido: "Tocino",
            Correo: "ptocinoc@alumnos.nebrija.es"
        },
        "2" : {
            Nombre: "Alvaro",
            Apellido: "Rodríguez",
            Correo: "arodriguezb@alumnos.nebrija.es"
        }
    })
})

