<template>
    <admin-layout-dynamic>
        <v-container>
            <v-layout>
                <admin-home-view/>
            </v-layout>
        </v-container>
    </admin-layout-dynamic>
</template>

<script>
import adminHomeView from '@/components/adminHomeView'
import adminLayoutDynamic from '@/layouts/adminLayoutDynamic';
export default {
    name: 'admin-home',
    components: {
        adminLayoutDynamic,
        adminHomeView,
    }
}
</script>

<style>

</style>
