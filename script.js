const allQuestions = [
  {
    question: "What is the primary function of the circulatory system?",
    options: ["To produce hormones", "To deliver oxygenated blood to tissues and deoxygenated blood to the lungs", "To regulate body temperature", "To digest food"],
    answer: 1
  },
  {
    question: "Which electrolyte imbalance can contribute to shock?",
    options: ["Hyperglycemia", "Hypocalcemia", "Hyperuricemia"],
    answer: 1
  },
  {
    question: "Shock is defined as:",
    options: [
      "A sudden increase in cardiac output",
      "A condition with decreased cardiac output and arterial blood pressure leading to tissue ischemia",
      "A state of excessive blood volume",
      "A temporary increase in blood flow"
    ],
    answer: 1
  },
  {
    question: "The most common type of shock is:",
    options: ["Cardiogenic shock", "Hypovolemic shock", "Neurogenic shock", "Septic shock"],
    answer: 1
  },
  {
    question: "Hypovolemic shock occurs when intravascular volume is reduced by:",
    options: ["5–10%", "15–25%", "30–40%", "50–60%"],
    answer: 2
  },
  {
    question: "Which of the following is not a cause of hypovolemic shock?",
    options: ["Severe dehydration", "Burns", "Myocardial infarction", "Hemorrhage"],
    answer: 2
  },
  {
    question: "Cardiogenic shock is primarily caused by:",
    options: ["Excessive fluid intake", "Impaired heart pumping ability", "Severe allergic reaction", "Spinal cord injury"],
    answer: 1
  },
  {
    question: "Which type of shock results from widespread vasodilation?",
    options: ["Hypovolemic shock", "Cardiogenic shock", "Distributive shock", "Obstructive shock"],
    answer: 2
  },
  {
    question: "Septic shock is caused by:",
    options: ["Excessive blood loss", "Bacterial toxins leading to vasodilation", "Heart failure", "Spinal anesthesia"],
    answer: 1
  },
  {
    question: "Anaphylactic shock occurs due to:",
    options: ["Severe infection", "Antigen-antibody reaction releasing histamine", "Blood clot in the lungs", "Excessive sweating"],
    answer: 1
  },
  {
    question: "Neurogenic shock is characterized by:",
    options: ["Tachycardia and cool skin", "Bradycardia and warm skin", "Hypertension and rapid breathing", "Increased urine output"],
    answer: 1
  },
  {
    question: "In compensatory shock, blood pressure is typically:",
    options: ["Normal", "Extremely low", "Fluctuating", "Unmeasurable"],
    answer: 0
  },
  {
    question: "A key warning sign of shock is:",
    options: ["Increased urine output", "Warm, flushed skin", "Rapid, weak pulse", "Hypertension"],
    answer: 2
  },
  {
    question: "The first-line treatment for most types of shock is:",
    options: ["Antibiotics", "Fluid resuscitation", "Diuretics", "Bronchodilators"],
    answer: 1
  },
  {
    question: "Which position is recommended for a patient in hypovolemic shock?",
    options: ["High Fowler’s", "Trendelenburg", "Prone", "Side-lying"],
    answer: 1
  },
  {
    question: "In cardiogenic shock, management focuses on:",
    options: ["Increasing fluid intake", "Treating the underlying heart condition", "Administering antihistamines", "Elevating the head"],
    answer: 1
  },
  {
    question: "For septic shock, a priority intervention is:",
    options: ["Administering antibiotics", "Applying a tourniquet", "Restricting fluids", "Cooling the patient"],
    answer: 0
  },
  {
    question: "In neurogenic shock, the nurse should:",
    options: ["Elevate the legs and prevent heat loss", "Administer epinephrine", "Encourage oral fluids", "Apply ice packs"],
    answer: 0
  },
  {
    question: "Anaphylactic shock requires:",
    options: ["Immediate oxygen and epinephrine", "Blood transfusion", "Spinal immobilization", "Diuretic therapy"],
    answer: 0
  },
  {
    question: "Normal CVP (Central Venous Pressure) is:",
    options: ["1–3 cm H₂O", "5–10 cm H₂O", "15–20 cm H₂O", "25–30 cm H₂O"],
    answer: 1
  },
  {
    question: "Which drug improves cardiac contractility in shock?",
    options: ["Nitroglycerin", "Dobutamine", "Furosemide", "Diphenhydramine"],
    answer: 1
  },
  {
    question: "Vasopressor agents (e.g., norepinephrine) are used to:",
    options: ["Dilate blood vessels", "Increase blood pressure via vasoconstriction", "Reduce heart rate", "Lower oxygen demand"],
    answer: 1
  },
  {
    question: "A patient in shock with pulmonary edema may receive:",
    options: ["Bronchodilators", "Diuretics", "Antihistamines", "Anticoagulants"],
    answer: 1
  },
  {
    question: "Which assessment finding indicates worsening shock?",
    options: ["Blood pressure 120/80 mmHg", "Urine output 50 mL/hr", "Capillary refill >3 seconds", "Warm, dry skin"],
    answer: 2
  },
  {
    question: "In hypovolemic shock, external bleeding should be controlled by:",
    options: ["Elevating the limb", "Applying direct pressure", "Massaging the area", "Administering IV fluids only"],
    answer: 1
  },
  {
    question: "Which electrolyte is critical for nerve and muscle function?",
    options: ["Sodium", "Potassium", "Chloride", "All of the above"],
    answer: 3
  },
  {
    question: "A patient with cardiogenic shock may exhibit:",
    options: ["Hypertension", "Pulmonary edema", "Bradycardia", "Hyperthermia"],
    answer: 1
  },
  {
    question: "Which is a risk factor for septic shock?",
    options: ["Young age", "Malnourishment", "High protein diet", "Regular exercise"],
    answer: 1
  },
  {
    question: "Neurogenic shock can result from:",
    options: ["Severe dehydration", "Spinal cord injury", "Myocardial infarction", "Allergic reaction"],
    answer: 1
  },
  {
    question: "The progressive stage of shock is marked by:",
    options: ["Stable vital signs", "Systolic BP <80–90 mmHg", "Increased urine output", "Warm extremities"],
    answer: 1
  },
  {
    question: "Which medication is a vasodilator used in shock?",
    options: ["Dopamine", "Nitroprusside", "Epinephrine", "Vasopressin"],
    answer: 1
  },
  {
    question: "A patient in shock should not be given:",
    options: ["IV fluids", "Oral fluids", "Oxygen", "Medications"],
    answer: 1
  },
  {
    question: "Which nursing intervention is essential for all shock patients?",
    options: ["Encouraging ambulation", "Monitoring hemodynamic parameters", "Restricting oxygen", "Avoiding sterile techniques"],
    answer: 1
  },
  {
    question: "In anaphylactic shock, histamine causes:",
    options: ["Vasoconstriction", "Bronchodilation", "Vasodilation and capillary permeability", "Increased heart contractility"],
    answer: 2
  },
  {
    question: "Which is a non-coronary cause of cardiogenic shock?",
    options: ["Myocardial infarction", "Severe hypoxemia", "Chronic heart disease", "Cardiac surgery"],
    answer: 1
  },
  {
    question: "A patient in shock with metabolic acidosis likely has:",
    options: ["Respiratory alkalosis", "Low PaCO₂", "High lactate levels", "Hypertension"],
    answer: 2
  },
  {
    question: "Which is not a compensatory mechanism in shock?",
    options: ["Peripheral vasoconstriction", "Increased heart rate", "Decreased respiratory rate", "Elevated arterial pressure"],
    answer: 2
  },
  {
    question: "A key sign of neurogenic shock is:",
    options: ["Tachycardia", "Hypertension", "Bradycardia", "Fever"],
    answer: 2
  },
  {
    question: "The irreversible stage of shock leads to:",
    options: ["Full recovery", "Multiple organ failure", "Increased urine output", "Normalized blood pressure"],
    answer: 1
  },
  {
    question: "Hypovolemic shock can result from severe burns.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Cardiogenic shock is more common than hypovolemic shock.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Neurogenic shock causes tachycardia.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Septic shock is triggered by viral infections.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Anaphylactic shock involves histamine release.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "The Trendelenburg position is used for neurogenic shock.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "CVP <5 cm H₂O indicates hypovolemia.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Dopamine is a vasopressor agent.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Fluid resuscitation is contraindicated in cardiogenic shock.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Bradycardia is a key sign of neurogenic shock.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Compensatory shock maintains normal blood pressure.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Hypocalcemia can contribute to shock.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Neurogenic shock results from excessive blood loss.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Epinephrine is used for anaphylactic shock.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Septic shock requires antibiotic therapy.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Irreversible shock is marked by renal failure.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Vasodilators reduce cardiac workload.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Oral fluids are safe in hypovolemic shock.",
    options: ["True", "False"],
    answer: 1
  },
  {
    question: "Capillary refill >3 seconds indicates adequate perfusion.",
    options: ["True", "False"],
    answer: 1
  }
];


  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const questions = shuffleArray(allQuestions);

  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');

  // توليد الأسئلة في الصفحة
  questions.forEach((q, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';
    questionBlock.id = `q${index}`;

    const questionText = document.createElement('p');
    questionText.innerText = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${i}"> ${option}
      `;
      questionBlock.appendChild(label);
    });

    quizContainer.appendChild(questionBlock);
  });

  function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const questionBlock = document.getElementById(`q${index}`);

      // إزالة التغذية الراجعة القديمة
      questionBlock.classList.remove("correct", "incorrect");
      const oldFeedback = questionBlock.querySelector(".feedback");
      if (oldFeedback) oldFeedback.remove();

      let feedback = document.createElement("div");
      feedback.className = "feedback";

      if (selected) {
        const selectedValue = parseInt(selected.value);
        if (selectedValue === q.correctIndex) {
          score++;
          questionBlock.classList.add("correct");
          feedback.innerHTML = `✅ Correct`;
          feedback.style.color = "green";
        } else {
          questionBlock.classList.add("incorrect");
          feedback.innerHTML = `❌ Wrong – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
          feedback.style.color = "red";
        }
      } else {
        questionBlock.classList.add("incorrect");
        feedback.innerHTML = `⚠️ Not Answered – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
        feedback.style.color = "orange";
      }

      questionBlock.appendChild(feedback);
    });

    resultContainer.classList.add('result-transition');
    resultContainer.innerText = `You scored ${score} out of ${questions.length}`;
  }

  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };