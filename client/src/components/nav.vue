<template>
  <div>
    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <v-list class="pa-1">
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="title">Hob</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list>
          <v-list-tile ripple v-on:click="navigateTo({name:'home'})">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-list>
          <v-list-tile ripple v-on:click="navigateTo({name:''})">
            <v-list-tile-action>
              <v-icon>fas fa-question</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              About
            </v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-list-group prepend-icon="account_circle" value="false">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile ripple v-on:click="navigateTo({name:'tenant-login'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Tenant</v-list-tile-title>
          </v-list-tile>
          <v-list-tile ripple v-on:click="navigateTo({name:'landlord-login'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Landlord</v-list-tile-title>
          </v-list-tile>

          <v-list-tile ripple v-on:click="navigateTo({name:'admin-login'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <v-list-group prepend-icon="fingerprint" value="false">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile ripple v-on:click="navigateTo({name:'tenant-register'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Tenant</v-list-tile-title>
          </v-list-tile>
          <v-list-tile ripple v-on:click="navigateTo({name:'landlord-register'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Landlord</v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group prepend-icon="pages" value="false">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Quick View</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile ripple v-on:click="navigateTo({name:'tenant-home'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Tenant Home</v-list-tile-title>
          </v-list-tile>
          <v-list-tile ripple v-on:click="navigateTo({name:'landlord-home'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Landlord Home</v-list-tile-title>
          </v-list-tile>
           <v-list-tile ripple v-on:click="navigateTo({name:'admin-home'})">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Admin Home</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Hob</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
    
</template>

<script>
export default {
  data () {
      return {
        drawer: null,
        mini: false,
        right: null
      }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>

