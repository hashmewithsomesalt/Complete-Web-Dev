async function generateImage(prompt) {
    const response = await openai.images.generate({
        model: 'model_name',
        prompt: prompt,
        n: 1,
        size: 'size_of_img', //default 1024 X 1024
        style: 'vivid',//default vivid other options: namtural
        repsonse_format: 'b64_json' //default URl
    })
    console.log(response)
    outputImg.innerHTML = `<img src="data:image/png;base64, ${response.data[0].b64_json}">`
}