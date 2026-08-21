document.getElementById("year").textContent = new Date().getFullYear();

let lightboxItems = [];
let lightboxIndex = 0;

function renderLightbox() {
  const item = lightboxItems[lightboxIndex];
  if (!item) return;
  document.getElementById("lightbox-img").src = item.src;
  document.getElementById("lightbox-img").alt = item.caption || "";
  document.getElementById("lightbox-caption").textContent = item.caption || "";
  const multi = lightboxItems.length > 1;
  document.getElementById("lightbox-prev").style.display = multi ? "flex" : "none";
  document.getElementById("lightbox-next").style.display = multi ? "flex" : "none";
}

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  renderLightbox();
  document.getElementById("lightbox-overlay").classList.add("active");
}

function showPrevLightbox() {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
  renderLightbox();
}

function showNextLightbox() {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
  renderLightbox();
}

function closeLightbox() {
  document.getElementById("lightbox-overlay").classList.remove("active");
}

document.getElementById("lightbox-overlay").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", (e) => {
  e.stopPropagation();
  showPrevLightbox();
});
document.getElementById("lightbox-next").addEventListener("click", (e) => {
  e.stopPropagation();
  showNextLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox-overlay").classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrevLightbox();
  if (e.key === "ArrowRight") showNextLightbox();
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
    project.screenshots.forEach((shot, index) => {
      const figure = document.createElement("figure");
      figure.className = "screenshot-item";
      figure.innerHTML = `
        <img src="${shot.src}" alt="${shot.caption}" loading="lazy" />
        <figcaption>${shot.caption}</figcaption>
      `;
      figure.querySelector("img").addEventListener("click", () => openLightbox(project.screenshots, index));
      galleryEl.appendChild(figure);
    });
  } else {
    screenshotsBlock.style.display = "none";
  }

  const diagramBlock = document.getElementById("d-diagram-block");
  if (project.diagram) {
    document.getElementById("d-diagram-title").textContent = project.diagramTitle || "시스템 구성도";
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

  const challengesBlock = document.getElementById("d-challenges-block");
  if (project.challenges && project.challenges.length > 0) {
    const challEl = document.getElementById("d-challenges");
    const notes = (typeof privateNotes !== "undefined" && privateNotes[project.id]) || null;

    project.challenges.forEach((item, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "challenge-item";
      wrapper.innerHTML = `
        <p class="challenge-problem"><strong>어려웠던 점</strong> ${item.problem}</p>
        <p class="challenge-solution"><strong>해결 방법</strong> ${item.solution}</p>
      `;

      if (item.detail) {
        const paragraphs = Array.isArray(item.detail) ? item.detail : [item.detail];

        const detailToggle = document.createElement("button");
        detailToggle.type = "button";
        detailToggle.className = "detail-toggle";
        detailToggle.textContent = "▸ 자세히 보기";

        const detailBox = document.createElement("div");
        detailBox.className = "detail-box";
        detailBox.hidden = true;
        detailBox.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");

        detailToggle.addEventListener("click", () => {
          detailBox.hidden = !detailBox.hidden;
          detailToggle.textContent = detailBox.hidden ? "▸ 자세히 보기" : "▾ 접기";
        });

        wrapper.appendChild(detailToggle);
        wrapper.appendChild(detailBox);
      }

      const note = notes && notes[index];
      if (note) {
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.className = "private-note-toggle";
        toggleBtn.textContent = "🔒 자세히 보기 (비공개 메모)";

        const noteBox = document.createElement("div");
        noteBox.className = "private-note-box";
        noteBox.hidden = true;
        noteBox.innerHTML = `
          <p class="private-note-label">🔒 비공개 메모 — 로컬에서만 보이고 배포된 사이트에는 없습니다.</p>
          <p><strong>어려웠던 점</strong> ${note.problem}</p>
          <p><strong>해결 방법</strong> ${note.solution}</p>
          <p>${note.detail}</p>
        `;

        toggleBtn.addEventListener("click", () => {
          noteBox.hidden = !noteBox.hidden;
          toggleBtn.textContent = noteBox.hidden
            ? "🔒 자세히 보기 (비공개 메모)"
            : "🔒 접기 (비공개 메모)";
        });

        wrapper.appendChild(toggleBtn);
        wrapper.appendChild(noteBox);
      }

      challEl.appendChild(wrapper);
    });
  } else {
    challengesBlock.style.display = "none";
  }
}

// 모바일 스와이프-뒤로가기 (화면 왼쪽 가장자리에서 오른쪽으로 밀면 목록으로 이동)
(function setupSwipeBack() {
  const shell = document.getElementById("page-shell");
  if (!shell) return;

  const EDGE_ZONE = 28; // 이 픽셀 범위 안에서 시작한 터치만 인식
  const COMMIT_DISTANCE = 90; // 이 이상 밀면 뒤로가기 확정
  const COMMIT_VELOCITY = 0.5; // px/ms — 빠르게 짧게 밀어도 확정

  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let currentX = 0;
  let tracking = false;
  let decided = false; // 가로 스와이프로 판단됐는지

  shell.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    if (touch.clientX > EDGE_ZONE) return;
    tracking = true;
    decided = false;
    startX = touch.clientX;
    startY = touch.clientY;
    currentX = startX;
    startTime = Date.now();
    shell.classList.remove("swipe-animating");
  }, { passive: true });

  shell.addEventListener("touchmove", (e) => {
    if (!tracking) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    if (!decided) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) > Math.abs(dx) || dx < 0) {
        tracking = false; // 세로 스크롤이거나 왼쪽으로 미는 제스처면 포기
        return;
      }
      decided = true;
      shell.classList.add("swipe-dragging");
    }

    e.preventDefault();
    currentX = touch.clientX;
    shell.style.transform = `translateX(${dx}px)`;
  }, { passive: false });

  function finishSwipe() {
    if (!tracking || !decided) {
      tracking = false;
      return;
    }
    tracking = false;
    const dx = currentX - startX;
    const elapsed = Math.max(Date.now() - startTime, 1);
    const velocity = dx / elapsed;
    shell.classList.remove("swipe-dragging");
    shell.classList.add("swipe-animating");

    if (dx > COMMIT_DISTANCE || velocity > COMMIT_VELOCITY) {
      shell.style.transform = `translateX(100%)`;
      setTimeout(() => {
        window.location.href = "index.html";
      }, 220);
    } else {
      shell.style.transform = "translateX(0)";
    }
  }

  shell.addEventListener("touchend", finishSwipe);
  shell.addEventListener("touchcancel", finishSwipe);
})();
