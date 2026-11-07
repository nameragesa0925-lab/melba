import express from 'express';
import Quote from '../models/Quote.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find({}).sort({ createdAt: -1 }).lean();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json({
      message: 'Quote request submitted successfully',
      quote,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
