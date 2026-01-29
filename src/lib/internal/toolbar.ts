type ToolbarItem =
	| {
			type: 'button';
			label: string;
			onClick: () => void;
			className?: string;
			title: string;
			slug?: string;
	  }
	| { type: 'divider' };

export const toolbarItems: ToolbarItem[] = [
	{
		type: 'button',
		label: 'Жирный',
		onClick: () => insertMarkdown('**', '**', 'bold text'),
		className: 'font-bold',
		title: 'Bold (Ctrl+B)',
		slug: 'edit-bold'
	},
	{
		type: 'button',
		label: 'Курсив',
		onClick: () => insertMarkdown('*', '*', 'italic text'),
		className: 'italic',
		title: 'Italic (Ctrl+I)',
		slug: 'edit-italic'
	},
	{ type: 'divider' },
	{
		type: 'button',
		label: 'Заголовок 1',
		onClick: () => insertMarkdown('# ', '', 'Заголовок 1'),
		className: 'font-bold',
		title: 'Headline 1'
	},
	{
		type: 'button',
		label: 'Заголовок 2',
		onClick: () => insertMarkdown('## ', '', 'Заголовок 2'),
		className: 'font-bold',
		title: 'Headline 2'
	},
	{
		type: 'button',
		label: 'Заголовок 3',
		onClick: () => insertMarkdown('### ', '', 'Заголовок 3'),
		className: 'font-bold',
		title: 'Headline 3'
	},
	{ type: 'divider' },
	{
		type: 'button',
		label: '• Список',
		onClick: () => insertMarkdown('- ', '', 'Список'),
		title: 'Bullet List',
		slug: 'edit-list'
	},
	{
		type: 'button',
		label: '> Цитата',
		onClick: () => insertMarkdown('> ', '', 'Цитата'),
		title: 'Quote',
		slug: 'edit-quote'
	},
	{ type: 'divider' },
	{
		type: 'button',
		label: 'Ссылка',
		onClick: insertLink,
		title: 'Ссылка (Ctrl+K)',
		slug: 'edit-link'
	}
];
