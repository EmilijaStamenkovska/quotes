
export const getRandom = async (url) => {
	const response = await fetch(url);
	let data = await response.json();
	return data;
}