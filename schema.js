import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  product_id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  slogan: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  default_price: { type: Number, default: 0 },
  related_products: [
      {
        product_id: { type: Number, unique: true, required: true } 
      }
  ],
  features: [
    {
      feature_id: { type: Number, unique: true, required: true },
      feature: { type: String },
      value: { type: String }
    }
  ],
  styles: [styleSchema],
});

const styleSchema = new Schema({
    style_id: { type: Number, unique: true, required: true },
    name: { type: String, required: true },
    original_price: { type: Number, default: 0 },
    sale_price: { type: Number, default: 0 },
    default: {type: Boolean, default: true},
    photos: [
        {
            photo_id: { type: Number, unique: true, required: true },
            thumbnail_url: { type: String, required: true },
            url: { type: String, required: true },
        }
    ],
    skus: [skuSchema],
});

const skuSchema = new Schema ({
        sku_id: { type: Number, unique: true, required: true },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
});

const Product = model('Product', productSchema);

export default {
  Product,
};