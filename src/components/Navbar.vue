<template>
  <div class="container1">

      <div class="logo-text">
      <h1 class="header-text">Loomade <span> Varjupaik </span></h1>
      </div>

      <nav class="navabar"> <!-- NAVIGATION START -->
          <ul class="nav-items">

              <li class="nav-li">
              <router-link exact-active-class="active" class="nav-link" to="/home">Avaleht</router-link>
              </li>

              <li class="nav-li">
              <router-link exact-active-class="active" class="nav-link" to="/varjupaigas">Loomad varjupaigas</router-link>
              </li>

              <li class="nav-li">
              <router-link exact-active-class="active" class="nav-link" to="/kaotatud">Kaoatud loomad</router-link>
              </li>

              <li class="nav-li">
              <router-link exact-active-class="active" class="nav-link" to="/toetajatele">Toetajatele</router-link>
              </li>

              <li class="nav-li">
              <router-link exact-active-class="active" class="nav-link" to="/meist">Meist</router-link>
              </li>

              <li class="nav-li">

              <router-link exact-active-class="active" class="nav-link" to="/kontakt">Kontakt</router-link>

              </li>

            </ul>
        </nav> <!-- NAVIGATION END -->
    </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-text {
  background-image: url("../assets/rescue-animals.jpg");
  background-size: 300px;
  margin:0px;
  background-repeat: no-repeat;
  float: left;
}
</style>
