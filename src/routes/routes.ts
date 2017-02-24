import Router = require('koa-router');

import * as Koa from "koa";
import {Context} from "koa-ejs";

let router: Router = new Router();

const routers: Router[] = [router];

export default function (app: Koa) {
	for (let route of routers) {
		app.use(route.routes())
	}
}

router.get('/', getHome);

async function getHome(ctx: Context) {
	await ctx.render("home", {greeting: "Hello, typescript!"});
}