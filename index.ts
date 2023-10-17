const server = Bun.serve({
    port: process.env.PORT || 5000,
    fetch() {
        return new Response("Hello world!")
    }
})

console.log(`Server running at ${Bun.env.PORT}`)
