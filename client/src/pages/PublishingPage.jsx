import PageTemplate from './PageTemplate'

const highlights = [
  'Books of various types',
  'Textbooks & Teacher’s Guides',
  'Magazines',
  'Receipts and financial documents',
  'Office stationery',
  'Invitation cards (various events)',
  'Catalogs',
  'Brochures & souvenir materials',
  'Posters',
  'Business cards',
  'Calendars',
  'Envelopes',
  'Promotional leaflets',
  'Newspapers (various formats)',
  'Postcards',
]

function PublishingPage() {
  return (
    <PageTemplate
      title="Publishing Services"
      description="Creative and production support for books, reports, and printed content that needs to stand out."
      highlights={highlights}
      image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
    />
  )
}

export default PublishingPage
