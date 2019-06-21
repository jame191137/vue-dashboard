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
      lg12
    >
      <v-card class="border-primary" >
        <v-card-title class="headtab">
          <v-icon dark large left > mdi-chart-areaspline </v-icon>
          <span  class="title font-weight-light varela-font boxheadwhite">{{"Realtime Trend"}}</span>
        </v-card-title>
        <!-- <v-card-title>
           mdi-chart-areaspline
          <span class="varela-font boxhead">{{"Realtime Trend"}}</span>
        </v-card-title> -->
         <v-divider light></v-divider>
        <!-- <div> -->
          <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
        <!-- </div> -->
      </v-card>
    </v-flex>

    <v-flex
      v-for="i in datameter"
      :key="i.id"
      sm12
      md6
      lg4
    >
      <v-card class="border-primary" height="100%">
        <v-card-title class="headtab">
          <v-icon dark large left > mdi-speedometer </v-icon>
          <span  class="title font-weight-light varela-font boxheadwhite">{{i.ZoneName}}{{"( "}}{{i.MeterName}}{{")"}}</span>
        </v-card-title>
        <v-card-text >
          <!-- <div class="varela-font boxhead">{{i.MeterName}}</div> -->
          <v-layout wrap>
              <v-flex
                sm6
                md6
                lg5
              >
                <v-card flat>


                <div class="varela-font boxtitle">{{"V1 "}} </div>
                <div class="varela-font boxtitle">{{"V2 "}} </div>
                <div class="varela-font boxtitle">{{"V3 "}} </div>
                <div class="varela-font boxtitle">{{"V12 "}} </div>
                <div class="varela-font boxtitle">{{"V23 "}} </div>
                <div class="varela-font boxtitle">{{"V31 "}} </div>
                <div class="varela-font boxtitle">{{"I1 "}} </div>
                <div class="varela-font boxtitle">{{"I2 "}} </div>
                <div class="varela-font boxtitle">{{"I3 "}} </div>
                <div class="varela-font boxtitle">{{"In "}} </div>
                <div class="varela-font boxtitle">{{"Pa "}}</div>
                <div class="varela-font boxtitle">{{"Pb "}} </div>
                <div class="varela-font boxtitle">{{"Pc "}} </div>
                <div class="varela-font boxtitle">{{"PSum "}} </div>
                <div class="varela-font boxtitle">{{"Qa "}} </div>
                <div class="varela-font boxtitle">{{"Qb "}} </div>
                <div class="varela-font boxtitle">{{"Qc "}} </div>
                <div class="varela-font boxtitle">{{"PFa "}} </div>
                <div class="varela-font boxtitle">{{"PFb "}} </div>
                <div class="varela-font boxtitle">{{"PFc "}} </div>
                <div class="varela-font boxtitle">{{"PFSum "}} </div>
                <div class="varela-font boxtitle">{{"Sa "}} </div>
                <div class="varela-font boxtitle">{{"Sb "}} </div>
                <div class="varela-font boxtitle">{{"Sc "}} </div>
                <div class="varela-font boxtitle">{{"F "}} </div>
                <div class="varela-font boxtitle">{{"kWh "}} </div>
              </v-card>
              </v-flex>
              <v-flex
                sm6
                md6
                lg5
              >
                <v-card flat>


                <div class="varela-font boxtitle"> {{i.RT_V1}} </div>
                <div class="varela-font boxtitle"> {{i.RT_V2}} </div>
                <div class="varela-font boxtitle">{{i.RT_V3}} </div>
                <div class="varela-font boxtitle"> {{i.RT_V12}} </div>
                <div class="varela-font boxtitle">{{i.RT_V23}} </div>
                <div class="varela-font boxtitle"> {{i.RT_V31}} </div>
                <div class="varela-font boxtitle">{{i.RT_I1}} </div>
                <div class="varela-font boxtitle">{{i.RT_I2}} </div>
                <div class="varela-font boxtitle">{{i.RT_I3}} </div>
                <div class="varela-font boxtitle"> {{i.RT_In}} </div>
                <div class="varela-font boxtitle"> {{i.RT_Pa}} </div>
                <div class="varela-font boxtitle">{{i.RT_Pb}} </div>
                <div class="varela-font boxtitle"> {{i.RT_Pc}} </div>
                <div class="varela-font boxtitle"> {{i.RT_PSum}} </div>
                <div class="varela-font boxtitle"> {{i.RT_Qa}} </div>
                <div class="varela-font boxtitle"> {{i.RT_Qb}} </div>
                <div class="varela-font boxtitle"> {{i.RT_Qc}} </div>
                <div class="varela-font boxtitle"> {{i.RT_PFa}} </div>
                <div class="varela-font boxtitle">{{i.RT_PFb}} </div>
                <div class="varela-font boxtitle"> {{i.RT_PFc}} </div>
                <div class="varela-font boxtitle"> {{i.RT_PFSum}} </div>
                <div class="varela-font boxtitle"> {{i.RT_Sa}} </div>
                <div class="varela-font boxtitle">{{i.RT_Sb}} </div>
                <div class="varela-font boxtitle">{{i.RT_Sc}} </div>
                <div class="varela-font boxtitle"> {{i.RT_F}} </div>
                <div class="varela-font boxtitle"> {{i.RT_kWh}} </div>
              </v-card>
            </v-flex>
              <v-flex
                sm6
                md6
                lg2
              >
                <v-card flat>


                <div class="varela-font boxtitle"> {{" V"}}</div>
                <div class="varela-font boxtitle"> {{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>
                <div class="varela-font boxtitle">{{" V"}}</div>

              </v-card>
            </v-flex>
          </v-layout>
        </v-card-text>
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
      datameter: [],
      hour_Psum: [],
      date_Psum: [],
      list_psum: [],
      rand: 0,
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          height: 200
          },
          xaxis: {
            // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            categories: []
          }
        },
      series: [{
          name: 'series-1',
          data: []
          // data: [30, 40, 35, 50, 49, 60, 70, 91]
      }],

    }
  },
  mounted () {
    this.getdataMeter()
    // this.updateChart()
    this.getLogPsumAll()
  },
  watch: {

  },
  created() {

	},
  methods: {

    realtimeUsageAPI(e) {

      axios.post(this.$store.state.url_sev+'/realtimeusage', {
          ZoneID: this.ZoneID
      })
      .then(response => {

          this.$store.state.RT_PSum = response.data.RT_PSum
          this.$store.state.RT_ISum = response.data.RT_ISum
          this.$store.state.RT_VSum = response.data.RT_VSum
          // console.log(this.$store.state.RT_PSum)
          // console.log(response.data.UPrivilege)
      })
      .catch(error =>{
          // this.errors.push(error);
          console.log(error)
      })
    },
    // getLogPsum(e) {
    //   axios.post(this.$store.state.url_sev+'/logpsum', {
    //     MeterID: '1'
    //   })
    //   .then(response => {
    //       console.log(response.data)
    //       this.$store.state.Psum = response.data.Psum
    //       this.$store.state.date_Psum = response.data.date_Psum
    //       this.updateChart()
    //   })
    //   .catch(error =>{
    //       console.log(error);
    //   })
    // },
    getdataMeter(e) {

      axios.post(this.url_sev+'/datameter', {
        SiteID: localStorage.SiteID
        // ZoneID: localStorage.SiteID
      })
      .then(response => {
          this.datameter = response.data.datameter
          // this.date_Psum2 = response.data.date_Psum
          // this.updateChart()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getLogPsumAll(e) {
      console.log(localStorage.SiteID)
      axios.post(this.url_sev+'/logpsumall', {
        SiteID: localStorage.SiteID
      })
      .then(response => {
          console.log(response.data)
          this.list_psum = response.data.list_psum
          this.hour_Psum = response.data.hour_Psum
          this.updateChart()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    // getLogPsum2(e) {
    //
    //   axios.post(this.$store.state.url_sev+'/logpsum2', {
    //     ZoneID: this.ZoneID
    //   })
    //   .then(response => {
    //       this.list_psum2 = response.data.list_psum
    //       this.date_Psum2 = response.data.date_Psum
    //       this.updateChart()
    //   })
    //   .catch(error =>{
    //       console.log(error);
    //   })
    // },
    updateChart() {
      // const newData = this.$store.state.Psum
      // console.log(this.list_psum2)
      const newData2 = this.list_psum
      this.chartOptions = {
        chart: {
            width: "100%",
            height: 500
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top'
              }
            },
          },
          // dataLabels: {
          //   enabled: true,
          //   offsetY: -10,
          //   style: {
          //     fontSize: '12px',
          //     colors: ["#304758"]
          //   }
          // },
          markers: {
            size: 5,
            hover: {
              size: 9
            }
          },
          xaxis: {
            // categories: this.$store.state.date_Psum
            categories: this.date_Psum
          },
          yaxis: [
            {
              axisBorder: {
                show: true,
              },
              title: {
                text: "Kw"
              }
          }
          // ,
          // {
          //   opposite: true,
          //   axisBorder: {
          //     show: true,
          //   }
          // }
        ],
      }
      // this.series = [{
      //  name: "Meter 1",
      //  data: [2, 4, 3, 2, 3, 4, 2, 3 ]
      //  },
      //  {
      //   name: "Meter 2",
      //   data: [2, 4, 3, 2, 3, 4, 2, 3 ]
      //  }]
      // console.log(newData2)
      this.series = newData2
    },

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
.boxtitle {
  color: #464854;
  font-weight: 500 !important;
  font-size: 25px;
  /* letter-spacing: -1px; */
  text-transform: uppercase !important;
}
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>
