let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInput = document.getElementById("save-in");
const saveBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("del-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

saveInput.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

const tabs = [{ url: "https://www.google.com" }];

saveBtn.addEventListener("click", function () {
  myLeads.push(tabs[0].url);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
              <li>
                <a href="${leads[i]}" target="_blank">
                  ${leads[i]}
                </a>
              </li>
          `;
  }

  ulEl.innerHTML = listItems;
}

delBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
