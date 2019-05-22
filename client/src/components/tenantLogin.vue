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
                      Tenant Login
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
                        <span class="text-dark">Sign In with Email</span>
                      </v-btn>
                    <v-btn @click="handleClickGetAuth" color="primary">
                        <i class="fab fa-lg fa-google pr-2 text-dark"></i>
                        <span class="text-dark">Sign In with Google</span>
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
       const response = await AuthenticationService.logintenant({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setTenantToken', response.data.token)
        this.$store.dispatch('setTenant', response.data.tenant)
        this.$router.push({
          name:'tenant-home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    handleClickGetAuth(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        // On success
        return this.feedback = AuthenticationService.logintenantgoogle({ 
          access_token: authCode, 
          redirect_uri: 'postmessage' 
        })
      })
      .then(response => {
        // And then
      })
      .catch(error => {
        // On fail do something
        console.log(error)
      })
    },
  }
}
</script>

<style>

</style>
