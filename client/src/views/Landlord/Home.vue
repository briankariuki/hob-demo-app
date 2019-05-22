<template>
   <ldlord-layout-dynamic>
      <div>
        <v-tabs v-model="tab" color="dark" fixed-tabs class="elevation-3">
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab>
            Home 
          </v-tab>
          <v-tab>Properties</v-tab>
          <v-tab>Account</v-tab>
        </v-tabs>
            
        <v-tabs-items v-model="tab" class="pt-5">
          <v-tab-item>
            <landlord-home-view/>
          </v-tab-item>
          <v-tab-item>
           <landlord-property-view/>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              To be Implemented
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
   </ldlord-layout-dynamic>    
   
</template>

<script>
import ldlordLayoutDynamic from '@/layouts/ldlordLayoutDynamic';
import landlordHomeView from '@/components/landlordHomeView';
import landlordPropertyView from '@/components/landlordPropertyView';
export default {
    name: "landlord-home",
    components: {
        ldlordLayoutDynamic,
        landlordHomeView,
        landlordPropertyView
    },
    data () {
      return {
        tab: null,
        mini: false,
        right: null
      }
    }
}
</script>

<style>

</style>
