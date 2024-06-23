import React from 'react'

type Params = {
  params: {
    listingId: string
  }
}
export default async function Page({ params: { listingId } }: Params) {
  return (
    <div className='listing-page-wrapper'>
      <div className="listing-page-header header-section">
        logo | switch
      </div>
      <div className="company-info-section">
        logo | nome | site | link do site
      </div>
      <div className="job-description-section">
        <div className="general-info">
          informações gerais
          apply button
        </div>
        <div className="details">
          <div className="details-subsection">
            <p className="general-description">
              general description
            </p>
          </div>
          <div className="details-subsection requirements">
            <p className="subsection-header requirements-header">
              Requirements
            </p>
            <p className="subsection-body">
              blablabla
            </p>

          </div>
          <div className="details-subsection">
            <p className="subsection-header">
              What you will do
            </p>
            <p className="subsection-body">
              blablabla
            </p>
          </div>

        </div>

      </div>
      <div className="listing-page-footer">

      </div>


    </div>
  )
}

