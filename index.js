import express from 'express';
// importar los 2 
import {main, Product} from './database.js';

const app = express();
const port = 3000;

app.use(express.json());

// El controlador 
// Paso1: req - boody
// Paso2: validaciones
// Paso3: hcaer los registros 
// Paso4:mensajes de respuesta 

app.post('/producto', async (req, res) => {
    try {

        const { nombre, precio } = req.body;
        // Paso 3 : const silence = new Kitten({ name: 'Silence' });
        const producto =  new Product({ nombre, precio });
        await producto.save();

        // Paso 4 
        res.status(201).json({message: 'Producto creado exitosamente', producto});


    } catch (error) {
        console.error(error);
    }
});

main().catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});