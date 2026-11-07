import { Link } from 'react-router-dom'

function PageTemplate({ title, description, highlights, image }) {
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
                {title}
              </li>
            </ol>
          </nav>
          <h1 className="display-5 fw-bold mb-3">{title}</h1>
          <p className="lead mb-0 text-white-50">{description}</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="page-card">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="section-title mb-3">Why brands choose us</h2>
                <p className="text-muted">
                  Our service specialists work across production and finishing to create reliable,
                  polished materials that feel premium from the first impression to the final delivery.
                </p>
                <ul className="list-check feature-list">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-6">
                <img
                  src={image}
                  alt={title}
                  className="rounded-4 shadow"
                  style={{ width: '100%', height: '430px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageTemplate
