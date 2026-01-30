<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { StarterKit } from '@tiptap/starter-kit';
	import type { Attachment } from 'svelte/attachments';
	import { buildToolbar } from './toolbar.ts';
	import { ButtonIcon } from '@ogonek-education/ogonek-m3';
	import clsx from 'clsx';
	import { debounce } from './utils.ts';

	type TiptapProps = {
		content?: string;
		wrapperClass?: string;
		toolbarClass?: string;
		editorClass?: string;
	};

	let {
		content = '<h1> Again</h1> <p> Markdown is supported </p>\n',
		wrapperClass,
		toolbarClass,
		editorClass
	}: TiptapProps = $props();

	let editorState = $state<{ editor?: Editor }>({ editor: undefined });
	let html = $state<string | undefined>();

	const updateHTML = debounce(() => {
		html = editorState.editor?.getHTML();
	}, 500);

	const attach: Attachment = (element) => {
		editorState.editor = new Editor({
			autofocus: true,
			element,
			editorProps: {
				attributes: {
					class: clsx(
						'prose min-w-full prose-a:cursor-pointer prose-p:my-0 prose-headings:not-first:my-4 prose-theme p-3 w-full bg-md-sys-color-surface-container-low rounded-b-sm state-layer before:rounded-b-sm hover:before:bg-md-sys-color-on-surface/8 outline-none relative flex flex-col transition-all ',
						editorClass
					)
				}
			},
			extensions: [StarterKit.configure({ heading: { HTMLAttributes: { class: 'font-serif' } } })],
			content,
			onTransaction: () => {
				void updateHTML();
			}
		});

		return () => {
			editorState.editor?.destroy();
		};
	};
</script>

<input type="hidden" id="html" name="html" value={html} />
<div class={clsx('rounded-sm  outline-md-sys-color-primary focus-within:outline-2', wrapperClass)}>
	<div
		id="toolbar"
		class={clsx('flex gap-1 rounded-t-sm bg-md-sys-color-surface-container p-1', toolbarClass)}
	>
		{#if editorState.editor}
			{#each buildToolbar(editorState.editor) as ti}
				<ButtonIcon
					variant="text"
					triggerPlacement="bottom"
					iconProps={ti.icon}
					onclick={ti.onclick}
					disabled={ti.isDisabled?.()}
					tooltipContent={ti.label}
					aria-label={ti.label}
				/>
			{/each}
		{/if}
	</div>
	<div id="editor" {@attach attach}></div>
</div>
