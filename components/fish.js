Vue.component("fish", {
  props: ["fish"],
  data: function() {
    return {};
  },
  template: `<div>
        <h4>{{ fish.Fish }}</h4>
        <span class="location">{{ fish.Location }}</span>
        <span class="fish-shadow">{{ fish.ShadowType }}</span>
        <span class="availability-time" v-if="fish.StartTime != 0">{{ fish.StartTime }}&#58;00-{{ fish.EndTime }}&#58;00</span>
        <span class="availability-time" v-else>Any time</span>
        <span class="availability-date" v-for="month in fish.Months" v-bind:class="{ available: month }">{{ month }}</span>
        <span class="value">Bells: {{ fish.Value }}</span>
    </div>`
});
