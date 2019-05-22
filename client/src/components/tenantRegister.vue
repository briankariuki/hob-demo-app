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
                      Tenant Sign Up
                    </h3>
                  </v-flex>    
              </v-card-title>
              <v-card-content>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-layout>
                      <v-flex sm6 pr-2>
                        <v-text-field  v-model="firstname"  :rules="nameRules" label="First Name"
                        required>
                        </v-text-field>
                      </v-flex>

                      <v-flex sm6>
                        <v-text-field  v-model="secondname"  :rules="nameRules" label="Second Name"
                          required>
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    
                    <v-layout>
                      <v-flex sm6 pr-2>
                        <v-text-field  v-model="email"  :rules="emailRules" label="Email"
                          required>
                        </v-text-field>
                      </v-flex>

                      <v-flex sm6>
                         <v-text-field  v-model="phonenumber" label="Phone Number"
                          required>
                        </v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-text-field label="Password" v-model="password" :append-icon="show1 ? 'fa fa-eye': 'fa fa-eye-slash'"
                        :rules="[rules.min]" :type="show1? 'text':'password'"
                        counter @click:append="show1 =!show1"
                        >                    
                    </v-text-field>
                  </v-form>
                  <div class="text-center"> 
                      <v-btn @click="register" color="primary">
                        <i class="fas fa-lg fa-check-circle pr-2 text-dark"></i>
                        <span class="text-dark">Sign Up</span>
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
      firstname: '',
      secondname: '',
      phonenumber:'',
      password: '',
      error: null,
      show1: false,
      rules: {
          required: value => !!value || 'Required',
          min: v => v.length >= 8 || 'Min 6 characters',
      },
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.registertenant({
          firstname: this.firstname,
          secondname: this.secondname,
          phonenumber: this.phonenumber,
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
    }
  }
  
}
</script>

<style>

</style>
