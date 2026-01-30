import type { Editor } from '@tiptap/core';
import type { ButtonMDVariants, IconProps } from '@ogonek-education/ogonek-m3';

type ToolbarButton = {
	label: string;
	icon: IconProps;
	onclick: () => void;
	isActive: () => boolean;
	variant?: ButtonMDVariants['variant'];
};

export const materialIcons = [
	'strikethrough_s',
	'format_h1',
	'format_h2',
	'format_h3',
	'format_bold',
	'format_italic',
	'format_quote',
	'format_paragraph',
	'link',
	'format_list_bulleted',
	'format_list_numbered'
];

const buildToolbar = (editor: Editor): ToolbarButton[] => [
	{
		label: 'H1',
		icon: { name: 'format_h1' },
		onclick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
		isActive: () => editor.isActive('heading', { level: 1 })
	},
	{
		label: 'H2',
		icon: { name: 'format_h2' },
		onclick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
		isActive: () => editor.isActive('heading', { level: 2 })
	},
	{
		label: 'P',
		icon: { name: 'format_paragraph' },
		onclick: () => editor.chain().focus().setParagraph().run(),
		isActive: () => editor.isActive('paragraph')
	}
];
export { buildToolbar };
