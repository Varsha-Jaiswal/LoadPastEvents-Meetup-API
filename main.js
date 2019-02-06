new Vue({
    el: "#load-events-app",
    data: {
        events: [],
        events_data: ''
    },
    methods: {
        loadEvents() {
            fetch('https://cors.io/?https://api.meetup.com/GDG-Jalandhar/events?photo-host=public&page=20&sig_id=225657600&status=past&sig=63d9475bd43b35e91b46b4ef6682ecd846094015')
            .then(data => data.json())
            .then(data => {
                this.events = data;
                for(var event in this.events){
                    this.events_data += `
                    <div class="col-md-4 p-2">
                        <div class="card" style="min-height:220px; max-height:220px;" >
                            <div class="card-body">
                                <p class="card-body text-muted"><b> ${this.events[event].name}</b><br>
                                    Date & Time: ${this.events[event].local_date}&nbsp;${this.events[event].local_time}
                                    <br>
                                    Venue: ${this.events[event].venue.name}
                                </p>
                                <a href="${this.events[event].link}" target="_blank" class="btn btn-primary">Event Detail</a>
                            </div>
                        </div>
                    </div>
                    `;
                }
            })
        }
    }
});
