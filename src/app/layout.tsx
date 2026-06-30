import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ModalProvider } from '../context/ModalContext'
import LeadModal from '../components/LeadModal'

// Google Fonts from your current setup (kept for headings/serifs)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

// Your local fonts from the old project
const gilroy = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
});

export const metadata = {
  title: 'Professional Book Publishers',
  description: 'We Help Writers Become Bestselling Authors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Added your local font variable to HTML, and className to the body
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${gilroy.variable}`}>
      <body className={`${gilroy.className} bg-white text-gray-800 antialiased`}>
        {/* Wrap everything in the Provider */}
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          
          {/* Mount the Modal at the root level */}
          <LeadModal />
        </ModalProvider>
      </body>
    </html>
  )
}