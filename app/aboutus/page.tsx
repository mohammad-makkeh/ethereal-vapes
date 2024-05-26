import Footer from 'components/layout/footer';
import Prose from 'components/prose';


export default async function AboutUs() {
  return (
    <>
        <Prose html={`<div>
        <h1>About Us</h1>
        <p class="text-2xl">Welcome to Ethereal Vapes – where elegance meets excellence in every puff.</p>
        <p>At Ethereal Vapes, we are dedicated to delivering a premium vaping experience right to your doorstep. Our passion for quality and commitment to customer satisfaction sets us apart in the world of vaping.</p>
        
        <h2>Our Mission</h2>
        <p>Our mission is simple: to provide you with the best vapes on the market, combined with unparalleled customer service. We believe that vaping should be a luxurious and satisfying experience, and we strive to ensure that every aspect of our service reflects this belief.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
            <li><strong>Premium Products:</strong> We meticulously select our range of vapes, ensuring that each product meets our high standards of quality, performance, and style.</li>
            <li><strong>Elegant Design:</strong> Our products are not just functional but also a statement of elegance. We offer sleek, sophisticated designs that enhance your vaping experience.</li>
            <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority. From the moment you visit our store to the time your order arrives at your door, we are committed to providing you with the best service possible.</li>
            <li><strong>Convenient Delivery:</strong> Enjoy the convenience of having your favorite vapes delivered directly to you. We pride ourselves on fast, reliable shipping to ensure you never run out of your preferred products.</li>
        </ul>
        
        <h2>Our Promise</h2>
        <p>We promise to continuously innovate and expand our product line to bring you the latest and greatest in the vaping industry. Our team is always here to assist you, answer your questions, and make your shopping experience as smooth and enjoyable as possible.</p>
        
        <p>Thank you for choosing Ethereal Vapes. We are honored to be a part of your vaping journey and look forward to serving you with the excellence and elegance you deserve.</p>
        
        <p><strong>Stay elegant. Stay premium.</strong></p>
        
        <p><strong>Ethereal Vapes Team</strong></p>
    </div>`}/>      
      <Footer />
    </>
  );
}
