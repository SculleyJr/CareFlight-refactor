

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, null);
  });


   

//   function loadEvent() {

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/sculley90@gmail.com/events?key=AIzaSyAP7kJgXgEw9CYvuptZ2kjCdiSaDRYwRY0', true);

//     xhr.onload = function(){
//         if(this.status === 200) {
//             // console.log(this.responseText);

//             const events = JSON.parse(this.responseText);
//             let date = '';
//             let time = '';
//             let output = '';
//             let active = '';
//             let location = '';

//             events.items.forEach(function(event){
//                  date = event.start.dateTime.split("T",2);
//                  time = date[1];
//                  time = time.split(":");
//                  date = date[0];
//                  date = date.split("-");
//                  location = event.location;

//                  console.log(date[0]);

//                 if(date[0] === "2019"){

//                     active = document.getElementById(date[2]);
//                     console.log(active);
//                     active.className += "active";

//                     output += `
//                 <tr class="event-list">
//                 <th>Title: ${event.summary}</th>
//                 <th>Date: ${date[1]} ${date[2]} ${date[0]}</th>
//                 <th>Time: ${time[0]}:${time[1]}</th>
//                 <th>Location: ${location}</th>
//                 <th>
//             </tr>
//             `;
                    
//                 }

//             });
//                  console.log(output);
//                 document.getElementById('event').innerHTML = output;
//             console.log(event);
//         }
//     }
//     xhr.send();
// }
// window.onload = function(){
//     loadEvent();
// }


                 

                
            
            
