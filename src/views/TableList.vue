<template>
  <v-container
  >
  <v-layout wrap>
    <v-flex
      md12
      sm12
      lg12
    >

    <v-card class="border-primary">
      <v-card-title class="headtab">
        <v-icon dark large left > mdi-calendar-clock </v-icon>
        <span  class="title font-weight-light varela-font boxheadwhite">{{"Date Select"}}</span>
      </v-card-title>

      <v-layout wrap>
        <v-flex

        lg1
        pt-5>
        <v-subheader>Zone : </v-subheader>
      </v-flex>

          <v-flex

            lg2
            pt-5
          >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
             <v-text-field
               v-model="ZoneName"
               label="Select Zone"
               prepend-icon=""
               readonly
               v-on="on"
             ></v-text-field>
           </template>
            <!-- <template v-slot:activator="{ on }">
              <v-btn
                color="blue"
                dark
                v-on="on"
              >
                {{ZoneName}}
              </v-btn>
            </template> -->
            <v-list>
              <v-list-tile
                v-for="(item, index) in list_zone"
                :key="index"
                @click="selectZone(item)"
              >
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>


      </v-flex>

      <v-flex

        lg2
        ml-3
        pt-5>
        <v-subheader v-if="ZonePick !== ''">Equipment : </v-subheader>
      </v-flex>

      <v-flex

        lg3
        mr-5
        pt-5
      >
          <v-menu v-if="ZonePick !== ''" offset-y>
            <template v-slot:activator="{ on }">
             <v-text-field
               v-model="MeterName"
               label="Select Equipment"
               prepend-icon=""
               readonly
               v-on="on"
             ></v-text-field>
           </template>
            <!-- <template v-slot:activator="{ on }">
              <v-btn
                color="blue"
                dark
                v-on="on"
              >
                {{MeterName}}
              </v-btn>
            </template> -->
            <v-list>
              <v-list-tile
                v-for="(item2, index) in list_meter"
                :key="index"
                @click="selectMeter(item2)"
              >
                <v-list-tile-title>{{ item2.text }}</v-list-tile-title>
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
        :close-on-content-click="false"
         :nudge-right="40"
         lazy
         transition="scale-transition"
         offset-y
         full-width
         max-width="290px"
         min-width="290px">
          <template v-slot:activator="{ on }">
           <v-text-field
             v-model="picker"
             label="Select Date"
             prepend-icon=""
             readonly
             v-on="on"
           ></v-text-field>
         </template>
           <div>

             <v-date-picker

               color="blue"
               v-model="picker"
               class="mt-3"
               max="dateMax"

             ></v-date-picker>
           </div>
         </v-menu>


      </v-flex>

      <v-flex md12
        sm12
        lg2
        ml-3>

           <v-menu
            ref="menu"
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="timeStart"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="timeStart"
              label="Select Time"
              prepend-icon=""
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            format="24hr"
            v-if="menu1"
            v-model="timeStart"
            full-width
            color="blue"
            @click:minute="$refs.menu.save(timeStart)"
          ></v-time-picker>
        </v-menu>
      </v-flex>


      <v-flex md12
        sm12
        lg1>
        <v-subheader v-if="picker != ''">To : </v-subheader>
      </v-flex>

      <v-flex
        md12
        sm12
        lg2
      >
         <v-menu
          v-if="picker != ''"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px">
           <template v-slot:activator="{ on }">
            <v-text-field
              v-model="picker2"
              label="Select Date"
              prepend-icon=""
              readonly
              v-on="on"
            ></v-text-field>
          </template>

           <div>

             <v-date-picker
               color="blue"
               v-model="picker2"
               class="mt-3"
               :min="dateMin"
               :max="dateMax"
             ></v-date-picker>
           </div>
         </v-menu>

      </v-flex>
      <v-flex
      md12
        sm12
        lg2
        ml-3>

           <v-menu
            v-if="picker != ''"
           ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="timeEnd"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="timeEnd"
              label="Select Time"
              prepend-icon=""
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            format="24hr"
            v-if="menu2"
            v-model="timeEnd"
            full-width
            color="blue"
            @click:minute="$refs.menu2.save(timeEnd)"
          ></v-time-picker>
        </v-menu>
      </v-flex>

        <v-flex mb-5>
          <div class="text-xs-center">

          <v-btn
            color="blue"
            dark
            v-on:click="checkSelect()"
          >
            FIND
            <!-- <v-icon right dark>mdi-search</v-icon> -->
          </v-btn>
        </div>
        </v-flex>

    </v-layout >

    </v-card>
  </v-flex>






  <v-layout justify-center>

    <v-flex lg12 pt-5>
      <v-card class="border-primary">
        <v-card-title class="headtab">
          <v-icon dark large left > mdi-table-large </v-icon>
          <span  class="title font-weight-light varela-font boxheadwhite">{{"Log Table"}}</span>
          <v-spacer></v-spacer>
          <export-excel
              class   = "btn btn-default"
              :data   = "data_table"
              :fields = "json_fields"
              type = "xls"
              worksheet = "My Worksheet"
              name    = "report_table.xls">
              <v-btn color="blue" dark > XLS </v-btn>

          </export-excel>
          <export-excel
              class   = "btn btn-default"
              :data   = "data_table"
              :fields = "json_fields"
              type = "csv"
              worksheet = "My Worksheet"
              name    = "report_table.csv">
              <v-btn color="blue" dark > CSV </v-btn>

          </export-excel>
        </v-card-title>
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
            <td class="text-xs-center">{{ props.item.Log_V12 }}</td>
            <td class="text-xs-center">{{ props.item.Log_V23 }}</td>
            <td class="text-xs-center">{{ props.item.Log_V31 }}</td>
            <td class="text-xs-center">{{ props.item.Log_I1 }}</td>
            <td class="text-xs-center">{{ props.item.Log_I2 }}</td>
            <td class="text-xs-center">{{ props.item.Log_I3 }}</td>
            <td class="text-xs-center">{{ props.item.Log_In }}</td>
            <td class="text-xs-center">{{ props.item.Log_Pa }}</td>
            <td class="text-xs-center">{{ props.item.Log_Pb }}</td>
            <td class="text-xs-center">{{ props.item.Log_Pc }}</td>
            <td class="text-xs-center">{{ props.item.Log_PSum }}</td>
            <td class="text-xs-center">{{ props.item.Log_Qa }}</td>
            <td class="text-xs-center">{{ props.item.Log_Qb }}</td>
            <td class="text-xs-center">{{ props.item.Log_Qc }}</td>
            <td class="text-xs-center">{{ props.item.Log_PFa }}</td>
            <td class="text-xs-center">{{ props.item.Log_PFb }}</td>
            <td class="text-xs-center">{{ props.item.Log_PFc }}</td>
            <td class="text-xs-center">{{ props.item.Log_PFSum }}</td>
            <td class="text-xs-center">{{ props.item.Log_Sa }}</td>
            <td class="text-xs-center">{{ props.item.Log_Sb }}</td>
            <td class="text-xs-center">{{ props.item.Log_Sc }}</td>
            <td class="text-xs-center">{{ props.item.Log_F }}</td>
            <td class="text-xs-center">{{ props.item.Log_kWh }}</td>
            <td class="text-xs-center">{{ props.item.Log_kWh_Diff }}</td>
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
        json_fields: {
          'Log_Date': 'Log_Date',
          'Log_V1': 'Log_V1',
          'Log_V2': 'Log_V2',
          'Log_V3': 'Log_V3',
          'Log_V12': 'Log_V12',
          'Log_V23': 'Log_V23',
          'Log_V31': 'Log_V31',
          'Log_I1': 'Log_I1',
          'Log_I2': 'Log_I2',
          'Log_I3': 'Log_I3',
          'Log_In': 'Log_In',
          'Log_Pa': 'Log_Pa',
          'Log_Pb': 'Log_Pb',
          'Log_Pc': 'Log_Pc',
          'Log_PSum': 'Log_PSum',
          'Log_Qa': 'Log_Qa',
          'Log_Qb': 'Log_Qb',
          'Log_Qc': 'Log_Qc',
          'Log_PFa': 'Log_PFa',
          'Log_PFb': 'Log_PFb',
          'Log_PFc': 'Log_PFc',
          'Log_PFSum': 'Log_PFSum',
          'Log_Sa': 'Log_Sa',
          'Log_Sb': 'Log_Sb',
          'Log_Sc': 'Log_Sc',
          'Log_F': 'Log_F',
          'Log_kWh': 'Log_kWh',
          'Log_kWh_Diff': 'Log_kWh_Diff'

           // 'Complete name': 'name',
           // 'City': 'city',
           // 'Telephone': 'phone.mobile',
           // 'Telephone 2' : {
           //     field: 'phone.landline',
           //     callback: (value) => {
           //         return `Landline Phone - ${value}`;
           //     }
           // },
       },
       // json_data: [
       //     {
       //         'name': 'Tony Peña',
       //         'city': 'New York',
       //         'country': 'United States',
       //         'birthdate': '1978-03-15',
       //         'phone': {
       //             'mobile': '1-541-754-3010',
       //             'landline': '(541) 754-3010'
       //         }
       //     },
       //     {
       //         'name': 'Thessaloniki',
       //         'city': 'Athens',
       //         'country': 'Greece',
       //         'birthdate': '1987-11-23',
       //         'phone': {
       //             'mobile': '+1 855 275 5071',
       //             'landline': '(2741) 2621-244'
       //         }
       //     }
       // ],
       json_meta: [
           [
               {
                   'key': 'charset',
                   'value': 'utf-8'
               }
           ]
       ],
        data_table: [],
        timeStert: null,
        menu1: false,
        modal1: false,
        timeEnd: null,
        menu2: false,
        modal2: false,
        ZoneName: '',
        ZonePick: '',
        MeterName: '',
        MeterPick: '',
        list_zone: '',
        list_meter: '',
        items: [{
          "name":"Zone 1",
          "id":"1"
        }],
        itemsMeter: [{
          "name":"meter 1",
          "id":"1"
        }],
        dateStart: '',
        // dateMax: '',
        // dateMin: '',
        dateMin: '',
        dateMax: '',
        dateTimeStart: '',
        timeStart: '',
        timeEnd: '',
        dateTimeENd: '',
        dateEnd: '',

        newDate: new Date(),

        // picker: new Date().toISOString().substr(0, 10),
        // picker2: new Date().toISOString().substr(0, 10),
        picker: '',
        picker2: '',
        headers: [
          { text: 'Log_Date', value: 'Log_Date',align: 'center' },
          { text: 'Log_V1', value: 'Log_V1',align: 'center' },
          { text: 'Log_V2', value: 'Log_V2',align: 'center' },
          { text: 'Log_V3', value: 'Log_V3',align: 'center' },
          { text: 'Log_V12', value: 'Log_V12',align: 'center' },
          { text: 'Log_V23', value: 'Log_V23',align: 'center' },
          { text: 'Log_V31', value: 'Log_V31',align: 'center' },
          { text: 'Log_I1', value: 'Log_I1',align: 'center' },
          { text: 'Log_I2', value: 'Log_I2',align: 'center' },
          { text: 'Log_I3', value: 'Log_I3',align: 'center' },
          { text: 'Log_In', value: 'Log_In',align: 'center' },
          { text: 'Log_Pa', value: 'Log_Pa',align: 'center' },
          { text: 'Log_Pb', value: 'Log_Pb',align: 'center' },
          { text: 'Log_Pc', value: 'Log_Pc',align: 'center' },
          { text: 'Log_PSum', value: 'Log_PSum',align: 'center' },
          { text: 'Log_Qa', value: 'Log_Qa',align: 'center' },
          { text: 'Log_Qb', value: 'Log_Qb',align: 'center' },
          { text: 'Log_Qc', value: 'Log_Qc',align: 'center' },
          { text: 'Log_PFa', value: 'Log_PFa',align: 'center' },
          { text: 'Log_PFb', value: 'Log_PFb',align: 'center' },
          { text: 'Log_PFc', value: 'Log_PFc',align: 'center' },
          { text: 'Log_PFSum', value: 'Log_PFSum',align: 'center' },
          { text: 'Log_Sa', value: 'Log_Sa',align: 'center' },
          { text: 'Log_Sb', value: 'Log_Sb',align: 'center' },
          { text: 'Log_Sc', value: 'Log_Sc',align: 'center' },
          { text: 'Log_F', value: 'Log_F',align: 'center' },
          { text: 'Log_kWh', value: 'Log_kWh',align: 'center' },
          { text: 'Log_kWh_Diff', value: 'Log_kWh_Diff',align: 'center' }
        ]
      }
    },
    watch: {
      picker (current, prev) {
        // alert(this.picker)
        this.dateStart = this.picker
        this.dateEnd = ''
        this.picker2 = new Date().toISOString().substr(0, 10)
        this.addDate(30)

      },
      picker2 (current, prev) {
        this.dateEnd = this.picker2
      }
    },
    mounted () {
      this.getZone()

      this.addDate(30)
    },
    methods: {
      // parseDate(input) {
      //   var parts = input.match(/(\d+)/g);
      //   // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
      //   return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
      // },
      pad(number) {
        return (number < 10 ? '0' : '') + number
      },
      addDate(e) {
        if (this.picker) // as myDate can be null
         // you have to set the this.myDate again, so vue can detect it changed
         // this is not a caveat of this specific solution, but of any binding of dates
         // this.datetest = this.parseDate(this.picker)
         // var tt = document.getElementById('txtDate').value;

        var date = new Date(this.picker);
        var newdate = new Date(date);

        newdate.setDate(newdate.getDate() + 60);

        var dd = newdate.getDate();
        var mm = newdate.getMonth() + 1;
        var y = newdate.getFullYear();

        var someFormattedDate = y + '-' + this.pad(mm) + '-' + dd;
        this.dateMax = new Date(someFormattedDate).toISOString().substr(0, 10)
        this.dateMin = new Date(this.picker).toISOString().substr(0, 10)
        // this.dateMin = '2019-06-14'
        // this.dateMax = '2019-06-15'

        // console.log(this.dateMin)
        // console.log(this.dateMax)
         // alert(someFormattedDate)
      },
      checkSelect(){
        // console.log(this.dateStart)
        // console.log(this.timeStart)
        if (this.ZonePick == ''){
          alert('Please select zone')
        }
        else if (this.MeterPick == ''){
          alert('Please select Equipment')
        }
        else if ( this.timeStart == '' || this.timeEnd == '' || this.dateStart == undefined || this.timeStart == undefined || this.dateEnd == undefined || this.timeEnd == undefined ) {
        // else if (this.dateStart == '' || this.timeStart == '' || this.dateEnd == '' || this.timeEnd == '' || this.dateStart == undefined || this.timeStart == undefined || this.dateEnd == undefined || this.timeEnd == undefined ) {
          alert('Please select Date and Time')
        }
        else{
          this.getDataTable()
        }
      },
      getZone(e) {

        axios.post(this.url_sev+'/getzone', {
          SiteID: localStorage.SiteID
        })
        .then(response => {
            // console.log(response.data)
            this.list_zone = response.data.zone_data
        })
        .catch(error =>{
            console.log(error);
        })
      },
      getMeter(e) {

        axios.post(this.url_sev+'/getmeter', {
          ZoneID: this.ZonePick
        })
        .then(response => {
            // console.log(response.data)
            this.list_meter = response.data.meter_data
        })
        .catch(error =>{
            console.log(error);
        })
      },
      getDataTable(e) {
        // alert(this.time1)
        // console.log(this.MeterPick)
        // console.log(this.dateStart)
        // console.log(this.dateEnd)
        this.dateTimeStart = ''
        this.dateTimeEnd = ''
        this.dateTimeStart = this.dateStart + ' ' + this.timeStart
        this.dateTimeEnd = this.dateEnd + ' ' + this.timeEnd
        // alert('asdsad'+this.dateStart)
        // alert(this.dateTimeEnd)

        axios.post(this.url_sev+'/datatable', {
          MeterID: this.MeterPick,
          dateStart: this.dateTimeStart,
          dateEnd: this.dateTimeEnd
        })
        .then(response => {

          if (response.data.status == 'fail') {
            if (response.data.message == 'not found') {
              alert('Data not found')
            }
          } else {
            console.log(response.data)
            this.data_table = response.data.list_data
          }

        })
        .catch(error =>{
            console.log(error);
        })
      },
      selectZone(e) {
        this.ZoneName = e.text
        this.ZonePick = e.id
        this.MeterName = ''
        this.MeterPick = ''
        this.getMeter()
      },
      selectMeter(e) {
        this.MeterName = e.text
        this.MeterPick = e.id
      }
    }
  }
</script>
