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
        <v-card>
          <v-flex
            md12
            sm12
            lg12
          >
            <v-card>
              <v-card-text class="headline font-weight-bold">
                 {{RT_PSum}} W
              </v-card-text>
            </v-card>
          </v-flex>
          <v-layout>
            <v-flex
              md12
              sm12
              lg6
              ml-3
            >
              <v-card>
                <v-card-text class="headline font-weight-bold">
                   {{RT_ISum}} A
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              md12
              sm12
              lg5
            >
              <v-card>
                <v-card-text class="headline font-weight-bold">
                   {{RT_VSum}} V
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg6
      >
        <v-card>
          <!-- <div> -->
            <apexchart width="500" type="area" :options="chartOptions" :series="series"></apexchart>
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
           10 hr
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
           10 hr
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
           10 hr
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
           10 hr
        </v-card-text>
         <v-divider light></v-divider>
         <v-card-actions>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg6
      >
      <!-- <v-card>
          <DateChart :chart-data="datacollection" :width="100" :height="50"> </DateChart>
      </v-card> -->
      <div>
        <apexchart width="500" type="bar" :options="chartOptions2" :series="series2"></apexchart>
      </div>
      </v-flex>
      <v-flex
        md12
        sm12
        lg6
      >
      <div>
        <apexchart width="500" type="bar" :options="chartOptions3" :series="series3"></apexchart>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>

import ApexCharts from 'apexcharts'
export default {
  mounted () {
    // this.fillData()
    setInterval(() => { this.updateChart() }, 1000)
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      this.rand = Math.floor(Math.random() * (max - min + 1)) + min
      this.series[0].data.push(this.rand)
      this.series[0].data.shift()
      console.log(this.series[0].data)
      const newData = this.series[0].data

      this.sss.push('09:37:44')
      this.sss.shift()

      this.chartOptions = {
        chart: {
          id: 'vuechart-example'
          },
          xaxis: {
            categories: this.sss,
          }
      }
      this.series = [{
       data: newData
      }]
    },
  },
  data () {
    return {
      rand: 0,
      chartOptions: {
        chart: {
          id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
          series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
      }],
      chartOptions2: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series2: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }],
      chartOptions3: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series3: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
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
        },
        {
          id: 2,
          name: 'Plug stage 2',
          status: true,
          message: 'ON'
        }
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
