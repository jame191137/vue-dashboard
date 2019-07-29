<template>

  <v-container
    fill-height
    fluid
    grid-list-xl
  >
  <v-layout wrap>

    <v-flex
      md12
      sm12
      lg9
    >
      <v-card class="border-primary" v-if="adminStatus == 'Admin'">
        <v-card-title class="headtab">
          <v-icon dark large left >mdi-lightbulb-outline</v-icon>
          <span class="title font-weight-light varela-font boxheadwhite">{{"Switch"}}</span>
        </v-card-title>

        <!-- #############start############# -->
        <v-flex
          v-if="SiteID == '1' && adminStatus == 'Admin'"
          md12
          sm12
          lg12
        >

        <v-card class="" >
          <v-card-title class="headtab">
            <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
            <span  class="title font-weight-light varela-font boxheadwhite">{{"Site 1"}}</span>
          </v-card-title>
          <v-layout warp>

            <v-flex
              sm6
              md6
              lg5
              ml-5

            >
              <v-card flat>
                <div style="padding:5px" class="varela-font boxtitle3">{{"Zone 1"}} </div>
                <div style="padding:5px"  class="varela-font boxtitle3">{{"Zone 2"}} </div>
                <div style="padding:5px"  class="varela-font boxtitle3">{{"Zone 3"}} </div>
              </v-card>

            </v-flex>
            <v-flex
              sm6
              md6
              lg4
            >
              <v-card flat>
                <!-- <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch> -->
                <v-btn v-if="" :disabled="!stage_btn1" v-on:click="stage_btn1 = !stage_btn1 ; callPublish ('smart/cp1/plc1/Tx1','stage_btn1','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn1" v-on:click="stage_btn1 = !stage_btn1 ; callPublish ('smart/cp1/plc1/Tx1','stage_btn1','1')" color="error" >OFF</v-btn>
              </v-card>
              <v-card flat>
                <v-btn v-if="" :disabled="!stage_btn2" v-on:click="stage_btn2 = !stage_btn2 ; callPublish ('smart/cp1/plc1/Tx2','stage_btn2','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn2" v-on:click="stage_btn2 = !stage_btn2 ; callPublish ('smart/cp1/plc1/Tx2','stage_btn2','1')" color="error" >OFF</v-btn>
              </v-card>
              <v-card flat>
                <v-btn v-if="" :disabled="!stage_btn3" v-on:click="stage_btn3 = !stage_btn3 ; callPublish ('smart/cp1/plc2/Tx1','stage_btn1','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn3" v-on:click="stage_btn3 = !stage_btn3 ; callPublish ('smart/cp1/plc2/Tx1','stage_btn1','1')" color="error" >OFF</v-btn>
              </v-card>


            </v-flex>
         </v-layout>
       </v-card>
       </v-flex>
      <!-- ############end################ -->

        <!-- #############start############# -->
        <v-flex
          v-if="SiteID == '2' && adminStatus == 'Admin'"
          md12
          sm12
          lg12
        >

        <v-card class="" >
          <v-card-title class="headtab">
            <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
            <span  class="title font-weight-light varela-font boxheadwhite">{{"Site 2"}}</span>
          </v-card-title>
          <v-layout warp>

            <v-flex
              sm6
              md6
              lg5
              ml-5

            >
              <v-card flat>
                <div style="padding:5px" class="varela-font boxtitle3">{{"Zone 1"}} </div>
                <div style="padding:5px"  class="varela-font boxtitle3">{{"Zone 2"}} </div>
                <div style="padding:5px"  class="varela-font boxtitle3">{{"Zone 3"}} </div>
              </v-card>

            </v-flex>
            <v-flex
              sm6
              md6
              lg4
            >
              <v-card flat>
                <!-- <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch> -->
                <v-btn v-if="" :disabled="!stage_btn4" v-on:click="stage_btn4 = !stage_btn4 ; callPublish ('smart/cp2/plc1/Tx1','stage_btn4','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn4" v-on:click="stage_btn4 = !stage_btn4 ; callPublish ('smart/cp2/plc1/Tx1','stage_btn4','1')" color="error" >OFF</v-btn>
              </v-card>
              <v-card flat>
                <v-btn v-if="" :disabled="!stage_btn5" v-on:click="stage_btn5 = !stage_btn5 ; callPublish ('smart/cp2/plc1/Tx2','stage_btn5','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn5" v-on:click="stage_btn5 = !stage_btn5 ; callPublish ('smart/cp2/plc1/Tx2','stage_btn5','1')" color="error" >OFF</v-btn>
              </v-card>
              <v-card flat>
                <v-btn v-if="" :disabled="!stage_btn6" v-on:click="stage_btn6 = !stage_btn6 ; callPublish ('smart/cp2/plc2/Tx1','stage_btn6','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn6" v-on:click="stage_btn6 = !stage_btn6 ; callPublish ('smart/cp2/plc2/Tx1','stage_btn6','1')" color="error" >OFF</v-btn>
              </v-card>


            </v-flex>
         </v-layout>
       </v-card>
       </v-flex>
      <!-- ############end################ -->

        <!-- #############start############# -->
        <v-flex
          v-if="SiteID == '3' && adminStatus == 'Admin'"
          md12
          sm12
          lg12
        >

        <v-card class="" >
          <v-card-title class="headtab">
            <!-- <v-icon dark large left > mdi-chart-areaspline </v-icon> -->
            <span  class="title font-weight-light varela-font boxheadwhite">{{"Site 3"}}</span>
          </v-card-title>
          <v-layout warp>

            <v-flex
              sm6
              md6
              lg5
              ml-5

            >
              <v-card flat>
                <div style="padding:5px" class="varela-font boxtitle3">{{"Zone 1"}} </div>
                <div style="padding:5px"  class="varela-font boxtitle3">{{"Zone 2"}} </div>
                <div style="padding:5px"  class="varela-font boxtitle3">{{"Zone 3"}} </div>
              </v-card>

            </v-flex>
            <v-flex
              sm6
              md6
              lg4
            >
              <v-card flat>
                <!-- <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch> -->
                <v-btn v-if="" :disabled="!stage_btn7" v-on:click="stage_btn7 = !stage_btn7 ; callPublish ('smart/cp3/plc1/Tx1','stage_btn7','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn7" v-on:click="stage_btn7 = !stage_btn7 ; callPublish ('smart/cp3/plc1/Tx1','stage_btn7','1')" color="error" >OFF</v-btn>
              </v-card>
              <v-card flat>
                <v-btn v-if="" :disabled="!stage_btn8" v-on:click="stage_btn8 = !stage_btn8 ; callPublish ('smart/cp3/plc1/Tx2','stage_btn8','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn8" v-on:click="stage_btn8 = !stage_btn8 ; callPublish ('smart/cp3/plc1/Tx2','stage_btn8','1')" color="error" >OFF</v-btn>
              </v-card>
              <v-card flat>
                <v-btn v-if="" :disabled="!stage_btn9" v-on:click="stage_btn9 = !stage_btn9 ; callPublish ('smart/cp3/plc2/Tx1','stage_btn9','0')" color="primary" >ON</v-btn>
                <v-btn v-if="" :disabled="stage_btn9" v-on:click="stage_btn9 = !stage_btn9 ; callPublish ('smart/cp3/plc2/Tx1','stage_btn9','1')" color="error" >OFF</v-btn>
              </v-card>


            </v-flex>
         </v-layout>
       </v-card>
       </v-flex>
      <!-- ############end################ -->

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
      SiteID: localStorage.SiteID,
      // switch1: true,
      list_meter_status: [],
      stage_btn1: true,
      stage_btn2: true,
      stage_btn3: true,
      stage_btn4: true,
      stage_btn5: true,
      stage_btn6: true,
      stage_btn7: true,
      stage_btn8: true,
      stage_btn9: true,
      adminStatus : localStorage.adminStatus
    }
  },
  mounted () {
    this.getMeterStatus()
  },
  watch: {

  },
  created() {

	},
  methods: {
    callPublish(path,stage_btn,stage) {
      // alert(f)
      // this.stage_btn = stage
      axios.post(this.url_sev+'/publish', {
        path: path,
        value: stage
      })
      .then(response => {
          console.log(response.data)
          // alert(response.data)
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getMeterStatus(e) {
      // alert(f)
      // this.stage_btn = stage
      axios.post(this.url_sev+'/meterstatus', {

      })
      .then(response => {
          console.log(response.data)
          this.list_meter_status = response.data.list_meter_status
          console.log(this.list_meter_status[1])
          // this.stage_btn1 = false
          this.stage_btn1 = this.list_meter_status[0],
          this.stage_btn2 = this.list_meter_status[1],
          this.stage_btn3 = this.list_meter_status[2],
          this.stage_btn4 = this.list_meter_status[3],
          this.stage_btn5 = this.list_meter_status[4],
          this.stage_btn6 = this.list_meter_status[5],
          this.stage_btn7 = this.list_meter_status[6],
          this.stage_btn8 = this.list_meter_status[7],
          this.stage_btn9 = this.list_meter_status[8]
          // alert(response.data)
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
