document.getElementById("year").textContent = new Date().getFullYear();

function countProjectsUsing(matchList) {
  const all = [...projects, ...personalProjects];
  return all.filter((p) => p.techStack.some((t) => matchList.includes(t))).length;
}

function renderProjects(matchList) {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = "";

  const filtered = matchList
    ? projects.filter((p) => p.techStack.some((t) => matchList.includes(t)))
    : projects;

  filtered.forEach((project) => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `detail.html?id=${project.id}`;
    card.innerHTML = `
      ${project.featured ? '<div class="featured-badge">★ 대표 프로젝트</div>' : ""}
      <div class="company">${project.company}</div>
      <h3>${project.title}</h3>
      <div class="period">${project.period}</div>
    `;
    grid.appendChild(card);
  });

  document.getElementById("project-count").textContent = filtered.length;
}

function renderPersonalProjects(matchList) {
  const grid = document.getElementById("personal-project-grid");
  grid.innerHTML = "";

  const filtered = matchList
    ? personalProjects.filter((p) => p.techStack.some((t) => matchList.includes(t)))
    : personalProjects;

  filtered.forEach((project) => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = `detail.html?id=${project.id}`;
    card.innerHTML = `
      ${project.featured ? '<div class="featured-badge">★ 대표 프로젝트</div>' : ""}
      <div class="company">개인 프로젝트</div>
      <h3>${project.title}</h3>
      <div class="period">${project.period}</div>
    `;
    grid.appendChild(card);
  });

  document.getElementById("personal-project-count").textContent = filtered.length;
}

function activateTag(button) {
  document.querySelectorAll(".tag[data-filterable]").forEach((btn) => btn.classList.remove("tag-active"));
  button.classList.add("tag-active");
}

// 기술 스택 카테고리 렌더링 (클릭 시 프로젝트 목록 필터링)
const skillsEl = document.getElementById("skill-categories");
skillCategories.forEach((category) => {
  const block = document.createElement("div");
  block.className = "skill-category";

  const heading = document.createElement("h3");
  heading.textContent = category.name;
  block.appendChild(heading);

  const tagsWrap = document.createElement("div");
  tagsWrap.className = "skill-tags";

  category.skills.forEach((skill) => {
    const count = countProjectsUsing(skill.match);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tag";
    btn.setAttribute("data-filterable", "");
    btn.innerHTML = `${skill.label}${count >= 2 ? ` <span class="skill-count">· ${count}개 프로젝트</span>` : ""}`;
    btn.addEventListener("click", () => {
      activateTag(btn);
      renderProjects(skill.match);
      renderPersonalProjects(skill.match);
    });
    tagsWrap.appendChild(btn);
  });

  block.appendChild(tagsWrap);
  skillsEl.appendChild(block);
});

// "전체" 버튼 — 기본값이자 필터 초기화
const allBtn = document.getElementById("skill-filter-all");
allBtn.setAttribute("data-filterable", "");
allBtn.addEventListener("click", () => {
  activateTag(allBtn);
  renderProjects(null);
  renderPersonalProjects(null);
});

renderProjects(null);
renderPersonalProjects(null);

// 지원 Q&A 페이지 노출 여부 — qa-data.js의 qaPageVisible 플래그 하나로 nav 링크만 제어
if (typeof qaPageVisible !== "undefined" && qaPageVisible) {
  const navLink = document.getElementById("nav-qa");
  if (navLink) navLink.style.display = "";
}
