const storageKeys = {
  account: "menteManaus.account",
  session: "menteManaus.session",
  remember: "menteManaus.remember",
  appointments: "menteManaus.appointments",
  assessments: "menteManaus.assessments",
};

const contentItems = [
  {
    id: 1,
    category: "Ansiedade",
    title: "Técnicas de respiração para acalmar a mente",
    summary: "Exercícios simples para reduzir a tensão em momentos de ansiedade.",
    body:
      "Experimente inspirar pelo nariz contando até quatro, segurar por quatro segundos e expirar lentamente pela boca por seis segundos. Repita o ciclo cinco vezes e observe sinais do corpo, como ombros tensos e mandíbula apertada.",
  },
  {
    id: 2,
    category: "Mindfulness",
    title: "Introdução à meditação para iniciantes",
    summary: "Uma prática breve para treinar presença e atenção no dia a dia.",
    body:
      "Reserve dois minutos, sente-se de forma confortável e direcione sua atenção para a respiração. Quando pensamentos surgirem, reconheça sem julgamento e retorne ao ar entrando e saindo do corpo.",
  },
  {
    id: 3,
    category: "Autoestima",
    title: "Como cultivar o amor-próprio",
    summary: "Estratégias para fortalecer a forma como você olha para si mesmo.",
    body:
      "Escreva três qualidades suas, identifique conquistas recentes e pratique uma fala interna mais gentil. Pequenos atos de autocuidado, como descanso e alimentação adequada, reforçam essa construção.",
  },
  {
    id: 4,
    category: "Depressão",
    title: "Sinais de alerta que merecem atenção",
    summary: "Mudanças persistentes no humor, sono e interesse podem indicar sofrimento.",
    body:
      "Se o desânimo durar semanas, vier acompanhado de isolamento, perda de prazer e alteração importante no sono ou apetite, vale buscar apoio profissional. Falar com alguém de confiança já é um primeiro passo.",
  },
  {
    id: 5,
    category: "Relacionamentos",
    title: "Como ter conversas difíceis com mais segurança",
    summary: "Dicas para se expressar com clareza e acolher o outro.",
    body:
      "Escolha um momento calmo, fale a partir da sua experiência e evite acusações. Frases como 'eu me sinto...' ajudam a construir diálogo e reduzir conflitos defensivos.",
  },
  {
    id: 6,
    category: "Rotina",
    title: "Pequenos hábitos que ajudam o bem-estar",
    summary: "Sono, alimentação e pausas digitais também fazem parte do cuidado emocional.",
    body:
      "Tente manter horários regulares de sono, beber água ao longo do dia e criar pequenos intervalos sem telas. Rotinas previsíveis podem trazer mais sensação de segurança e energia.",
  },
];

const assessmentQuestions = [
  {
    prompt: "Como você tem se sentido nos últimos dias?",
    options: [
      { label: "Muito bem", score: 4 },
      { label: "Bem", score: 3 },
      { label: "Regular", score: 2 },
      { label: "Mal", score: 1 },
    ],
  },
  {
    prompt: "Como está a sua qualidade de sono?",
    options: [
      { label: "Durmo bem", score: 4 },
      { label: "Com pequenas dificuldades", score: 3 },
      { label: "Sono irregular", score: 2 },
      { label: "Durmo muito mal", score: 1 },
    ],
  },
  {
    prompt: "Você tem conseguido se concentrar nas tarefas?",
    options: [
      { label: "Sim, com facilidade", score: 4 },
      { label: "Na maior parte do tempo", score: 3 },
      { label: "Com bastante esforço", score: 2 },
      { label: "Quase não consigo", score: 1 },
    ],
  },
  {
    prompt: "Como tem sido sua conexão com amigos ou família?",
    options: [
      { label: "Estou me sentindo apoiado", score: 4 },
      { label: "Tenho algum apoio", score: 3 },
      { label: "Pouco apoio", score: 2 },
      { label: "Muito isolamento", score: 1 },
    ],
  },
  {
    prompt: "Você percebe necessidade de ajuda profissional neste momento?",
    options: [
      { label: "Não, estou estável", score: 4 },
      { label: "Talvez, quero acompanhar", score: 3 },
      { label: "Sim, acho importante", score: 2 },
      { label: "Sim, preciso de ajuda logo", score: 1 },
    ],
  },
];

const capsUnits = [
  {
    id: "benjamin",
    name: "CAPS III Benjamin Matias Fernandes",
    audience: "Adultos com transtornos mentais graves e persistentes",
    address: "Av. Maneca Marques, 1916 - Parque 10 de Novembro",
    hours: "Segunda a sexta, 7h às 17h",
  },
  {
    id: "capsi-leste",
    name: "CAPSi Infantojuvenil Leste",
    audience: "Crianças e adolescentes",
    address: "Av. Adolfo Ducke, 1221 - Conjunto Acariquara, Coroado",
    hours: "Segunda a sexta, horário comercial",
  },
  {
    id: "afranio",
    name: "CAPS AD III Dr. Afrânio Soares",
    audience: "Adultos com demandas relacionadas a álcool e outras drogas",
    address: "Av. Ephigênio Sales, 5 - Jardim Espanha, Aleixo",
    hours: "Acolhimento 24h; atendimentos de segunda a sexta",
  },
  {
    id: "silverio",
    name: "CAPS Silvério Tundis",
    audience: "Adultos com transtornos mentais",
    address: "Av. Sete de Maio, s/n - Santa Etelvina",
    hours: "Segunda a sexta, horário comercial",
  },
  {
    id: "eliana",
    name: "CAPS AD Dra. Eliana Vitorino Schramm",
    audience: "Adultos com demandas relacionadas a álcool e outras drogas",
    address: "Alameda Alphaville, s/n - Tancredo Neves",
    hours: "Atendimento em rede municipal, com acolhimento psicossocial",
  },
];

const state = {
  authMode: "login",
  route: "dashboard",
  user: readStorage(storageKeys.session, null),
  appointments: readStorage(storageKeys.appointments, []),
  assessments: readStorage(storageKeys.assessments, []),
  selectedCategory: "Todos",
  selectedContentSearch: "",
  assessmentStep: 0,
  assessmentAnswers: [],
  selectedSlot: "",
};

const elements = {
  pageTitle: document.getElementById("page-title"),
  authScreen: document.getElementById("auth-screen"),
  appScreen: document.getElementById("app-screen"),
  authForm: document.getElementById("auth-form"),
  authTitle: document.getElementById("auth-title"),
  authSubtitle: document.getElementById("auth-subtitle"),
  authSubmit: document.getElementById("auth-submit"),
  authSwitch: document.getElementById("auth-switch"),
  authSwitchLabel: document.getElementById("auth-switch-label"),
  authFeedback: document.getElementById("auth-feedback"),
  authEmail: document.getElementById("auth-email"),
  authPassword: document.getElementById("auth-password"),
  registerName: document.getElementById("register-name"),
  registerAge: document.getElementById("register-age"),
  registerNeighborhood: document.getElementById("register-neighborhood"),
  rememberMe: document.getElementById("remember-me"),
  togglePassword: document.getElementById("toggle-password"),
  forgotPassword: document.getElementById("forgot-password"),
  logoutButton: document.getElementById("logout-button"),
  menuItems: Array.from(document.querySelectorAll(".menu__item")),
  routeButtons: Array.from(document.querySelectorAll("[data-go]")),
  views: {
    dashboard: document.getElementById("dashboard-view"),
    conteudos: document.getElementById("conteudos-view"),
    autoavaliacao: document.getElementById("autoavaliacao-view"),
    agendamentos: document.getElementById("agendamentos-view"),
  },
  profileName: document.getElementById("profile-name"),
  profileMeta: document.getElementById("profile-meta"),
  lastAssessment: document.getElementById("last-assessment"),
  assessmentScore: document.getElementById("assessment-score"),
  nextAppointment: document.getElementById("next-appointment"),
  nextAppointmentMeta: document.getElementById("next-appointment-meta"),
  contentFilters: document.getElementById("content-filters"),
  contentGrid: document.getElementById("content-grid"),
  contentSearch: document.getElementById("content-search"),
  contentModal: document.getElementById("content-modal"),
  modalBody: document.getElementById("modal-body"),
  closeModal: document.getElementById("close-modal"),
  assessmentCard: document.getElementById("assessment-card"),
  assessmentProgress: document.getElementById("assessment-progress"),
  assessmentProgressLabel: document.getElementById("assessment-progress-label"),
  assessmentFeedback: document.getElementById("assessment-feedback"),
  assessmentHistory: document.getElementById("assessment-history"),
  scheduleForm: document.getElementById("schedule-form"),
  scheduleUnit: document.getElementById("schedule-unit"),
  scheduleDate: document.getElementById("schedule-date"),
  scheduleSpecialty: document.getElementById("schedule-specialty"),
  scheduleShift: document.getElementById("schedule-shift"),
  scheduleNotes: document.getElementById("schedule-notes"),
  scheduleUnitInfo: document.getElementById("schedule-unit-info"),
  timeSlots: document.getElementById("time-slots"),
  scheduleSubmit: document.getElementById("schedule-submit"),
  scheduleFeedback: document.getElementById("schedule-feedback"),
  appointmentsList: document.getElementById("appointments-list"),
};

init();

function init() {
  hydrateRememberedUser();
  bindEvents();
  populateCapsUnits();
  setMinimumDate();
  renderAuthMode();
  renderApp();
}

function bindEvents() {
  elements.authSwitch.addEventListener("click", toggleAuthMode);
  elements.authForm.addEventListener("submit", handleAuthSubmit);
  elements.togglePassword.addEventListener("click", togglePasswordVisibility);
  elements.forgotPassword.addEventListener("click", handleForgotPassword);
  elements.logoutButton.addEventListener("click", handleLogout);
  elements.menuItems.forEach((item) => item.addEventListener("click", () => setRoute(item.dataset.route)));
  elements.routeButtons.forEach((button) =>
    button.addEventListener("click", () => setRoute(button.dataset.go))
  );
  elements.contentSearch.addEventListener("input", (event) => {
    state.selectedContentSearch = event.target.value.toLowerCase();
    renderContentList();
  });
  elements.closeModal.addEventListener("click", () => elements.contentModal.close());
  elements.scheduleDate.addEventListener("change", renderTimeSlots);
  elements.scheduleUnit.addEventListener("change", () => {
    renderUnitInfo();
    renderTimeSlots();
  });
  elements.scheduleShift.addEventListener("change", renderTimeSlots);
  elements.scheduleSubmit.addEventListener("click", handleScheduleSubmit);
}

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function hydrateRememberedUser() {
  const remember = readStorage(storageKeys.remember, null);
  if (remember?.email) {
    elements.authEmail.value = remember.email;
    elements.rememberMe.checked = true;
  }
}

function renderAuthMode() {
  const registerFields = Array.from(document.querySelectorAll("[data-mode='register']"));
  const isRegister = state.authMode === "register";

  registerFields.forEach((field) => {
    field.style.display = isRegister ? "grid" : "none";
  });

  elements.authTitle.textContent = isRegister ? "Criar conta" : "Acesso à Plataforma";
  elements.authSubtitle.textContent = isRegister
    ? "Cadastre seu perfil para acompanhar sua jornada."
    : "Sua jornada de bem-estar começa aqui.";
  elements.authSubmit.textContent = isRegister ? "Cadastrar" : "Entrar";
  elements.authSwitch.textContent = isRegister ? "Fazer login" : "Criar conta";
  elements.authSwitchLabel.textContent = isRegister ? "Já tem uma conta?" : "Não tem uma conta?";
  clearFeedback(elements.authFeedback);
}

function toggleAuthMode() {
  state.authMode = state.authMode === "login" ? "register" : "login";
  renderAuthMode();
}

function togglePasswordVisibility() {
  const isPassword = elements.authPassword.type === "password";
  elements.authPassword.type = isPassword ? "text" : "password";
  elements.togglePassword.textContent = isPassword ? "Ocultar" : "Mostrar";
}

function handleForgotPassword() {
  if (!elements.authEmail.value.trim()) {
    showFeedback(elements.authFeedback, "Informe seu e-mail para simular a recuperação de senha.", "error");
    return;
  }

  showFeedback(
    elements.authFeedback,
    `Link de recuperação enviado para ${elements.authEmail.value.trim()} (simulação).`,
    "success"
  );
}

function handleAuthSubmit(event) {
  event.preventDefault();

  const email = elements.authEmail.value.trim().toLowerCase();
  const password = elements.authPassword.value.trim();

  if (!email || !password) {
    showFeedback(elements.authFeedback, "Preencha e-mail e senha.", "error");
    return;
  }

  if (state.authMode === "register") {
    const name = elements.registerName.value.trim();
    const age = Number(elements.registerAge.value);
    const neighborhood = elements.registerNeighborhood.value.trim();

    if (!name || !age || !neighborhood) {
      showFeedback(elements.authFeedback, "Preencha todos os campos do cadastro.", "error");
      return;
    }

    const account = { name, age, neighborhood, email, password };
    saveStorage(storageKeys.account, account);
    showFeedback(elements.authFeedback, "Cadastro realizado com sucesso. Você já pode usar a plataforma.", "success");
    state.authMode = "login";
    elements.authPassword.value = "";
    renderAuthMode();
  } else {
    const existingUser = readStorage(storageKeys.account, null);
    if (!existingUser || existingUser.email !== email || existingUser.password !== password) {
      showFeedback(
        elements.authFeedback,
        "Credenciais inválidas neste navegador. Crie uma conta ou revise os dados.",
        "error"
      );
      return;
    }

    state.user = {
      name: existingUser.name,
      age: existingUser.age,
      neighborhood: existingUser.neighborhood,
      email: existingUser.email,
    };
    saveStorage(storageKeys.session, state.user);
    showFeedback(elements.authFeedback, `Bem-vindo, ${state.user.name.split(" ")[0]}!`, "success");
    if (elements.rememberMe.checked) {
      saveStorage(storageKeys.remember, { email });
    } else {
      localStorage.removeItem(storageKeys.remember);
    }
    setTimeout(renderApp, 350);
  }
}

function handleLogout() {
  state.user = null;
  localStorage.removeItem(storageKeys.session);
  renderApp();
}

function renderApp() {
  const isLogged = Boolean(state.user);
  const appShell = document.querySelector(".app-shell");
  elements.authScreen.classList.toggle("visible", !isLogged);
  elements.appScreen.classList.toggle("visible", isLogged);
  appShell.classList.toggle("auth-mode", !isLogged);
  elements.logoutButton.style.display = isLogged ? "inline-flex" : "none";

  if (!isLogged) {
    elements.pageTitle.textContent = "Login";
    return;
  }

  renderDashboard();
  renderContentFilters();
  renderContentList();
  renderAssessment();
  renderAssessmentHistory();
  renderAppointments();
  renderUnitInfo();
  renderTimeSlots();
  setRoute(state.route);
}

function setRoute(route) {
  state.route = route;
  Object.entries(elements.views).forEach(([key, node]) => {
    node.classList.toggle("visible", key === route);
  });
  elements.menuItems.forEach((item) => item.classList.toggle("active", item.dataset.route === route));

  const titles = {
    dashboard: "Dashboard",
    conteudos: "Conteúdos Informativos",
    autoavaliacao: "Autoavaliação",
    agendamentos: "Agendamento CAPS",
  };

  elements.pageTitle.textContent = titles[route];
}

function renderDashboard() {
  if (!state.user) return;

  elements.profileName.textContent = state.user.name;
  elements.profileMeta.textContent = `${state.user.age} anos • ${state.user.neighborhood} • ${state.user.email}`;

  const latestAssessment = [...state.assessments].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  if (latestAssessment) {
    elements.lastAssessment.textContent = latestAssessment.level;
    elements.assessmentScore.textContent = `Pontuação: ${latestAssessment.score}/20 em ${formatDate(latestAssessment.date)}.`;
  } else {
    elements.lastAssessment.textContent = "Ainda não realizada";
    elements.assessmentScore.textContent = "Sem pontuação registrada.";
  }

  const nextAppointment = [...state.appointments].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  )[0];
  if (nextAppointment) {
    elements.nextAppointment.textContent = `${nextAppointment.time} • ${formatDate(nextAppointment.date)}`;
    elements.nextAppointmentMeta.textContent = `${nextAppointment.unit} • ${nextAppointment.specialtyLabel}`;
  } else {
    elements.nextAppointment.textContent = "Nenhum horário marcado";
    elements.nextAppointmentMeta.textContent = "Escolha um CAPS e um horário disponível.";
  }
}

function renderContentFilters() {
  const categories = ["Todos", ...new Set(contentItems.map((item) => item.category))];
  elements.contentFilters.innerHTML = categories
    .map(
      (category) =>
        `<button type="button" class="chip ${state.selectedCategory === category ? "active" : ""}" data-category="${category}">${category}</button>`
    )
    .join("");

  elements.contentFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.category;
      renderContentFilters();
      renderContentList();
    });
  });
}

function renderContentList() {
  const items = contentItems.filter((item) => {
    const byCategory = state.selectedCategory === "Todos" || item.category === state.selectedCategory;
    const query = state.selectedContentSearch;
    const bySearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return byCategory && bySearch;
  });

  if (!items.length) {
    elements.contentGrid.innerHTML = `<div class="empty-state">Nenhum conteúdo encontrado para esse filtro.</div>`;
    return;
  }

  elements.contentGrid.innerHTML = items
    .map(
      (item) => `
        <article class="content-card">
          <span class="content-card__tag">${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <button class="link-button" type="button" data-content-id="${item.id}">Ler mais</button>
        </article>
      `
    )
    .join("");

  elements.contentGrid.querySelectorAll("[data-content-id]").forEach((button) => {
    button.addEventListener("click", () => openContentModal(Number(button.dataset.contentId)));
  });
}

function openContentModal(id) {
  const item = contentItems.find((content) => content.id === id);
  if (!item) return;

  elements.modalBody.innerHTML = `
    <p class="eyebrow">${item.category}</p>
    <h2>${item.title}</h2>
    <p>${item.body}</p>
  `;
  elements.contentModal.showModal();
}

function renderAssessment() {
  const question = assessmentQuestions[state.assessmentStep];
  const progress = ((state.assessmentStep + 1) / assessmentQuestions.length) * 100;

  elements.assessmentProgress.style.width = `${progress}%`;
  elements.assessmentProgressLabel.textContent = `${state.assessmentStep + 1} de ${assessmentQuestions.length}`;

  const selectedAnswer = state.assessmentAnswers[state.assessmentStep];
  elements.assessmentCard.innerHTML = `
    <h3>${question.prompt}</h3>
    ${question.options
      .map(
        (option, index) => `
          <button
            type="button"
            class="assessment-option ${selectedAnswer === index ? "selected" : ""}"
            data-answer-index="${index}"
          >
            ${option.label}
          </button>
        `
      )
      .join("")}
    <div class="assessment-controls">
      <button type="button" class="ghost-button" id="assessment-prev" ${state.assessmentStep === 0 ? "disabled" : ""}>Voltar</button>
      <button type="button" class="primary-button" id="assessment-next">${state.assessmentStep === assessmentQuestions.length - 1 ? "Finalizar" : "Próxima"}</button>
    </div>
  `;

  elements.assessmentCard.querySelectorAll("[data-answer-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.assessmentAnswers[state.assessmentStep] = Number(button.dataset.answerIndex);
      renderAssessment();
    });
  });

  elements.assessmentCard.querySelector("#assessment-prev").addEventListener("click", () => {
    if (state.assessmentStep > 0) {
      state.assessmentStep -= 1;
      clearFeedback(elements.assessmentFeedback);
      renderAssessment();
    }
  });

  elements.assessmentCard.querySelector("#assessment-next").addEventListener("click", handleAssessmentNext);
}

function handleAssessmentNext() {
  if (state.assessmentAnswers[state.assessmentStep] === undefined) {
    showFeedback(elements.assessmentFeedback, "Selecione uma resposta para continuar.", "error");
    return;
  }

  clearFeedback(elements.assessmentFeedback);

  if (state.assessmentStep < assessmentQuestions.length - 1) {
    state.assessmentStep += 1;
    renderAssessment();
    return;
  }

  const score = state.assessmentAnswers.reduce(
    (total, answerIndex, questionIndex) =>
      total + assessmentQuestions[questionIndex].options[answerIndex].score,
    0
  );

  const level =
    score >= 16 ? "Bem-estar preservado" : score >= 11 ? "Atenção moderada" : "Acolhimento recomendado";

  const result = {
    date: new Date().toISOString(),
    score,
    level,
  };

  state.assessments = [result, ...state.assessments].slice(0, 5);
  saveStorage(storageKeys.assessments, state.assessments);
  state.assessmentStep = 0;
  state.assessmentAnswers = [];
  showFeedback(elements.assessmentFeedback, `Resultado registrado: ${level}.`, "success");
  renderAssessment();
  renderAssessmentHistory();
  renderDashboard();
}

function renderAssessmentHistory() {
  if (!state.assessments.length) {
    elements.assessmentHistory.innerHTML =
      '<div class="empty-state">Seu histórico aparecerá aqui após a primeira autoavaliação.</div>';
    return;
  }

  elements.assessmentHistory.innerHTML = state.assessments
    .map(
      (item) => `
        <article class="history-item">
          <strong>${item.level}</strong>
          <p>${item.score}/20 pontos • ${formatDate(item.date)}</p>
        </article>
      `
    )
    .join("");
}

function populateCapsUnits() {
  elements.scheduleUnit.innerHTML =
    '<option value="">Selecione uma unidade</option>' +
    capsUnits
      .map((unit) => `<option value="${unit.id}">${unit.name}</option>`)
      .join("");
}

function setMinimumDate() {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  const localDate = new Date(today.getTime() - offset * 60000).toISOString().split("T")[0];
  elements.scheduleDate.min = localDate;
  elements.scheduleDate.value = localDate;
}

function renderTimeSlots() {
  const shift = elements.scheduleShift.value;
  const unitId = elements.scheduleUnit.value;
  const date = elements.scheduleDate.value;

  if (!shift || !unitId || !date) {
    elements.timeSlots.innerHTML = '<div class="empty-state">Selecione unidade, data e turno para ver os horários.</div>';
    return;
  }

  const slots = shift === "manha"
    ? ["08:00", "09:00", "10:00", "11:00"]
    : ["13:00", "14:00", "15:00", "16:00"];

  const booked = state.appointments
    .filter((item) => item.unitId === unitId && item.date === date)
    .map((item) => item.time);

  elements.timeSlots.innerHTML = slots
    .map((slot) => {
      const unavailable = booked.includes(slot);
      return `
        <button
          type="button"
          class="slot-button ${state.selectedSlot === slot ? "selected" : ""}"
          data-slot="${slot}"
          ${unavailable ? "disabled" : ""}
        >
          <strong>${slot}</strong>
          <small>${unavailable ? "Agendado" : "Disponível"}</small>
        </button>
      `;
    })
    .join("");

  elements.timeSlots.querySelectorAll("[data-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSlot = button.dataset.slot;
      renderTimeSlots();
    });
  });
}

function renderUnitInfo() {
  const unitId = elements.scheduleUnit.value;
  const unit = capsUnits.find((item) => item.id === unitId);

  if (!unit) {
    elements.scheduleUnitInfo.innerHTML =
      '<div class="empty-state">Selecione uma unidade para ver público atendido, endereço e horário de referência.</div>';
    return;
  }

  elements.scheduleUnitInfo.innerHTML = `
    <strong>${unit.name}</strong>
    <p><strong>Público:</strong> ${unit.audience}</p>
    <p><strong>Endereço:</strong> ${unit.address}</p>
    <p><strong>Funcionamento:</strong> ${unit.hours}</p>
    <p>Referência baseada em unidades CAPS da rede municipal de Manaus para fins de protótipo.</p>
  `;
}

function handleScheduleSubmit() {
  if (!state.user) {
    showFeedback(elements.scheduleFeedback, "Faça login para agendar um atendimento.", "error");
    return;
  }

  const unitId = elements.scheduleUnit.value;
  const specialty = elements.scheduleSpecialty.value;
  const shift = elements.scheduleShift.value;
  const date = elements.scheduleDate.value;
  const notes = elements.scheduleNotes.value.trim();

  if (!unitId || !specialty || !shift || !date || !state.selectedSlot) {
    showFeedback(elements.scheduleFeedback, "Preencha os campos e escolha um horário disponível.", "error");
    return;
  }

  const unit = capsUnits.find((item) => item.id === unitId);
  const specialtyLabel = elements.scheduleSpecialty.options[elements.scheduleSpecialty.selectedIndex].text;
  const appointment = {
    id: crypto.randomUUID(),
    unitId,
    unit: unit.name,
    specialty,
    specialtyLabel,
    shift,
    date,
    time: state.selectedSlot,
    notes,
    address: unit.address,
  };

  state.appointments = [...state.appointments, appointment];
  saveStorage(storageKeys.appointments, state.appointments);
  showFeedback(
    elements.scheduleFeedback,
    `Agendamento confirmado para ${formatDate(date)} às ${state.selectedSlot}.`,
    "success"
  );
  elements.scheduleForm.reset();
  setMinimumDate();
  state.selectedSlot = "";
  renderTimeSlots();
  renderAppointments();
  renderDashboard();
}

function renderAppointments() {
  if (!state.appointments.length) {
    elements.appointmentsList.innerHTML =
      '<div class="empty-state">Você ainda não possui agendamentos simulados.</div>';
    return;
  }

  const ordered = [...state.appointments].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );

  elements.appointmentsList.innerHTML = ordered
    .map(
      (appointment) => `
        <article class="appointment-card">
          <strong>${appointment.unit}</strong>
          <p>${formatDate(appointment.date)} às ${appointment.time}</p>
          <p>${appointment.specialtyLabel}</p>
          <p>${appointment.address}</p>
          <p>${appointment.notes || "Sem observações adicionais."}</p>
          <button class="link-button" type="button" data-cancel-id="${appointment.id}">Cancelar</button>
        </article>
      `
    )
    .join("");

  elements.appointmentsList.querySelectorAll("[data-cancel-id]").forEach((button) => {
    button.addEventListener("click", () => cancelAppointment(button.dataset.cancelId));
  });
}

function cancelAppointment(id) {
  state.appointments = state.appointments.filter((appointment) => appointment.id !== id);
  saveStorage(storageKeys.appointments, state.appointments);
  showFeedback(elements.scheduleFeedback, "Agendamento cancelado com sucesso.", "success");
  renderAppointments();
  renderTimeSlots();
  renderDashboard();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function showFeedback(element, message, type) {
  element.textContent = message;
  element.className = `feedback ${type}`;
}

function clearFeedback(element) {
  element.textContent = "";
  element.className = "feedback";
}
