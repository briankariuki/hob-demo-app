<template>
    <v-container>
            <v-layout row wrap> 
              <v-flex xs12 sm4 class="pr-3 pb-3">
                    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-card-title>
                      <v-icon large left>
                        fas fa-chart-line
                      </v-icon>
                      <span class="title font-weight-light">Statistics</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                      <div>
                        {{landlords.length}} <span class="body-2 font-weight-light">Landlords</span>
                        {{tenants.length}} <span class="body-2 font-weight-light">Tenants</span>
                      </div>
                    </v-card-text>

                    <v-card-actions>
                      <v-list-tile class="grow">
                        <v-list-tile-title class="body-2 font-weight-light">
                          
                        </v-list-tile-title>
                        <v-layout align-center justify-end>
                          <v-icon class="mr-1">fas fa-arrow-circle-right</v-icon>
                          <span class="subheading mr-1">More</span>
                        </v-layout>
                      </v-list-tile>
                    </v-card-actions>
                  </v-card>
              </v-flex>
              <v-flex xs12 sm4  class="pr-3 pb-3">
                <v-card class="mx-auto" color="dark" dark max-width="400">
                <v-card-title>
                  <v-icon large left>
                    fas fa-envelope
                  </v-icon>
                  <span class="title font-weight-light">Messages</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                  No New Messages
                </v-card-text>

                <v-card-actions>
                  <v-list-tile class="grow">
                    <v-list-tile-title class="body-2 font-weight-light">
                      View Inbox
                    </v-list-tile-title>
                    <v-layout align-center justify-end>
                      <v-icon class="mr-1">fas fa-chevron-circle-right</v-icon>
                    </v-layout>
                  </v-list-tile>
                </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 class="pr-3 pb-3">
                    <v-card class="mx-auto" color="#1A237E" dark max-width="400">
                    <v-card-title>
                      <v-icon large left>
                        fas fa-building
                      </v-icon>
                      <span class="title font-weight-light">Properties Listed</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                      {{properties.length}} <span class="body-2 font-weight-light">Properties</span>
                    </v-card-text>

                    <v-card-actions>
                      <v-list-tile class="grow">
                        <v-list-tile-title class="body-2 font-weight-light">
                          Apartments | Offices
                        </v-list-tile-title>
                        <v-layout align-center justify-end>
                          <v-icon class="mr-1">fas fa-arrow-circle-right</v-icon>
                          <span class="title font-weight-light">New</span>
                        </v-layout>
                      </v-list-tile>
                    </v-card-actions>
                  </v-card>
              </v-flex>
            </v-layout>
            </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import PropertyService from '@/services/PropertyService'
export default {
  name: 'admin-home',
  components: {

  },
  data() {
    return {
      tenants: [],
      landlords: [],
      properties: []
    }
  },
  async mounted () {
    this.properties = (await PropertyService.index()).data
    this.landlords = (await AuthenticationService.landlordindex()).data
    this.tenants = (await AuthenticationService.tenantindex()).data
  }

}
</script>

<style>

</style>
