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
import Register from '@/components/tenantRegister'
export default {
    name: "tenant-register",
    components: {
        mainLayoutDynamic,
        Register
    }
}
</script>

<style>

</style>
