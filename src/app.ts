import * as Koa from "koa";
import render = require('koa-ejs');
import co = require('co');
import routes from './routes/routes';
import path = require('path');
import {ContextWithRender} from "koa-ejs";
import serve = require('koa-static');

let app: Koa & { context: ContextWithRender } = (new Koa()) as any;
render(app, {
	root: path.join(__dirname, '../views'),
	layout: false,
	debug: true
});

app.context.render = co.wrap(app.context.render);

app.use(serve(path.join(__dirname, "../public")));

routes(app);

export default app;