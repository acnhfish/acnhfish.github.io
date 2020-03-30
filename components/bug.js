Vue.component("bug", {
  props: {},
  data: function() {
    return {};
  },
  methods: {
    format() {
      return this.format();
    }
  },
  template: `<div>
        <h4>{{ northern.bug.Bug }}</h4>
        <span class="location">{{ northern.bug.Location }}</span>
        <span class="availability-time">{{ northern.bug.StartTime }} - {{ northern.bug.EndTime }}</span>
        <span class="availability-date">{{ something goes here for computed availability data? }}</span>
        <span class="value">{{ northern.bug.Value }}</span>
    </div>`
});
