date = new Date();
month = date.getMonth();
hour = date.getHours();

var vm = new Vue({
  el: "#app",
  data: {
    bugs: bugs,
    fishes: fish,
    selectedHemisphere: true,
    search: "",
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    currentMonth: month,
    currentHour: hour,
    currentTime: moment(),
    bugsChecked: true,
    fishChecked: true,
    monthChecked: true,
    hourChecked: true,
    collectedChecked: true,
    autoTimeChecked: true,
    filtersChecked: false,
    showOrHideFishText: "Hide fish",
    showOrHideBugsText: "Hide bugs",
    resetButton: false
  },
  computed: {
    formatSearch: function() {
      return this.search.toLowerCase();
    },
    selectedTime: {
      get: function () {
        return Number(this.currentTime.format("HH"))
      },
      set: function (newValue) {
        this.currentTime = moment().set({hour:newValue, minute:0, second:0,millisecond:0})
      }
    }
  },
  methods: {
    changeHourFlag: function (event) {
      this.hourChecked = !this.hourChecked;
    },
    changeMonthFlag: function (event) {
      this.monthChecked = !this.monthChecked;
    },
    changeFishFlag: function (event) {
      this.fishChecked = !this.fishChecked;
      if (this.fishChecked) {
        this.showOrHideFishText = "Hide fish";
      } else {
        this.showOrHideFishText = "Show fish";
      }
    },
    changeBugsFlag: function (event) {
      this.bugsChecked = !this.bugsChecked;
      if (this.bugsChecked) {
        this.showOrHideBugsText = "Hide bugs";
      } else {
        this.showOrHideBugsText = "Show bugs";
      }
    },
    changeHemisphere: function (event) {
      this.selectedHemisphere = !this.selectedHemisphere;
      localStorage.setItem("selectedHemisphere", this.selectedHemisphere)
    },
    changeCollectedChecked: function () {
      this.collectedChecked = !this.collectedChecked
    },
    updateTime: function () {
      setIntervalID = setInterval(function () {
        this.currentTime = moment()
      }.bind(this), 1000)
      
    },
    autoTimeButton: function () {
      this.autoTimeChecked = !this.autoTimeChecked
      if (!this.autoTimeChecked) {
        clearInterval(setIntervalID)
      } else {
        this.currentTime = moment()
        this.updateTime()
      }
    },
    getCollected: function (critter) {
      if (localStorage.getItem(critter) == "true") {
        return true
      } else {
        return false
      }
    },
    saveCollected: function (critter) {
      localStorage.setItem(critter, !this.getCollected(critter))
      this.updateTime()
    },
    filtersCheck: function () {
      this.filtersChecked = !this.filtersChecked
    },
    resetFilters: function () {
      if (!this.autoTimeChecked) this.autoTimeButton()
      if (!this.fishChecked) this.changeFishFlag()
      if (!this.bugsChecked) this.changeBugsFlag()
      if (!this.monthChecked) this.changeMonthFlag()
      if (!this.hourChecked) this.changeHourFlag()
      if (!this.collectedChecked) this.changeCollectedChecked()

      d = new Date()
      this.currentMonth = d.getMonth()
    },
    resetButtonClicked: function () {
      this.resetButton = !this.resetButton
    },
    realResetButtonClicked: function () {
      storedHemisphere = localStorage.getItem("selectedHemisphere")
      localStorage.clear()
      this.resetButton = false
      if (storedHemisphere == "true") {
        this.selectedHemisphere = true
      } else if (storedHemisphere == "false") {
        this.selectedHemisphere = false
      } else {
        return
      }
    },
    escPressed: function () {
      this.search = ""
      document.getElementById("searchBox").blur()
    }
  
  },
  created: function () {
    this.updateTime()
    if (localStorage.getItem("selectedHemisphere")) {
      if (localStorage.getItem("selectedHemisphere") == "true") {
        this.selectedHemisphere = true
      } else {
        this.selectedHemisphere = false
      }
    }
  }
});
