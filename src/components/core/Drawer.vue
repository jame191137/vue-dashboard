<template>

  <v-navigation-drawer
    id="app-drawer"
    v-if="$route.name == 'Dashboard'|| $route.name == 'Dashboard2' || $route.name == 'Historical' "
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
            <!-- <v-img
              :src="logo"
              height="34"
              contain
            /> -->
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Monitoring
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
            <v-icon>{{ link.icon }}</v-icon>
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

export default {
  data: () => ({
    logo: './img/vuetifylogo.png',
    links: [],
    responsive: false
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
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
    this.links.push(
          // {
          //   to: '/dashboard',
          //   icon: 'mdi-view-dashboard',
          //   text: 'Dashboard 1'
          // },
          {
            to: '/dashboard2',
            icon: 'mdi-view-dashboard',
            text: 'Dashboard Zone 1'
          },
          // ,
          // {
          //   to: '/user-profile',
          //   icon: 'mdi-account',
          //   text: 'User Profile'
          // },
          {
            to: '/historical',
            icon: 'mdi-clipboard-outline',
            text: 'Historical'
          },
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
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
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
