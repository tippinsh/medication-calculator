"use strict";
const drugs = [
  {
    name: "Risperidone",
    type: "Atypical antipsychotic",
    useage: "Schizophrenia",
    sideEffects: [
      "feeling sleepy",
      "dyskinesia",
      "headaches",
      "weight-gain",
      "appetite chanegs",
      "stomach pain",
      "nausea",
      "vomiting",
      "gastrointestinal issues",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/risperidone/",
  },
  {
    name: "Sertraline",
    type: "Antidepressant (SSRI)",
    useage: "Depression/Anxiety",
    sideEffects: [
      "headaches",
      "nausea",
      "dry mount",
      "difficulty falling asleep",
      "fatigue",
      "diarrhoea",
    ],
    BNFLink: "",
  },
  {
    name: "Citalopram",
    type: "Antidepressant (SSRI)",
    useage: "Depressant/Anxiety",
    sideEffects: [
      "dry mouth",
      "excessive sweating",
      "difficulty sleeping",
      "feeling tired or weak",
      "headaches",
      "nausea",
    ],
    BNFLink: "",
  },
  {
    name: "Quetiapine",
    type: "Atypical antipsychotic",
    useage: ["Schizophrenia", "Bipolar", "Depression"],
    sideEffects: [
      "tiredness",
      "dizziness",
      "headaches",
      "dry mouth",
      "weight-gain",
      "high blood pressure",
    ],
    BNFLink: "",
  },
  {
    name: "Fluoxetine",
    type: "Antidepressant (SSRI)",
    useage: ["Depression", "OCD", "Bulimia"],
    sideEffects: [
      "nausea",
      "headaches",
      "difficulty sleeping",
      "diarrhoea",
      "feeling tired or weak",
    ],
    BNFLink: "",
  },
  {
    name: "Haloperidol",
    type: "Typical antipsychotic",
    useage: [
      "Schizophrenia",
      "Schizoaffective disorder",
      "Acute delirium",
      "Severe mania in bipolar",
    ],
    sideEffects: [
      "agitation",
      "constipation",
      "dizziness",
      "drowsiness",
      "dry mouth",
      "fatigue",
      "insomnia",
      "weight-gain",
      "vomiting",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/haloperidol/",
  },
  {
    name: "Olanzapine",
    type: "Atypical antipsychotic",
    useage: ["Schizophrenia", "Bipolar disorder"],
    sideEffects: [
      "tiredness during the day",
      "weight-gain",
      "dizziness",
      "rash",
      "constipation",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/olanzapine/",
  },
  {
    name: "Clozapine",
    type: "Atypical antipsychotic",
    useage: ["Schizophrenia", "Psychosis in Parkinson's disease"],
    sideEffects: [
      "constipation",
      "drowsiness",
      "dizziness",
      "dry mouth",
      "constipation",
      "fatigue",
      "hypotension",
      "insomnia",
      "movement disorders",
      "rash",
      "weight-gain",
      "vomiting",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/clozapine/",
  },
  {
    name: "Flupentixol",
    type: "Typical antipsychotic",
    useage: ["Schizophrenia", "Psychosis", "Depressive illness"],
    sideEffects: [
      "constipation",
      "drowsiness",
      "dizziness",
      "dry mouth",
      "constipation",
      "fatigue",
      "insomnia",
      "movement disorders",
      "rash",
      "weight-gain",
      "vomiting",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/flupentixol/",
  },
  {
    name: "Zuclopenthixol (Clopixol)",
    type: "Typical antipsychotic",
    useage: ["Schizophrenia", "Psychosis"],
    sideEffects: [
      "constipation",
      "drowsiness",
      "dizziness",
      "dry mouth",
      "constipation",
      "fatigue",
      "insomnia",
      "movement disorders",
      "rash",
      "weight-gain",
      "vomiting",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/zuclopenthixol/",
  },
  {
    name: "Aripiprazole",
    type: "Atypical antipsychotic",
    useage: ["Schizophrenia"],
    sideEffects: [
      "anxiety",
      "gastrointestinal discomfort",
      "headaches",
      "hypersalivation",
      "nausea",
      "musculoskeletal stiffness",
    ],
    BNFLink: "https://bnf.nice.org.uk/drugs/aripiprazole/",
  },
  {
    name: "Amisulpride",
    type: "Atypical antipsychotic",
    useage: ["Schizophrenia"],
    sideEffects: ["anxiety", " breast pain", " hypersalivation", " nausea"],
    BNFLink: "https://bnf.nice.org.uk/drugs/amisulpride/",
  },
];

const body = document.getElementsByTagName("BODY")[0];

/* MEDICATION INFORMATION SECTION */

// Medication selector and information side
const type = document.getElementById("type");
const sideEffects = document.getElementById("side-effects");
const BNFLink = document.getElementById("bnf-link");
const dropDown = document.getElementById("medication");
let optionValue = +dropDown.value;

// Returns the value of the drop down selection
dropDown.addEventListener("change", (e) => {
  optionValue = +e.target.value;
  type.innerHTML = drugs[optionValue].type;
  const sideEffectsArr = drugs[optionValue].sideEffects;
  const arrayAsString = sideEffectsArr.join(", ");
  sideEffects.innerHTML = arrayAsString;
  BNFLink.href = drugs[optionValue].BNFLink;
});

/* MEDICATION CALCULATION SECTION */

const desiredAmount = document.getElementById("desired");
const atHand = document.getElementById("at-hand");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");

const weightWantSelector = document.getElementById("weights-want");
const weightHaveSelector = document.getElementById("weights-have");
const weightVolSelector = document.getElementById("weights-vol");

let resultForWant = null;
let resultForHave = null;
let resultForVol = null;

//Event listeners for the calculator volume type selection
weightWantSelector.addEventListener("change", function handleEvent(e) {
  resultForWant = e.target.value;
  return resultForWant;
});

weightHaveSelector.addEventListener("change", function handleEvent(e) {
  resultForHave = e.target.value;
  return resultForHave;
});

weightVolSelector.addEventListener("change", function handleEvent(e) {
  resultForVol = e.target.value;
  return resultForVol;
});

// Calculate dose result for liquids
function calculateResult() {
  let desired = +desiredAmount.value;
  let have = +atHand.value;
  let q = +quantity.value;
  let result = (desired / have) * q;
  return result + " ml";
}

// Calculate dose result for tablets
function calculateTablet() {
  let desired = +desiredAmount.value;
  let selection = resultForWant;
  if (selection === "mcg") {
    desired = mcgToMg(desired);
  } else if (selection == "g") {
    desired = gramsToMg(desired);
  }
  let have = +atHand.value;
  let selectionTwo = resultForHave;
  if (selectionTwo === "mcg") {
    have = mcgToMg(have);
  } else if (selectionTwo == "g") {
    have = gramsToMg(have);
  }
  let result = desired / have;
  return +result + " tablets";
}

// Conversion functions
function mcgToMg(mcg) {
  let mg = mcg / 1000;
  return mg;
}

function gramsToMg(grams) {
  let mg = grams * 1000;
  return mg;
}

// Declare variables for the form the medication comes in (e.g. liquid, tabs)
const form = document.getElementById("medication-form");
const liquids = document.getElementById("liquids");
const tablets = document.getElementById("tablets");
const toggleableElement = document.querySelector(".visible");
const submit = document.getElementById("submit-btn");
let activeSelection = 2;

// Determines if the last div should be invisible or visible

function toggleVolumeInput(e) {
  if (e === "tablets") {
    toggleableElement.className = "invisible";
  } else {
    toggleableElement.className = "visible";
  }
}

// Toggles whether ml is disable or not
function toggleMl(n) {
  const ml = document
    .querySelectorAll(".optionSelect option")
    .forEach((opt) => {
      if (opt.value == "ml") {
        opt.disabled = n;
      }
    });
}

function checkIfTabsOrVolSelected(event) {
  if (event.type === "tablets") {
    return calculateTablet();
  } else {
    return calculateResult();
  }
}

/* Check if required fields are empty */

const error = ["border-2", "border-red-700"];

function checkIfEmpty(type) {
  if (activeSelection == type) {
    if (desiredAmount.value.length === 0) {
      desiredAmount.classList.add(...error);
      return false;
    } else if (atHand.value.length === 0) {
      atHand.classList.add(...error);
      return false;
    } else {
      desiredAmount.classList.remove(...error);
      atHand.classList.remove(...error);
      return true;
    }
  }
}

/* Listens to the dosage calculator selector
Conditionally renders the volume div and disables the ml option for when tablets is selected */

form.addEventListener("change", (e) => {
  let formValue = e.target.value;
  if (form.value == "tablets") {
    toggleVolumeInput(formValue);
    toggleMl(true);
    activeSelection = "tablets";
  } else if (form.value == "liquids") {
    toggleVolumeInput(formValue);
    toggleMl(false);
    toggleVolumeInput(formValue);
    activeSelection = "liquids";
  }
});

/* Event listeners */

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (!checkIfEmpty("tablets")) {
    return;
  } else {
    if (activeSelection == "tablets") {
      let dose = calculateTablet();
      return (result.innerHTML = dose);
    } else {
      let dose = calculateResult();
      return (result.innerHTML = dose);
    }
  }
});

body.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!checkIfEmpty("tablets")) {
      return;
    } else {
      if (activeSelection == "tablets") {
        let dose = calculateTablet();
        return (result.innerHTML = dose);
      } else {
        let dose = calculateResult();
        return (result.innerHTML = dose);
      }
    }
  }
});
