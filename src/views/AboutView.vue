<template>
  <div>
      <v-row>
        <v-col cols="12">
          <v-card flat elevation="0">
            <v-img src="../assets/img/home-bg.jpg" height="200"  style="position:relative"/>
            <div  class="about-heading" align="center">
              <h1>About Me</h1>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="5" lg="5" xl="5" sm="5">
          <v-card elevation="1" class="px-3">
            <v-card-title>My info</v-card-title>
            <v-divider></v-divider>
          <table class="info-table">

            <tbody>
              <tr
              >
                <th>Name</th> 
              
                <td>Jakariya Ahmed</td>
                </tr>
                <tr>
                <th>Date Of Birth</th> <td>26 October 2000</td>
                </tr>
                <tr>
                <th>Address</th> <td>Kulura, Sylhet, Bangladesh</td>
                </tr>
                <tr> 
                <th>Mobile</th> <td>+08801601158098</td>
                </tr>
                <tr>
                <th>E-mail</th> <td>developerjk9356@gmail.com</td>
              </tr>
            </tbody>

          </table>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7" md="7" lg="7" xl="7">
          <v-card elevation="1" class="px-3">
            <v-card-title>Introductin</v-card-title>
            <v-divider></v-divider>
            <div class="intro">
              <p>
                I`m Jakriya Ahmed.I'm a fullstack web application developer. 
                Recently I'm working with laravel. I have completed some project. I have skill of HTML,
                CSS,JS,BOOTSTRAP,JQUERY,AJAX,MYSQL,LARAVEL,LIVEWIRE,VUE.JS AND VUTIFY.My future learning goal is
                react.js,node.js,express,mongoDB,Redux ect. Every time I want to develop myself 
                by learning new skills that helps me to build a strong career. 
                Take a look at my work and get in touch.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-3">
        <v-col cols="12" md="5" lg="5" xl="5" sm="5">
          <v-card elevation="1" class="px-3">
            <v-card-title>Languages</v-card-title>
            <v-divider></v-divider>
          <table class="info-table">

            <tbody>
              <tr
              >
                <th>Bangla</th> 
              
                <td>Native</td>
                </tr>
                <tr>
                <th>English</th> <td>Professional</td>
                </tr>
                <tr>
                <th>Hindi</th> <td>Kulura, Sylhet, Bangladesh</td>
                </tr>
                <tr> 
                <th>Hindi</th> <td>Communicative</td>
                </tr>

            </tbody>

          </table>

            <v-card-title>Interested</v-card-title>
            <v-divider></v-divider>
            <div class="interest">
              <span><i class="fas fa-code"></i></span>
              <span><i class="fas fa-book"></i></span>
              <span><i class="fas fa-handshake"></i></span>
              <span><i class="fas fa-plane"></i></span>
            </div>
          </v-card> 
        </v-col>
        <v-col cols="12" sm="7" md="7" lg="7" xl="7">
          <v-card elevation="1" class="px-3">
            <v-card-title>Skill</v-card-title>
            <v-divider></v-divider>
            <div class="skill-about">
              <ul>
                <li>
                  <v-img src="../assets/img/html.png" width="70" />
                  <strong>HTML</strong>
                </li>
                 <li>
                  <v-img src="../assets/img/css.png" width="70" />
                  <strong>CSS</strong>

                </li>
                 <li>
                  <v-img src="../assets/img/bootstrap.svg" width="70" />
                  <strong>Bootstrap</strong>
                </li>
                <li>
                  <v-img src="../assets/img/js.svg" width="70" />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <v-img src="../assets/img/jquery.png" width="70" />
                  <strong>Jquery</strong>
                </li>
                <li>
                  <v-img src="../assets/img/php.png" width="70" />
                  <strong>PHP</strong>
                </li>
                <li>
                  <v-img src="../assets/img/mysql.png" width="70" />
                  <strong>Mysql</strong>
                </li>
                <li>
                  <v-img src="../assets/img/laravel.png" width="70" />
                  <strong>Laravel</strong>
                </li>
                <li>
                  <v-img src="../assets/img/livewire.png" width="70" />
                  <strong>livewire</strong>
                </li>
                <li>
                  <v-img src="../assets/img/vue.png" width="70" />
                  <strong>Vue.js</strong>
                </li>
                <li>
                  <v-img src="../assets/img/vutify.png" width="70" />
                  <strong>Vuetify</strong>
                </li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.about-heading {
	position: absolute;
	top: 50px;
	text-align: center;
	width: 100%;
  left: 0px;
}

.info-table {
	width: 100%;
	text-align: left;
	padding: 15px;
}

.info-table tr {
	line-height: 44px;
}

.intro {
	padding: 20px 15px;
}

.intro p {
	line-height: 35px;
	color: #8a8a8a;
}

.interest span {
	color: #111;
	margin-left: 14px;
	font-size: 20px;
}
.interest {
	padding: 10px;
}

.skill-about{
  padding: 15px;
}

.skill-about ul li {
	display: inline-block;
	text-align: center;
	margin: 15px;
}
</style>