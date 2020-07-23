const { connect, connection } = require('mongoose');

require('dotenv').config({ path: '.env' });

connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

connection.once('open', () => {
  console.log('');
  console.log('||====================================================');
  console.log('||####################################################');
  console.log('||');
  console.log('|| 👉  Mongoose database connection established! 😎');
  console.log('||');
  console.log('||####################################################');
  console.log('||====================================================');
  console.log('');
});
