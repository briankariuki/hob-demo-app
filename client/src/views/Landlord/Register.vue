<template>
    <main-layout-dynamic>
        <v-container>
        <v-layout row wrap>
            <v-flex>
                <Register />
            </v-flex>
            
        </v-layout>
        
    </v-container>
    </main-layout-dynamic>
    
</template>

<script>
import mainLayoutDynamic from '@/layouts/mainLayoutDynamic';
import Register from '@/components/landlordRegister'
export default {
    name: "landlord-register",
    components: {
        mainLayoutDynamic,
        Register
    }
}
</script>

<style>

</style>
