import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 pt-20 pb-10 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Column 1 & 2: Branding & Contact */}
        <div className="lg:col-span-2 pr-0 lg:pr-12">
          <Link href="/" className="block mb-8">
            <Image 
              src="/logo.png" 
              alt="Professional Book Publishers Logo" 
              width={250} 
              height={80} 
              // Note: If your logo is dark (since it's on a white header), the 'brightness-0 invert' classes 
              // will turn it pure white so it's visible on this dark footer. 
              // If you upload a separate white logo later, you can remove those two classes.
              className="object-contain w-auto h-14 md:h-16 brightness-0 invert opacity-90" 
            />
          </Link>
          <p className="text-sm mb-8 leading-relaxed max-w-sm">
            We help authors publish with confidence. Whether it's your first book or your next bestseller, we provide expert publishing solutions tailored for success.
          </p>
          <div className="space-y-2">
            <p className="text-white font-serif text-xl tracking-wide">+1 (833) 501-7080</p>
            <p className="text-sm hover:text-np-gold transition-colors cursor-pointer inline-block">
              support@professionalbookpublishers.com
            </p>
          </div>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-white font-serif mb-6 text-lg tracking-wide">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services" className="hover:text-np-gold transition-colors">Ghostwriting</Link></li>
            <li><Link href="/services" className="hover:text-np-gold transition-colors">Editing & Formatting</Link></li>
            <li><Link href="/services" className="hover:text-np-gold transition-colors">Book Publishing</Link></li>
            <li><Link href="/services" className="hover:text-np-gold transition-colors">Book Marketing</Link></li>
            <li><Link href="/services" className="hover:text-np-gold transition-colors">Book Coaching</Link></li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-white font-serif mb-6 text-lg tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about-us" className="hover:text-np-gold transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-np-gold transition-colors">Our Work</Link></li>
            <li><Link href="/packages" className="hover:text-np-gold transition-colors">Pricing & Packages</Link></li>
            <li><Link href="/faq" className="hover:text-np-gold transition-colors">FAQs</Link></li>
            <li><Link href="/contact-us" className="hover:text-np-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 5: Policies */}
        <div>
          <h4 className="text-white font-serif mb-6 text-lg tracking-wide">Policies</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="hover:text-np-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-np-gold transition-colors">Terms of Service</Link></li>
            <li><Link href="/refunds" className="hover:text-np-gold transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section: Reviews Image & Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-12 flex flex-col items-center">
        
        {/* Reviews Banner */}
        <div className="w-full max-w-4xl flex justify-center mb-10">
          <Image 
            src="/footer.png" 
            alt="Customer Reviews and Accreditations" 
            width={1000} 
            height={150} 
            className="object-contain w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Copyright Bar */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Professional Book Publishers. All Rights Reserved.</p>
         
        </div>

      </div>
    </footer>
  )
}