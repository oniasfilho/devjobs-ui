'use client'

import React, { useState } from 'react'
import data from '../../util/data.json'

type Params = {
  params: {
    listingId: string
  }
}

export default async function Page({ params: { listingId } }: Params) {
  const [listing, setListing] = useState<JobListing>(data.jobListings.find(e => e.id === listingId)!!)
  return (
    <div className='listing-page-wrapper'>
      <div className="listing-page-header header-section">
        {listing.logo} | switch
      </div>
      <div className="company-info-section">
        {listing.logo} | {listing.company_name} | {listing.company_site} | link to {listing.company_site}
      </div>
      <div className="job-description-section">
        <div className="general-info">
          <button>apply</button>
        </div>
        <div className="details">
          <div className="details-subsection">
            <p className="general-description">
              {listing.opening_description}
            </p>
          </div>
          <div className="requirements-subsection requirements">
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

