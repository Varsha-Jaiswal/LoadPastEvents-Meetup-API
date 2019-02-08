new Vue({
    el: "#load-events-app",
    data: {
        events: []
    },
    methods: {
        loadEvents() {
            fetch('API')
            .then(data => data.json())
            .then(data => {
                this.events = data;
            })
        }
    }
});
