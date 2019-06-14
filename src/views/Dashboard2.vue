<template>

  <v-container
    fill-height
    fluid
    grid-list-xl
    v-if="reloadPage"
  >
    <v-layout wrap>

        <v-flex
          md12
          sm12
          lg4
        >
        <v-card class="border-primary" height="100%">
          <v-card-text>
            <!-- <v-card-actions>
            </v-card-actions> -->
            <div class="varela-font boxhead">REALTIME USAGE ( Watts )</div>
            <div class="varela-font boxtitle">{{this.$store.state.RT_PSum}} W</div>
          </v-card-text>
        </v-card>
        </v-flex>

        <v-flex
          md12
          sm12
          lg4
        >
        <v-card class="border-primary" height="100%">
          <v-card-text>
            <!-- <v-card-actions>
            </v-card-actions> -->
            <div class="varela-font boxhead">REALTIME USAGE ( Amps )</div>
            <div class="varela-font boxtitle">{{this.$store.state.RT_ISum}} A</div>
          </v-card-text>
        </v-card>
        </v-flex>

        <v-flex
          md12
          sm12
          lg4
        >
        <v-card class="border-primary" height="100%">
          <v-card-text>
            <!-- <v-card-actions>
            </v-card-actions> -->
            <div class="varela-font boxhead">REALTIME USAGE ( Volts )</div>
            <div class="varela-font boxtitle">{{this.$store.state.RT_VSum}} V</div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg12
      >
        <v-card>
          <v-card-title>
            <span class="varela-font boxhead">{{"Realtime Trend"}}</span>
          </v-card-title>
           <v-divider light></v-divider>
          <!-- <div> -->
            <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
          <!-- </div> -->
        </v-card>
      </v-flex>

      <v-flex
        v-for="i in button_data"
        :key="i.id"
        sm12
        md6
        lg3
      >
        <v-card class="border-primary" >
          <v-card-text>
          <div class="varela-font boxhead">{{i.name}}</div>
            <!-- :label="`state: ${i.switch_state}`" -->
             <v-switch
                 v-model="i.model"

                 color="success"
                 hide-details
               ></v-switch>
            </v-card-text>
        </v-card>
      </v-flex>

      <v-flex
        v-for="i in uptime_data"
        :key="i.id"
        sm12
        md6
        lg3
      >
        <v-card class="border-primary" height="100%">
          <v-card-text>
          <div class="varela-font boxhead">{{i.name}}</div>

            <div class="varela-font boxtitle">{{i.value}}</div>
          </v-card-text>
        </v-card>

      </v-flex>


      <v-flex
        sm12
        md6
        lg3
      >
      <v-card class="border-primary" height="100%">
        <v-card-text>
          <!-- <v-card-actions>
          </v-card-actions> -->
          <div class="varela-font boxhead">Total today</div>
          <div class="varela-font boxtitle">{{this.RT_kWh_Today}} kWH</div>
        </v-card-text>
      </v-card>
      </v-flex>

      <v-flex
        sm12
        md6
        lg3
      >
      <v-card class="border-primary" height="100%">
        <v-card-text>
          <!-- <v-card-actions>
          </v-card-actions> -->
          <div class="varela-font boxhead">Daily avh</div>
          <div class="varela-font boxtitle">{{this.RT_kWh_Daily_Avg}} kWH</div>
        </v-card-text>
      </v-card>
      </v-flex>

      <v-flex
        sm12
        md6
        lg3
      >
      <v-card class="border-primary" height="100%">
        <v-card-text>
          <!-- <v-card-actions>
          </v-card-actions> -->
          <div class="varela-font boxhead">Total this month</div>
          <div class="varela-font boxtitle">{{this.RT_kWh_Monthly}} kWH</div>
        </v-card-text>
      </v-card>
      </v-flex>

      <v-flex
        sm12
        md6
        lg3
      >
      <v-card class="border-primary" height="100%">
        <v-card-text>
          <!-- <v-card-actions>
          </v-card-actions> -->
          <div class="varela-font boxhead">Monthly avg</div>
          <div class="varela-font boxtitle">{{this.RT_kWh_Monthly_Avg}} kWH</div>
        </v-card-text>
      </v-card>
      </v-flex>

      <v-flex
        sm12
        xs12
        md12
        lg8
      >
      <!-- <v-card>
          <DateChart :chart-data="datacollection" :width="100" :height="50"> </DateChart>
      </v-card> -->
      <v-card>
        <v-card-title>
          <span class="varela-font boxhead">{{"Last 30 days (kWH)"}}</span>
        </v-card-title>
         <v-divider light></v-divider>
        <div>
          <!-- <apexchart height="200%" width="80%" type="bar" :options="chartOptionsDaySum" :series="seriesDaySum"></apexchart> -->
          <apexchart type="bar" :options="chartOptionsDaySum" :series="seriesDaySum"></apexchart>
        </div>
      </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
      <v-card>
        <v-card-title>
          <span class="varela-font boxhead">{{"Last 12 Months (kHW)"}}</span>
        </v-card-title>
         <v-divider light></v-divider>
        <div>
          <!-- <apexchart height="200%" width="80%" type="bar" :options="chartOptions3" :series="series3"></apexchart> -->
          <apexchart type="bar" :options="chartOptionsYearSum" :series="seriesYearSum"></apexchart>
        </div>
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
  mounted () {
    // console.log(localStorage.ZoneID)
    // this.$store.state.url_sev = 'http://localhost:8997'
    this.$store.state.url_sev = 'http://35.186.149.130:8997'
    // setInterval(() => { this.updateChart() }, 60000)
    setInterval(() => { this.realtimeUsageAPI() }, 60000)
    setInterval(() => { this.getLogPsum() }, 60000)
    setInterval(() => { console.log(this.ZoneID) }, 1000)
    this.realtimeUsageAPI()
    // this.getLogPsum()
    this.getLogPsum2()
    this.getSumDay()
    this.getSumYear()
    this.getdataRT()
    this.getCBUptime()
  },
  watch: {

    '$route' (val) {

      this.reloadPage = false
      this.$nextTick(() => {
          // Add the component back in
          this.reloadPage = true
          // this.realtimeUsageAPI()
          // this.getLogPsum()
          // this.getSumDay()
          // this.getSumYear()
          // this.getdataRT()
          // this.getCBUptime()
          // console.log(localStorage.ZoneID)
      });

      // this.test = this.$route.id
      // alert(this.test)
      // alert(this.test.charAt(9))
    }

    // switch1(newValue){
    //   if (this.button_data.switch_state == 'ON') {
    //     this.button_data.switch_state = 'OFF'
    //   } else {
    //     this.button_data.switch_state = 'ON'
    //   }
    // },
    // switch2(newValue){
    //   if (this.button_data.switch_state == 'ON') {
    //     this.button_data.switch_state = 'OFF'
    //   } else {
    //     this.button_data.switch_state = 'ON'
    //   }
    // },

  },
  created() {
    // alert('sd')
    this.$on('event_child', function(id){
			console.log('Event from parent component emitted', id)
      alert("sdsfsd")
		})
	},
  methods: {

    realtimeUsageAPI(e) {
      axios.post(this.$store.state.url_sev+'/realtimeusage', {
          ZoneID: '1'
      })
      .then(response => {
          // this.databaseConfiguration = response.data;
          // if (response.data.UPrivilege == 0) {
          // console.log(response.data)
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
    getLogPsum(e) {
      axios.post(this.$store.state.url_sev+'/logpsum', {
        MeterID: '1'
      })
      .then(response => {
          console.log(response.data)
          this.$store.state.Psum = response.data.Psum
          this.$store.state.date_Psum = response.data.date_Psum
          this.updateChart()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getLogPsum2(e) {
      axios.post(this.$store.state.url_sev+'/logpsum2', {
        ZoneID: '1'
      })
      .then(response => {
          console.log(response.data)
          this.list_psum2 = response.data.list_psum
          this.date_Psum2 = response.data.date_Psum
          this.updateChart()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getSumDay(e) {
      axios.post(this.$store.state.url_sev+'/sumday', {
        ZoneID: '1'
      })
      .then(response => {
          // console.log(response.data)
          this.$store.state.diff_dayInMonth = response.data.diff
          this.$store.state.dayInMonth = response.data.dayInMonth
          this.updateChartDaySum()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getSumYear(e) {
      axios.post(this.$store.state.url_sev+'/sumyear', {
        ZoneID: '1'
      })
      .then(response => {
          // console.log(response.data)
          this.$store.state.diff_monthInYear= response.data.diff
          this.$store.state.monthInYear = response.data.monthInYear
          this.updateChartYearSum()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getdataRT(e) {
      axios.post(this.$store.state.url_sev+'/getdatart', {
          ZoneID: '1'
      })
      .then(response => {
          // console.log(response.data)
          this.RT_kWh_Today = response.data.RT_kWh_Today
          this.RT_kWh_Daily_Avg = response.data.RT_kWh_Daily_Avg
          this.RT_kWh_Monthly = response.data.RT_kWh_Monthly
          this.RT_kWh_Monthly_Avg = response.data.RT_kWh_Monthly_Avg
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getCBUptime(e) {
      axios.post(this.$store.state.url_sev+'/cbuptime', {
          ZoneID: '1'
      })
      .then(response => {
          // console.log(response.data)
          this.uptime_data = response.data.CB_Uptime
          // console.log(this.uptime_data[0])
          // this.CB_01_Uptime = response.data.CB_Uptime[0].CB_01_Uptime
          // uptime_data[0].value = response.data.CB_Uptime[0].CB_01_Uptime
          // uptime_data[1].value = response.data.CB_Uptime[0].CB_01_Uptime
      })
      .catch(error =>{
          console.log(error);
      })
    },
    updateChart() {
      // const newData = this.$store.state.Psum
      const newData2 = this.list_psum2
      this.chartOptions = {
        chart: {
            width: "100%",
            height: 300
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top'
              }
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          xaxis: {
            // categories: this.$store.state.date_Psum
            categories: this.date_Psum2
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
      //  data: newData
      //  },
      //  {
      //   name: "Meter 2",
      //   data: newData2
      //  }]
      // console.log(this.list_psum2)
      this.series = newData2
    },
    updateChartDaySum() {
      const newData = this.$store.state.diff_dayInMonth
      this.chartOptionsDaySum = {
        chart: {
          // id: 'vuechart-example'
            width: "100%",
            height: 300
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top',
              }
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          xaxis: {
            categories: this.$store.state.dayInMonth
          },
          yaxis: [
            {
              axisBorder: {
                show: true,
              },
              title: {
                text: "kwh"
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
      this.seriesDaySum = [{
        name: "Diff",
        data: newData
      }]
    },
    updateChartYearSum() {
      const newData = this.$store.state.diff_monthInYear
      this.chartOptionsYearSum = {
        chart: {
          width: "100%",
          height: 300
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top',
            }
          },
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: this.$store.state.monthInYear
        },
        yaxis: [
          {
            axisBorder: {
              show: true,
            },
            title: {
              text: "kwh"
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
      this.seriesYearSum = [{
          name: "Diff",
         data: newData
        }]
      },
  },
  data () {
    return {
      list_psum2: [],
      date_Psum2: [],
      ZoneID: '',
      reloadPage: true,
      test: '',
      switch1: true,
      RT_kWh_Today: '',
      RT_kWh_Daily_Avg: '',
      RT_kWh_Monthly: '',
      RT_kWh_Monthly_Avg:'',
      CB_01_Uptime:'',
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
      chartOptionsDaySum: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
          // categories: [1, 2, 3, 4, 5, 6, 7, 8 ,9,10,11, 12, 13, 14, 15, 16, 17, 18 ,19, 20,21 ,22, 23, 24,25, 26, 27, 28 ,29,30 ]
        }
      },
      seriesDaySum: [{
        name: 'series-1',
        // data: [2, 4, 3, 2, 3, 4, 2, 3 ,2, 3 ,2, 4, 3, 2, 3, 4, 2, 3 ,2, 3 ,2, 4, 3, 2, 3, 4, 2, 3 ,2, 3 ]
        data: []
      }],
      chartOptionsYearSum: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
        }
      },
      seriesYearSum: [{
        name: 'series-1',
        data: []
      }],
      RT_PSum: 0,
      RT_ISum: 0,
      RT_VSum: 0,
      sss: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 0],
      button_data: [
        {
          id: 1,
          name: 'Plug stage 1',
          model: 'switch1',
          switch_state: 'ON',
          message: 'ON'
        }
        ,
        {
          id: 2,
          name: 'Plug stage 2',
          model: 'switch2',
          switch_state: 'ON',
          message: 'ON'
        }
      ],
      uptime_data: []
    }
  }
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
