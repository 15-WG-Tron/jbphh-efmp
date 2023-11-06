'use client'

import { useGetFaqs } from "../hooks/faq";
import DOMPurify from 'dompurify'

type FAQItem = {
  id?: number;
  status?: string;
  user_created?: string;
  date_created?: string;
  user_updated?: string;
  date_updated?: string;
  question: string;
  orgId?: number | null;
  answer: string;
}

const FAQ = () => {
  const {data: faqQueryData } = useGetFaqs()
  const sanitizeData = (html: string) => {
    const sanitizedHTML = DOMPurify.sanitize(html)
    return sanitizedHTML
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-center mb-6">Learn More with Our FAQs</h1>
      {
        faqQueryData?.map((faq: FAQItem) => {
          return (
             <div className="collapse collapse-arrow border shadow-lg bg-base-100 w-11/12 mb-2">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium underline underline-offset-4">
                  <p>{faq.question}</p>
                </div>
                <div className="collapse-content bg-base-200 pl-12 py-2" dangerouslySetInnerHTML={{__html: sanitizeData(faq.answer)}}></div>
             </div>
          )
        })
      } 
     </div>
  )

}

export default FAQ;
