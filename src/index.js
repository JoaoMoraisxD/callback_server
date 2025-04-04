import app from "./app";
import axios from "axios";

app.post('/chargeCreate', async (req, res) => {
    const body = req.body;

    try {
        await axios.post(
            'https://farmacotecnica.atenderbem.com/webhookcapture/capture/3ee7b8235b834a79bf808781a3d2d67a',
            body
        );
        res.status(200).send("Webhook encaminhado com sucesso");
    } catch (error) {
        console.error("Erro ao encaminhar webhook:", error);
        res.status(500).send("Erro ao encaminhar webhook");
    }
});

app.post('/chargeUpdate', async (req, res) => {
    const body = req.body;

    try {
        await axios.post(
            'https://farmacotecnica.atenderbem.com/webhookcapture/capture/51bb55037e0d43ea958f903e1bba44af',
            body
        );
        res.status(200).send("Webhook encaminhado com sucesso");
    } catch (error) {
        console.error("Erro ao encaminhar webhook:", error);
        res.status(500).send("Erro ao encaminhar webhook");
    }
});

app.listen(9999, () => console.log("Servidor rodando na porta 9999"));
