/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
 import axios from 'axios';

 // var url_sev =  'http://localhost:8997'
 // url_sev: 'http://35.186.149.130:8997',
 var zone_num
 var a =  [{
     path: '/login',
     // Relative to /src/views
     name: 'Login',
     view: 'Login'
   },

   // {
   //   path: '/dashboard1',
   //   name: '1',
   //   view: 'Dashboard2'
   // },
   // {
   //   path: '/dashboard2',
   //   name: '2',
   //   view: 'Dashboard2'
   // },
   // {
   //   path: '/dashboard3',
   //   name: '3',
   //   view: 'Dashboard2'
   // },
   // {
   //   path: '/dashboard4',
   //   name: '4',
   //   view: 'Dashboard2'
   // },
   // {
   //   path: '/dashboard5',
   //   name: '5',
   //   view: 'Dashboard2'
   // },
   {
     path: '/overview',
     name: 'Overview',
     // path: '/table-list',
     // name: 'Table List',
     view: 'Overview'
   },
   {
     path: '/historical',
     name: 'Historical',
     // path: '/table-list',
     // name: 'Table List',
     view: 'TableList'
   },
   {
     path: '/schedule',
     name: 'Schedule',
     view: 'Schedule'
   },
   {
     path: '/energy',
     name: 'Energy',
     view: 'Energy'
   },
   {
     path: '/switch',
     name: 'Switch',
     view: 'Switch'
   }
 ]
 // updatePathZone()
 for (var i = 1; i < 20; i++) {
    a.push(
    {
      path: '/dashboard'+i.toString(),
      name: i.toString(),
      view: 'Dashboard2'
    })
  }


 // function updatePathZone() {
 //   // alert('wefwef')
 //   axios.get(url_sev+'/getnumzone', {
 //   })
 //   .then(response => {
 //       // console.log('get zone')
 //
 //       // console.log(response.data.status)
 //       if (response.data.status == 'fail') {
 //         alert('get zone fail')
 //       } else {
 //         // console.log(response.data.zone_data.length)
 //         zone_num = response.data.num
 //         console.log(zone_num)
 //         for (var i = 1; i < zone_num+1; i++) {
 //            a.push(
 //            {
 //              path: '/dashboard'+i.toString(),
 //              name: i.toString(),
 //              view: 'Dashboard2'
 //            })
 //          }
 //       }
 //
 //   })
 //   .catch(error =>{
 //       // alert(error)
 //       console.log(error);
 //   })
 //   return a
 // }
// console.log(a)


export default a
