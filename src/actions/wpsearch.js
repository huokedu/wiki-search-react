import objectToUriParams from '../helpers/objectToUriParams';

// access Wikipedia API by passing in config items
const WPQuery = (config = {format:'json'}, callback) => {
	// Wikipedia API endpoint
	const baseUrl = 'https://en.wikipedia.org/w/api.php';

	// combine endpoint with query params
	const queryUrl = baseUrl + objectToUriParams(config);

	return queryUrl;

}

export default WPQuery;
