<template>
  <div>
    <v-row>
      <v-col md="12" lg="12" xl="12" cols="12" sm="12">
        <v-card align="center">
          <v-img src="../assets/img/home-bg.jpg" style="position:relative;width:100%;height:100vh" />

          <div class="home-content">
            <v-img src="../assets/img/JAKARIYA_PHOTO.jpg" width="200" class="rounded-circle"/>
           <v-card-text class="home-text">
              <h2 class="font-weight-bold">Jakariya Ahmed</h2>
            <v-card-subtitle class="text-capitalize">fullstack web application developer</v-card-subtitle>
            <v-btn class="orange">
               <i class="fab fa-facebook-messenger"></i>
               <a href="https://wa.me/+08801601158098?text=I am ready to chate with you" target="_blank" class="hire-me">Hire me</a>
               
             </v-btn>
             <v-btn class="ml-2">
               <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
               <a href="../assets/img/FullStackResume.pdf" download="JakariyaResume.pdf" target="_blank" class="download-cv">Download CV</a>
             </v-btn>
           </v-card-text>
            
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>


  export default {
    name: 'Home',

    components: {

    },
  }
</script>
<style scoped>

.home-content {
	position: absolute;
	top: 16%;
	width: 100%;
}

.hire-me {
	color: white !important;
	text-decoration: navajowhite;
	margin-left: 5px;
}

.download-cv{
  color: #535353 !important;
	text-decoration: none;
	margin-left: 5px;
}

.home-text.fab.fa{
  color: red;
}

.home-text h2 {
	color: #535353;
	font-size: 26px;
}


</style>
