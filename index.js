// Import express untuk membuat server
const express = require('express')
const app = express();
const PORT = 3000;
// Import folder models
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({
extended: false
}));

app.listen(PORT, () => {
console.log('Server started on port 3000');
})

// Sinkronisasi model ke database (membuat tabel jika belum ada)
db.sequelize.sync()
.then((result) => {
app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
})
})
.catch((err) => {
console.log(err);
})
// Endpoint untuk menambah data buku baru
app.post("/buku", async (req, res) => {
const data = req.body;
try {
const buku = await db.buku.create(data);
res.send(buku);
} catch (err) {
res.send(err);
}
});
