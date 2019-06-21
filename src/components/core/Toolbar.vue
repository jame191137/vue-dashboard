<template>
<!-- v-if="$route.name == 'Dashboard1'|| $route.name == 'Dashboard2' || $route.name == 'Historical' " -->
  <v-toolbar
    id="core-toolbar"
    v-if="showTab"
    flat
    prominent
    style="background: #4e73df;"
    class="tabFont"
  >
    <div class="">
      <v-toolbar-title
        class="tabFont white--text"
      >
        {{"Site " }}{{this.SiteName }}
      </v-toolbar-title>
    </div>

    <v-spacer />
    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2
      >
        <!-- <v-text-field
          v-if="responsiveInput"
          class="mr-4 mt-2 purple-input"
          label="Search..."
          hide-details
          color="purple"
        />
        <router-link
          v-ripple
          class="toolbar-items"
          to="/"
        >
          <v-icon color="tertiary">mdi-view-dashboard</v-icon>
        </router-link>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">
          <router-link
            v-ripple
            slot="activator"
            class="toolbar-items"
            to="/notifications"
          >
            <v-badge
              color="error"
              overlap
            >
              <template slot="badge">
                {{ notifications.length }}
              </template>
              <v-icon color="tertiary">mdi-bell</v-icon>
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-tile-title
                  v-text="notification"
                />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu> -->
        <v-toolbar-title
          class="tabFont white--text"
        >
          {{ this.email }} {{ "("}}{{ this.adminStatus }}{{")"}}
        </v-toolbar-title>



        <v-btn v-on:click="logout ()" flat>
          <v-icon color="red">mdi-exit-to-app</v-icon>
        </v-btn>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import {
  mapMutations
} from 'vuex'
// const events = new Vue({})
export default {
  data: () => ({
    email: '',
    adminStatus: '',
    showTab: false,
    SiteID: '',
    ZoneID: '',
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false,
    responsiveInput: false
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
      this.email = localStorage.email
      this.adminStatus = localStorage.adminStatus
      this.SiteID = localStorage.SiteID
      this.ZoneID = localStorage.ZoneID
      this.SiteName = localStorage.SiteName

      if ( this.$route.name != 'Login'){
        this.showTab = true
      } else {
        this.showTab = false
      }
    }
  },
  // watch : {
  //   email:function(val) {
  //      this.kilometers = val;
  //      this.meters = val * 1000;
  //   }
  // },
  mounted () {
    // this.title = val.name
    // this.email = localStorage.email
    // this.adminStatus = localStorage.adminStatus
    // console.log(localStorage.email)
    // this.email = localStorage.email
    // alert('ss')
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  #core-toolbar a {
    text-decoration: none;
    .st{

    }
  }
  .tabFont {
    color: #ffffff;
    font-size: 15px;
    font-weight: 900 !important;
    /* letter-spacing: -1px; */
    /* text-transform: uppercase !important; */
  }
</style>
