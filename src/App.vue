<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-row>
      
      <v-col md="2" lg="2" xl="2" sm="2" class="hidden-xs-only hidden-sm-only">
        <sidebarComponent/>
      </v-col>
     
    <v-col md="10" lg="10">
       <v-main>
        <router-view/>
        </v-main>  
        <div class="mobile-menu-icon hidden-md-and-up" @click.stop="drawer = !drawer">
          <v-btn color="orange">
            <v-icon class="white--text">fas fa-bars</v-icon>
          </v-btn>
        </div>
        <v-footer class="mt-5 text-center justify-space-between">
          <span>Developer By: <strong color="orange">Jakariya Ahmed</strong> </span>
          <span>E-mail: developerjk9356@gmail.com</span>
        </v-footer>
        <div class="socila">
 
          <li>
            <v-btn fab color="orange" small>
              <a target="_blank" href="https://web.facebook.com/jakariya.ahmeds/"><i class="fab fa-facebook"></i></a>
            </v-btn>
          </li>
          <li>
            <v-btn fab color="orange" small>
              <a target="_blank" href="https://github.com/JakariyaCrypto"><i class="fab fa-github"></i></a>
            </v-btn>
          </li>
          <li>
            <v-btn fab color="orange" small>
              <a target="_blank" href="https://www.linkedin.com/in/jakariya-ahmed-7b0183222/"><i class="fab fa-linkedin"></i></a>
            </v-btn>
          </li>
          <li>
            <v-btn fab color="orange" small>
              <a target="_blank" href=""><i class="fab fa-stack-overflow"></i></a>
            </v-btn>
          </li>
      </div>
      </v-col>
      
      <v-navigation-drawer
            v-model="drawer"
            absolute
            left
            temporary
            style="z-index:999999"
        >
        <v-list align="center">
              <v-list-item-avatar>
                    <v-img src="./assets/img/JAKARIYA_PHOTO.jpg" class="home-photo" width="150"/>
                </v-list-item-avatar>
            <v-list-item> 
                
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Jakariya Ahmed
                    </v-list-item-title>
                    <v-list-item-subtitle>Fullstack</v-list-item-subtitle>
                    <v-list-item-subtitle>Web Application Developer</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.text" :to="item.link" link>
            <v-list-item-icon class="mr-1">
                <v-icon small> fa-{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title> {{item.text}}</v-list-item-title>
            </v-list-item-content>
        
        </v-list-item>
    </v-navigation-drawer>
    </v-row>

  </v-app>
</template>

<script>
import sidebarComponent from '@/components/sidebarComponent';
export default {
  name: 'App',

  data() {
    return {
      drawer: false,
      items: [
                {icon: 'fas fa-home', text:'Home', link: '/'},
                {icon: 'fas fa-project-diagram', text:'Project', link: '/project'},
                {icon: 'fas fa-address-book', text:'About', link: '/about'},
                {icon: 'fas fa-lightbulb', text:'Skill', link: '/skill'},
                {icon: 'fas fa-user-graduate', text:'Education', link: '/education'},
            ]
    }
  },

  components: {
    sidebarComponent
  }
};
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
h1,h2,h3,h4,h5,h6,
span,a{
  font-family: 'Roboto', sans-serif;
}
.vertical-nav {
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
	transition: all 0.4s;
	width: 16.6666666667% !important;
}

.mobile-menu-icon {
	position: absolute;
	top: 20px;
	left: 13px;
}

.socila {
	position: fixed;
	top: 40%;
	right: 21px;
}
.socila li {
	display: block;
	margin-top: 5px;
}

.fab {
	color: #222;
	font-size: 18px;
}
</style>