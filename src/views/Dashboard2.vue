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
        lg6
      >
        <v-card>
            <MyChart :width="100" :height="50"> </MyChart>
        </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg6
      >
        <v-card>
            <MyChart :width="100" :height="50"> </MyChart>
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
      <v-card>
          <DateChart :chart-data="datacollection" :width="100" :height="50"> </DateChart>
      </v-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg6
      >
      <v-card>
          <DateChart :chart-data="datacollection2" :width="100" :height="50"> </DateChart>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
<script>
import MyChart from './MyChart.vue'
import DateChart from './DateChart.js'
export default {
  name: 'app',
  components: {
    MyChart,
    DateChart
  },
  mounted () {
    this.fillData()
  },
  methods: {
    changeState: function(i) {
      // this.button_data[i].message = 'OFF'
      // if i.message == 'ON':
      //   i.message = 'OFF'
      // else
      //   i.message = 'OFF'
      // console.log(i)
    },
    fillData () {
      this.datacollection = {
        labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        datasets: [
          {
            label: 'Power',
            backgroundColor: '#f87979',
            data: [10,20,55,33,77,99,22]
          }
        ]
      },
      this.datacollection2 = {
        labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
        datasets: [
          {
            label: 'Power',
            backgroundColor: '#f87979',
            data: [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
          }
        ]
      }
    }
  },
  data () {
    return {
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
      ],
      datacollection: null,
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', '555'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          maintainAspectRatio: false,
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      emailsSubscriptionChart2: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right'
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  }
  // methods: {
  //   complete (index) {
  //     this.list[index] = !this.list[index]
  //   }
  // }
}
</script>
<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
