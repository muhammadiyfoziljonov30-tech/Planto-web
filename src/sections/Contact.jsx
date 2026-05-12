import Links from "../components/Links";
import Logo from "../components/Logo";

export default function Contact() {
  return (
    <section id='contact' className="container">
      <div className="flex justify-between py-28.5">
        <div className="w-145 flex flex-col items-start gap-10">
          <Logo />
          <p className="text-white text-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex items-center gap-15.25 text-white font-semibold">
            <p className=" text-[28px]">FB</p>
            <p className="text-[28px]">TW</p>
            <p className="text-[28px]">LI</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-white text-[28px] font-extrabold mb-11.5">Quick Links</h3>
          <Links className={`flex-col gap-6.5!`} />
        </div>

        <form>
          <h3 className="text-white text-[28px] font-extrabold mb-11.5">For Every Update.</h3>
          <div className="border border-white rounded-[20px]">
            <div className="join flex p-1">
              <input className="input join-item outline-none text-white py-5.5 px-7.5 rounded-l-[20px]" placeholder="Enter Email" />
              <button className="btn join-item rounded-[20px] p-4.5 bg-white text-[22px] cursor-pointer">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
