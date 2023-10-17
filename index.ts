const server = Bun.serve({
    port: process.env.PORT || 5000,
    fetch(req) {
        const url = new URL(req.url);
        switch (url.pathname) {
            case '/':
                return new Response('Home Page');
            case '/users':
                return new Response(JSON.stringify([{name: 'John Doe', age: 30}]));
            case '/posts':
                return new Response(JSON.stringify([{title: 'Hello World', body: 'Lorem ipsum dolor sit amet'}]));
            default:
                return new Response('Not Found', {status: 404})
        }
    }
})

console.log(`Server running at ${Bun.env.PORT}`)
