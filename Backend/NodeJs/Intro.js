const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Zomato</title>
      <link rel="stylesheet" href="zomato.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
  </head>
  
  <body>
      <!-- Header and Navbar -->
      <header
      <nav id="navbar">
          <ul>
              <ul id="_ul1">
                  <li><a href="#">Get the App</a></li>
              </ul>
              <ul id="_ul2">
                  <li><a href="#">Add restaurant</a></li>
                  <li><a href="#">Log in</a></li>
                  <li><a href="#">Sign up</a></li>
              </ul>
          </ul>
      </nav>
  </header>
  
  
  <!-- Home section -->
      <section id="home">
          <div>
              <h1>Zomato</h1>
          </div>
          <div>
              <p>Discover the best food & drinks in <span>Kolkata</span>
              </p>
          </div>
          <div class="search-container">
          </div>
      </section>
  
      <!-- More  -->
  
      <section id="more">
          <div class="boxes">
              <div class="box">
                  <a href="#" class="_anchor">
                      <div>
                          <div>
                              <img src="box1.webp" alt="">
                          </div>
                      </div>
                      <div>
                          <p>Order Online</p>
                      </div>
                  </a>
              </div>
              <div class="box">
                  <a href="#" class="_anchor">
                      <div>
                          <div>
                              <img src="box2.webp" alt="">
                          </div>
                      </div>
                      <div>
                          <p>Dinig Out</p>
                      </div>
                  </a>
              </div>
              <div class="box">
                  <a href="#" class="_anchor">
                      <div>
                          <div>
                              <img src="box3.webp" alt="">
                          </div>
                      </div>
                      <div>
                          <p>Pro and Pro Plus</p>
                      </div>
                  </a>
              </div>
              <div class="box">
                  <a href="#" class="_anchor">
                      <div>
                          <div>
                              <img src="box4.webp" alt="">
                          </div>
                      </div>
                      <div>
                          <p>Nightlife and Clubs</p>
                      </div>
                  </a>
              </div>
          </div>
      </section>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});