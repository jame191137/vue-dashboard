<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout justify-center wrap>
      <v-flex
        md12
        sm12
        lg6
        text-xs-center
      >
        <v-card height="100%">
          <v-card-title>
            <span class="title font-weight-bold">{{"Realtime Usage"}}</span>
          </v-card-title>
           <v-divider light></v-divider>

          <v-flex
            md12
            sm12
            lg12
          >
            <v-card>
              <v-card-text class="headline font-weight-bold">
                 {{this.$store.state.RT_PSum}} W
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- <v-layout warp> -->
            <v-flex
              md12
              sm12
              lg12
              ml-3
            >
              <v-card>
                <v-card-text class="headline font-weight-bold">
                   {{this.$store.state.RT_ISum}} A
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              md12
              sm12
              lg12
            >
              <v-card>
                <v-card-text class="headline font-weight-bold">
                   {{this.$store.state.RT_VSum}} V
                </v-card-text>
              </v-card>
            </v-flex>
          <!-- </v-layout> -->
        </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg6
      >
        <v-card>
          <v-card-title>
            <span class="title font-weight-bold">{{"Realtime Trend"}}</span>
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
        sm6
        xs12
        md6
        lg2
      >
        <v-card
          class="mx-auto"
          color="#ffffff"
          max-width="400"
          max-height="300"
        >
         <v-card-title>
           <span class="title font-weight-light">{{i.name}}</span>
           </v-card-title>
           <v-card-text class="headline font-weight-bold">
              <v-layout justify-center row >
                <v-btn color="success" v-on:click="i.message = 'OFF'" v-if="i.message == 'ON' " >{{i.message}}</v-btn>
                <v-btn color="error" v-on:click="i.message = 'ON'" v-if="i.message == 'OFF'" >{{i.message}}</v-btn>
              </v-layout>
           </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
           </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg2
      >
      <v-card
        class="mx-auto"
        color="#ffffff"
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light">Up time</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
           {{this.CB_01_Uptime}}
        </v-card-text>
         <v-divider light></v-divider>
         <v-card-actions>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg2
      >
      <v-card
        class="mx-auto"
        color="#ffffff"
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light">Total today</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
           {{this.RT_kWh_Today}} kWH
        </v-card-text>
         <v-divider light></v-divider>
         <v-card-actions>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg2
      >
      <v-card
        class="mx-auto"
        color="#ffffff"
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light">Daily avh</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
            {{this.RT_kWh_Daily_Avg}} kWH
        </v-card-text>
         <v-divider light></v-divider>
         <v-card-actions>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg2
      >
      <v-card
        class="mx-auto"
        color="#ffffff"
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light">Total this month</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
           {{this.RT_kWh_Monthly}} kWH
        </v-card-text>
         <v-divider light></v-divider>
         <v-card-actions>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg2
      >
      <v-card
        class="mx-auto"
        color="#ffffff"
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light">Monthly avh</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
           {{this.RT_kWh_Monthly_Avg}} kWH
        </v-card-text>
         <v-divider light></v-divider>
         <v-card-actions>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg8
      >
      <!-- <v-card>
          <DateChart :chart-data="datacollection" :width="100" :height="50"> </DateChart>
      </v-card> -->
      <v-card>
        <v-card-title>
          <span class="title font-weight-bold">{{"Last 30 days (kWH)"}}</span>
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
          <span class="title font-weight-bold">{{"Last 12 Months (kHW)"}}</span>
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
import ApexCharts from 'apexcharts'
export default {
  mounted () {
    // this.$store.state.url_sev = 'http://localhost:8997'
    this.$store.state.url_sev = 'http://35.186.149.130:8997'
    setInterval(() => { this.updateChart() }, 1000)
    setInterval(() => { this.realtimeUsageAPI() }, 1000)
    setInterval(() => { this.getLogPsum() }, 1000)
    setInterval(() => { this.getSumDay() }, 1000)
    setInterval(() => { this.getSumYear() }, 1000)
    this.getdataRT()
    this.getCBUptime()
  },
  methods: {
    realtimeUsageAPI(e) {
      axios.get(this.$store.state.url_sev+'/realtimeusage', {
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
          console.log(error);
      })
    },
    getLogPsum(e) {
      axios.get(this.$store.state.url_sev+'/logpsum', {
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
    getSumDay(e) {
      axios.get(this.$store.state.url_sev+'/sumday', {
      })
      .then(response => {
          console.log(response.data)
          this.$store.state.diff_dayInMonth = response.data.diff
          this.$store.state.dayInMonth = response.data.dayInMonth
          this.updateChartDaySum()
      })
      .catch(error =>{
          console.log(error);
      })
    },
    getSumYear(e) {
      axios.get(this.$store.state.url_sev+'/sumyear', {
      })
      .then(response => {
          console.log(response.data)
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
          console.log(response.data)
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
          console.log(response.data)
          this.CB_01_Uptime = response.data.CB_Uptime[0].CB_01_Uptime
      })
      .catch(error =>{
          console.log(error);
      })
    },
    updateChart() {
      const newData = this.$store.state.Psum
      this.chartOptions = {
        chart: {
            width: "100%"
          },
          xaxis: {
            categories: this.$store.state.date_Psum
          }
      }
      this.series = [{
       data: newData
      }]
    },
    updateChartDaySum() {
      const newData = this.$store.state.diff_dayInMonth
      this.chartOptionsDaySum = {
        chart: {
          // id: 'vuechart-example'
            width: "100%",
            height: 200
          },
          xaxis: {
            categories: this.$store.state.dayInMonth
          },
      }
      this.seriesDaySum = [{
         data: newData
        }]
    },
    updateChartYearSum() {
      const newData = this.$store.state.diff_monthInYear
      this.chartOptionsYearSum = {
        chart: {
            width: "100%",
            height: 200
          },
          xaxis: {
            categories: this.$store.state.monthInYear
          },
      }
      this.seriesYearSum = [{
         data: newData
        }]
      },
  },
  data () {
    return {
      RT_kWh_Today: '',
      RT_kWh_Daily_Avg: '',
      RT_kWh_Monthly: '',
      RT_kWh_Monthly_Avg:'',
      CB_01_Uptime:'',
      rand: 0,
      chartOptions: {
        chart: {
          id: 'vuechart-example'
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
          status: true,
          message: 'ON'
        }
        // ,
        // {
        //   id: 2,
        //   name: 'Plug stage 2',
        //   status: true,
        //   message: 'ON'
        // }
    ]

    }
  }
}
</script>
<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
