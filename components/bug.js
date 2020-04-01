Vue.component("bug", {
  props: ["bug"],
  data: function() {
    return {};
  },
  computed: {
    showIfCurrentMonth: function () {
      theDate = new Date()
      return this.bug.Months[theDate.getMonth()]
    }
  },
  template: `<div v-if="showIfCurrentMonth">
        <h4>{{ bug.Bug }}</h4>
        <span class="location">{{ bug.Location }}</span>
        <span class="availability-time" v-if="bug.StartTime != 0">{{ bug.StartTime }}&#58;00  -{{ bug.EndTime }}&#58;00</span>
        <span class="availability-time" v-else>Any time</span>
        <span class="availability-date" v-for="month in bug.Months" v-bind:class="{ available: month }">{{ month }}</span>
        <span class="value">Bells: {{ bug.Value }}</span>
    </div>`
});
