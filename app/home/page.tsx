import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Features from "../../components/Features"
import Collaboration from "../../components/Collaboration"
import CTA from "../../components/CTA"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Collaboration />
      
      </main>
      <Footer />
    </div>
  )
}
