<template>
    <!-- v-if="$route.name == 'Dashboard1'|| $route.name == 'Dashboard2' || $route.name == 'Historical' " -->
  <v-navigation-drawer
    id="app-drawer"
    v-if="showTab"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <!-- <v-img
      :src="image"
      :gradient="sidebarOverlayGradiant"
      height="100%"
    > -->
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >

        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              src="https://upload.wikimedia.org/wikipedia/th/3/39/CPALL2015.png"
              height="34"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Lighting Monitoring
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon >{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />

        </v-list-tile>
        <!-- <v-list-tile
          disabled
          active-class="primary"
          class="v-list-item v-list__tile--buy"
          to="/upgrade"
        >
          <v-list-tile-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="font-weight-light">
            Upgrade To PRO
          </v-list-tile-title>
        </v-list-tile> -->
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'
import Dashboard2 from '@/views/Dashboard2.vue'
import axios from 'axios';
export default {
  components: {
    Dashboard2
  },
  data: () => ({
    url_sev: 'http://35.186.149.130:8997',
    // url_sev: 'http://localhost:8997',
    showTab: false,
    zone_data: {},
    logo: './img/vuetifylogo.png',
    logo_cp: 'images/logo_cp.png',
    links: [],
    responsive: false,
    adminStatus : localStorage.adminStatus
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    },
    sidebarOverlayGradiant () {
      return `${this.$store.state.app.sidebarBackgroundColor}, ${this.$store.state.app.sidebarBackgroundColor}`
    }
  },
  ready() {
    // this.$on('logined', () => {
    //   this.getzone()
    // });
  },
  mounted () {
    // this.getzone()
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
    this.links.push(
          // {
          //   to: '/dashboard',
          //   icon: 'mdi-view-dashboard',
          //   text: 'Dashboard 1'
          // },
          // {
          //   to: '/dashboard2',
          //   icon: 'mdi-view-dashboard',
          //   text: 'Dashboard Zone 1'
          // },
          // ,
          // {
          //   to: '/user-profile',
          //   icon: 'mdi-account',
          //   text: 'User Profile'
          // },
          // {
          //   id: '5',
          //   to: '/historical',
          //   icon: 'mdi-clipboard-outline',
          //   text: 'Historical'
          // },
          // {
          //   to: '/typography',
          //   icon: 'mdi-format-font',
          //   text: 'Typography'
          // },
          // {
          //   to: '/icons',
          //   icon: 'mdi-chart-bubble',
          //   text: 'Icons'
          // },
          // {
          //   to: '/maps',
          //   icon: 'mdi-map-marker',
          //   text: 'Maps'
          // }
          // {
          //   to: '/notifications',
          //   icon: 'mdi-bell',
          //   text: 'Notifications'
          // })
        )
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  watch: {
    '$route' (val) {
      // alert((this.links).length)
      if ( this.$route.name != 'Login'){
        this.showTab = true
        this.getzone()
      } else {
        this.showTab = false
      }
      this.email = localStorage.email
    }
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    getzone(e) {
      // alert(localStorage.SiteID)
      axios.post(this.url_sev+'/getzone', {

          SiteID: localStorage.SiteID
      })
      .then(response => {
          console.log('get zone')
          console.log(response.data.status)
          if (response.data.status == 'fail') {
            alert('get zone fail')
          } else {

            this.links = response.data.zone_data
            this.links.unshift(

              {
                to: '/overview',
                icon: 'mdi-camera-timer',
                text: 'Overview'
              }
            )
            this.links.push(
              // {
              //   to: '/energy',
              //   icon: 'mdi-clipboard-outline',
              //   text: 'Energy'
              // },
              {
                to: '/historical',
                icon: 'mdi-timetable',
                text: 'Historical'
              },
              {
                to: '/schedule',
                icon: 'mdi-clipboard-outline',
                text: 'Schedule'
              }
            )
            if (this.adminStatus == 'Admin') {
              // alert('ok')
              this.links.push(
                {
                  to: '/switch',
                  icon: 'mdi-lightbulb-outline',
                  text: 'Switch'
                }
              )
            }
            console.log('s')

          }
      })
      .catch(error =>{
          alert('cannot connect server')
          console.log(error);
      })
    },
    // sendZone (ZoneID) {
    //   // alert('aa'+ZoneID)
    //   // this.$emit('test')
    //   // this.$emit("message", "I changed the message");
    //   this.$emit('event_child', 1)
    //   localStorage.ZoneID = ZoneID
    //   // location.reload()
    // }
  }
}
</script>

<style lang="scss">

@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}

.v-navigation-drawer .v-list {
    background: #4e73df !important;
}
  #app-drawer {

    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    div.v-responsive.v-image > div.v-responsive__content {
      overflow-y: auto;
    }
  }
</style>
