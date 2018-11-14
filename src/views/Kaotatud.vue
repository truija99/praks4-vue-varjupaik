<template>
<div class="home">
    <Navbar />

	<section class="content">
    <div class="kaotatud-img">
      <div>
        <img class="animal-img" src="../assets/cats.jpg">
        <p class="kaotatud-text">Kaotatud: emane/isane kass *nimi* <br><br>Kadumise koht: Annelinn, Kalda tee <br><br> Kuupäev: 17.10.2018 <br><br> E-mail: kaotatud@gmail.com <br><br> Telefon: 54541010</p>
      </div>

      <div>
        <img class="animal-img" src="../assets/dogs.jpg">
        <p class="kaotatud-text">Kaotatud: emane/isane kass *nimi* <br><br>Kadumise koht: Annelinn, Kalda tee <br><br> Kuupäev: 17.10.2018 <br><br> E-mail: kaotatud@gmail.com <br><br> Telefon: 54541010</p>
      </div>
    </div>

    <h1 id="lisa-kuulutus">Lisa kuulutus</h1>


    <section class="kuulutus">

        <div class="kuulutus-flex">
          <h3>Kaotatud/Leitud</h3>
          <select id="liik" name="liik">
            <option value="kass">Kaotatud</option>
            <option value="koer">Leitud</option>
          </select>
        </div>

        <div class="kuulutus-flex">
          <h3>Liik</h3>
          <select id="liik" name="liik">
            <option value="kass">Kass</option>
            <option value="koer">Koer</option>
            <option value="jänes">Muu</option>
          </select>
        </div>

        <div class="kuulutus-flex">
          <h3>Nimi/tõug</h3>
          <input type="text" id="nimi" name="nimi" placeholder="Nimi/tõug">
        </div>

        <div class="kuulutus-flex">
          <h3>Kirjeldus kadunud/leitud <br> looma kohta, vabas vormis </h3>
          <input type="text" id="kirjeldus" name="kirjeldus" placeholder="Kirjeldus">
        </div>

        <div class="kuulutus-flex">
          <h3>Kadumise/leidmise kuupäev</h3>
          <input type="date" name="date">
        </div>

        <div class="kuulutus-flex">
          <h3>Lisa pildifail</h3>
          <input type="file" name="pilt">
        </div>

        <div class="kuulutus-flex">
          <h3>Teie e-mail</h3>
          <input type="text" id="email" name="email" placeholder="Teie e-mail">
        </div>

        <div class="kuulutus-flex">
          <h3>Teie telefoninumber</h3>
          <input type="text" id="telefon" name="telefon" placeholder="Teie telefoninumber">
        </div>

        <button>SAADA</button>
    </section>
  </section>
  <Footer />
</div>
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'kaotatud',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
footer {
    margin-top: 100px;
  }
</style>
