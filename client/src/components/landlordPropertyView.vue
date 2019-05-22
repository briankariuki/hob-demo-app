<template>
    <v-container>
        <v-layout row wrap>
            <div v-for="property in properties" :key="property.id">
                <v-flex xs12 class="pr-3 pl-1 pt-3 pb-3">
                    <v-card hover dark max-width="350">
                        <v-img :src=property.imageURL aspect-ratio="2.75">
                        </v-img>
                        <v-card-title primary-title>
                           <div>
                                <h3 class="body-1 mb-0">{{property.name}}</h3>
                                <div class="font-weight-light pt-2">
                                    <v-icon class="pr-2">fas fa-map-marker-alt</v-icon>
                                {{ property.location}} 
                                </div>
                                <div class="headline font-weight-light pt-2">
                                    {{ property.rentalPrice}} <span class="body-2 font-weight-light">per month</span>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="primary" v-on:click="goToSite(property.propertyWebpageURL)">
                                <v-icon class="pr-2">fas fa-location-arrow</v-icon>
                                View Website
                            </v-btn>
                            <v-btn flat color="primary">
                                <v-icon class="pr-2">fas fa-bookmark</v-icon>
                                Save
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="show = !show">
                                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                         <v-slide-y-transition>
                            <v-card-text v-show="show">
                                {{property.description}}
                            </v-card-text>
                         </v-slide-y-transition>
                 
                   </v-card>
                </v-flex>
            </div>
            
        </v-layout>
    </v-container>
</template>

<script>
import PropertyService from '@/services/PropertyService'
export default {
    data () {
        return {
            show: false,
            properties: [],
        }
    },
    methods: {
        goToSite (propertywebsite) {    
            window.location.href = propertywebsite
        },

    },
    async mounted () {
        this.properties = (await PropertyService.index()).data
    }

}
</script>

<style>

</style>
