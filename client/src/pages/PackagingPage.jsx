import PageTemplate from './PageTemplate'

const highlights = [
  'Retail boxes and cartons',
  'Product labeling and inserts',
  'Protective packaging systems',
  'Sustainable material options',
]

function PackagingPage() {
  return (
    <PageTemplate
      title="Packaging Solutions"
      description="Smart packaging strategies that protect products and improve shelf appeal across retail channels."
      highlights={highlights}
      image="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
    />
  )
}

export default PackagingPage
