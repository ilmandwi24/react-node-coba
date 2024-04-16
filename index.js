  const express = require('express');
  const app = express();

  const ENV = 'development';
  const DOMAIN = ENV === 'development' ? 'localhost' : '';
  const PORT = 3000;
const path = require('path');

  app.use(express.json({ extended: false }));

  app.use(express.static(path.resolve(__dirname, 'client/dist')));

  app.get('/api', (req, res) => {
    try {
      const mockData = {
        firstName: 'Adeesh',
        lastName: 'Sharma'
      };

      res.json(mockData);
    } catch (err) {
      res.status(500).json({error: err.message });
    }
  });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/dist', 'index.html'));
});
  app.listen(PORT, `${DOMAIN}`, () => {
    console.log(`Server listening on port ${PORT}`);
  });
