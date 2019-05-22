<template>
    <main-layout-dynamic>
    <v-container>
        <v-layout row wrap>
            <v-flex>
                <Login />
            </v-flex>
            
        </v-layout>
        
    </v-container>
    </main-layout-dynamic>
</template>

<script>
import mainLayoutDynamic from '@/layouts/mainLayoutDynamic';
import Login from '@/components/landlordLogin'
export default {
    name: "landlord-login",
    components: {
        mainLayoutDynamic,
        Login
    }
}
</script>

<style>

</style>
