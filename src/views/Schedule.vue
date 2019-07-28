<template>

  <v-container
    fill-height
    fluid
    grid-list-xl
  >
  <v-layout wrap>


    <v-flex
      md9
      sm9
      lg9
    >
      <v-card class="border-primary" >
        <v-card-title class="headtab">
          <v-icon dark large left > mdi-calendar-clock</v-icon>
          <span  class="title font-weight-light varela-font boxheadwhite">{{"Schedule"}}</span>
          <v-spacer></v-spacer>
          <v-btn v-on:click="setTime ()" color="primary">SAVE</v-btn>
        </v-card-title>

        <v-flex
          md12
          sm12
          lg12
        >
        <v-card v-if="1==0" flat class="" >
          <v-layout row warp>
            <v-flex
              lg2
              mt-3
            >
                <v-card-text>
                  <div class="varela-font boxhead">Mode :</div>
                </v-card-text>

            </v-flex>
            <v-flex
              lg2
            >
                <v-card-text>
                  <v-btn color="error">Normal</v-btn>
                </v-card-text>

            </v-flex>
            <v-flex
              lg2
            >
                <v-card-text>
                  <v-btn color="primary">Schedule</v-btn>

                </v-card-text>

            </v-flex>
          </v-layout>
        </v-card>

        <!-- ###########start############ -->
        <v-card class="" >
          <v-card-title class="headtab">
            <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
            <span  class="title font-weight-light varela-font boxheadwhite">{{"Sunday"}}</span>
          </v-card-title>
          <v-layout row warp>
            <v-flex

              lg1
            >
              <v-card flat >
                <v-card-text>
                  <!-- <v-card-actions>
                  </v-card-actions> -->
                  <div class="varela-font boxhead">Start</div>
                </v-card-text>
              </v-card>
            </v-flex>

           <v-flex md2
             sm2
             lg2
             ml-5>

                <v-menu
                 ref="menu1"
                 v-model="menu1"
                 :close-on-content-click="false"
                 :nudge-right="40"
                 :return-value.sync="d1_open_time"
                 lazy
                 transition="scale-transition"
                 offset-y
                 full-width
                 max-width="290px"
                 min-width="290px">
               <template v-slot:activator="{ on }">
                 <v-text-field
                   class="text-xs-center"
                   v-model="d1_open_time"
                   label="Select Time"
                   prepend-icon=""
                   readonly
                   v-on="on"
                 ></v-text-field>
               </template>
               <v-time-picker
                 format="24hr"
                 v-if="menu1"
                 v-model="d1_open_time"
                 full-width
                 color="blue"
                 @click:minute="$refs.menu1.save(d1_open_time)"
               ></v-time-picker>
             </v-menu>
           </v-flex>

           <v-flex

             lg1
             ml-5
           >
             <!-- <v-card flat > -->
               <v-card-text>
                 <!-- <v-card-actions>
                 </v-card-actions> -->
                 <div class="varela-font boxhead">Stop</div>
               </v-card-text>
             <!-- </v-card> -->
           </v-flex>

           <v-flex md2
             sm2
             lg2
             ml-5>

                <v-menu
                 ref="menu2"
                 v-model="menu2"
                 :close-on-content-click="false"
                 :nudge-right="40"
                 :return-value.sync="d1_close_time"
                 lazy
                 transition="scale-transition"
                 offset-y
                 full-width
                 max-width="290px"
                 min-width="290px">
               <template v-slot:activator="{ on }">
                 <v-text-field
                   class="text-xs-center"
                   v-model="d1_close_time"
                   label="Select Time"
                   prepend-icon=""
                   readonly
                   v-on="on"
                 ></v-text-field>
               </template>
               <v-time-picker
                 format="24hr"
                 v-if="menu2"
                 v-model="d1_close_time"
                 full-width
                 color="blue"
                 @click:minute="$refs.menu2.save(d1_close_time)"
               ></v-time-picker>
             </v-menu>
           </v-flex>

         </v-layout>
       </v-card>
       </v-flex>

       <!-- ##########end############# -->

        <!-- ##########start############# -->
       <v-flex
         md12
         sm12
         lg12
       >
       <v-card class="" >
         <v-card-title class="headtab">
           <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
           <span  class="title font-weight-light varela-font boxheadwhite">{{"Monday"}}</span>
         </v-card-title>
         <v-layout row warp>
           <v-flex

             lg1
           >
             <v-card flat >
               <v-card-text>
                 <!-- <v-card-actions>
                 </v-card-actions> -->
                 <div class="varela-font boxhead">Start</div>
               </v-card-text>
             </v-card>
           </v-flex>

           <v-flex md2
             sm2
             lg2
             ml-5>

                <v-menu
                 ref="menu3"
                 v-model="menu3"
                 :close-on-content-click="false"
                 :nudge-right="40"
                 :return-value.sync="d2_open_time"
                 lazy
                 transition="scale-transition"
                 offset-y
                 full-width
                 max-width="290px"
                 min-width="290px">
               <template v-slot:activator="{ on }">
                 <v-text-field
                   class="text-xs-center"
                   v-model="d2_open_time"
                   label="Select Time"
                   prepend-icon=""
                   readonly
                   v-on="on"
                 ></v-text-field>
               </template>
               <v-time-picker
                 format="24hr"
                 v-if="menu3"
                 v-model="d2_open_time"
                 full-width
                 color="blue"
                 @click:minute="$refs.menu3.save(d2_open_time)"
               ></v-time-picker>
             </v-menu>
           </v-flex>

          <v-flex

            lg1
            ml-5
          >
            <!-- <v-card flat > -->
              <v-card-text>
                <!-- <v-card-actions>
                </v-card-actions> -->
                <div class="varela-font boxhead">Stop</div>
              </v-card-text>
            <!-- </v-card> -->
          </v-flex>

          <v-flex md2
            sm2
            lg2
            ml-5>

               <v-menu
                ref="menu4"
                v-model="menu4"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="d2_close_time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="text-xs-center"
                  v-model="d2_close_time"
                  label="Select Time"
                  prepend-icon=""
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                format="24hr"
                v-if="menu4"
                v-model="d2_close_time"
                full-width
                color="blue"
                @click:minute="$refs.menu4.save(d2_close_time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-card>
      </v-flex>

      <!-- ##########end############# -->
      <!-- ##########start############# -->

      <v-flex
        md12
        sm12
        lg12
      >
      <v-card class="" >
        <v-card-title class="headtab">
          <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
          <span  class="title font-weight-light varela-font boxheadwhite">{{"Tuesday"}}</span>
        </v-card-title>
        <v-layout row warp>
          <v-flex

            lg1
          >
            <v-card flat >
              <v-card-text>
                <!-- <v-card-actions>
                </v-card-actions> -->
                <div class="varela-font boxhead">Start</div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md2
            sm2
            lg2
            ml-5>

               <v-menu
                ref="menu5"
                v-model="menu5"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="d3_open_time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="text-xs-center"
                  v-model="d3_open_time"
                  label="Select Time"
                  prepend-icon=""
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                format="24hr"
                v-if="menu5"
                v-model="d3_open_time"
                full-width
                color="blue"
                @click:minute="$refs.menu5.save(d3_open_time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>

         <v-flex

           lg1
           ml-5
         >
           <!-- <v-card flat > -->
             <v-card-text>
               <!-- <v-card-actions>
               </v-card-actions> -->
               <div class="varela-font boxhead">Stop</div>
             </v-card-text>
           <!-- </v-card> -->
         </v-flex>

         <v-flex md2
           sm2
           lg2
           ml-5>

              <v-menu
               ref="menu6"
               v-model="menu6"
               :close-on-content-click="false"
               :nudge-right="40"
               :return-value.sync="d3_close_time"
               lazy
               transition="scale-transition"
               offset-y
               full-width
               max-width="290px"
               min-width="290px">
             <template v-slot:activator="{ on }">
               <v-text-field
                 class="text-xs-center"
                 v-model="d3_close_time"
                 label="Select Time"
                 prepend-icon=""
                 readonly
                 v-on="on"
               ></v-text-field>
             </template>
             <v-time-picker
               format="24hr"
               v-if="menu6"
               v-model="d3_close_time"
               full-width
               color="blue"
               @click:minute="$refs.menu6.save(d3_close_time)"
             ></v-time-picker>
           </v-menu>
         </v-flex>
       </v-layout>
     </v-card>
     </v-flex>

     <!-- ##########end############# -->
     <!-- ##########start############# -->

     <v-flex
       md12
       sm12
       lg12
     >
     <v-card class="" >
       <v-card-title class="headtab">
         <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
         <span  class="title font-weight-light varela-font boxheadwhite">{{"Wednesday"}}</span>
       </v-card-title>
       <v-layout row warp>
         <v-flex

           lg1
         >
           <v-card flat >
             <v-card-text>
               <!-- <v-card-actions>
               </v-card-actions> -->
               <div class="varela-font boxhead">Start</div>
             </v-card-text>
           </v-card>
         </v-flex>

         <v-flex md2
           sm2
           lg2
           ml-5>

              <v-menu
               ref="menu7"
               v-model="menu7"
               :close-on-content-click="false"
               :nudge-right="40"
               :return-value.sync="d4_open_time"
               lazy
               transition="scale-transition"
               offset-y
               full-width
               max-width="290px"
               min-width="290px">
             <template v-slot:activator="{ on }">
               <v-text-field
                 class="text-xs-center"
                 v-model="d4_open_time"
                 label="Select Time"
                 prepend-icon=""
                 readonly
                 v-on="on"
               ></v-text-field>
             </template>
             <v-time-picker
               format="24hr"
               v-if="menu7"
               v-model="d4_open_time"
               full-width
               color="blue"
               @click:minute="$refs.menu7.save(d4_open_time)"
             ></v-time-picker>
           </v-menu>
         </v-flex>

        <v-flex

          lg1
          ml-5
        >
          <!-- <v-card flat > -->
            <v-card-text>
              <!-- <v-card-actions>
              </v-card-actions> -->
              <div class="varela-font boxhead">Stop</div>
            </v-card-text>
          <!-- </v-card> -->
        </v-flex>

        <v-flex md2
          sm2
          lg2
          ml-5>

             <v-menu
              ref="menu8"
              v-model="menu8"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="d4_close_time"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                class="text-xs-center"
                v-model="d4_close_time"
                label="Select Time"
                prepend-icon=""
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              format="24hr"
              v-if="menu8"
              v-model="d4_close_time"
              full-width
              color="blue"
              @click:minute="$refs.menu8.save(d4_close_time)"
            ></v-time-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-card>
    </v-flex>

    <!-- ##########end############# -->
    <!-- ##########start############# -->

    <v-flex
      md12
      sm12
      lg12
    >
    <v-card class="" >
      <v-card-title class="headtab">
        <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
        <span  class="title font-weight-light varela-font boxheadwhite">{{"Thursday"}}</span>
      </v-card-title>
      <v-layout row warp>
        <v-flex

          lg1
        >
          <v-card flat >
            <v-card-text>
              <!-- <v-card-actions>
              </v-card-actions> -->
              <div class="varela-font boxhead">Start</div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex md2
          sm2
          lg2
          ml-5>

             <v-menu
              ref="menu9"
              v-model="menu9"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="d5_open_time"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                class="text-xs-center"
                v-model="d5_open_time"
                label="Select Time"
                prepend-icon=""
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              format="24hr"
              v-if="menu9"
              v-model="d5_open_time"
              full-width
              color="blue"
              @click:minute="$refs.menu9.save(d5_open_time)"
            ></v-time-picker>
          </v-menu>
        </v-flex>

       <v-flex

         lg1
         ml-5
       >
         <!-- <v-card flat > -->
           <v-card-text>
             <!-- <v-card-actions>
             </v-card-actions> -->
             <div class="varela-font boxhead">Stop</div>
           </v-card-text>
         <!-- </v-card> -->
       </v-flex>

       <v-flex md2
         sm2
         lg2
         ml-5>

            <v-menu
             ref="menu10"
             v-model="menu10"
             :close-on-content-click="false"
             :nudge-right="40"
             :return-value.sync="d5_close_time"
             lazy
             transition="scale-transition"
             offset-y
             full-width
             max-width="290px"
             min-width="290px">
           <template v-slot:activator="{ on }">
             <v-text-field
               class="text-xs-center"
               v-model="d5_close_time"
               label="Select Time"
               prepend-icon=""
               readonly
               v-on="on"
             ></v-text-field>
           </template>
           <v-time-picker
             format="24hr"
             v-if="menu10"
             v-model="d5_close_time"
             full-width
             color="blue"
             @click:minute="$refs.menu10.save(d5_close_time)"
           ></v-time-picker>
         </v-menu>
       </v-flex>
     </v-layout>
   </v-card>
   </v-flex>

   <!-- ##########end############# -->
   <!-- ##########start############# -->

        <v-flex
          md12
          sm12
          lg12
        >
        <v-card class="" >
          <v-card-title class="headtab">
            <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
            <span  class="title font-weight-light varela-font boxheadwhite">{{"Friday"}}</span>
          </v-card-title>
          <v-layout row warp>
            <v-flex

              lg1
            >
              <v-card flat >
                <v-card-text>
                  <!-- <v-card-actions>
                  </v-card-actions> -->
                  <div class="varela-font boxhead">Start</div>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md2
              sm2
              lg2
              ml-5>

                 <v-menu
                  ref="menu11"
                  v-model="menu11"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="d6_open_time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    class="text-xs-center"
                    v-model="d6_open_time"
                    label="Select Time"
                    prepend-icon=""
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  format="24hr"
                  v-if="menu11"
                  v-model="d6_open_time"
                  full-width
                  color="blue"
                  @click:minute="$refs.menu11.save(d6_open_time)"
                ></v-time-picker>
              </v-menu>
            </v-flex>

           <v-flex

             lg1
             ml-5
           >
             <!-- <v-card flat > -->
               <v-card-text>
                 <!-- <v-card-actions>
                 </v-card-actions> -->
                 <div class="varela-font boxhead">Stop</div>
               </v-card-text>
             <!-- </v-card> -->
           </v-flex>

           <v-flex md2
             sm2
             lg2
             ml-5>

                <v-menu
                 ref="menu12"
                 v-model="menu12"
                 :close-on-content-click="false"
                 :nudge-right="40"
                 :return-value.sync="d6_close_time"
                 lazy
                 transition="scale-transition"
                 offset-y
                 full-width
                 max-width="290px"
                 min-width="290px">
               <template v-slot:activator="{ on }">
                 <v-text-field
                   class="text-xs-center"
                   v-model="d6_close_time"
                   label="Select Time"
                   prepend-icon=""
                   readonly
                   v-on="on"
                 ></v-text-field>
               </template>
               <v-time-picker
                 format="24hr"
                 v-if="menu12"
                 v-model="d6_close_time"
                 full-width
                 color="blue"
                 @click:minute="$refs.menu12.save(d6_close_time)"
               ></v-time-picker>
             </v-menu>
           </v-flex>
         </v-layout>
       </v-card>
       </v-flex>

       <!-- ##########end############# -->
       <!-- ##########start############# -->

       <v-flex
         md12
         sm12
         lg12
       >
       <v-card class="" >
         <v-card-title class="headtab">
           <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
           <span  class="title font-weight-light varela-font boxheadwhite">{{"Saturday"}}</span>
         </v-card-title>
         <v-layout row warp>
           <v-flex

             lg1
           >
             <v-card flat >
               <v-card-text>
                 <!-- <v-card-actions>
                 </v-card-actions> -->
                 <div class="varela-font boxhead">Start</div>
               </v-card-text>
             </v-card>
           </v-flex>

           <v-flex md2
             sm2
             lg2
             ml-5>

                <v-menu
                 ref="menu13"
                 v-model="menu13"
                 :close-on-content-click="false"
                 :nudge-right="40"
                 :return-value.sync="d7_open_time"
                 lazy
                 transition="scale-transition"
                 offset-y
                 full-width
                 max-width="290px"
                 min-width="290px">
               <template v-slot:activator="{ on }">
                 <v-text-field
                   class="text-xs-center"
                   v-model="d7_open_time"
                   label="Select Time"
                   prepend-icon=""
                   readonly
                   v-on="on"
                 ></v-text-field>
               </template>
               <v-time-picker
                 format="24hr"
                 v-if="menu13"
                 v-model="d7_open_time"
                 full-width
                 color="blue"
                 @click:minute="$refs.menu13.save(d7_open_time)"
               ></v-time-picker>
             </v-menu>
           </v-flex>

          <v-flex

            lg1
            ml-5
          >
            <!-- <v-card flat > -->
              <v-card-text>
                <!-- <v-card-actions>
                </v-card-actions> -->
                <div class="varela-font boxhead">Stop</div>
              </v-card-text>
            <!-- </v-card> -->
          </v-flex>

          <v-flex md2
            sm2
            lg2
            ml-5>

               <v-menu
                ref="menu14"
                v-model="menu14"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="d7_close_time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="text-xs-center"
                  v-model="d7_close_time"
                  label="Select Time"
                  prepend-icon=""
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                format="24hr"
                v-if="menu14"
                v-model="d7_close_time"
                full-width
                color="blue"
                @click:minute="$refs.menu14.save(d7_close_time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
      </v-card>



    </v-flex>


  </v-layout>

  </v-container>
</template>

<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
import axios from 'axios';
import ApexCharts from 'apexcharts';
export default {
  data () {
    return {
      // url_sev: 'http://localhost:8997',
      url_sev: 'http://35.186.149.130:8997',
      d1_open_time: '',
      menu1: false,
      d2_open_time: '',
      menu2: false,
      d3_open_time: null,
      menu3: false,
      d4_open_time: null,
      menu4: false,
      d5_open_time: null,
      menu5: false,
      d6_open_time: null,
      menu6: false,
      d7_open_time: null,
      menu7: false,
      d1_close_time: null,
      menu8: false,
      d2_close_time: null,
      menu9: false,
      d3_close_time: null,
      menu10: false,
      d4_close_time: null,
      menu11: false,
      d5_close_time: null,
      menu12: false,
      d6_close_time: null,
      menu13: false,
      d7_close_time: null,
      menu14: false,
      list_time: []
    }

  },
  mounted () {
    this.getTimeStatus()
  },
  watch: {

  },
  created() {

	},
  methods: {
    getTimeStatus(e) {
      // alert(f)
      // this.stage_btn = stage
      axios.post(this.url_sev+'/schedulestatus', {

      })
      .then(response => {
          console.log(response.data)
          this.list_time = response.data.list_time
          // console.log(this.list_time[1])
          // this.stage_btn1 = false
          this.d1_open_time = this.list_time[0],
          this.d1_close_time = this.list_time[1],
          this.d2_open_time = this.list_time[2],
          this.d2_close_time = this.list_time[3],
          this.d3_open_time = this.list_time[4],
          this.d3_close_time = this.list_time[5],
          this.d4_open_time = this.list_time[6],
          this.d4_close_time = this.list_time[7],
          this.d5_open_time = this.list_time[8],
          this.d5_close_time = this.list_time[9],
          this.d6_open_time = this.list_time[10],
          this.d6_close_time = this.list_time[11],
          this.d7_open_time = this.list_time[12],
          this.d7_close_time = this.list_time[13],
          console.log(this.d1_open_time)
      })
      .catch(error =>{
          console.log(error);
      })
    },
    setTime(e) {
      // alert(f)
      // this.stage_btn = stage
      axios.post(this.url_sev+'/setschedule', {
        d1_open_time : this.d1_open_time,
        d1_close_time : this.d1_close_time,
        d2_open_time : this.d2_open_time,
        d2_close_time : this.d2_close_time,
        d3_open_time : this.d3_open_time,
        d3_close_time : this.d3_close_time,
        d4_open_time : this.d4_open_time,
        d4_close_time : this.d4_close_time,
        d5_open_time : this.d5_open_time,
        d5_close_time : this.d5_close_time,
        d6_open_time : this.d6_open_time,
        d6_close_time : this.d6_close_time,
        d7_open_time : this.d7_open_time,
        d7_close_time : this.d7_close_time,
      })
      .then(response => {
          console.log(response.data)
          alert("save success")
      })
      .catch(error =>{
          console.log(error);
      })
    }

  },

}
</script>
<style>
/* @import url('//fonts.googleapis.com/css?family=Nunito'); */
@import url('//fonts.googleapis.com/css?family=Varela+Round&display=swap');

.border-primary {
    border-left: .25rem solid #4e73df !important;
}
.varela-font{
  /* font-family: Nunito; line-height: 38px; */
  font-family: 'Varela Round', sans-serif;
  /* font-family: 'Nunito', sans-serif; */
}
.boxhead {
  color: #4e73df;
  font-size: 15px;
  font-weight: 900 !important;
  /* letter-spacing: -1px; */
  text-transform: uppercase !important;
}
.boxheadwhite {
  color: #ffffff;
  font-size: 15px;
  font-weight: 900 !important;
  /* letter-spacing: -1px; */
  text-transform: uppercase !important;
}
.headtab {
  background-color: #4e73df;
}
.boxtitle2 {
  color: #464854;
  font-weight: 500 !important;
  font-size: 25px;
  /* letter-spacing: -1px; */
  /* text-transform: uppercase !important; */
}
.boxtitle3 {
  color: #4e73df;
  font-weight: 500 !important;
  font-size: 25px;
  /* letter-spacing: -1px; */
  /* text-transform: uppercase !important; */
}
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>
