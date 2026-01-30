import type { Editor } from '@tiptap/core';
import type { ButtonIconVariants, IconProps } from '@ogonek-education/ogonek-m3';

type ToolbarButton = {
	label: string;
	icon: IconProps;
	onclick: () => void;
	isActive: () => boolean;
	isDisabled?: () => boolean;
	variant?: ButtonIconVariants['variant'];
};

export const materialIcons = [
	'code',
	'code_blocks',
	'delete_sweep',
	'format_clear',
	'format_h1',
	'format_h2',
	'format_h3',
	'format_h4',
	'format_h5',
	'format_h6',
	'format_bold',
	'format_italic',
	'format_quote',
	'format_paragraph',
	'format_list_bulleted',
	'format_list_numbered',
	'horizontal_rule',
	'keyboard_return',
	'link',
	'palette',
	'redo',
	'strikethrough_s',
	'undo'
];

const buildToolbar = (editor: Editor): ToolbarButton[] => [
	{
		label: 'Жирный',
		icon: { name: 'format_bold' },
		onclick: () => editor.chain().focus().toggleBold().run(),
		isActive: () => editor.isActive('bold'),
		isDisabled: () => !editor.can().chain().focus().toggleBold().run()
	},
	{
		label: 'Курсив',
		icon: { name: 'format_italic' },
		onclick: () => editor.chain().focus().toggleItalic().run(),
		isActive: () => editor.isActive('italic'),
		isDisabled: () => !editor.can().chain().focus().toggleItalic().run()
	},
	{
		label: 'Зачёркнутый',
		icon: { name: 'strikethrough_s' },
		onclick: () => editor.chain().focus().toggleStrike().run(),
		isActive: () => editor.isActive('strike'),
		isDisabled: () => !editor.can().chain().focus().toggleStrike().run()
	},
	{
		label: 'Абзац',
		icon: { name: 'format_paragraph' },
		onclick: () => editor.chain().focus().setParagraph().run(),
		isActive: () => editor.isActive('paragraph')
	},
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
		label: 'H3',
		icon: { name: 'format_h3' },
		onclick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
		isActive: () => editor.isActive('heading', { level: 3 })
	},
	{
		label: 'Маркированный список',
		icon: { name: 'format_list_bulleted' },
		onclick: () => editor.chain().focus().toggleBulletList().run(),
		isActive: () => editor.isActive('bulletList')
	},
	{
		label: 'Нумерованный список',
		icon: { name: 'format_list_numbered' },
		onclick: () => editor.chain().focus().toggleOrderedList().run(),
		isActive: () => editor.isActive('orderedList')
	},
	{
		label: 'Цитата',
		icon: { name: 'format_quote' },
		onclick: () => editor.chain().focus().toggleBlockquote().run(),
		isActive: () => editor.isActive('blockquote')
	},
	{
		label: 'Горизонтальная линия',
		icon: { name: 'horizontal_rule' },
		onclick: () => editor.chain().focus().setHorizontalRule().run(),
		isActive: () => false
	}
];
export { buildToolbar };
