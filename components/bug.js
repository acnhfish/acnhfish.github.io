Vue.component("bug", {
  props: {
    bug: Object,
    months: Array,
    currentMonth: Number,
    currentTime: Number,
    hemisphere: Boolean,
    search: String,
    monthChecked: Boolean,
    hourChecked: Boolean
  },
  data: function() {
    return {};
  },
  methods: {
    formatMonth: function(index) {
      return this.months[index];
    }
  },
  computed: {
    showIfCurrentMonth: function() {
      if (this.monthChecked) {
        if (this.hemisphere) {
          return this.bug.NorthMonths[this.currentMonth];
        } else {
          return this.bug.SouthMonths[this.currentMonth];
        }
      } else {
        return true;
      }
    },
    showIfCurrentTime: function() {
      if (this.hourChecked) {
        currentTime = this.currentTime;
        startTime = this.bug.StartTime;
        if (this.bug.StartTime > this.bug.EndTime) {
          startTime -= 24;
          if (currentTime > 12) {
            currentTime -= 24
          }
        }
        if (this.bug.StartTime == this.bug.EndTime) {
          return true;
        }
        return currentTime >= startTime && currentTime < this.bug.EndTime;
      } else {
        return true;
      }
    },
    location: function() {
      switch (this.bug.Location) {
        case 0:
          return "Beach";
        case 1:
          return "Shaking trees";
        case 2:
          return "Flying";
        case 3:
          return "Flying by light";
        case 4:
          return "Hit rock";
        case 5:
          return "Near tree, looks like furniture leaf";
        case 6:
          return "On flowers";
        case 7:
          return "On the ground";
        case 8:
          return "On rocks in the rain";
        case 9:
          return "On beach rocks";
        case 10:
          return "On rotten food";
        case 11:
          return "On trash";
        case 12:
          return "Tree stumps";
        case 13:
          return "On trees";
        case 14:
          return "On villagers";
        case 15:
          return "On white flowers";
        case 16:
          return "On pond";
        case 17:
          return "On ponds and rivers";
        case 18:
          return "Underground";
      }
    }
  },
  template: `<div class="critter" v-if="showIfCurrentMonth && showIfCurrentTime && bug.Bug.toLowerCase().includes(this.search)">
        <h4 class="name">{{ bug.Bug }}</h4>
        <span class="location">{{ location }}</span>
        <span class="availability-time" v-if="bug.StartTime != 0">{{ bug.StartTime }}&#58;00-{{ bug.EndTime }}&#58;00</span>
        <span class="availability-time" v-else>Any time</span>
        <div class="datebox" v-if="hemisphere">
        <span class="availability-date" v-for="(month, index) in bug.NorthMonths" v-bind:class="{ available: month }">{{ formatMonth(index) }}</span>
        </div>
        <div class="datebox" v-else>
        <span class="availability-date" v-for="(month, index) in bug.SouthMonths" v-bind:class="{ available: month }">{{ formatMonth(index) }}</span>
        </div>
        <span class="value">Bells: {{ bug.Value }}</span>
        </div>`
});
