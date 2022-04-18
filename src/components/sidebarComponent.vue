<template>
    <div>
      <v-card class="vertical-nav" >
          <v-list align="center">
              <v-list-item-avatar>
                    <v-img src="../assets/img/JAKARIYA_PHOTO.jpg" class="home-photo" />
                </v-list-item-avatar>
            <v-list-item> 
                
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Jakariya Ahmed
                    </v-list-item-title>
                    <v-list-item-subtitle>Fullstack</v-list-item-subtitle>
                    <v-list-item-subtitle>Web Developer</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                nav
                dense
            >
                <v-list-item-group
        
                >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.link"
                    style="line-height:40px"
                    class="mt-4"
                >
                    <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-card>

        


  </div>
</template>

<script>
export default {
    data: () => {
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
    } 
}
</script>

<style>

</style>