export default function objectToUriParams(data) {
	var url = '?';
	for (var prop in data) {
		url += encodeURIComponent(prop) + '=' +
			encodeURIComponent(data[prop]) + '&';
	}
	return url.substring(0, url.length - 1)
}
