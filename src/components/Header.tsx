import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full shadow-sm relative z-50">
      {/* Top Black Bar (Kept as is) */}
      <div className="bg-black text-white text-xs py-2 px-6 flex justify-between items-center border-b border-gray-800">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="text-np-gold">✉</span> info@professionalbookspublishers.com
          </p>
          <div className="flex gap-6 items-center">
            <p>CALL US AT: +1 (888) 919-9811</p>
            {/* <button className="bg-np-gold hover:bg-np-gold-hover text-white px-4 py-1 font-semibold transition">
              Live Chat
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Navigation - Now White Background */}
      <nav className="bg-white py-4 px-6 relative z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium text-gray-900 uppercase tracking-wider">
          
          {/* Left Side: Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Professional Book Publishers Logo" 
              width={200} 
              height={60} 
              className="object-contain w-auto h-12 md:h-14" 
              priority
            />
          </Link>

          {/* Right Side: All Links + CTA */}
          <div className="flex items-center gap-8">
            
            {/* The Links */}
            <div className="hidden lg:flex gap-6 items-center">
              <Link href="/" className="hover:text-np-gold transition">Home</Link>
              <Link href="/about-us" className="hover:text-np-gold transition">About Us</Link>
              <Link href="/services" className="hover:text-np-gold transition">Services</Link>
              <Link href="/packages" className="hover:text-np-gold transition">Packages</Link>
              <Link href="/portfolio" className="hover:text-np-gold transition">Our Work</Link>
              <Link href="/faq" className="hover:text-np-gold transition">FAQ</Link>
            </div>

            {/* The CTA Button */}
            <Link href="/contact-us" className="bg-np-gold hover:bg-np-gold-hover text-white px-8 py-3 uppercase tracking-wide transition font-bold shadow-md">
              Get A Quote
            </Link>
            
          </div>

        </div>
      </nav>
    </header>
  )
}