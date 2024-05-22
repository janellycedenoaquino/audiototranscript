const OpenAI = require("openai");
const fs = require("fs");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const audioAPICall = async () =>{
    const transcription = await openai.audio.transcription.create({
        file:fs.createReadStream("nameOfLocalAudio"),
        model:"whisper-1"
    })
    console.log(transcription);
}

audioAPICall();