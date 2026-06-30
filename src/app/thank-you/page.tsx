import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-np-gold/10 text-np-gold rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Message Received!
        </h1>
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          Thank you for reaching out to Professional Book Publishers. 
          Our expert team has received your information and will review your request. 
          We aim to respond to all inquiries within 1 business day.
        </p>

        <Link 
          href="/" 
          className="inline-block bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition shadow-md"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}