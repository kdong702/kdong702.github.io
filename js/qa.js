document.getElementById("year").textContent = new Date().getFullYear();

const qaList = document.getElementById("qa-list");
const filterBar = document.getElementById("qa-filter-bar");

function renderApplications(statusFilter) {
  qaList.innerHTML = "";

  const filtered = statusFilter
    ? applications.filter((app) => app.status === statusFilter)
    : applications;

  if (filtered.length === 0) {
    qaList.innerHTML = `<p class="empty-text">해당하는 지원 항목이 없습니다.</p>`;
    return;
  }

  filtered.forEach((app) => {
    const card = document.createElement("div");
    card.className = "qa-app-card";

    const questionsHtml = app.questions
      .map(
        (qa) => `
          <div class="qa-item">
            <p class="qa-question"><strong>Q.</strong> ${qa.question}</p>
            <p class="qa-answer"><strong>A.</strong> ${qa.answer}</p>
          </div>
        `
      )
      .join("");

    card.innerHTML = `
      <div class="qa-app-header">
        <div>
          <span class="qa-company">${app.company}</span>
          ${app.role ? `<span class="qa-role">${app.role}</span>` : ""}
        </div>
        <div class="qa-app-meta">
          ${app.appliedDate ? `<span class="qa-date">${app.appliedDate}</span>` : ""}
          <span class="qa-status-badge">${app.status}</span>
        </div>
      </div>
      ${questionsHtml}
    `;
    qaList.appendChild(card);
  });
}

// 필터 버튼 — 데이터에 실제로 쓰인 status 값만 자동으로 생성
const statuses = [...new Set(applications.map((app) => app.status).filter(Boolean))];
statuses.forEach((status) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "tag qa-filter-tag";
  btn.dataset.status = status;
  btn.textContent = status;
  filterBar.appendChild(btn);
});

filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".qa-filter-tag");
  if (!btn) return;
  filterBar.querySelectorAll(".qa-filter-tag").forEach((t) => t.classList.remove("qa-filter-active"));
  btn.classList.add("qa-filter-active");
  renderApplications(btn.dataset.status);
});

renderApplications(null);
