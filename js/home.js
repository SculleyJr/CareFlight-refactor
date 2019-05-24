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

            let active = '';
            let location = '';

            events.items.forEach(function(event){

                 date = event.start.dateTime.split("T",2);
                var date1 = new Date(event.start.dateTime);

                 time = date[1];
                 time = time.split(":");
                 date = date[0];
                 date = date.split("-");
                 location = event.location;

                 date1.
                 console.log(date[0]);

                if(date[0] === "2019"){

                     active = document.getElementById(date[2]);
                     console.log(active);
                     active.className += " calendar-table__event";
                    
                     if(typeof location === 'undefined'){location='Location: N/A'}
                     

                    output += `
                
                <li class="events__item">
                    <div class="events__item--left">
                    <span class="events__name">${event.summary}</span>
                    <span class="events__date">May ${date[2]} ${date[0]}</span>
                    <span class="events__date">${location}</span>
                    </div>
                </li>
            `;
                    
                }

                 

                 
            });
                 

                 
{/* <li class="events__item">
            <div class="events__item--left">
              <span class="events__name">Visit Grandma</span>
              <span class="events__date">Oct 27 - Oct 28</span>
            </div>
          </li>  */}
                
            
            
         
                document.getElementById('event').innerHTML = output;


            console.log(event);
        }
    }
    xhr.send();

}
window.onload = function(){
    loadEvent();
}