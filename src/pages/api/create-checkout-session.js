
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
	const { items, email } = req.body;
	// const transformedItems = items.map(item => ({
	// 	price_data: {
	// 		currency: 'usd',
	// 		unit_amount:
	// 			product_data: {
	// 	name: item.title,
	// 	images: [item.image]
	// },
	// 	}
	// }))

	console.log(items);
	console.log(email);
}