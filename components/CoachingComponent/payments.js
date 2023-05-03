import React from 'react'
import Script from 'next/script';

const Payments = () => {
    return (
        <div id="buy" className="py-5 ">
<Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>
<stripe-pricing-table pricing-table-id="prctbl_1MWtIIGDnKaPJ8BWmNXI4lKo"
publishable-key="pk_live_51L8ZmeGDnKaPJ8BW6K6t4gny0fXqSuQw6f6ODSZw0j1Cb4lpNKJaf67X0D4MkJkQwuVJYo8XT1V4W1udNmoYzZxB003CXbcPWB">
</stripe-pricing-table>
  </div>

    )}

export default Payments