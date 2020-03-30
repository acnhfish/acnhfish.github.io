Vue.component("fish", {
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
        <h4>{{ northern.fish.Fish }}</h4>
        <span class="location">{{ northern.fish.Location }}</span>
        <span class="fish-shadow">{{ northern.fish.ShadowType }}</span>
        <span class="availability-time">{{ northern.fish.StartTime }} - {{ northern.fish.EndTime }}</span>
        <span class="availability-date">{{ something goes here for computed availability data? }}</span>
        <span class="value">{{ northern.fish.Value }}</span>
    </div>`
});
