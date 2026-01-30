<script lang="ts">
	import { MaterialSymbolsProvider } from '@ogonek-education/ogonek-m3';
	import './layout.css';
	import { materialIcons } from '$lib/toolbar.js';

	const { children } = $props();
</script>

<MaterialSymbolsProvider icons={materialIcons} />
{@render children()}
