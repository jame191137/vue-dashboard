/*eslint-disable */
<script>
import {
  Line,
  Bar
} from 'vue-chartjs'
import 'chartjs-plugin-streaming'
var test = 0
var test2 = 0
export default {
  created () {
    setInterval(() => { this.aaa() }, 500)
  },
  methods:{
     aaa: function() {
       test = Math.random()*10
       // test2 = Math.random()*200
       // console.log(test2)
     }
  },
  // props: {
  //   options: {
  //     responsive: true, // my new default options
  //     maintainAspectRatio: false, // my new default options
  //   }
  // },
  extends: Line,
  mounted () {

    this.renderChart({

      datasets: [{
        label: 'power',
        // borderColor: 'rgb(99, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // backgroundColor: 'rgba('+test2+', 99, 132, 0.5)',
        lineTension: 0,
        // borderDash: [8, 4]
      }]
    },
    {
      scales: {
        xAxes: [{
          type: 'realtime',
          realtime: {
            // pause: true,
            onRefresh: function (chart) {
              chart.data.datasets.forEach(function (dataset) {
                dataset.data.push({
                  x: Date.now(),
                  y: test
                })
              })
            },
            delay: 2000
          }
        }]

      }
    })
  }
}
</script>
