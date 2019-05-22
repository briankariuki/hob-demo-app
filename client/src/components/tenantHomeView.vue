<template>
    <v-container>
            <v-layout row wrap> 
              <v-flex xs12 sm4 class="pr-3 pb-3">
                    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-card-title>
                      <v-icon large left>
                        fas fa-money-bill
                      </v-icon>
                      <span class="title font-weight-light">Rent Details</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                      Ksh 35000/- <span class="body-2 font-weight-light">per month</span>
                    </v-card-text>

                    <v-card-actions>
                      <v-list-tile class="grow">
                        <v-list-tile-title class="body-2 font-weight-light">
                          Balance | Ksh 5000
                        </v-list-tile-title>
                        <v-layout align-center justify-end>
                          <v-icon class="mr-1">fas fa-wallet</v-icon>
                          <span class="subheading mr-1">Pay</span>
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
                        fas fa-wrench
                      </v-icon>
                      <span class="title font-weight-light">Maintenance</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-bold">
                      Plumbing
                    </v-card-text>

                    <v-card-actions>
                      <v-list-tile class="grow">
                        <v-list-tile-title class="body-2 font-weight-light">
                          Completed
                        </v-list-tile-title>
                        <v-layout align-center justify-end>
                          <v-icon class="mr-1">fas fa-plus</v-icon>
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
export default {

}
</script>

<style>

</style>
