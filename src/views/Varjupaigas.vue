<template>
<div class="home">
    <Navbar />

	<section class="flex-container">
			<div class="container">
			  <img src="../assets/cats.jpg" alt="Avatar" class="image">
			  <div class="overlay">
					<div class="text">
				    	<a id="varjupaigas" href="kassid">Kassid varjupaigas</a>
					</div>
				</div>
			</div>

			<div class="container">
			  <img src="../assets/dogs.jpg" alt="Avatar" class="image">
			  <div class="overlay">
					<div class="text">
				    	<a id="varjupaigas" href="koerad">Koerad varjupaigas</a>
					</div>
				</div>
			</div>
	</section>
	<Footer />
</div>
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'varjupaigas',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.flex-container {
	margin-top: 100px;
}


</style>
