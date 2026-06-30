import OpenAI from "openai";
 const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
 });

 // Upload training data
 /*
 const upload = await openai.files.create({
    file: await fetch('/motivationalBotData.jsonl'),
    purpose: 'fine-tune'
})
*/
 //Use file ID to create job

/*  const fineTune = await openai.finetuning.jobs.create({
    traing_file: 'file_id',
    model:'model_name'
 }) */

//check status of job
/* const fineTuneStatus = await openai.fineTuning.jobs.retrieve('id_of+the_job')
console.log(fineTuneStatus) */

//Test our fine-tuned model

const messages = [
    {
        role: 'user',
        content: "some content"
    }
]

async function getResponse() {
    const response = await openai.chat.completions.create({
        model: 'model_id',
        messages: messages
    })
    return response.choices[0].message.content
}
