<template>
    <div>
    <land-nav/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import landNav from '@/components/landlordNav.vue';
export default {
  components: {
    landNav,
  },
};
</script>

<style>

</style>
