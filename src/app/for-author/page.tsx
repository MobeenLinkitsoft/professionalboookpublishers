import Image from 'next/image';
import Link from 'next/link';

// Data array for the 8-step process
const publishingSteps = [
  {
    step: "Step 01",
    title: "Choose a package & Sign up",
    content: [
      "Select one of our comprehensive publishing packages tailored to fit your goals and budget.",
      "Fill out the sign-up form with details about your manuscript and what you're looking to achieve.",
      "Once you submit, our onboarding team will review your submission and reach out."
    ],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800", // Placeholder: Person typing on laptop
    bg: "bg-white"
  },
  {
    step: "Step 02",
    title: "Meet Your Expert Publishing Team",
    content: [
      "You'll be assigned a dedicated project manager who will be your main point of contact throughout the journey.",
      "We'll schedule a kickoff call to discuss your vision, timeline, and specific publishing needs.",
      "Your team will include professional editors, designers, and marketers tailored to your genre."
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", // Placeholder: Team meeting
    bg: "bg-np-beige"
  },
  {
    step: "Step 03",
    title: "Manuscript Development & Editing",
    content: [
      "Our experienced editors will conduct a thorough review of your manuscript, focusing on structure, pacing, and clarity.",
      "We provide developmental editing, line editing, and proofreading to polish your prose.",
      "You maintain full creative control, approving all changes before they are finalized."
    ],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=800", // Placeholder: Writing/Editing
    bg: "bg-white"
  },
  {
    step: "Step 04",
    title: "Book Cover Design & Layout",
    content: [
      "Collaborate with our award-winning design team to create a visually striking cover that captures your story's essence.",
      "We format the interior layout for both print and digital formats, ensuring a professional reading experience.",
      "Choose from multiple design concepts and request revisions until it's perfect."
    ],
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=800", // Placeholder: Books/Design
    bg: "bg-np-beige"
  },
  {
    step: "Step 05",
    title: "Proofreading & Quality Assurance",
    content: [
      "A final, meticulous round of proofreading ensures your book is error-free and ready for the market.",
      "We verify formatting consistency, chapter headings, page numbers, and overall layout.",
      "You receive the final print-ready files for a last review before we proceed to publishing."
    ],
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=800", // Placeholder: Magnifying glass/reading
    bg: "bg-white"
  },
  {
    step: "Step 06",
    title: "Publishing & Distribution",
    content: [
      "We handle the entire upload process to major platforms like Amazon, Barnes & Noble, and IngramSpark.",
      "Your book will be available in multiple formats (eBook, Paperback, Hardcover) across global markets.",
      "We manage ISBN allocation, copyright registration, and metadata optimization for maximum discoverability."
    ],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800", // Placeholder: Digital distribution/Logos
    bg: "bg-np-beige"
  },
  {
    step: "Step 07",
    title: "Royalties & Earnings",
    content: [
      "Enjoy 100% of your net royalties—we don't take a cut of your book sales.",
      "Earnings are deposited directly into your account on a regular schedule determined by the retailers.",
      "Access detailed sales reports and analytics through your author dashboard to track your success."
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Placeholder: Laptop with banking/stats
    bg: "bg-white"
  },
  {
    step: "Step 08",
    title: "Success",
    content: [
      "Celebrate the realization of your dream as a published author! Your book is now available to readers worldwide.",
      "Leverage our continued support and marketing resources to build your author brand.",
      "Welcome to the Professional Book Publishers family!"
    ],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800", // Placeholder: Happy person with books
    bg: "bg-np-beige"
  }
];

export default function ForAuthorPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full py-32 flex items-center bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl text-white font-serif font-medium mb-6 leading-tight">
              For Author
            </h1>
            <button className="bg-np-gold hover:bg-np-gold-hover text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition">
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Title */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Our Publishing Process — How We Take <br className="hidden md:block" /> You from Manuscript to Market
          </h2>
        </div>
      </section>

      {/* 3. Alternating Steps Process */}
      <div className="w-full">
        {publishingSteps.map((item, index) => {
          // Determine if image is on the left or right based on odd/even index
          const isImageLeft = index % 2 === 0;

          return (
            <section key={index} className={`py-16 ${item.bg}`}>
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                
                {/* Image Container */}
                <div className={`relative h-[300px] md:h-[400px] w-full shadow-lg ${!isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
                  {/* Replace the src with your actual local images if you have them */}
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* Text Container */}
                <div className={`${!isImageLeft ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center`}>
                  <span className="text-sm font-bold tracking-widest uppercase text-np-gold mb-3 block">
                    {item.step}
                  </span>
                  <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    {item.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}