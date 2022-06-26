import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import CTA from "../components/CTA"
export default function Home() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
       <main className="w-full">
          <Header />
          <Hero />
          <About />
          <Services />
          <CTA />
       </main>  

    </div>
  )
}
