<template>
<div class="home">
    <Navbar />

	<div class="content">
		<h1 id="kassid-h1">Koerad varjupaigas</h1>

		<div class="animal-grid">
				<div class="grid-cat">
					<a href="dog"><img src="../assets/dogs.jpg">
					<img id="gender" src="../assets/male.png">
					<h3>Roki</h3> <br><br> <br><br></a>
					<p>Saabunud, <br> Kodu ootel</p>
				</div>


				<div class="grid-cat">
					<a href="dog"><img src="../assets/dogs.jpg">
					<img id="gender" src="../assets/female.png">
					<h3>Roki</h3> <br><br> <br><br></a>
					<p>Saabunud, <br> Kodu ootel</p>
				</div>

				<div class="grid-cat">
					<a href="dog"><img src="../assets/dogs.jpg">
					<img id="gender" src="../assets/male.png">
					<h3>Roki</h3> <br><br> <br><br></a>
					<p>Saabunud, <br> Kodu ootel</p>
				</div>

				<div class="grid-cat">
					<a href="dog"><img src="../assets/dogs.jpg">
					<img id="gender" src="../assets/female.png">
					<h3>Roki</h3> <br><br> <br><br></a>
					<p>Saabunud, <br> Kodu ootel</p>
				</div>

				<div class="grid-cat">
					<a href="dog"><img src="../assets/dogs.jpg">
					<img id="gender" src="../assets/male.png">
					<h3>Roki</h3> <br><br> <br><br></a>
					<p>Saabunud, <br> Kodu ootel</p>
				</div>

				<div class="grid-cat">
					<a href="dog"><img src="../assets/dogs.jpg">
					<img id="gender" src="../assets/female.png">
					<h3>Roki</h3> <br><br> <br><br></a>
					<p>Saabunud, <br> Kodu ootel</p>
				</div>
			</div>
	</div>
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
