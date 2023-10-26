const server = Bun.serve({
    port: process.env.PORT || 5000,
    fetch() {
        return new Response("Hello world! v2")
    }
})

console.log(`Server running at ${Bun.env.PORT}`)
