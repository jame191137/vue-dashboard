/*eslint-disable */
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@0.7.0"></script>
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
    setInterval(() => { this.aaa() }, 1000)
  },
  methods:{
     aaa: function() {
       // test = 100
       test = Math.random()*10
       test2 = Math.random()*200
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
            duration: 72000 ,
            // duration: 7200000 ,
            refresh: 3600,
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

      },
      plugins: {
						zoom: {
							pan: {
								enabled: true,
								mode: 'x',
								speed: 10,
								threshold: 10
							},
							zoom: {
								enabled: true,
								mode: 'y'
							}
						}
					}

    })
  }
}
</script>
