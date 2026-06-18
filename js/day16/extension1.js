const inputBtn = document.getElementById("input-btn")
let myLeads = []
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
let tabBtn = document.getElementById("save-btn")

/* localStorage.setItem("myLeads","www.example")
localStorage.setItem("myLead","www.examp")
localStorage.setItem("myLea","www.exame")
console.log(localStorage.getItem("myLeads"))
console.log(localStorage.getItem("myLead"))
console.log(localStorage.getItem("myLea"))
localStorage.clear()
localStorage.clear()
localStorage.clear() */

const leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

if (leadsFromLocalstorage) {
    myLeads = leadsFromLocalstorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
   })
    
})
 
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li> <a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"
        listItems += `
            <li>
                <a target = '_blank' href = '${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})