<template>
  <div>
      <v-row class="mt-12">
        <v-col cols="12">
          <v-subheader class="orange--text"><h2>Most Recent Project</h2></v-subheader>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" md="4" lg="4" xl="4" cols="12" 
          v-for="(project, i) in projects"
          :key="i"
          class="m-0"
          
        >
          <v-card class="mx-2 my-3">
            <v-img :src="project.src" />
            <v-card-text>
            <v-card-title>{{project.name}}</v-card-title>
            <v-card-subtitle>({{project.type}})</v-card-subtitle>
            <h5 class="mb-2"><strong>Technology: </strong>{{project.technology}})</h5>
            <v-btn fab small elevation="2">
              
              <a :href="project.url" 
              target="_blank" 
              style="text-decoration:none;color:#535353:;font-size:20px;color:orange"
              ><i :class="project.icon1"></i></a>
            </v-btn>
            <v-btn fab small elevation="2" class="ml-2">
              
              <a :href="project.gitUrl" 
              target="_blank" 
              style="text-decoration:none;color:#535353:;font-size:20px;color:orange"
              ><i :class="project.icon2"></i></a>
            </v-btn>
          </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data:  () => {
    return {
      projects: [
        {
          name:'PerfectBD E-commerce Appliction',
          type: 'Fullstack for client',
          technology: 'HTML,Css,Javascript,jqery,ajax,laravel,mysql',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/perfect-bd.png'),
          url: 'https://www.hsfloorpolishing.com/finix-loan',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',

        }, 
         {
          name:'DailyShop E-commerce Appliction',
          type: 'Fullstack for Practise',
          technology: 'HTML,Css,Javascript,jqery,ajax,laravel,mysql',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/daily-shop.png'),
          url: 'https://www.hsfloorpolishing.com/finix-loan',
          gitUrl: 'https://github.com/JakariyaCrypto/DailyShopLaravelAjax',
        }, 
        {
          name:'Car Reservation ',
          type: 'Fullstack for Client',
          technology: 'HTML,Css,Javascript,laravel,ajax,mysql',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/car-reservation.png'),
          url:'https://www.hsfloorpolishing.com/natural-ecom',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',

        },

        {
          name:'Natural E-commerce Project',
          type: 'Design for practise',
          technology: 'HTML,Css,Javascript',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/natural-ecom.png'),
          url:'https://www.hsfloorpolishing.com/natural-ecom',
          gitUrl: 'https://github.com/JakariyaCrypto/natural-food',

        },
        {
          name:'Hose Rante Project',
          type: 'Design for Client',
          technology: 'HTML,Css,Javascript',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/house-rant.png'),
          url:'https://www.hsfloorpolishing.com/basa-rante',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',

        },

        {
          name:'Resto Food Services',
          type: 'Design for practise',
          technology: 'HTML,Css,Javascript',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/food.png'),
          url: 'https://www.hsfloorpolishing.com/resto-food',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',
        },
       {
          name:'HS Marvel Polishing',
          type: 'Design and Develop for Client',
          technology: 'HTML,Css,Javascript,laravel,mysql,ajax',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/hs-floor.png'),
          url: 'https://www.hsfloorpolishing.com',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',

        },
        {
          name:'Finix Loan Application',
          type: 'Design for practise',
          technology: 'HTML,Css,Javascript',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/finix.png'),
          url: 'https://www.hsfloorpolishing.com/finix-loan',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',

        }, 
        {
          name:'Finix Loan Application',
          type: 'Design for practise',
          technology: 'HTML,Css,Javascript',
          icon1:'fas fa-eye', 
          icon2: 'fab fa-github', 
          src: require('../assets/img/app-amp.png'),
          url: 'https://www.hsfloorpolishing.com/finix-loan',
          gitUrl: 'https://github.com/JakariyaCrypto/resto-foods',

        }, 
      ]
    }
  }
}
</script>

<style>

</style>