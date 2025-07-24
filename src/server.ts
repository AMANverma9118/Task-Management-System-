import app from './app';
import { connectToDB } from './utils/db';

const PORT = process.env.PORT || 3000;
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});