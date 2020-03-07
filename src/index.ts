export interface IHandle {
	destroy(this: IHandle): void;
}

export default interface IAiBrowserComponent {
	readonly data: {
		readonly [attr: string]: unknown;
		readonly no: string;
		readonly node: HTMLElement;
		readonly params: { [key: string]: unknown };
		readonly url: string;
	};
	parse_event(node: HTMLElement | DocumentFragment): IHandle[];
	fire<T>(action: string, ...args: unknown[]): Promise<T>;
	emit<T>(event: string, ...args: unknown[]): Promise<T>;
	// eslint-disable-next-line semi
}
