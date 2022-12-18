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

function validate1() {
  const select = document.getElementById("weights-want").value;
  return select;
}
function validate2() {
  const select = document.getElementById("weights-have").value;
  return select;
}
function validate3() {
  const select = document.getElementById("weights-vol").value;
  return select;
}

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
  let selection = validate1();
  if (selection == "mcg") {
    desired = mcgToMg(desired);
  } else if (selection == "g") {
    desired = gramsToMg(desired);
  }
  let have = +atHand.value;
  let selectionTwo = validate2();
  if (selectionTwo == "mcg") {
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

//Implements submit with enter keypress and displays result
quantity.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    let dose = calculateResult();
    result.innerHTML = dose;
  }
});

// Declare variables for the form the medication comes in (e.g. liquid, tabs)
const form = document.getElementById("medication-form");
const liquids = document.getElementById("liquids");
const tablets = document.getElementById("tablets");
const toggleableElement = document.getElementById("quantity-input");

// Determines if the last div should be invisible or visible
function toggleVolumeInput(e) {
  if (e === "tablets") {
    toggleableElement.className = " invisible";
  } else {
    toggleableElement.className = "visible";
  }
}

// Toggles whether ml is disable or not
function toggleMl(n) {
  const ml = document.querySelectorAll(".test option").forEach((opt) => {
    if (opt.value == "ml") {
      opt.disabled = n;
    }
  });
}

atHand.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    let dose = calculateTablet();
    result.innerHTML = dose;
  }
});

// Conditionally renders the volume input div - this is not applicable to tablet form so is hidden when this is selected and displayed when another but tablets is selected

form.addEventListener("change", (e) => {
  let formValue = e.target.value;
  if (form.value === "tablets") {
    toggleVolumeInput(formValue);
    toggleMl(true);
  } else if (
    form.value === "liquids" ||
    form.value === "iv" ||
    form.value === "concentrations"
  ) {
    toggleVolumeInput(formValue);
    toggleMl(false);
  }
});
