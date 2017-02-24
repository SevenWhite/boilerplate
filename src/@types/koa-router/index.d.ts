declare module "koa-router" {
	import * as Koa from 'koa'

	namespace KoaRouter {
		export interface RouterOptions {
			prefix?: string
		}

		export interface AllowedMethodsOptions {
			"throw": boolean
			notImplemented: Function
			methodNotAllowed: Function
		}
	}

	class KoaRouter {
		constructor(opts?: KoaRouter.RouterOptions)

		get(path: string, handler: Koa.Middleware): KoaRouter;
		get(name: string, path: string, handler: Koa.Middleware): KoaRouter;
		get(name: string, path: string, ...middlewares: Koa.Middleware[]): KoaRouter;
		post(path: string, handler: Koa.Middleware): KoaRouter;
		post(name: string, path: string, handler: Koa.Middleware): KoaRouter;
		post(name: string, path: string, ...middlewares: Koa.Middleware[]): KoaRouter;
		put(path: string, handler: Koa.Middleware): KoaRouter;
		put(name: string, path: string, handler: Koa.Middleware): KoaRouter;
		put(name: string, path: string, ...middlewares: Koa.Middleware[]): KoaRouter;
		path(path: string, handler: Koa.Middleware): KoaRouter;
		path(name: string, path: string, handler: Koa.Middleware): KoaRouter;
		path(name: string, path: string, ...middlewares: Koa.Middleware[]): KoaRouter;
		del(path: string, handler: Koa.Middleware): KoaRouter;
		del(name: string, path: string, handler: Koa.Middleware): KoaRouter;
		del(name: string, path: string, ...middlewares: Koa.Middleware[]): KoaRouter;

		routes(): Koa.Middleware;
		use(path?: string, middleware?: Koa.Middleware): KoaRouter;
		prefix(prefix: string): KoaRouter;
		allowedMethods(options?: KoaRouter.AllowedMethodsOptions): Koa.Middleware;
		redirect(source: string, destination: string, code: number): KoaRouter;
		route(name: string): void;
		url(name: string, params: any): string
		url(name: string, params: any): Error
		param(param: string, middleware: Koa.Middleware): KoaRouter;
	}

	export = KoaRouter
}