import Hero from './components/Hero'
import About from './components/About'
import Partners from './components/Partners'
import Audience from './components/Audience'  
import Programs from './components/Programs'
import Speakers from './components/Speakers'
import Results from './components/Results'
import Formats from './components/Formats'
import Contacts from './components/Contacts'
import Resources from './components/Resources'
import Problem from './components/Problem'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Partners />  
      <Resources />
      <Speakers />
      <Problem />
      <Audience />
      <Programs />
      <Results />
      <Formats />
      <Contacts />
    </main>
  )
}