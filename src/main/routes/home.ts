import { Application } from 'express';

export default function(app: Application): void {

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.post('/fake-endpoint', (req, res) => {
    console.log('Payload received:');
    console.log(JSON.stringify(req.body));
    return res
      .status(200)
      .json(req.body);
  });
}
