"use client"
import LoadingDots from "components/loading-dots";
import { useCookies } from "next-client-cookies";
import { HubspotProvider, useHubspotForm } from "next-hubspot";
import { useRef } from "react";

export default function CheckoutForm() {


    return <HubspotProvider>
        <CheckoutForm_H />
    </HubspotProvider>


}


const CheckoutForm_H = () => {

    const cookies = useCookies();
    const cart = cookies.get("cart");
    const cartId = cookies.get("cartId");

    const checkOnlyOnceRef = useRef(false);

    const { loaded, error } = useHubspotForm({
        portalId: '144712970',
        formId: '8667fb10-2801-40c9-a737-1b9f3e26ab2f',
        region: 'eu1',
        target: '#checkout-form-wrapper',
        onFormSubmit: (form) => {
            if (!form || checkOnlyOnceRef.current) return;
            // send custom data here if possible
            // Send custom data here            
            const formData = new FormData(form);
            formData.append('Order', formatOrderDetails(cart));
            const name = formData.get("firstname")
            formData.delete("firstname")
            formData.append("firstname", name + " - order -" + cartId)

            // fetch(form.action, {
            //     method: form.method,
            //     body: formData,
            // })
            //     .then(response => {
            //         if (response.ok) { checkOnlyOnceRef.current = true }
            //         console.log("form submitted, " + response.ok)
            //         cookies.remove("cart")
            //         cookies.remove("cartId")
            //     })
            //     .catch(error => {
            //         console.error('Form submission error:', error);
            //     });

            // Prevent the default form submission
            return false;
        }
    });

    return (
        <>
            <div id="checkout-form-wrapperd" />
            {
                !loaded && <div className="flex justify-center items-center py-5">
                    <LoadingDots className="bg-black " />
                </div>
            } 
            {
                error && <div className="flex justify-center items-center py-5">
                    <p className="mb-3">
                        Something went wrong, please refresh the page.
                    </p>
                    <p>
                        Or contact us at <a className="px-1 text-primary font-semibold" href="mailto:etheralvapes7@gmail.com">etheralvapes7@gmail.com</a> if the issue persists.
                    </p>
                </div>
            }
        </>
    )
}

function formatOrderDetails(orderJsonString?: string) {
    if (!orderJsonString) return "empty"
    try {

        // Parse the JSON string
        const orderDetails = JSON.parse(orderJsonString);

        // Extract items, totalAmount, and totalQuantity
        const { items, totalAmount, totalQuantity } = orderDetails;

        // Initialize an array to hold the formatted lines
        const formattedLines = [];

        // Add items section
        formattedLines.push("# items:");
        for (const [key, value] of Object.entries(items)) {
            formattedLines.push(`${key.replace("_@@_", " (").replaceAll("_", " ")}): ${value},`)
        }

        // Add separators and totalAmount, totalQuantity sections
        formattedLines.push("========================");
        formattedLines.push(`# totalAmount: ${totalAmount},`);
        formattedLines.push("========================");
        formattedLines.push(`# totalQuantity: ${totalQuantity}`);

        // Join all lines with new line characters
        return formattedLines.join("\n");
    } catch (e) {
        return orderJsonString;
    }
}
