<template>
  <v-container
  >
  <v-layout wrap>
    <v-flex
      md12
      sm12
      lg12
    >
    <v-card>

      <v-layout wrap>
        <v-flex md12
        sm12
        lg1
        pt-5>
        <v-subheader>Zone : </v-subheader>
      </v-flex>

          <v-flex
            md12
            sm12
            lg2
            pt-5
          >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                color="blue"
                dark
                v-on="on"
              >
                {{ZoneName}}
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in items"
                :key="index"
                @click="selectZone(item)"
              >
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>


      </v-flex>

      <v-flex md12
        sm12
        lg1
        pt-5>
        <v-subheader>Meter : </v-subheader>
      </v-flex>

      <v-flex
        md12
        sm12
        lg5
        pt-5
      >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                color="blue"
                dark
                v-on="on"
              >
                {{MeterName}}
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in itemsMeter"
                :key="index"
                @click="selectMeter(item)"
              >
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>

</v-layout>
<v-layout>
        <v-flex md12
          sm12
          lg1>
          <v-subheader>Date : </v-subheader>
        </v-flex>
        <v-flex
          md12
          sm12
          lg2

        >
         <v-menu
        >
           <template v-slot:activator="{ on }">
             <v-btn
               color="blue"
               dark
               v-on="on"
             >
               {{dateStart}}
             </v-btn>
           </template>

           <div>

             <v-date-picker

               color="blue"
               v-model="picker"
               class="mt-3"
             ></v-date-picker>
           </div>
         </v-menu>
      </v-flex>


      <v-flex md12
        sm12
        lg1>
        <v-subheader>To : </v-subheader>
      </v-flex>

      <v-flex
        md12
        sm12
        lg5
      >
         <v-menu >
           <template v-slot:activator="{ on }">
             <v-btn
               color="blue"
               dark
               v-on="on"
             >
               {{dateEnd}}
             </v-btn>
           </template>

           <div>

             <v-date-picker

               v-model="picker2"
               class="mt-3"
             ></v-date-picker>
           </div>
         </v-menu>

      </v-flex>

        <v-flex mb-5>
          <div class="text-xs-center">

          <v-btn

            color="blue"
            dark
            v-on="on"
          >
            FIND
            <!-- <v-icon right dark>mdi-search</v-icon> -->
          </v-btn>
        </div>
        </v-flex>

    </v-layout >

    </v-card>
  </v-flex>





    <v-layout
    justify-center
    >
    <v-flex lg12 pt-5>
      <v-card>
      <template>
        <v-data-table
          :headers="headers"
          :items="data_table"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <!-- <td>{{ props.item.name }}</td> -->
            <td class="text-xs-center">{{ props.item.Log_Date }}</td>
            <td class="text-xs-center">{{ props.item.Log_V1 }}</td>
            <td class="text-xs-center">{{ props.item.Log_V2 }}</td>
            <td class="text-xs-center">{{ props.item.Log_V3 }}</td>
            <!-- <td class="text-xs-center">{{ props.item.iron }}</td> -->
          </template>
        </v-data-table>
      </template>
    </v-card>
    </v-flex>

    </v-layout>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        // url_sev: 'http://localhost:8997',
        url_sev: 'http://35.186.149.130:8997',
        data_table: [],
        ZoneName: 'Select Zone',
        MeterPick: '',
        MeterName: 'Select Equipment',
        MeterPick: '',
        items: [{
          "name":"Zone 1",
          "id":"1"
        }],
        itemsMeter: [{
          "name":"meter 1",
          "id":"1"
        }],
        dateStart: 'Select Date',
        dateEnd: 'Select Date',
        picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10),
        headers: [
          { text: 'Log_Date', value: 'Log_Date',align: 'center' },
          { text: 'Log_V1', value: 'Log_V1',align: 'center' },
          { text: 'Log_V2', value: 'Log_V2',align: 'center' },
          { text: 'Log_V3', value: 'Log_V3',align: 'center' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
    },
    watch: {
      picker (current, prev) {
        // alert(this.picker)
        this.dateStart = this.picker
      },
      picker2 (current, prev) {
        this.dateEnd = this.picker2
      }
    },
    mounted () {
      this.getDataTable()
    },
    methods: {
      getDataTable(e) {
        axios.post(this.url_sev+'/datatable', {
          MeterID: '1'
        })
        .then(response => {
            this.data_table = response.data.list_data
        })
        .catch(error =>{
            console.log(error);
        })
      },
      selectZone(e) {
        this.ZoneName = e.name
        this.ZonePick = e.name
      },
      selectMeter(e) {
        this.MeterName = e.name
        this.MeterPick = e.name
      }
    }
  }
</script>
