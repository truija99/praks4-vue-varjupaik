<template>
<div class="home">
	<Navbar />
	<div class="content">
		<div class="w3-container">
			<img :src="image">
		</div>

			<div>
				<div class="flex-container">
					<div class="content-photos">
					<a href="varjupaigas">
					  <img class="content1-cover" src="../assets/searching.jpg" alt="Loomad varjupaigas">
					</a>
					</div>

					<div class="content-photos">
					<a href="kaotatud">
					  <img class="content2-cover" src="../assets/lost.jpg" alt="Kaotatud loomad">
					</a>
					</div>

					<div class="content-photos">
					<a href="toetajatele">
					  <img class="content3-cover" src="../assets/support.png" alt="Toetajale">
					</a>
					</div>
				</div>
			</div>

			<div>
				<p id="quote"><em>“Armastus kõigi elusolendite vastu on inimese üllaim omadus.”</em></p>
				<p id="quote-author">– Charles Darwin</p>
			</div>

			<div>
				<h1 id="leidmine">Kust meid leida?</h1>

				<div class="container2">
					<div class="circle">
					   <div class="aligner">
						    ASUKOHT <br><br> Maakond, Tänav, Maja nr
				   </div>
					</div>

					<div class="circle">
					   <div class="aligner">
					    ÜHISTRANSPORT <br><br> Buss nr XX Värava peatuse juures, viitade järgi ca 150m kõndimist
					   </div>
					</div>

					<div class="circle">
					   <div class="aligner">
						    PARKIMINE <br><br> Parkimine on tasuta meie peahoone kõrval asuvas parklas
					   </div>
					</div>

					<div id="google-maps">
						<div class="mapouter">
				      		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.611282635072!2d26.712516315560123!3d58.34935909624579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb37487c7817f9%3A0x31f91313d1bbe0ee!2sTartu+Kutsehariduskeskus!5e0!3m2!1set!2see!4v1536749651256" width="600" height="450" style="border:0" allowfullscreen></iframe>
				    	</div>
				   	</div>
				</div>
			</div>


	</div> <!--- contendi lõpp --->
	<Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
  data() {
  	return {
  		images: ['/runforestrun.jpg', '/kasskoer.jpeg', '/kasskäpp.jpeg'],
  		image: '',
  	};
  },
  methods: {
  	randomImg() {
  		this.image = this.images[Math.floor(Math.random() * this.images.length)];
  	},
  },
  mounted() {
  	this.randomImg();
  }
};
</script>

<style>
img {
	max-width:100%;
}
</style>
