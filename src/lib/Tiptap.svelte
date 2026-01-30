<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { StarterKit } from '@tiptap/starter-kit';

	import type { Attachment } from 'svelte/attachments';
	import { buildToolbar } from './toolbar.ts';
	import { ButtonIcon, HStack, textfield } from '@ogonek-education/ogonek-m3';
	import clsx from 'clsx';

	let editorState = $state<{ editor?: Editor }>({ editor: undefined });
	let bm = $state<HTMLDivElement | undefined>();

	let content = $state(` <h1>Hello Svelte! 🌍️ </h1>
        <p>This editor is running in Svelte.</p>
        <p>Select some text to see the bubble menu popping up.</p>`);

	const attach: Attachment = (element) => {
		editorState.editor = new Editor({
			autofocus: true,
			element,
			editorProps: {
				attributes: {
					class:
						'prose min-w-full prose-theme p-3 w-full bg-md-sys-color-surface-container-low rounded-b-sm state-layer before:rounded-b-sm hover:before:bg-md-sys-color-on-surface/8 relative flex flex-col transition-all outline-md-sys-color-primary'
				}
			},
			extensions: [StarterKit.configure({ heading: { HTMLAttributes: { class: 'font-serif' } } })],
			content
		});

		return () => {
			editorState.editor?.destroy();
		};
	};
</script>

<HStack gap="sm">
	<div id="toolbar" class="flex gap-1 rounded-t-sm bg-md-sys-color-surface-container p-1">
		{#if editorState.editor}
			{#each buildToolbar(editorState.editor) as ti}
				<ButtonIcon variant="text" iconProps={ti.icon} onclick={ti.onclick} aria-label={ti.label} />
			{/each}
		{/if}
	</div>
	<div id="editor" {@attach attach}></div>
</HStack>
