async function main() {
    const completion = await openai.moderations.create({
        input: "I hate you!"
    })
    const {flagged, categories} = completion.results[0]
    if (flagged) {
        renderWarning(categories)
    }
}
main()