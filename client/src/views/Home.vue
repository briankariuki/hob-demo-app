<template>
  <main-layout-dynamic>
    <v-parallax height="400" dark src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
    <v-layout align-left column justify-center>
      <h1 class="display-2 mb-3">Welcome to Hob</h1>
      <h4 class="subheading">Hob is a serviced apartment App that eases your stay at any serviced
        apartment. We help you to get information about the apartment and how to use
        equipments around you. Landlords and owners of the spaces to let can also manage their tenants and listed
        spaces on the app.
      </h4>

      <h5 class="body-1">Sign Up to Get started</h5>
    </v-layout>
  </v-parallax>
  </main-layout-dynamic>
  
</template>

<script>
import mainLayoutDynamic from '@/layouts/mainLayoutDynamic';
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    mainLayoutDynamic,
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
