import { Link } from 'react-router-dom'

const galleryItems = [
  {
    title: 'Premium Packaging Range',
    category: 'Packaging',
    description: 'Custom retail packaging designs built for shelf impact and product protection.',
    image: '/gallery-0.jpg',
  },
  {
    title: 'Book Publishing Collection',
    category: 'Publishing',
    description: 'Editorial projects with careful layout, binding, and finishing for standout books.',
    image: '/gallery-1.jpg',
  },
  {
    title: 'Commercial Print Campaign',
    category: 'Printing',
    description: 'High-volume print production for marketing campaigns, reports, and branded assets.',
    image: '/melba10.jpg',
  },
  {
    title: 'Event Invitations',
    category: 'Printing',
    description: 'Elegant, polished invitations and stationery tailored for memorable occasions.',
    image: '/gallery-2.jpg',
  },
  {
    title: 'Gift & Retail Packaging',
    category: 'Packaging',
    description: 'Branded packaging solutions designed to elevate presentation and customer experience.',
    image: '/gallery-3.jpg',
  },
  {
    title: 'Editorial Design Work',
    category: 'Publishing',
    description: 'Thoughtful design systems and layout support for magazines, brochures, and guides.',
    image: '/melba11.jpg',
  },
]

function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-3">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Gallery
              </li>
            </ol>
          </nav>

          <h1 className="display-5 fw-bold mb-3">Our gallery</h1>
          <p className="lead mb-0 text-white-50">
            A glimpse into the creative and production work we deliver across print, publishing, and packaging.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="gallery-toolbar">
            <span className="gallery-tag">Print • Publish • Package</span>
            <Link className="btn btn-primary-custom" to="/contact">
              Request a quote
            </Link>
          </div>

          <div className="gallery-feature-image-wrap">
            <img
              className="gallery-feature-image"
              src="/gallery-factory.jpg"
              alt="Melba factory production floor"
            />
          </div>

          <div className="gallery-feature-image-wrap">
            <img
              className="gallery-feature-image"
              src="/melba10.jpg"
              alt="Melba web press printing machine"
            />
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-card" key={item.title}>
                <img className="gallery-image" src={item.image} alt={item.title} />
                <div className="gallery-card-body">
                  <span className="service-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPage
