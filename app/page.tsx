import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { PRODUCTS } from 'lib/constants';


export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid homepageItems={PRODUCTS}/>
      <Carousel carouselProducts={PRODUCTS}/>
      <Footer />
    </>
  );
}
