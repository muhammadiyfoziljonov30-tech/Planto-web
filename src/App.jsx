import Navbar from "./components/Navbar";
import Home from "./sections/Home"
import More from "./sections/More"
import Contact from "./sections/Contact"
import { MyProvider } from "./context/CreateContext";
import TopPlants from "./sections/TopPlants";
import Review from "./sections/Review";
export default function App() {
  return (
    <>
      <MyProvider>
        <Navbar />
        <main>
          <section id="home">
            <Home />
          </section>

          <section id="top-plants">
            <TopPlants />
          </section>

          <section id="review">
            <Review/>
          </section>

          <section id="more">
            <More />
          </section>
        </main>
        <Contact />
      </MyProvider>
    </>
  )
}
