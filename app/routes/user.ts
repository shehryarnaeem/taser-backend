import Router from 'koa-router';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  removeUser,
  loginUser,
  createVendor,
  emailVerification,
  resetPassword,
  updatePassword,
} from '../controllers/user';
import passport from 'koa-passport';
const router: Router = new Router();

router.get('/', passport.authenticate('jwt', { session: false }), getUsers);

router.post('/', createUser);

router.post('/vendor', createVendor);

router.post('/login', loginUser);

router.post(
  '/verify-email',
  passport.authenticate('jwt', { session: false }),
  emailVerification
);

router.get('/reset-password', resetPassword);

router.patch('/update-password', updatePassword);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getUserById
);

router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  updateUser
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  removeUser
);

export const usersRouter = router.routes();
