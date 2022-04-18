<template>
  <div>
      <v-row class="mt-12">
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card  height="600">
          <v-card-text style="padding:0">
            <v-card-title>Education & Qualification</v-card-title>
            <v-divider></v-divider>
            <v-timeline
              align-top
              dense
            >
             <v-timeline-item
                color="pink"
                small
              >
                <div class="edu-content">
                  <h3><strong>Diploma in Compute Technology</strong></h3>
                  <h5><strong>At Moulvibazar Polytechnic Insitute , Moulvibazar</strong></h5>
                    <div class="text-caption">
                      Passed: 2022
                    </div>
                </div>
              </v-timeline-item>

              <v-timeline-item
                color="pink"
                small
              >
                <div class="edu-content">
                  <h3><strong>S.S.C in Science</strong></h3>
                  <h5><strong>Uttar Kulaura High School (Mahtab Chayera) Kulaura, Moulvibazar</strong></h5>
                    <div class="text-caption">
                      Passed: 2017
                    </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card >
          <v-card-text style="padding:0">
            <v-card-title>Training & Courses</v-card-title>
            <v-divider></v-divider>
            <v-timeline
              align-top
              dense
            >
             <v-timeline-item
                color="pink"
                small
              >
               <div class="edu-content">
                  <h3><strong>Fullstack Web Development PHP & Laravel programing with Vishal</strong></h3>
                  
                    <div class="text-caption">
                      January 2021 - March 2021 
                    </div>
                    <v-subheader><h4>Responsibility:</h4></v-subheader>
                    <div class="responsivility">
                      <ul>
                        <li>Develope Web application by laravel</li>
                        <li>Laravel MVC Pattern Architechture</li>
                        <li>E-mail verification system</li>
                        <li>Remember me Token system</li>
                      </ul>
                    </div>
                </div>
              </v-timeline-item>

              <v-timeline-item
                color="pink"
                small
              >
               <div class="edu-content">
                  <h3><strong>Complete E-commerce Web App Design with vue.js and material framework vuetify from Udemy</strong></h3>
                  
                    <div class="text-caption">
                      January 2022 - February 2022
                    </div>
                    <v-subheader><h4>Responsibility:</h4></v-subheader>
                    <div class="responsivility">
                      <ul>
                        <li>vue basic to advance</li>
                        <li>vue cli</li>
                        <li>vutify grid system</li>
                        <li>Vue router</li>
                        <li>Vuex and Axios</li>
                      </ul>
                    </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
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

</style>