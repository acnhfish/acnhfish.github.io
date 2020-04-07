Vue.component("critter", {
  props: {
    critter: Object,
    months: Array,
    currentMonth: Number,
    currentTime: Number,
    hemisphere: Boolean,
    search: String,
    monthChecked: Boolean,
        hourChecked: Boolean,
    collectedChecked: Boolean,
    isFish: Boolean,
    collected: Boolean
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
          return this.critter.NorthMonths[this.currentMonth];
        } else {
          return this.critter.SouthMonths[this.currentMonth];
        }
      } else {
        return true;
      }
    },
    showIfCurrentTime: function() {
      if (this.hourChecked) {
        currentTime = this.currentTime;
        startTime = this.critter.StartTime;
        endTime = this.critter.EndTime;
        if (this.critter.StartTime == this.critter.EndTime) {
          return true;
        } else if (Array.isArray(startTime)) {
          for (index = 0; index < startTime.length; ++index) {
            if (startTime[index] > endTime[index]) {
              startTime[index] -= 24
              if (currentTime > 12) {
                currentTime -= 24
              }
            }
            if (currentTime >= startTime[index] && currentTime < endTime[index]) {
              return true
            }
          }
          return false
        } else if (startTime > endTime) {
          startTime -= 24;
          if (currentTime > 12) {
            currentTime -= 24;
          }
        }
        return currentTime >= startTime && currentTime < endTime;
      } else {
        return true;
      }
    },
      bugLocation: function () {
          switch (this.critter.Location) {
              case 0:
                  return "Beach";
              case 1:
                  return "Shaking trees";
              case 2:
                  return "Flying";
              case 3:
                  return "Flying by light";
              case 4:
                  return "Hitting rocks";
              case 5:
                  return "Near trees";
              case 6:
                  return "Flowers";
              case 7:
                  return "On the ground";
              case 8:
                  return "Rocks (raining)";
              case 9:
                  return "Beach rocks";
              case 10:
                  return "Rotten food";
              case 11:
                  return "Trash";
              case 12:
                  return "Tree stumps";
              case 13:
                  return "Trees";
              case 14:
                  return "Villagers";
              case 15:
                  return "White flowers";
              case 16:
                  return "Ponds";
              case 17:
                  return "Ponds and rivers";
              case 18:
                  return "Underground";
              case 19:
                  return "Palm trees"
          }
      },
    shadowType: function() {
        switch (this.critter.ShadowType) {
            case 0:
                return "Smallest";
            case 1:
                return "Small";
            case 2:
                return "Medium";
            case 3:
                return "Large";
            case 4:
                return "Extra Large";
            case 5:
                return "Largest";
            case 6:
                return "Largest with Fin";
            case 7:
                return "Narrow";
        }
    },
    fishLocation: function() {
      switch (this.critter.Location) {
        case 0:
          return "Pier";
        case 1:
          return "Pond";
        case 2:
          return "River";
        case 3:
          return "Clifftop River";
        case 4:
          return "River mouth";
        case 5:
          return "Sea";
        case 6:
          return "Sea (raining)";
      }
    },
    
    availabilityArrayHandler: function () {
      availabilityString = ""
      for (index = 0; index < this.critter.StartTime.length; ++index) {
        tempAvailabilityString = ('0' + this.critter.StartTime[index]).slice(-2) + ":00-" + ("0" + this.critter.EndTime[index]).slice(-2) + ":00 "
        availabilityString = availabilityString + tempAvailabilityString
        
      }
      return availabilityString.slice(0, -1)
      }
    },
  template: `<div class="critter" v-bind:class="{collected: collected}" v-if="showIfCurrentMonth && showIfCurrentTime && critter.Name.toLowerCase().includes(this.search) && (collectedChecked || !collected)">
        <h4 class="name" v-on:click="$emit('save-collected')">{{ critter.Name }}</h4>
        <span class="location">{{ isFish ? fishLocation : bugLocation }}</span>
        <span class="fishShadow" v-if="isFish">{{ shadowType }} </span>
        <span class="availability-time" v-if="Array.isArray(critter.StartTime)">{{ availabilityArrayHandler }}</span>
        <span class="availability-time" v-else-if="critter.StartTime != 0">{{ ("0" + critter.StartTime).slice(-2) }}:00-{{ ("0" + critter.EndTime).slice(-2) }}:00</span>
        <span class="availability-time" v-else>Any time</span>
        <div class="datebox" v-if="hemisphere">
        <span class="availability-date" v-for="(month, index) in critter.NorthMonths" v-bind:class="{ available: month }">{{ formatMonth(index) }}</span>
        </div>
        <div class="datebox" v-else>
        <span class="availability-date" v-for="(month, index) in critter.SouthMonths" v-bind:class="{ available: month }">{{ formatMonth(index) }}</span>
        </div>
        <span class="value">Bells: {{ critter.Value }}</span>
        </div>`
});
