"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqAccordion() {
  const faqs = [
    {
      question: "How long does the consultation take?",
      answer:
        "Our free consultations typically last between 30-45 minutes. During this time, our designers will discuss your requirements, preferences, and answer any questions you may have about the design process.",
    },
    {
      question: "Do I need to pay anything?",
      answer:
        "No, the initial consultation is completely free of charge. We believe in understanding your needs first before proposing any paid services or solutions.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, you can reschedule your appointment. We request that you notify us at least 24 hours in advance so we can accommodate other clients.",
    },
    {
      question: "What happens after the consultation?",
      answer:
        "After the consultation, our team will prepare a detailed proposal including design concepts, estimated timeline, and budget. You'll have the opportunity to review and discuss any adjustments before proceeding.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-olive-200">
          <AccordionTrigger className="text-left text-olive-800 hover:text-olive-600 font-medium py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-olive-700 pb-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
