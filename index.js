const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS Vehiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      capacidad INTEGER
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS Destinos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS Pagos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      monto INTEGER,
      vehiculo_id INTEGER,
      FOREIGN KEY (vehiculo_id) REFERENCES Vehiculos(id)
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS ReporteDestinos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      destino_id INTEGER,
      cantidad_tickets INTEGER,
      FOREIGN KEY (destino_id) REFERENCES Destinos(id)
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS Orden (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      destino_id INTEGER,
      vehiculo_id INTEGER,
      cantidad_tickets INTEGER,
      monto_total INTEGER,
      fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (destino_id) REFERENCES Destinos(id),
      FOREIGN KEY (vehiculo_id) REFERENCES Vehiculos(id)
    )
  `);

    const insertDestinos = db.prepare('INSERT INTO Destinos (nombre) VALUES (?)');
    insertDestinos.run('Tuxtla Gutierrez');
    insertDestinos.run('San Cristobal');
    insertDestinos.finalize();

    const insertVehiculos = db.prepare('INSERT INTO Vehiculos (capacidad) VALUES (?)');
    insertVehiculos.run(50);
    insertVehiculos.run(40);
    insertVehiculos.run(30);
    insertVehiculos.run(20);
    insertVehiculos.finalize();
});


app.get('/destinos-dia', (req, res) => {
    db.all('SELECT * FROM Destinos', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/vehiculos', (req, res) => {
    db.all('SELECT * FROM Vehiculos', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/vehiculos/:id', (req, res) => {
    const vehiculoId = req.params.id;
    db.get('SELECT * FROM Vehiculos WHERE id = ?', [vehiculoId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

app.get('/pagos', (req, res) => {
    db.all('SELECT * FROM Pagos', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.post('/pagos', (req, res) => {
    const { monto, vehiculo_id } = req.body;

    if (!monto || !vehiculo_id) {
        res.status(400).json({ error: 'Se requiere monto y vehiculo_id para crear un pago' });
        return;
    }

    const insertPago = db.prepare('INSERT INTO Pagos (monto, vehiculo_id) VALUES (?, ?)');
    insertPago.run(monto, vehiculo_id);
    insertPago.finalize();

    res.json({ mensaje: 'Pago creado exitosamente' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
