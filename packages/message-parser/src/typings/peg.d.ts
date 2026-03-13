declare module '*.pegjs' {
	import type { ParserOptions } from 'peggy';

	import type { Root } from '../definitions';

	export const parse: (input: string, options?: ParserOptions) => Root;
}
