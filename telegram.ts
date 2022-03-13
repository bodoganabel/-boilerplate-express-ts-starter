/* eslint-disable @typescript-eslint/no-explicit-any */
import https from 'https';
import TelegramBot, { Message } from 'node-telegram-bot-api';


export enum ETelegramCommands {
  help = "help",
  join = "join",
  leave = "leave",
  telegramid = "telegramid",
}


//importantNotifications_bot
const botIdProduction = "5115952018:AAFejJpta99Lqw3pbRvFHpy-abXiUCeE6lQ";

const telegramUrl = 'api.telegram.org';

export async function initTelegramMessageHook(): Promise<void>{
  const bot = new TelegramBot(botIdProduction, {polling: true});
  bot.on('message', (msg: Message) => {
    console.log(msg);
    checkMessages_Telegram(msg)
  })
}


export async function checkMessages_Telegram(message: Message): Promise<void> {
  if(message === undefined || message.from === undefined || message.from.id === undefined) { console.log("No sender in incoming telegram message!"); return; }
  let response = '';
  const sender = message.from.id;

  const args = message.text? message.text.split(':') : [];
  const command = args[0];
  switch (command) {

    case ETelegramCommands.help:
      {
        response = await telegramHelp();
        break;
      }

    default:
      response = `No command recognized. Type "help" for help`
      break;
  }

  await sendMessage_Telegram(response, sender);

}




export async function sendMessage_Telegram(message: string, target: number | string): Promise<void> {
  console.log('telegram')
  console.log(`target: ${target}`);
  const decodedMessage = replaceAll(message, '<br/>', '\n');
  const telegramServerOptions = {
    hostname: telegramUrl,
    path: `/bot${botIdProduction}/sendMessage?chat_id=${target}&text=${escape(decodedMessage)}`,
    method: 'GET',
    port: 443,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  console.log('telegram2')
const req = await https.get(telegramServerOptions, (res:any) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (data:any) => {
    process.stdout.write(data)
  })
})

req.on('error', (error: any) => {
  console.error(error)
})

req.end()

  console.log(req);
}





export async function telegramHelp(): Promise<string>{
  const helpString =
    `This telegram bot is not programmed for reading commands yet.\n\n\n`;
  return helpString;
}




export function replaceAll(input: string, search: string, replaceWith: string): string {

  const result = input.split(search).join(replaceWith);
  return result;
}
