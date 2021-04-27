const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
	console.log(request.url);
	if (`${request.url}` === `/`) {
		response.statusCode = 200;
		response.setHeader("Content-Type", "text/html");
		response.end(`<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Olá</title>
    </head>
    <body>
      <p>Bem Vindo!</p>
      <p>Welcome!</p>
      <p>Herzlich willkommen!</p>
      <p>Välkommen</p>
      <p>ようこそ</p>
    </body>`);
	}
  else if (`${request.url}` === `/sobre`) {
    response.statusCode = 200;
		response.setHeader("Content-Type", "text/html");
		response.end(`<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sobre</title>
    </head>
    <body>
      <p>Nossa empresa é top...confia</p>
    </body>`);
  }
  else if (`${request.url}` === `/contato/whatsapp`) {
    response.statusCode = 200;
		response.setHeader("Content-Type", "text/html");
		response.end(`<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Whats da empresa</title>
    </head>
    <body>
      <p>0800-777-7000</p>
    </body>`);
  }
});
  

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
