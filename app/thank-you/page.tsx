import { CTAProductsBanner } from 'app/page';
import Footer from 'components/layout/footer';


export default async function ThankYou() {

    return (
        <div className='max-w-screen-xl mx-auto'>
        <h1 className="px-4 text-4xl font-semibold mt-5">Thank your for your order</h1>
        <p className='px-4 mt-2'>We recieved your order and will deliver it to you in the next 2 to 4 days.</p>
        <CTAProductsBanner variant="thankyou"/>
        <Footer/>
        </div>
    )
}
