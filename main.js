new Vue({
    el: "#load-events-app",
    data: {
        events: []
    },
    methods: {
        loadEvents() {
            fetch('https://cors.io/?https://api.meetup.com/GDG-Jalandhar/events?photo-host=public&page=20&sig_id=225657600&status=past&sig=63d9475bd43b35e91b46b4ef6682ecd846094015')
            .then(data => data.json())
            .then(data => {
                this.events = data;
            })
        }
    }
});
