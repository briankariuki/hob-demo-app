import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TenantLogin from './views/Tenant/Login.vue'
import TenantRegister from './views/Tenant/Register.vue'
import TenantHome from './views/Tenant/Home.vue'
import LandlordLogin from './views/Landlord/Login.vue'
import LandlordRegister from './views/Landlord/Register.vue'
import LandlordHome from './views/Landlord/Home.vue'
import AdminLogin from './views/Admin/Login.vue'
import AdminHome from './views/Admin/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'HOB | Platform',
        guest: true,
        metaTags: [
          {
            name: 'description',
            content: 'find a place to let or rent on hob'
          },
          {
            property: 'og:description',
            content: 'find a place to let or rent on hob'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        guest: true,
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login/tenant',
      name: 'tenant-login',
      component: TenantLogin,
      meta: {
        title: 'HOB | Tenant Login',
        guest: true,
        metaTags: [
          {
            name: 'description',
            content: 'login to Hob'
          },
          {
            property: 'og:description',
            content: 'login to Hob'
          }
        ]
      }
    },
    {
      path: '/login/landlord',
      name: 'landlord-login',
      component: LandlordLogin,
      meta: {
        title: 'HOB | Landlord Login',
        guest: true,
        metaTags: [
          {
            name: 'description',
            content: 'login to Hob'
          },
          {
            property: 'og:description',
            content: 'login to Hob'
          }
        ]
      }
    },
    {
      path: '/login/admin',
      name: 'admin-login',
      component: AdminLogin,
      meta: {
        title: 'HOB | Admin Login',
        guest: true
      }
    },
    {
      path: '/register/tenant',
      name: 'tenant-register',
      component: TenantRegister,
      meta: {
        title: 'HOB | Tenant Register',
        guest: true,
        metaTags: [
          {
            name: 'description',
            content: 'register on Hob'
          },
          {
            property: 'og:description',
            content: 'register on Hob'
          }
        ]
      }
    },
    {
      path: '/register/landlord',
      name: 'landlord-register',
      component: LandlordRegister,
      meta: {
        title: 'HOB | Landlord Register',
        guest: true,
        metaTags: [
          {
            name: 'description',
            content: 'register on Hob'
          },
          {
            property: 'og:description',
            content: 'register on Hob'
          }
        ]
      }
    },
    {
      path: '/tenant/home',
      name: 'tenant-home',
      component: TenantHome,
      meta: {
        title: 'HOB | Tenant Home Panel',
        requiresAuth: true,
        isTenantLoggedIn: true,
        metaTags: [
          {
            name: 'description',
            content: 'find and let on Hob'
          },
          {
            property: 'og:description',
            content: 'find and let on Hob'
          }
        ]
      }
    },
    {
      path: '/landlord/home',
      name: 'landlord-home',
      component: LandlordHome,
      meta: {
        title: 'HOB | Landlord Home Panel',
        requiresAuth: true,
        metaTags: [
          {
            name: 'description',
            content: 'find and let on Hob'
          },
          {
            property: 'og:description',
            content: 'find and let on Hob'
          }
        ]
      }
    },
    {
      path: '/admin/home',
      name: 'admin-home',
      component: AdminHome,
      meta: {
        title: 'HOB | Admin Home Panel',
        requiresAuth: true,

        
      }
    },
  ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});
export default router