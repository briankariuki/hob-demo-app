import ldlordLayout from './ldlordLayout.vue';

export default {
  name: 'ldlord-layout-dynamic',
  created() {
    this.$parent.$emit('update:layout', ldlordLayout);
  },
  render() {
    return this.$slots.default[0];
  },
};