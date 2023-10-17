const server = Bun.serve({
    port: 3000,
    fetch() {
        return new Response("Hello world!")
    }
})

console.log(`Server running at ${server.port}`)
