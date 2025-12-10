import './style.css'

const form = document.getElementById("todoform") as HTMLFormElement;
const input = document.getElementById("todoinput") as HTMLInputElement;
const list = document.getElementById("todolist") as HTMLUListElement;
const hapusSemuaBtn = document.getElementById("hapusSemua") as HTMLButtonElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  // Buat elemen LI
  const li = document.createElement("li");

  // Span untuk teks todo
  const span = document.createElement("span");
  span.textContent = text;

  // Klik teks = toggle selesai
  span.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  // Tombol hapus per-item
  const hapus = document.createElement("button");
  hapus.textContent = "Hapus";
  hapus.classList.add("hapusBttn");
  hapus.style.marginLeft = "10px";

  hapus.addEventListener("click", (e) => {
    e.preventDefault(); 
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(hapus);
  list.appendChild(li);

  input.value = "";
});

hapusSemuaBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  list.innerHTML = "";
});