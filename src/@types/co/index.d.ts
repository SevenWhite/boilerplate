declare module "co" {
	export function wrap(fn: Function): () => Promise<any>;
}