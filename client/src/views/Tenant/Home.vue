<template>
   <tenant-layout-dynamic>
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
            <tenant-home-view/>
          </v-tab-item>
          <v-tab-item>
           <tenant-property-view/>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
               To be Implemented
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
   </tenant-layout-dynamic>    
   
</template>

<script>
import tenantLayoutDynamic from '@/layouts/tenantLayoutDynamic';
import tenantHomeView from '@/components/tenantHomeView';
import tenantPropertyView from '@/components/tenantPropertyView';
export default {
    name: "tenant-home",
    components: {
        tenantHomeView,
        tenantPropertyView,
        tenantLayoutDynamic,
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
