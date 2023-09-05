<script>
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="container mx-auto max-w-4xl">
	<slot />
</div>
