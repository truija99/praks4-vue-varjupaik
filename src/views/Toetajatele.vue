<template>
  <div class="home">
    <Navbar />

	<div class="content">
		<div class="img-section">
			<h1 id="hero-text"></h1>
		</div>

		<h1 id="Toetajad">Toetajad</h1>

		<div class="toetajad-section">
			<p class="toetajad-text">Sed scelerisque eleifend eleifend. Vestibulum sed leo non risus consectetur viverra vitae sed augue. Pellentesque fermentum ornare dignissim. Sed et suscipit felis, a efficitur tellus. Vestibulum placerat eros faucibus ante aliquet condimentum. Proin bibendum mollis laoreet. Proin tincidunt, orci nec elementum efficitur, ante arcu dignissim sapien, ac iaculis dolor dui sit amet dolor. Suspendisse eleifend id metus vel aliquet. Etiam malesuada, lectus et tempus convallis, ex dolor molestie nisl, posuere efficitur mi libero gravida mauris.</p>

			<p class="annetuskontod">TOETUSED VARJUPAIGA IGAPÄEVATEGEVUSEKS <br> <br> ÜLDRAVI, TOIT, HOOLDUSVAHENDID: <br> Konto IBAN: EE10 2200 2210 3155 6784 <br> <br>VIGASTATUD LOOMADE OPERATIIVNE RAVI: <br> Konto IBAN: EE52 2200 2210 6329 8890 <br> <br> HOIUPAIKADE REMONT JA EHITUS: <br> Konto IBAN: EE72 2200 2210 3954 4976 <br> <br> Saaja: MTÜ Assisi Franciscuse Selts</p>
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
  name: 'toetajatele',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.img-section {
	background-image: url("../assets/birds.jpg");
}


</style>
