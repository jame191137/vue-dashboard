<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
  <v-layout justify-center mt-5>
    <v-flex
      sm12
      xs8
      md8
      lg5
    >
      <v-card

        class="mx-auto"
        color="white"
        max-width="1000"
      >
        <v-container
          fluid
          grid-list-md
        >

        <v-card-title class="justify-center">
          <span class="headline font-weight-medium">CP Dashboard</span>
        </v-card-title>

          <v-flex xs12 sm10 lg10 ml-5>
                 <v-text-field
                  v-model="usernametext"
                   prepend-icon="mdi-account"
                   :rules="[rules.required]"
                   label="Email ผู้ใช้งาน"
                   hint=""
                   persistent-hint
                 ></v-text-field>
          </v-flex>

            <v-flex xs12 sm10 lg10 ml-5>
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
            <router-link
              v-ripple
              class="toolbar-items"
              to="/dashboard2"
            >
              <v-btn v-on:click="loginAPI ()" outlined color="blue" >Login</v-btn>
            </router-link>
          </v-layout>

          </v-container>
        </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import axios from 'axios';
  export default {
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
        axios.post('http://localhost:8997/login', {
            username: 'admins1',
            password: '0000'
            // username: this.usernametext,
            // password: this.passwordtext
        })
        .then(response => {
            // this.databaseConfiguration = response.data;
            if (response.data.UPrivilege == 0) {

              this.$store.state.adminStatus = 'Admin'
            } else {
              this.$store.state.adminStatus = 'User'
            }
            this.$store.state.adminStatus = this.usernametext
            console.log(this.$store.state.adminStatus)
            // console.log(response.data.UPrivilege)
        })
        .catch(error =>{
            // this.errors.push(error);
            console.log(error);
        })
      },
      logirealtimeUsagenAPI(e) {
        axios.get('http://localhost:8997/realtimeusage', {
        })
        .then(response => {
            // this.databaseConfiguration = response.data;
            // if (response.data.UPrivilege == 0) {
            console.log(response.data)
            this.$store.state.RT_PSum = response.data.RT_PSum,
            this.$store.state.RT_ISum = response.data.RT_ISum,
            this.$store.state.RT_VSum = response.data.RT_VSum,
            console.log(this.$store.state.RT_PSum)
            // console.log(response.data.UPrivilege)
        })
        .catch(error =>{
            // this.errors.push(error);
            console.log(error);
        })
      },
    }
  }
</script>
