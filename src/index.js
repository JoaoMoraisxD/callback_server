import app from "./app";
import axios from "axios"

app.post('/chargeCreate', (req, res) => {
    const body = res.data;
    axios.post('https://farmacotecnica.atenderbem.com/webhookcapture/capture/3ee7b8235b834a79bf808781a3d2d67a', body)
});

app.post('/chargeUpdate', (req, res) => {
    const body = res.data;
    axios.post('https://farmacotecnica.atenderbem.com/webhookcapture/capture/51bb55037e0d43ea958f903e1bba44af', body)
});

app.listen(9999, () => console.log("Servidor rodando na porta 9999"));