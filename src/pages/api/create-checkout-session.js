const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// import success from '../../pages/success'

export default async (req, res) => {
	const { items, email } = req.body;

	const transformedItems = items.map((item) => ({
		price_data: {
			currency: 'usd',
			product_data: {
				name: item.title,
				images: [item.image],
			},
			unit_amount: item.price * 100,
		},
		description: item.description,
		quantity: 1,
	}));

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		shipping_rates: ['shr_1MDAaaBzUpSl3RzPdm1CF85Z'],
		// shipping_options: [
		// 	{
		// 		shipping_rate_data: {
		// 			type: "fixed_amount",
		// 			fixed_amount: { amount: 599, currency: "usd" },
		// 			display_name: "Free shipping",
		// 			delivery_estimate: {
		// 				minimum: { unit: "business_day", value: 1 },
		// 				maximum: { unit: "business_day", value: 2 },
		// 			},
		// 		},
		// 	},
		// ],
		shipping_address_collection: {
			allowed_countries: ["GB", "US", "CA"],
		},
		line_items: transformedItems,
		mode: "payment",
		success_url: `${process.env.HOST}/success`,
		cancel_url: `${process.env.HOST}/checkout`,
		metadata: {
			email,
			images: JSON.stringify(items.map((item) => item.image)),
		},
	})

	res.status(200).json({ id: session.id });
	// console.log(items);
	// console.log(email);
};