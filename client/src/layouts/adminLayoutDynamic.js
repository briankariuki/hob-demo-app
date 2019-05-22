import adminLayout from './adminLayout.vue';

export default {
  name: 'adminLayoutDynamic',
  created() {
    this.$parent.$emit('update:layout', adminLayout);
  },
  render() {
    return this.$slots.default[0];
  },
};