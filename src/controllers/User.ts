import Router from 'koa-router';
import dataSource from '../database/database';
import UserEntity from '../entity/User';
import * as HttpStatus from 'http-status-codes';
import { Repository } from 'typeorm';

const routerOpts: Router.IRouterOptions = {
  prefix: '/users',
};

const router: Router = new Router(routerOpts);

router.get('/:id', async (ctx: Router.IRouterContext, next: any) => {
  ctx.body = {
    data: { users: 'hello', ctx: ctx.params.id },
  };
});

export default router;
