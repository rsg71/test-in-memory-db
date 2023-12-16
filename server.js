const app = require('./app');

const PORT = process.env.PORT || 3000;

// Create server
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));