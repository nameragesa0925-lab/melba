import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    details: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Quote || mongoose.model('Quote', quoteSchema);
