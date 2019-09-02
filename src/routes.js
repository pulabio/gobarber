import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Flávio',
    email: 'asdf@asdf.com',
    password_hash: 'asdfasdf',
  });

  res.json({ user });
});

export default routes;
