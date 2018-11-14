<template>
<div class="home">
    <Navbar />

	<div class="content">
    <div>
      <h1 id="leidmine2">Kust meid leida?</h1>

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

    <p id="quote-author"></p>

    <h1 id="leidmine3">Soovid meile kirjutada?</h1>
    <img class="img-section2" src="../assets/writingcat.png">

    <div class="kontakt-kuulutus">
      <section class="kuulutus">
        <div class="kuulutus-flex">
          <h3>Eesnimi</h3>
          <input type="text" id="email" name="email" placeholder="Eesnimi">
        </div>

        <div class="kuulutus-flex">
          <h3>Perekonnanimi</h3>
          <input type="text" id="email" name="email" placeholder="Perekonnanimi">
        </div>

        <div class="kuulutus-flex">
          <h3>Teie e-mail</h3>
          <input type="text" id="email" name="email" placeholder="Teie e-mail">
        </div>

        <div class="kuulutus-flex">
          <h3>Teie sõnum</h3>
          <textarea id="subject" name="subject" placeholder="Sõnum.."></textarea>
        </div>

        <button>SAADA</button>
      </section>
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
  name: 'kontakt',
  components: {
    Navbar,
    Footer,
  },
};
</script>
