import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import PomiarMontaz from './components/PomiarMontaz'
import NaszeRealizacje from './components/NaszeRealizacje'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <PomiarMontaz standalone />
        <NaszeRealizacje />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
