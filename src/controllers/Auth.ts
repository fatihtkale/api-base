import * as HttpStatus from 'http-status-codes';
import { Repository } from 'typeorm';
import Router, { IRouterContext, IRouterOptions } from 'koa-router';

const routerOpts: IRouterOptions = {
  prefix: '/auth',
};

const router: Router = new Router(routerOpts);

router.post('/login', async (ctx: IRouterContext, next: any) => {
  ctx.body = {
    data: { users: 'hello', ctx: ctx.params.id },
  };
});

router.post('/register', async (ctx: IRouterContext, next: any) => {
  ctx.body = {
    data: { users: 'hello', ctx: ctx.params.id },
  };
});

router.post('/refresh-token', async (ctx: IRouterContext, next: any) => {
  ctx.body = {
    data: { users: 'hello', ctx: ctx.params.id },
  };
});

export default router;
