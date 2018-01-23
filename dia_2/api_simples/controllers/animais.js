exports.listar = (req, res) => {
    res.send('ok');
}

exports.criar =  (req, res) => {
    let animais = req.body;
    res.send(animais);
};