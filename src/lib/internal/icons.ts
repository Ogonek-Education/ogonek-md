import type { Component } from 'svelte';
import type { InputEnhancer } from './input.js';
/**
 * Editor toolbar icon information.
 */
export interface Icon {
	/**
	 * The icon's unique identifier.
	 */
	readonly id: string;
	/**
	 * Callback function to execute when the icon is clicked.
	 * @param input InputEnhancer instance
	 */
	readonly action: (input: InputEnhancer) => void;
	/**
	 * The icon's component.
	 */
	readonly component: Component;
	/**
	 * The icon's label (used as aria-label).
	 */
	readonly label?: string;
}

export const defaultIcons = [
	{
		id: 'heading',
		action: (input) => input.toggleLinePrefix('###'),
		component: HeadingIcon as Component,
		label: 'Heading'
	},
	{
		id: 'bold',
		action: (input) => input.toggleSelectionSurrounding('**'),
		component: BoldIcon as Component,
		label: 'Bold'
	},
	{
		id: 'italic',
		action: (input) => input.toggleSelectionSurrounding('*'),
		component: ItalicIcon as Component,
		label: 'Italic'
	},
	{
		id: 'strikethrough',
		action: (input) => input.toggleSelectionSurrounding('~~'),
		component: StrikethroughIcon as Component,
		label: 'Strikethrough'
	},
	{
		id: 'quote',
		action: (input) => input.toggleLinePrefix('>'),
		component: QuoteIcon as Component,
		label: 'Quote'
	},
	{
		id: 'code',
		action: (input) => input.toggleSelectionSurrounding('`'),
		component: CodeIcon as Component,
		label: 'Code'
	},
	{
		id: 'link',
		action: (input) => {
			input.toggleSelectionSurrounding(['[', ']']);
			const position = input.getSelection().end + 1;
			input.insertAt(position, '(url)');
			input.textarea.setSelectionRange(position + 1, position + 4);
		},
		component: LinkIcon as Component,
		label: 'Link'
	},
	{
		id: 'bulletedList',
		action: (input) => input.toggleLinePrefix('- ', 'detach'),
		component: ListBulletedIcon as Component,
		label: 'Bulleted list'
	},
	{
		id: 'numberedList',
		action: (input) => input.toggleLinePrefix('1. ', 'detach'),
		component: ListNumberedIcon as Component,
		label: 'Numbered list'
	},
	{
		id: 'taskList',
		action: (input) => input.toggleLinePrefix('- [ ] ', 'detach'),
		component: ListTaskIcon as Component,
		label: 'Task list'
	}
] as const satisfies readonly Icon[];

export type DefaultIconId = (typeof defaultIcons)[number]['id'] | 'menu';
