// getting-started.js
import mongoose from 'mongoose';


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
  console.log('Connected to MongoDB');
}

const productSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
});

// a partir de este modelo podemos hacer nuevos productos 
// Y lo que debemos es exportar  
const Product = mongoose.model('Product', productSchema);

export { main, Product}