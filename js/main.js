const $fb = firebase.firestore().collection("homepageSetup")

const $ = txt => {
  return document.querySelector(txt)
}

const lifeList = $fb.doc("life-list")
const studyList = $fb.doc("study-list")

const dateToString = date => {
  let returnString = date.getDate() + "."
  returnString += (1 + date.getMonth()) + "."
  return returnString + (date.getFullYear()) 
}

const getToday = () => {
  const now = new Date();
  return dateToString(now)
}

const checkIfToday = (date) => {
  if(getToday() == date)
    return true
  return false
}

const updateStatusOfList = (key, listName) => {
  const input = $("." + listName).querySelector("." + key)
  const value = input.checked
  console.log(key)
  console.log(listName)
  $fb.doc(listName).get().then(listData => {
    let data = listData.data()
    data[key]["status"] = value
    data[key]["since"]  = getToday()
    console.log(data)
    $fb.doc(listName).set(data)
  })
}

const makeItem = (data, name, key, listName) => {
  const div = document.createElement("div")
  div.classList.add("listItem")
  console.log(name)
  const text = document.createTextNode(name)
  const checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  checkbox.classList.add(key)
  div.appendChild(checkbox)
  div.appendChild(text)

  checkbox.addEventListener("click", event => {
    updateStatusOfList(key, listName)
    div.classList.toggle("isChecked")
  })

  if(data.default) 
    checkbox.checked = true

  if(checkIfToday(data["since"]) && data["status"]) {
    console.log(true)
    checkbox.checked = true
  }

  if(checkbox.checked)
    div.classList.add("isChecked")

  return div;
}

const renderData = (listData, listName) => {
  const ol = document.createElement("ol")

  for(let key in listData) {
    const text = listData[key]["name"]

    const item = makeItem(listData[key], text, key, listName)
    const li   = document.createElement("li")

    li.appendChild(item)
    console.log(li)
    ol.appendChild(li)
  }

  document.getElementById("loadingLife").style.display = "none"
  return ol
}

const renderFromDB = listName => {
  const list = $fb.doc(listName)
  list.get().then(listData => {
    console.log(listData)
    const ol = renderData(listData.data(), listName)
    document.querySelector("." + listName).appendChild(ol)
  })
} 

renderFromDB("life-list")
renderFromDB("study-list")