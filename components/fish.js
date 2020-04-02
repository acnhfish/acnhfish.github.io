Vue.component("fish", {
  props: ["fish"],
  data: function() {
    return {};
  },
  methods: {
    formatMonth: function (index) {
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return months[index]
    }
  },
  computed: {
    showIfCurrentMonth: function () {
      theDate = new Date()
      return this.fish.Months[theDate.getMonth()]
    },
    showIfCurrentTime: function () {
      theTime = new Date()
      currentTime = theTime.getHours()
      startTime = this.fish.StartTime
      if (this.fish.StartTime > this.fish.EndTime) {
        startTime = this.fish.StartTime - 24
        currentTime = theTime.getHours() - 24
      }
      if (this.fish.StartTime == this.fish.EndTime) {
        return true
      }
      return (currentTime >= startTime && currentTime < this.fish.EndTime)
    },
    shadowType: function () {
      switch (this.fish.ShadowType) {
        case 0:
          return "Smallest"
        case 1:
          return "Small"
        case 2:
          return "Medium"
        case 3:
          return "Large"
        case 4:
          return "Extra Large"
        case 5:
          return "Largest"
        case 6:
          return "Largest with Fin"
        case 7:
          return "Narrow"
      }
    },
    location: function () { 
      switch (this.fish.Location) {
        case 0:
          return "Pier"
        case 1:
          return "Pond"
        case 2:
          return "River"
        case 3:
          return "Clifftop River"
        case 4:
          return "River mouth"
        case 5:
          return "Sea"
        case 6:
          return "Sea (raining)"
      }
    }
  },

  template: `<div class="critter" v-if="showIfCurrentMonth && showIfCurrentTime">
        <h4>{{ fish.Fish }}</h4>
        <span class="location">{{ location }}</span>
        <span class="fish-shadow">{{ shadowType }} </span>
        <span class="availability-time" v-if="fish.StartTime != 0">{{ fish.StartTime }}&#58;00-{{ fish.EndTime }}&#58;00</span>
        <span class="availability-time" v-else>Any time</span>
        <div class="datebox">
        <span class="availability-date" v-for="(month, index) in fish.Months" v-bind:class="{ available: month }">{{ formatMonth(index) }}</span>
        </div>
        <span class="value">Bells: {{ fish.Value }}</span>
        </div>`
});
