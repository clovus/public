import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req) {
	const apiKey = process.env.NEXT_SERVER_DEEPSEEK_DARVIS_KEY // you'd like to know my key, wouldn't you
	const messages = await req.json()
	const max_tokens = getRandomTokenNumber()

	// deepseek's API is unsurprisingly a fork of OpenAI's
	const openai = new OpenAI({
		baseURL: 'https://api.deepseek.com',
		apiKey: apiKey,
	})

	const response = await openai.chat.completions.create({
		model: 'deepseek-chat',
		messages: messages,
		max_tokens,
		stream: true, // flag for streaming response
	})

	// create stream to send data to the client as it comes in
	const stream = new ReadableStream({
		async start(controller) {
			try {
				// send chunks to client as they come in
				for await (const chunk of response) {
					const token = chunk.choices?.[0]?.delta?.content || ''
					controller.enqueue(token) // send each token to the client
				}
				controller.close()
			} catch (error) {
				// or not
				console.error('Stream Error:', error)
				controller.error(error)
			}
		},
	})

	return new NextResponse(stream, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'no-cache',
			'Transfer-Encoding': 'chunked',
		},
	})
}

// allows me to control the length of the response, with some juicy randomness
// in practice, this can be adjusted based on the nature of the request
// TODO: support min/max tokens in the request body
function getRandomTokenNumber(min = 100, max = 600) {
	// allow min/max overrides, but default to this lower range of tokens
	return Math.floor(Math.random() * (max - min)) + min
}