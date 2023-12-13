'use client';
import React from 'react';
import { useGetContact } from '../hooks/contacts';
import { useGetOrganization } from '../hooks/organiztion';
import Link from 'next/link';

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
};
type Org = {
  index: number;
  orgId: number;
};
const ContactPage = () => {
  const [_, startTransition] = React.useTransition();
  const [activeTab, setActiveTab] = React.useState<Org | null>(null);
  const { data: contactQueryData } = useGetContact();
  const { data: organiztionQueryData } = useGetOrganization();

  const queryData = useGetContact();

  const getContactOrganization = (contactOrgId: number) => {
    const organization = organiztionQueryData?.find((org) => org.id === contactOrgId);

    return organization?.name;
  };

  const handleTabClick = (org: Org | null) => {
    startTransition(() => setActiveTab(org));
  };

  return (
    <div className="w-full h-full">
      <h1 className="uppercase text-3xl text-center mb-6">get in touch!</h1>
      <div className=" w-11/12 h-auto flex justify-evenly">
        <div className="tabs border-r-black flex items-start flex-col mb-6 w-auto">
          <a
            className={`tab tab-lg hover:text-primary ${
              activeTab === null ? 'tab-active underline underline-offset-4 text-primary-focus' : null
            }`}
            onClick={() => handleTabClick(null)}
          >
            Show All
          </a>
          {organiztionQueryData
            ?.sort((a, b) => a.name.localeCompare(b.name))
            ?.map((org, index) => {
              return (
                <a
                  key={index}
                  onClick={() => {
                    const organization: Org = { index: index, orgId: org.id };
                    console.log(organization);
                    handleTabClick(organization);
                  }}
                  className={`tab hover:text-primary ${
                    activeTab?.index === index ? 'tab-active underline underline-offset-4 text-primary-focus' : null
                  }`}
                >
                  {org.name}
                </a>
              );
            })}
        </div>
        <div className="mt-1 w-3/4">
          <h1 className="pb-8 text-2xl">Directory</h1>
          <div>
            {contactQueryData?.map((contact: Contact) => {
              const orgName = getContactOrganization(contact.organization);
              if (activeTab === null) {
                return (
                  <div
                    key={contact.id}
                    className="card border border-gray-200 rounded w-full min-h-[5rem] py-2 px-6 mb-2 flex flex-row flex-wrap justify-between"
                  >
                    <div className="w-1/4 flex-shrink-0">
                      <p className=" flex flex-col font-semibold text-lg leading-8">
                        {contact.name}
                        <span className="font-normal text-sm text-gray-500">
                          <Link href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</Link>
                        </span>
                      </p>
                    </div>
                    <div className="w-1/3 flex-shrink-0">
                      <p className=" flex flex-col font-semibold leading-8">
                        {contact.jobTitle}
                        <span className="font-normal text-sm text-gray-500">{orgName}</span>
                        <span className="font-normal text-sm text-gray-500 pt-1">
                          <Link
                            href={`https://www.google.com/maps/dir/?api=1&destination=${contact.location}`}
                            target="_blank"
                            prefetch
                          >
                            {contact.location}
                          </Link>
                        </span>
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href={`tel:${contact.phoneNumber}`}
                        className="flex flex-col text-sm text-gray-500 leading-8"
                      >
                        {contact.phoneNumber}
                      </Link>
                      <span>
                        {contact.altPhoneNumber ? (
                          <Link href={`tel${contact.altPhoneNumber}`} className="text-sm text-gray-500">
                            {contact.altPhoneNumber}
                          </Link>
                        ) : null}
                      </span>
                    </div>
                  </div>
                );
              } else {
                if (contact.organization === activeTab.orgId) {
                  return (
                    <div
                      key={contact.id}
                      className="card border border-gray-200 rounded w-full min-h-[5rem] py-2 px-6 mb-2 flex flex-row flex-wrap justify-between"
                    >
                      <div className="w-1/4 flex-shrink-0">
                        <p className=" flex flex-col font-semibold text-lg leading-8">
                          {contact.name}
                          <span className="font-normal text-sm text-gray-500">
                            <Link href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</Link>
                          </span>
                        </p>
                      </div>
                      <div className="w-1/3 flex-shrink-0">
                        <p className=" flex flex-col font-semibold leading-8">
                          {contact.jobTitle}
                          <span className="font-normal text-sm text-gray-500">{orgName}</span>
                          <span className="font-normal text-sm text-gray-500 pt-1">
                            <Link
                              href={`https://www.google.com/maps/dir/?api=1&destination=${contact.location}`}
                              target="_blank"
                              prefetch
                            >
                              {contact.location}
                            </Link>
                          </span>
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          href={`tel:${contact.phoneNumber}`}
                          className="flex flex-col text-sm text-gray-500 leading-8"
                        >
                          {contact.phoneNumber}
                        </Link>
                        <span>
                          {contact.altPhoneNumber ? (
                            <Link href={`tel${contact.altPhoneNumber}`} className="text-sm text-gray-500">
                              {contact.altPhoneNumber}
                            </Link>
                          ) : null}
                        </span>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
