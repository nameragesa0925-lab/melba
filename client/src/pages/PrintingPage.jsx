import PageTemplate from './PageTemplate'

const highlights = [
  'Brochure and flyer printing',
  'Business stationery & forms',
  'Poster and banner production',
  'Custom finishing and lamination',
]

function PrintingPage() {
  return (
    <PageTemplate
      title="Printing Solutions"
      description="Premium print services for business essentials, campaigns, and product launches."
      highlights={highlights}
      image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    />
  )
}

export default PrintingPage
