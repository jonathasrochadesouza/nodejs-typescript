import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Connected with your API');
})

routes.get('/users', UserController.index);

routes.post('/createUser', UserController.create);

export default routes;
