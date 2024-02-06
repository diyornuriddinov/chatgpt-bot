const { Telegraf } = require('telegraf')
const chatbot = require('./api')

const bot = new Telegraf('6541323103:AAFvKHJ5NhdKtj0yowK3o--1bArtOWFD1tY')

bot.start(ctx => {
	ctx.reply(`Hi there ${ctx.chat.first_name}! Welcome to our bot`)
})
bot.on('message', async ctx => {
	ctx.reply('✍️...')
	const request = await chatbot(ctx.message.text)
	ctx.reply(request)
})
bot.launch().then()
