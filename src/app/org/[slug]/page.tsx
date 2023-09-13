import React from 'react'

const OrgLandingPage = ({params} : {params: {slug: string}}) => {
  console.log(params.slug)
  return <div>
      My Slug: {params.slug}
  </div>
}

export default OrgLandingPage