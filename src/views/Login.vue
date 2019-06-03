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
                   prepend-icon="mdi-account"
                   :rules="[rules.required]"
                   label="Email ผู้ใช้งาน"
                   hint=""
                   persistent-hint
                 ></v-text-field>
          </v-flex>

            <v-flex xs12 sm10 lg10 ml-5>
              <v-text-field
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
              to="/dashboard"
            >
              <v-btn dark="false" outlined color="blue" >Login</v-btn>
            </router-link>
          </v-layout>

          </v-container>
        </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        show2: true,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    }
  }
</script>
