<template>
<div class="home">
    <Navbar />
	<div class="content">
		<h1 id="meie-tegemistest-h1">Meie tegemistest</h1>
		<img class="img-section2" src="../assets/tegemistestimg.png">
		<div class="tegemistest-section">
			<p class="tegemistestpara">Lorem ipsum dolor sit amet, consectetur a dipiscing elit. <br> <br> Aenean quis varius sem. Nunc imperdiet vitae dolor sit amet vehicula. <br> <br> Aenean pharetra imperdiet erat. Integer mattis erat enim, id faucibus ipsum volutpat ut. Vivamus vel dictum odio. <br> <br> Nullam sit amet aliquam nisi, vitae dapibus lorem. Sed tincidunt elit magna, non pretium purus varius at. Morbi posuere at mi ac ultrices. <br> <br> Vivamus sit amet lacus mi. Morbi leo tquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br> <br>  Aenean congue nunc at sollicitudin aliquam. Duis accumsan bibendum libero, quis aliquet tellus aliquam eget.<br> <br>  Integer a erat est. Praesent vel gravida magna.</p>
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
  name: 'meist',
  components: {
    Navbar,
    Footer,
  },
};
</script>
