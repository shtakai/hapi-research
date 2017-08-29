import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
  port: 8080,
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('hello world');
  },
});

server.start((err) => {
  if (err) {
    console.error('error was handled');
    console.error(err);
  }
  console.log(`server started at ${server.info.uri}`);
});
