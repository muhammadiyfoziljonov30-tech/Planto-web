import TopSellingCard from "../components/TopSellingCard";

export default function TopPlants() {
  return (
    <section id='top-plants'>
      <div className="flex flex-col items-center py-35.5">
        <div className='trendy-container mb-19'>
          <h2 className="text-[55px] text-white text-center">Our Top Selling</h2>
        </div>
        <div>
          <TopSellingCard />
        </div>
      </div>
    </section>
  )
}
