const a = {
"aa": {
  name: "Read list",
  status: false,
  default: true,
  since: "1.1.2018"
},

"ab": {
  name: "Make bed",
  status: false,
  default: true,
  since: "1.1.2018"
},

"ac": {
  name: "Shower",
  status: false,
  default: true,
  since: "1.1.2018"
},

"ad": {
  name: "Read with coffee/tea",
  status: false,
  default: false,
  since: "1.1.2018"
},

"ae": {
  name: "Clean and organize room",
  status: false,
  default: false,
  since: "1.1.2018"
},

"af": {
  name: "No-fap",
  status: false,
  default: true,
  since: "1.1.2018"
},

"ag": {
  name: "No instant gratification in room",
  status: false,
  default: false,
  since: "1.1.2018"
},

"ah": {
  name: "Gym 3 time last 7 days",
  status: false,
  default: false,
  since: "1.1.2018"
},

"ai": {
  name: "Meditate",
  status: false,
  default: false,
  since: "1.1.2018"
},

"aj": {
  name: "No coffee/caffeine ≠ tea",
  status: false,
  default: false,
  since: "1.1.2018"
},

"ak": {
  name: "Early sleep (wake-up < 8:00)",
  status: false,
  default: false,
  since: "1.1.2018"
},

"al": {
  name: "No weed",
  status: false,
  default: false,
  since: "1.1.2018"
},

"am": {
  name: "Good food",
  status: false,
  default: false,
  since: "1.1.2018"
},

"a": {
  name: "No smoking",
  status: false,
  default: true,
  since: "1.1.2018"
},


}

const b = {
  "aa": {
    name: "Stafrænar rásir",
    default: false,
    status: true,
    since: "01.01.2018"
  },
  "ab": {
    name: "OS/Reiknifræði",
    default: false,
    status: true,
    since: "01.01.2018"
  },
  "ac": {
    name: "UI",
    default: false,
    status: true,
    since: "01.01.2018"
  },
  "ad": {
    name: "Töl 2",
    default: false,
    status: true,
    since: "01.01.2018"
  },
  "ae": {
    name: "Software dev",
    default: false,
    status: true,
    since: "01.01.2018"
  }

}

$fb.doc("life-list").set(a)
$fb.doc("study-list").set(b)

