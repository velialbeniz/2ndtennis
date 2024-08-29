import { Link } from "react-router-dom"
import Heroimg from  "../assets/heroimg.jpg"
import Heroimg2 from  "../assets/heroimg2.jpeg"
import Heroimg3 from  "../assets/heroimg3.jpg"

const carouselImages = [Heroimg, Heroimg2, Heroimg3]

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="flex flex-col gap-y-4">
            <h1 className="max-w-2xl font-bold tracking-tight text-4xl md:text-6xl lg:text-8xl">Tenise dair aradağın her şey</h1>
            <p className="max-w-xl text-lg leading-9">Tennis ekipmanlara ulaşmak ve diğer tenis severlerle bağlantı kurmak hiç bu kadar kolay olmamıştı.</p>
            <div className="mt-10 flex items-center justify-center md:justify-start">
                <button className="btn btn-primary">
                    <Link to="/products">Tenis Ekipmanları</Link>
                </button>
            </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 rounded-box bg-neutral">
            {carouselImages.map((image, index) => (
                <div className="carousel-item" key={index}>
                    <img className="rounded-box h-full object-cover w-80" src={image} alt="Hero Image" />
                </div>
            ))}
        </div>
    </div>
  )
}
export default Hero