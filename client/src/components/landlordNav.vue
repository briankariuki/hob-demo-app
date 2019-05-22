<template>
    <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      :mini-variant="mini"
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon large>fa fa-user-circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content v-if="$store.state.isLandlordLoggedIn">
            <v-list-tile-title>
              <p class="body-1">{{$store.state.landlord.email}}</p>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pa-1" dense>
        <v-list-tile ripple v-on:click="navigateTo({name:'home'})">
            <v-list-tile-action>
              <v-icon >fa fa-home</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                Home
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      <v-list class="pa-1" dense>
        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon large>fa fa-cog</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              Account Settings
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar color="primary" dark tabs>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>Hob | Landlord</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-menu :nudge-bottom="50" light auto>
        <v-btn icon slot="activator" flat dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list v-if="$store.state.isLandlordLoggedIn">
          <v-list-tile>
            <v-list-tile-title class="body-1">{{$store.state.landlord.email}}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile ripple v-on:click="navigateTo({})">
            <v-list-tile-title>Account Settings</v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile ripple v-on:click="logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data () {
      return {
        drawer: null,
        tab: null,
        mini: false,
        right: null
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('setLandlordToken', null)
        this.$store.dispatch('setLandlord', null)
        this.$router.push({
          name: 'home'
        })
      },
      navigateTo (route) {
        this.$router.push(route)
      }
    }
}
</script>

<style>

</style>
