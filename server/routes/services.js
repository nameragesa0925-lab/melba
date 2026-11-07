import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

const sampleServices = [
  {
    title: 'Offset Printing',
    category: 'Printing',
    description: 'High-volume print production for brochures, catalogs, booklets, and marketing material.',
    features: ['Large runs', 'Premium finish', 'Fast turnaround'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
  },
  {
    title: 'Digital Printing',
    category: 'Printing',
    description: 'Short-run digital output with precise color matching and customization.',
    features: ['Variable data', 'On-demand jobs', 'Sharp color'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
  },
  {
    title: 'Book Publishing',
    category: 'Publishing',
    description: 'From manuscript formatting to final binding for books, journals, and annual reports.',
    features: ['Editorial support', 'Binding options', 'ISBN guidance'],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
  },
  {
    title: 'Packaging Design',
    category: 'Packaging',
    description: 'Retail-ready package concepts built for shelf appeal, durability, and brand consistency.',
    features: ['Custom dielines', 'Material sourcing', 'Retail packaging'],
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    isFeatured: true,
  },
];

router.get('/', async (req, res) => {
  try {
    const services = await Service.find({}).lean();

    if (services.length > 0) {
      return res.json(services);
    }

    return res.json(sampleServices);
  } catch (error) {
    console.error(error);
    return res.json(sampleServices);
  }
});

router.post('/', async (req, res) => {
  try {
    const service = await Service.create(req.body);
    return res.status(201).json(service);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default router;
