const inputBtn = document.getElementById("input-btn")
let myLeads = ["www.google.com"]
//turn my leads into string
/* myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)
console.log(myLeads)

myLeads = JSON.parse(myLeads)
console.log(typeof myLeads)
console.log(myLeads)

myLeads.push("www.aryan.com")

myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)
console.log(myLeads) */

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

/* localStorage.setItem("myLeads","www.example")
localStorage.setItem("myLead","www.examp")
localStorage.setItem("myLea","www.exame")
console.log(localStorage.getItem("myLeads"))
console.log(localStorage.getItem("myLead"))
console.log(localStorage.getItem("myLea"))
localStorage.clear()
localStorage.clear()
localStorage.clear() */

let leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalstorage)

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
})
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li> <a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"
        listItems += `
            <li>
                <a target = '_blank' href = '${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}

