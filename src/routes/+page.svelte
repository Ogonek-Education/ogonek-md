<script>
	import Tiptap from '$lib/Tiptap.svelte';
	import { SinglePane } from '@ogonek-education/ogonek-m3';

	const markdown = `
	<h1 id="sample-markdown">Sample Markdown</h1>
<p>This is some basic, sample markdown.</p>
<h2 id="second-heading">Second Heading</h2>
<ul>
<li>Unordered lists, and:<ol>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ol>
</li>
 ✏️ <strong>Mini Practice</strong> 1️⃣ <strong>Conjugate:</strong> &gt; être → nous <strong>__</strong> ; ils <strong>__</strong> &gt; avoir → tu <strong>__</strong> ; elle <strong>__</strong> &gt; s’appeler → je <strong>__</strong> 2️⃣ <strong>Translate:</strong> &gt; I am English. → &gt; She is Spanish. → &gt; We have a book. → &gt; My name is Paul. → 3️⃣ <strong>Say today’s date:</strong> &gt; C’est le <strong>__</strong> <strong>__</strong> 2025.
 ;</li>
</ul>
<blockquote>
<p>Blockquote</p>
</blockquote>
<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
<p>And code highlighting:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
<p>Or an image of bears</p>
<p><img src="http://placebear.com/200/200" alt="bears"></p>
<p>The end ...</p>
	`;
</script>

<SinglePane class="items-center justify-center">
	<Tiptap content={markdown} />
</SinglePane>
