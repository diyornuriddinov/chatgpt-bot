const axios = require('axios')
async function chatbot(msg) {
	const options = {
		method: 'POST',
		url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '23861669d3msh8d4d977b41bc353p1afb2fjsndcf4de734191',
			'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
		},
		data: {
			messages: [
				{
					role: 'user',
					content: msg,
				},
			],
			system_prompt: '',
			temperature: 0.9,
			top_k: 5,
			top_p: 0.9,
			max_tokens: 256,
			web_access: false,
		},
	}

	try {
		const response = await axios.request(options)
		return response.data.result
	} catch (error) {
		console.error(error)
	}
}

module.exports = chatbot
