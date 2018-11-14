<template>
<div class="home">
    <Navbar />

	<div class="content">
		<div class="cat-section">
			<img src="../assets/dogs.jpg" alt="Koera pilt">
		</div>
			<table>
			    <tbody>
			    	<img id="gender2" src="../assets/male.png">
					<h3 id="catname">Roki</h3> <br><br> <br><br></a>
				    <tr>
					    <th>Liik</th>
					    <td>Koer</td>
				    </tr>

				    <tr>
					    <th>Tõulisus</th>
					    <td>Segavereline</td>
				   	</tr>

				    <tr>
					    <th>Vanus</th>
					    <td>2 aastat</td>
				    </tr>

				    <tr>
					    <th>Ster/kastr.</th>
					    <td>Jah</td>
				    </tr>

				    <tr>
					    <th>Välimus</th>
					    <td>Valge</td>
				    </tr>

				    <tr>
					    <th>Sugu</th>
					    <td>Isane</td>
				    </tr>

				   	<tr>
					    <th>Päritolu</th>
					    <td>Saksamaa</td>
				    </tr>

				    <tr>
					    <th>Varjupaigas alates</th>
					    <td>12.12.2017</td>
				    </tr>

				    <tr>
					    <th>Karantiinis kuni</th>
					    <td>12.02.2018</td>
				    </tr>
			   	</tbody>
			</table>
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
