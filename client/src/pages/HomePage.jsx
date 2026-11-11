import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const defaultServices = [
  {
    id: 1,
    title: 'Offset Printing',
    category: 'Printing',
    description: 'Premium bulk print runs for brochures, reports, and promotional materials.',
    features: ['Large volume print Textbooks', 'Teacher Guides','Commercial prints', 'Receipts and financial documents','Short production cycles'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Digital Printing',
    category: 'Printing',
    description: 'Flexible small-batch and on-demand printing for fast-turn business campaigns.',
    features: ['Quick turnaround', 'Variable content', 'Retail-ready finishes'],
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Book Publishing',
    category: 'Publishing',
    description: 'Editorial and production support for books, journals, and company publications.',
    features: ['Layout & design', 'Binding services', 'ISBN guidance'],
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Packaging Design',
    category: 'Packaging',
    description: 'Retail packaging solutions that protect products while elevating brand identity.',
    features: ['Shelf-ready design', 'Material sourcing', 'Dieline prep'],
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
  },
]

const stats = [
  { value: '12k+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention' },
  { value: '48h', label: 'Average turnaround' },
]

const processSteps = [
  {
    title: 'Consultation',
    description: 'We review quantity, timeline, finish, and brand objectives before production begins.',
  },
  {
    title: 'Design & Proofing',
    description: 'Our team prepares layouts, mockups, and proof copies to fine-tune every detail.',
  },
  {
    title: 'Production',
    description: 'Your job moves into production with strict quality checks and dependable fulfillment.',
  },
  {
    title: 'Delivery',
    description: 'We arrange dispatch, packaging, and tracking so your materials reach you on time.',
  },
]

const apiBases = [
  import.meta.env.VITE_API_URL,
  'http://localhost:5000/api',
  'http://localhost:5001/api',
].filter(Boolean)

function HomePage() {
  const [services, setServices] = useState(defaultServices)

  useEffect(() => {
    const fetchServices = async () => {
      let lastError = null

      for (const baseUrl of apiBases) {
        try {
          const response = await fetch(`${baseUrl.replace(/\/$/, '')}/services`)
          if (!response.ok) throw new Error('API request failed')

          const data = await response.json()
          if (Array.isArray(data) && data.length > 0) {
            setServices(data)
            return
          }
        } catch (error) {
          lastError = error
          console.warn(`Could not reach API at ${baseUrl}:`, error.message)
        }
      }

      if (lastError) {
        console.error('Could not fetch services from any configured API endpoint:', lastError)
      }
    }

    fetchServices()
  }, [])

  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 hero-content">
              <span className="hero-kicker">Print • Publish • Package</span>
              <h1 className="hero-title"> Delivering,Quality and Punctuality are our qualifications.</h1>
              <p className="lead text-white-50">
                From bold various Textbooks Teacher Guides,Invitation cards (various events),Calendars,Receipts and financial documents and commercial prints to premium packaging and publishing support, we turn ideas
                into tangible, high-impact materials.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary-custom" to="/contact">
                  Request a quote
                </Link>
                <Link className="btn btn-outline-light" to="/printing">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section company-overview">
        <div className="container">
          <div className="text-center mb-4">
            <span className="hero-kicker">About Melba</span>
            <h2 className="section-title">Melba Printing, Publishing and Packaging S.C.</h2>
          </div>

          <div className="company-card intro-card mb-4">
            <p>
              Melba Printing, Publishing and Packaging S.C. is a full-service production partner for
              commercial printing, editorial publishing, and packaging solutions. Our operation is built
              around capital technology investment across prepress, press, and post-press production to deliver
              quality, speed, and reliability for every print job.
            </p>
            <p>
              We support businesses, institutions, and publishers with dependable production workflows,
              from digital and prepress preparation through high-volume printing, finishing, and product
              presentation.
            </p>
          </div>

          <div className="capability-header">
            <h3>Capital Technology Investment</h3>
          </div>

          <div className="technology-grid">
            <div className="technology-card">
              <h3>Prepress</h3>
              <ul>
                <li>Data center Network Backbone / LAN</li>
                <li>Thermal CTP Machines</li>
                <li>Density meter</li>
                <li>Desktop Publishing (DTS)</li>
              </ul>
            </div>

            <div className="technology-card">
              <h3>Press</h3>
              <div className="technology-subgroup">
                <h4>Web offset printing machines</h4>
                <ul>
                  <li>Two Cold Set Web-offset machines, 8 units (8+8), each with design capacity of 65,000 impressions per hour.</li>
                  <li>One Horizontal Heat set Web offset machine, 4 units (4+4), design capacity 55,000 IPH.</li>
                </ul>
              </div>
              <div className="technology-subgroup">
                <h4>Offset sheet feed machines</h4>
                <ul>
                  <li>Five units + coater + dryer, 16,000 sheets/hour</li>
                  <li>Four units A1 size, 14,000 sheets/hour</li>
                  <li>Two units B1 size with perfecter, 12,000 sheets/hour</li>
                  <li>One unit A1 size with perforating and numbering, over 7,000 sheets/hour</li>
                  <li>Full and spot automatic UV coating machine, 3,300 sheets/hour</li>
                </ul>
              </div>
            </div>

            <div className="technology-card">
              <h3>Post-press</h3>
              <ul>
                <li>Perfect Binding line</li>
                <li>Perfect Binding offline</li>
                <li>Stitching work line</li>
                <li>Terming machine</li>
                <li>Folding machine</li>
                <li>Digital cutting machines (Three knife and single knife)</li>
                <li>Lamination machine</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat) => (
              <div className="col-md-4" key={stat.label}>
                <div className="stat-box text-center">
                  <h3>{stat.value}</h3>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What we do best</h2>
            <p className="section-subtitle mx-auto">
              We combine production expertise with creative thinking across printing, publishing, and
              packaging to help brands and businesses stand out in the market.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {services.map((service) => (
              <div className="col-lg-3 col-md-6" key={service.id || service.title}>
                <div className="service-card h-100">
                  <img className="service-image" src={service.image} alt={service.title} />
                  <div className="service-body">
                    <span className="service-tag">{service.category}</span>
                    <h3 className="mt-3 mb-2">{service.title}</h3>
                    <p className="text-muted">{service.description}</p>
                    <ul className="list-check">
                      {service.features?.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">How we work</h2>
          </div>

          <div className="row g-4">
            {processSteps.map((step, index) => (
              <div className="col-lg-3 col-md-6" key={step.title}>
                <div className="process-card">
                  <div className="card-icon">0{index + 1}</div>
                  <h4>{step.title}</h4>
                  <p className="mb-0 text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
