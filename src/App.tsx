import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { WorkProcess } from './components/WorkProcess/WorkProcess'
import { FAQ } from './components/FAQ/FAQ'
import { Contact } from './components/Contact/Contact'
import { FloatingButtons } from './components/FloatingButtons/FloatingButtons'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WorkProcess />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

export default App
