import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const connect = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log('DB connected successfully');
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default connect;
