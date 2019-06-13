<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
  <v-layout>
    <v-flex
      sm12
      xs12
      md12
      lg12
      xl9
    >
    <v-card height="170%" class="justify-center">
      <v-layout justify-center wrap align-center>
      <v-flex
        sm12
        xs12
        md6
        lg6
        xl6

      >
      <v-img
        src="https://upload.wikimedia.org/wikipedia/th/3/39/CPALL2015.png"
        width="100%"
        contain

      />
    </v-flex>
    <v-flex
      sm12
      xs12
      md6
      lg6
      xl6
      pt-5

    >
      <v-card
        flat
        color="white"
      >
        <!-- <v-container
          fluid
          grid-list-md
        > -->

        <v-card-title class="justify-center">
          <span class="headline font-weight-medium mr-5">Lighting Monitoring System</span>
        </v-card-title>

          <v-flex xs12 sm10 lg10>
                 <v-text-field
                  v-model="usernametext"
                   prepend-icon="mdi-account"
                   :rules="[rules.required]"
                   label="Email Address"
                   hint=""
                   persistent-hint
                 ></v-text-field>
          </v-flex>

            <v-flex xs12 sm10 lg10>
              <v-text-field
                  v-model="passwordtext"
                  prepend-icon="mdi-lock"
                 :rules="[rules.required]"
                 :type="password"
                 label="Password"
                 hint=""
               ></v-text-field>
            </v-flex>

          <v-layout justify-center>
            <v-btn v-on:click="loginAPI ()" outlined color="blue" >Login</v-btn>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs12 sm10 lg10 ml-0>
              <router-link
                v-ripple
                class=""
                to=""
              >
                <p class="text-lg-center">Forgot Password ?</p>
                </router-link>
            </v-flex>
          </v-layout>
          <!-- </v-container> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</v-flex>
  </v-layout>
</v-container>
</template>
<script>
// const events = new Vue({})
import axios from 'axios';
  export default {
    mounted () {
      // this.$store.state.url_sev = 'http://localhost:8997'
      this.$store.state.url_sev = 'http://35.186.149.130:8997'
    },
    data () {
      return {
        show2: true,
        usernametext: '',
        passwordtext: '',
        emailtext: '',
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    },
    methods: {
      loginAPI(e) {
        // axios.post('http://localhost:8997/login', {
        axios.post(this.$store.state.url_sev+'/login', {
            username: 'admins1',
            password: '0000'
            // username: this.usernametext,
            // password: this.passwordtext
        })
        .then(response => {
            console.log(response.data.status)
            if (response.data.status == 'fail') {
              alert('wrong user')
            } else {
              if (response.data.UPrivilege == 0) {
                // this.$cookies.set('adminStatus','Admin')
                localStorage.adminStatus = 'Admin'
              } else {
                // this.$cookies.set('adminStatus','User')
                localStorage.adminStatus = 'User'
              }

              localStorage.email = this.usernametext

              localStorage.SiteID = response.data.SiteID

              // alert(localStorage.SiteID)
              localStorage.checklogin = true
              // this.$forceUpdate()
              // this.$emit('logined')
              this.$router.push('/Dashboard2')
            }
        })
        .catch(error =>{
            alert('error')
            console.log(error);
        })
      }


    }
  }
</script>
