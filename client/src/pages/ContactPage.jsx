import { useState } from 'react'

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Printing',
    quantity: 1000,
    details: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)

    try {
      const response = await fetch(`${apiBase}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          quantity: Number(formData.quantity),
        }),
      })

      if (!response.ok) throw new Error('Unable to submit quote request')

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Printing',
        quantity: 1000,
        details: '',
      })
    } catch (error) {
      console.error(error)
      setIsSubmitted(false)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Let's build your next print project</h1>
          <p className="lead mb-0 text-white-50">
            Tell us about your requirements and our specialists will reach out with a tailored plan.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="contact-panel p-4 h-100">
                <h3 className="mb-3">Contact details</h3>
                <p className="text-muted">
                  We work with businesses, Printing Publishing Ppackaging, and retail brands to design and manufacture
                  material that supports growth.
                </p>
                <ul className="contact-list">
                  <li>📍 Shaggar city, Gelan Administration, Woreda Tullu Gurracha</li>
                  <li>📞 +251991662221</li>
                  <li>✉️ melbappps.c@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Company</label>
                    <input
                      className="form-control"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Service</label>
                    <select
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option>Printing</option>
                      <option>Publishing</option>
                      <option>Packaging</option>
                      <option>Design & Branding</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Estimated quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Project details</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your timeline, material preferences, and specifications."
                      required
                    />
                  </div>

                  <div className="col-12 d-flex align-items-center gap-3">
                    <button type="submit" className="btn btn-primary-custom" disabled={isSending}>
                      {isSending ? 'Sending...' : 'Send request'}
                    </button>
                    {isSubmitted && (
                      <span className="text-success fw-semibold">
                        Your request was submitted successfully.
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
