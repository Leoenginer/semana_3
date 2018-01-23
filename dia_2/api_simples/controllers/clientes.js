exports.listar = (req, res) => {
    res.send('ok');
}

exports.criar =  (req, res) => {
    let clientes = req.body;
    res.send(clientes);
};