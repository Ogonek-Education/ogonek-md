<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { StarterKit } from '@tiptap/starter-kit';
	import type { Attachment } from 'svelte/attachments';
	import { buildToolbar } from './toolbar.ts';
	import { ButtonIcon } from '@ogonek-education/ogonek-m3';

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
					class: 'prose prose-theme p-3'
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

<div>
	{#if editorState.editor}
		{#each buildToolbar(editorState.editor) as ti}
			<ButtonIcon variant="text" iconProps={ti.icon} onclick={ti.onclick} aria-label={ti.label} />
		{/each}
	{/if}

	<div id="editor" {@attach attach}></div>
</div>
