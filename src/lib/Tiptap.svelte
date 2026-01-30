<script lang="ts">
	import { Editor } from '@tiptap/core';
	import { StarterKit } from '@tiptap/starter-kit';
	import type { Attachment } from 'svelte/attachments';
	import BubbleMenu from '@tiptap/extension-bubble-menu';

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
			extensions: [
				StarterKit.configure({ heading: { HTMLAttributes: { class: 'font-serif' } } }),
				BubbleMenu.configure({ element: bm })
			],
			content
		});

		return () => {
			editorState.editor?.destroy();
		};
	};
</script>

<div style="position: relative" class="app">
	{#if editorState.editor}
		<div class="fixed-menu">
			<button
				onclick={() => editorState.editor?.chain().focus().toggleHeading({ level: 1 }).run()}
				class:active={editorState.editor.isActive('heading', { level: 1 })}
			>
				H1
			</button>
			<button
				onclick={() => editorState.editor?.chain().focus().toggleHeading({ level: 2 }).run()}
				class:active={editorState.editor.isActive('heading', { level: 2 })}
			>
				H2
			</button>
			<button
				onclick={() => editorState.editor?.chain().focus().setParagraph().run()}
				class:active={editorState.editor.isActive('paragraph')}
			>
				P
			</button>
		</div>
	{/if}

	<div class="bubble-menu" bind:this={bm}>
		{#if editorState.editor}
			<button
				onclick={() => editorState.editor?.chain().focus().toggleBold().run()}
				class:active={editorState.editor.isActive('bold')}
			>
				Bold
			</button>
			<button
				onclick={() => editorState.editor?.chain().focus().toggleItalic().run()}
				class:active={editorState.editor.isActive('italic')}
			>
				Italic
			</button>
			<button
				onclick={() => editorState.editor?.chain().focus().toggleStrike().run()}
				class:active={editorState.editor.isActive('strike')}
			>
				Strike
			</button>
		{/if}
	</div>

	<div id="editor" {@attach attach}></div>
</div>
