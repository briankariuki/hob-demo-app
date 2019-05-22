<template>
    <admin-layout-dynamic>
        <v-container>
        <v-layout row wrap>
            <v-flex>
                <Login />
            </v-flex>   
        </v-layout>
        </v-container>
    </admin-layout-dynamic>
</template>

<script>
import adminLayoutDynamic from '@/layouts/adminLayoutDynamic';
import Login from '@/components/adminLogin';
export default {
    name: 'admin-login',
    components: {
        adminLayoutDynamic,
        Login
    }
}
</script>

<style>

</style>
