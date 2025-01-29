const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Connection Error:", err));

// Define Product Schema
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true }
});

// Create Product Model
const Product = mongoose.model("Product", productSchema);

// Insert a product
const newProduct = new Product({
    title: "Smartphone",
    price: 999,
    category: "Electronics",
    inStock: true
});

newProduct.save()
    .then(product => {
        console.log("Product saved:", product);
        mongoose.connection.close(); 
    })
    .catch(err => console.error("Error saving product:", err));
