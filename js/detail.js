document.getElementById("year").textContent = new Date().getFullYear();

function openLightbox(src, caption) {
  const overlay = document.getElementById("lightbox-overlay");
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-caption").textContent = caption || "";
  overlay.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox-overlay").classList.remove("active");
}

document.getElementById("lightbox-overlay").addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let project = projects.find((p) => p.id === id);
let isPersonal = false;
if (!project && typeof personalProjects !== "undefined") {
  project = personalProjects.find((p) => p.id === id);
  isPersonal = true;
}

if (!project) {
  document.querySelector(".detail-body .container").innerHTML =
    "<p>프로젝트를 찾을 수 없습니다. <a href='index.html'>목록으로 돌아가기</a></p>";
} else {
  document.title = `${project.title} — 포트폴리오`;
  document.getElementById("d-company").textContent = isPersonal ? "개인 프로젝트" : project.company;
  document.getElementById("d-title").textContent = project.title;
  document.getElementById("d-period").textContent = project.period;
  document.getElementById("d-summary").textContent = project.summary;

  const teamEl = document.getElementById("d-team");
  if (project.teamSize) {
    teamEl.textContent = project.teamSize;
  } else {
    teamEl.style.display = "none";
  }

  const roleBlock = document.getElementById("d-role-block");
  if (project.role) {
    document.getElementById("d-role").textContent = project.role;
  } else {
    roleBlock.style.display = "none";
  }

  const screenshotsBlock = document.getElementById("d-screenshots-block");
  if (project.screenshots && project.screenshots.length > 0) {
    const galleryEl = document.getElementById("d-screenshots");
    project.screenshots.forEach((shot) => {
      const figure = document.createElement("figure");
      figure.className = "screenshot-item";
      figure.innerHTML = `
        <img src="${shot.src}" alt="${shot.caption}" loading="lazy" />
        <figcaption>${shot.caption}</figcaption>
      `;
      figure.querySelector("img").addEventListener("click", () => openLightbox(shot.src, shot.caption));
      galleryEl.appendChild(figure);
    });
  } else {
    screenshotsBlock.style.display = "none";
  }

  const metricsBlock = document.getElementById("d-metrics-block");
  if (project.metrics) {
    const metricsEl = document.getElementById("d-metrics");
    project.metrics.forEach((m) => {
      const tile = document.createElement("div");
      tile.className = "metric-tile";
      tile.innerHTML = `<div class="metric-value">${m.value}</div><div class="metric-label">${m.label}</div>`;
      metricsEl.appendChild(tile);
    });
  } else {
    metricsBlock.style.display = "none";
  }

  const diagramBlock = document.getElementById("d-diagram-block");
  if (project.diagram) {
    document.getElementById("d-diagram").innerHTML = project.diagram;
  } else {
    diagramBlock.style.display = "none";
  }

  const techEl = document.getElementById("d-techstack");
  project.techStack.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    techEl.appendChild(span);
  });

  const achievementsBlock = document.getElementById("d-achievements-block");
  if (project.achievements) {
    const achEl = document.getElementById("d-achievements");
    project.achievements.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      achEl.appendChild(li);
    });
  } else {
    achievementsBlock.style.display = "none";
  }

  const featEl = document.getElementById("d-keyfeatures");
  project.keyFeatures.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    featEl.appendChild(li);
  });

  const challengesBlock = document.getElementById("d-challenges-block");
  if (project.challenges && project.challenges.length > 0) {
    const challEl = document.getElementById("d-challenges");
    project.challenges.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "challenge-item";
      let html = `
        <p class="challenge-problem"><strong>어려웠던 점</strong> ${item.problem}</p>
        <p class="challenge-solution"><strong>해결 방법</strong> ${item.solution}</p>
      `;
      if (item.detail) {
        html += `<p class="challenge-detail">${item.detail}</p>`;
      }
      wrapper.innerHTML = html;
      challEl.appendChild(wrapper);
    });
  } else {
    challengesBlock.style.display = "none";
  }
}
