import BookingForm from "@/components/booking-form"
import Testimonials from "@/components/testimonials"
import Benefits from "@/components/benefits"
import FaqAccordion from "@/components/faq-accordion"
import { WhatsAppButton } from "@/components/whatsapp-button"


export default function BookConsultation() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-800 mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-lg text-olive-600">
            Let's bring your vision to life. Share your details and our experts will get in touch.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 mb-16">
          <BookingForm />
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-olive-800 text-center mb-8">What Our Clients Say</h2>
          <Testimonials />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-olive-800 text-center mb-8">
            Why Choose Muskan Interiors
          </h2>
          <Benefits />
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-olive-800 text-center mb-8">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
