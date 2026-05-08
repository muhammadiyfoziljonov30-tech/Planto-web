import Navbar from "./components/Navbar";
import Home from "./sections/Home"
import More from "./sections/More"
import Contact from "./sections/Contact"
import PlantsType from "./sections/PlantsType";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="plants-type">
          <PlantsType />
        </section>

        <section id="more">
          <More />
        </section>
      </main>
      <Contact />
    </>
  )
}
