<template>
    <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="white" class="text-center">
              <v-container class="text-center p-5">
              <v-card-title primary-title>
                  <v-flex>
                    <i class="fas fa-lg fa-user-circle pr-2 text-dark"></i>
                    <h3 class="headline text-center">
                      Admin Login
                    </h3>
                  </v-flex>
              </v-card-title>
              <v-card-content>
                  <v-form ref="form" lazy-validation>
                    <v-text-field  v-model="email"  :rules="emailRules" label="Email"
                    required>
                    </v-text-field>
                    <v-text-field label="Password" v-model="password" :append-icon="show1 ? 'fa fa-eye': 'fa fa-eye-slash'"
                        :rules="[rules.min]" :type="show1? 'text':'password'"
                        counter @click:append="show1 =!show1"
                        >                    
                    </v-text-field>
                  </v-form>
                  <div class="text-center"> 
                      <v-btn @click="login" color="primary">
                        <i class="fas fa-lg fa-envelope pr-2 text-dark"></i>
                        <span class="text-dark">Sign In</span>
                      </v-btn>
                  </div>

                   <p class="error-message" v-html="error" />
              </v-card-content>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
        email: '',
        password: '',
        error: null,
        show1: false,
        rules: {
            required: value => !!value || 'Required',
            name: v => v.length <= 30 || 'Max 25 characters',
            min: v => v.length >= 8 || 'Min 6 characters',
        },
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
    }
  },
  methods: {
    async login () {
      try {
       const response = await AuthenticationService.loginadmin({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setAdminToken', response.data.token)
        this.$store.dispatch('setAdmin', response.data.admin)
        this.$router.push({
          name:'admin-home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
