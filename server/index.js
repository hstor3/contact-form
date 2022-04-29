const express = require('express');
const app = express();
const fs = require('fs');

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.post('/save_form', (req, res) => {
    let data = [
        'First', req.body.firstName,
        'Last', req.body.lastName,
        'Email', req.body.email,
        'Message', req.body.message
    ]
    fs.writeFileSync('../input.txt', JSON.stringify(data))
})

const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`))