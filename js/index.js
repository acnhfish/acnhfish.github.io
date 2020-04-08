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
      "Dec",
    ],
    currentMonth: month,
    currentHour: hour,
    currentTime: moment(),
    showBugsFlag: true,
    showFishFlag: true,
    filterByMonthFlag: true,
    filterByHourFlag: true,
    filterByCollectedFlag: true,
    autoTimeFlag: true,
    showFiltersFlag: false,
    saveFiltersFlag: false,
    resetButton: false,
    saveAutoTime: false,
  },
  computed: {
    formatSearch: function () {
      return this.search.toLowerCase();
    },
    selectedTime: {
      get: function () {
        return Number(this.currentTime.format("HH"));
      },
      set: function (newValue) {
        this.currentTime = moment().set({
          hour: newValue,
          minute: 0,
          second: 0,
          millisecond: 0,
        });
      },
    },
  },
  methods: {
    changeHourFlag: function () {
      this.filterByHourFlag = !this.filterByHourFlag;
      if (saveFiltersFlag)
        localStorage.setItem("filterByHourFlag", this.filterByHourFlag);
    },
    changeMonthFlag: function () {
      this.filterByMonthFlag = !this.filterByMonthFlag;
      if (saveFiltersFlag)
        localStorage.setItem("filterByMonthFlag", this.filterByMonthFlag);
    },
    changeFishFlag: function () {
      this.showFishFlag = !this.showFishFlag;
      if (saveFiltersFlag)
        localStorage.setItem("showFishFlag", this.showFishFlag);
    },
    changeBugsFlag: function () {
      this.showBugsFlag = !this.showBugsFlag;
      if (saveFiltersFlag)
        localStorage.setItem("showBugsFlag", this.showBugsFlag);
    },
    changeHemisphere: function () {
      this.selectedHemisphere = !this.selectedHemisphere;
      localStorage.setItem("selectedHemisphere", this.selectedHemisphere);
    },
    changeCollectedFlag: function () {
      this.filterByCollectedFlag = !this.filterByCollectedFlag;
      if (saveFiltersFlag)
        localStorage.setItem(
          "filterByCollectedFlag",
          this.filterByCollectedFlag
        );
    },
    updateTime: function () {
      setIntervalID = setInterval(
        function () {
          this.currentTime = moment();
        }.bind(this),
        1000
      );
    },
    autoTimeButton: function () {
      this.autoTimeFlag = !this.autoTimeFlag;
      if (!this.autoTimeFlag) {
        clearInterval(setIntervalID);
      } else {
        this.currentTime = moment();
        this.updateTime();
      }
    },
    getCollected: function (critter) {
      if (localStorage.getItem(critter) == "true") {
        return true;
      } else {
        return false;
      }
    },
    saveCollected: function (critter) {
      localStorage.setItem(critter, !this.getCollected(critter));
      this.updateTime();
    },
    changeShowFiltersFlag: function () {
      this.showFiltersFlag = !this.showFiltersFlag;
    },
    changeSaveFiltersFlag: function () {
      this.saveFiltersFlag = !this.saveFiltersFlag;
    },
    resetFilters: function () {
      if (!this.autoTimeFlag) this.autoTimeButton();
      if (!this.showFishFlag) this.changeFishFlag();
      if (!this.showBugsFlag) this.changeBugsFlag();
      if (!this.filterByMonthFlag) this.changeMonthFlag();
      if (!this.filterByHourFlag) this.changeHourFlag();
      if (!this.filterByCollectedFlag) this.changeCollectedFlag();
      if (this.saveFiltersFlag) this.changeSaveFiltersFlag();
      d = new Date();
      this.currentMonth = d.getMonth();
    },
    setFilters: function () {
      localStorage.getItem("saveFiltersFlag") == "true"
        ? (this.saveFiltersFlag = true)
        : (this.saveFiltersFlag = false);
      localStorage.getItem("autoTimeFlag") == "false"
        ? (this.autoTimeFlag = false)
        : (this.autoTimeFlag = true);
      localStorage.getItem("showFishFlag") == "false"
        ? (this.showFishFlag = false)
        : (this.showFishFlag = true);
      localStorage.getItem("showBugsFlag") == "false"
        ? (this.showBugsFlag = false)
        : (this.showBugsFlag = true);
      localStorage.getItem("filterByMonthFlag") == "false"
        ? (this.filterByMonthFlag = false)
        : (this.filterByMonthFlag = true);
      localStorage.getItem("filterByHourFlag") == "false"
        ? (this.filterByHourFlag = false)
        : (this.filterByHourFlag = true);
      localStorage.getItem("filterByCollectedFlag") == "false"
        ? (this.filterByCollectedFlag = false)
        : (this.filterByCollectedFlag = true);
    },
    resetButtonClicked: function () {
      this.resetButton = !this.resetButton;
    },
    realResetButtonClicked: function () {
      storedHemisphere = localStorage.getItem("selectedHemisphere");
      localStorage.clear();
      this.resetButton = false;
      if (storedHemisphere == "true") {
        this.selectedHemisphere = true;
        localStorage.setItem("selectedHemisphere", true);
      } else if (storedHemisphere == "false") {
        this.selectedHemisphere = false;
        localStorage.setItem("selectedHemisphere", false);
      } else {
        return;
      }
    },
    escPressed: function () {
      this.search = "";
      document.getElementById("searchBox").blur();
    },
  },
  watch: {
    saveFiltersFlag: function (flag) {
      localStorage.setItem("saveFiltersFlag", flag);
      localStorage.setItem("autoTimeFlag", this.autoTimeFlag);
      localStorage.setItem("showFishFlag", this.showFishFlag);
      localStorage.setItem("showBugsFlag", this.showBugsFlag);
      localStorage.setItem("filterByMonthFlag", this.filterByMonthFlag);
      localStorage.setItem("filterByHourFlag", this.filterByHourFlag);
      localStorage.setItem("filterByCollectedFlag", this.filterByCollectedFlag);
    },
  },
  created: function () {
    this.updateTime();
    if (localStorage.getItem("selectedHemisphere") == "true") {
      this.selectedHemisphere = true;
    } else if (localStorage.getItem("selectedHemisphere") == "false") {
      this.selectedHemisphere = false;
    }
    if (localStorage.getItem("saveFiltersFlag") == "true") {
      this.setFilters();
    }
  },
});
