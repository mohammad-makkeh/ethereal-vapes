import TransitionIn from 'components/TransitionIn';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { PRODUCTS } from 'lib/constants';
import cn from 'lib/utils';
import Link from 'next/link';


export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid homepageItems={PRODUCTS} />
      <TransitionIn >
        <WhyUs />
      </TransitionIn>
      <TransitionIn>
        <CTAProductsBanner />
      </TransitionIn>
      <Footer />


      {/* glows */}
      {/* <Glow className='top-32 right-36'/> */}
      {/* <Glow className='top-[600px] -left-48 opacity-10' color='gold'/> */}
      {/* <Glow className='top-[1200px] -right-48' /> */}
    </>
  );
}



const featureItems = [
  {
    title: "Premium Quality",
    description: "Indulge in the epitome of vaping luxury with our premium quality products. Crafted with precision and care, each vape ensures an unparalleled experience.",
    image: "premium-quality.png",
  },
  {
    title: "Amazing Flavors",
    description: "Explore a symphony of flavors that tantalize your taste buds and elevate your vaping journey. From classic favorites to innovative blends, we offer an extensive range of unforgettable flavors.",
    image: "amazing-flavors.png",
  },
  {
    title: "Delivery Over Lebanon",
    description: "Experience convenience our fast delivery covering every corner of Lebanon. Sit back, relax, and let us bring your favorite vapes directly to your doorstep.",
    image: "delivery.png",
  },
  {
    title: "Customer Service",
    description: "We are here to ensure your satisfaction every step of the way. Whether you have questions, need assistance, or simply want to share your feedback, we're always here to help.",
    image: "customer-support.png",
  },
];

function WhyUs() {
  return (
    <div className="my-16 md:my-32 px-4 max-w-screen-xl mx-auto">
      <h2 className='font-bold text-3xl text-center'>Why Choose Us</h2>
      <TransitionIn>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-20">
        {featureItems.map((featureItem, i) => <FeatureItem item={featureItem} key={i} />)}
      </div>
      </TransitionIn>
    </div>
  )
}

function FeatureItem({ item }: { item: { title: string; image: string; description: string; } }) {
  return <div className="flex flex-col items-center mb-10 md:mb-0">
    <img src={item.image} alt={item.title} className="h-24" />
    <p className='font-semibold text-xl text-center mt-8'>{item.title}</p>
    <p className='text-base text-center mt-2 opacity-80'>{item.description}</p>
  </div>
}


export function CTAProductsBanner({variant} : {variant?: string}) {
  return <div className={cn("max-w-screen-xl mx-auto px-4 my-20", variant === "thankyou" && "my-10")}>
    <div className="text-white rounded-lg p-7 py-20 sm:p-14 md:p-32 lg:p-40 flex flex-col items-center justify-center relative overflow-hidden">
      <img src="/smoke-blowing-abstract.png" alt="" className="absolute w-full h-full object-cover left-1/2 bottom-0 -translate-x-1/2 -z-10" />
      <img src="/vposter-1.png" alt="" className="absolute w-16 md:w-20 lg:w-32  -right-10 -top-10 lg:-right-20 lg:-top-20 -translate-x-1/2 -z-10 rotate-[225deg]" />
      <img src="/vposter-2.png" alt="" className="absolute w-16 md:w-20 lg:w-32 left-10 -bottom-10 lg:left-20 lg:-bottom-20 -translate-x-1/2 -z-10 rotate-[45deg]" />
      <TransitionIn>
      <p className='text-2xl md:text-5xl lg:text-7xl text-white font-black text-center md:max-w-[15ch]'>Explore {variant === "thankyou" && "More Of "} Our Premium Products</p>
      </TransitionIn>
      <TransitionIn>
      <p className='text-base lg:text-xl text-center text-white opacity-80 mt-11'>Indulge in a world of exquisite flavors and exceptional quality. Elevate your vaping experience with our carefully curated selection of premium products. Whether you're a seasoned connoisseur or just starting your vaping journey, Ethereal Vapes has something for everyone.</p>
      </TransitionIn>
      <TransitionIn>
      <Link href={"/search"} className='block mt-9 rounded-full bg-white text-primary p-3 px-6 md:p-4 md:px-14 md:text-xl text-center font-medium w-fit opacity-90 hover:opacity-100'>See All products</Link></TransitionIn>
    </div>
  </div>
}
