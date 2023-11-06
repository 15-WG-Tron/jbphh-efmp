'use client'
import React from "react";
import { useGetContact } from "../hooks/contacts";
import { useGetOrganization} from "../hooks/organiztion";
import Link from 'next/link'

type Contact = {
  altPhoneNumber?: null | string;
  date_created?: string;
  date_updated?: null | string;
  emailAddress: string;
  id?: number;
  jobTitle: string;
  location: string;
  name: string;
  organization: number;
  phoneNumber: string;
  status?: string;
  user_created?: string;
  user_updated?: null | string;
}
type Org = {
  index: number;
  orgId: number;
}
const ContactPage = () => {
  const [_, startTransition] = React.useTransition()
  const [activeTab, setActiveTab] = React.useState<Org | null>(null)
  const {data: contactQueryData} = useGetContact()
  const {data: organiztionQueryData} = useGetOrganization()

  const getContactOrganization = (contactOrgId: number) => {
    const organization = organiztionQueryData?.find((org) => org.id === contactOrgId)

    return organization?.name
  }

  const handleTabClick = (org: Org | null ) => {
    startTransition(() => setActiveTab(org))
}


  return (
  <div className="w-full">
    <h1 className="uppercase text-3xl text-center mb-6">get in touch!</h1>

    <div className="tabs w-full flex justify-center mb-6">
      <a className={`tab tab-lg hover:text-primary ${activeTab === null ? 'tab-active underline underline-offset-4 text-primary-focus': null}`} onClick={() => handleTabClick(null)}>Show All</a>
      {organiztionQueryData?.sort((a,b) => a.name.localeCompare(b.name))
        ?.map((org, index) => {
        return (
          <a key={index} onClick={() => {
              const organization: Org = {index: index, orgId: org.id }
              console.log(organization)
              handleTabClick(organization)
            }
          } className={`tab tab-lg hover:text-primary ${activeTab?.index === index ? 'tab-active underline underline-offset-4 text-primary-focus': null}`}>{org.name}</a>
        )
      })     
      }
    </div> 

 
    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 col-auto">
    { activeTab === null ? (
      contactQueryData?.map((contact: Contact) => {
        const contactOrgName = getContactOrganization(contact.organization)
        return (
          <div key={contact.name} className="card bordered flex-row w-full max-w-md mx-auto">
            <div className="card-body shadow-md rounded-xl">
              <h2 className="card-title"> {contact.name}</h2>              
              {contact.jobTitle ? <p className="pb-0">{contact.jobTitle}</p>  : null}
              <div>
              <Link className="text-blue-300 underline" href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</Link>
              {contact.altPhoneNumber ? <span className="mx-2">/</span> : null }
              {contact.altPhoneNumber ? <Link className="text-blue-300 underline" href={`tel:${contact.altPhoneNumber}`}>{contact.altPhoneNumber}</Link> : null } 
              </div>
              <Link className="text-blue-300 underline" href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</Link>
              <p>{contactOrgName}</p>
              <p>{contact.location}</p>
            </div>
          </div>
        )
      })) : (
        contactQueryData?.map((contact: Contact) => {
       const contactOrgName = getContactOrganization(contact.organization)
        if (contact.organization === activeTab.orgId) {
          return (
          <div key={contact.name} className="card bordered flex-row w-full max-w-md mx-auto">
            <div className="card-body shadow-md rounded-xl">
              <h2 className="card-title"> {contact.name}</h2>              
              {contact.jobTitle ? <p className="pb-0">{contact.jobTitle}</p>  : null}
              <div>
              <Link className="text-blue-300 underline" href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</Link>
              {contact.altPhoneNumber ? <span className="mx-2">/</span> : null }
              {contact.altPhoneNumber ? <Link className="text-blue-300 underline" href={`tel:${contact.altPhoneNumber}`}>{contact.altPhoneNumber}</Link> : null } 
              </div>
              <Link className="text-blue-300 underline" href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</Link>
              <p>{contactOrgName}</p>
              <p>{contact.location}</p>
            </div>
          </div>

        )}

        })
      ) 
    } 
     </div>
  </div>


  ); 
};
export default ContactPage;
