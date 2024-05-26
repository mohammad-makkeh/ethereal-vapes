import CheckoutForm from "components/checkoutForm/checkoutForm";

export default function page() {
    return (
        <div className="max-w-screen-xl p-4 mx-auto">
            <h1 className="text-4xl font-semibold mt-5">Checkout</h1>
            <p>You're done! Just tell us how to reach you!</p>

            <div className='md:bg-gray-50 md:rounded-md md:border md:p-6  w-full md:w-3/4 mt-6'>
                <CheckoutForm />
            </div>
        </div>
    )
}
