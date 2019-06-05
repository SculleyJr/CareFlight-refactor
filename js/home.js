function loadEvent() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/sculley90@gmail.com/events?key=AIzaSyAP7kJgXgEw9CYvuptZ2kjCdiSaDRYwRY0', true);
    xhr.onload = function(){
        if(this.status === 200) {
            // console.log(this.responseText);
            const events = JSON.parse(this.responseText);
            let date = '';
            let time = '';
            let output = '';
            let output1 = '';
            let active = '';
            let location = '';
            var eventArrayOne = [];
            var eventArrayTwo = [];
            let calDayTest = events.items.start ;

            class EventOne {
                constructor(date, month, year, location, title){
                    this.date = date;
                    this.month = month;
                    this.year = year;
                    this.location = location;
                    this.title = title;
                }
            }
            console.log('events',events)
            
            events.items.forEach(function(event){
                try{
                    date = event.start.dateTime.split("T",2);
                    var date1 = new Date(event.start.dateTime);
                }
                catch{
                    date = 'NA';
                }
                 time = date[1];
                 time = time.split(":");
                 date = date[0];
                 date = date.split("-");
                 location = event.location;
                 calYear = date[0]; 
                 calMonth = parseInt(date[1],10); 
                 calDay = parseInt(date[2],10);
                 today = new Date().toISOString().substr(0, 19);
                 today = today.split("T",2);
                 month = today[0].split("-");
                 year = month[0];
                 month = parseInt(month[1],10);
                 nextMonth = parseInt(month,10)+1;

                 if(typeof location === 'undefined'){location='Location: N/A'}

                 let eventInput = new EventOne(calDay, calMonth, calYear, location , event.summary)
                 
                 //this month
                 if(calYear === year && calMonth === month){
                 eventArrayTwo.push(eventInput);
                    };

                    //next month
                 if(calYear === year && calMonth === month +1){
                    eventArrayOne.push(eventInput);
                    console.log(month + 1);
                    };
            });

            
            eventArrayTwo.sort((a,b) => a.date - b.date);
            eventArrayTwo.forEach(function(eventTwo){
                output += `
                
                <li class="events__item">
                    <div class="events__item--left">
                    <span class="events__name">${eventTwo.title}</span>
                    <span class="events__date">May ${eventTwo.date} ${eventTwo.year}</span>
                    <span class="events__date">${location}</span>
                    </div>
                </li>
            `;
            });
            eventArrayOne.sort((a,b) => a.date - b.date);
            eventArrayOne.forEach(function(eventOne){
               
                output1 += `
                
                <li class="events__item">
                    <div class="events__item--left">
                    <span class="events__name">${eventOne.title}</span>
                    <span class="events__date">June ${eventOne.date} ${eventOne.year}</span>
                    <span class="events__date">${location}</span>
                    </div>
                </li>
            `;
            });
            
            
                document.getElementById('event').innerHTML = output;
                document.getElementById('event1').innerHTML = output1;

        }
        
            
    
        
    }
    xhr.send();
}
window.onload = function(){
    loadEvent();
}

//calYear === year && calMonth === nextMonth
                 
/* <li class="events__item">
            <div class="events__item--left">
              <span class="events__name">Visit Grandma</span>
              <span class="events__date">Oct 27 - Oct 28</span>
            </div>
          </li>  */




                
             