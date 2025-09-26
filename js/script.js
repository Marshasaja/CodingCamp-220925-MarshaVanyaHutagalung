document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const result = document.getElementById('result');
  const welcomeEl = document.getElementById('welcome');
  const storedName = localStorage.getItem('portfolioName');
  if (storedName) {
    welcomeEl.textContent = `Hi ${storedName}, Welcome To Website`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) { alert('Nama wajib diisi'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Email tidak valid'); return; }
    if (phone && !/^\+?\d{6,15}$/.test(phone)) { alert('Nomor telepon tidak valid'); return; }

    result.innerHTML = `
      <h4>Submitted Data</h4>
      <p><strong>Nama:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Message:</strong> ${escapeHtml(message)}</p>
    `;

    localStorage.setItem('portfolioName', name);
    welcomeEl.textContent = `Hi ${name}, Welcome To Website`;
  });

  function escapeHtml(str){
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
    
    document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Biar form nggak reload halaman

  // Ambil value input
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Tampilkan ke kotak di sebelah
  document.getElementById("outputName").textContent = "Name: " + name;
  document.getElementById("outputEmail").textContent = "Email: " + email;
  document.getElementById("outputMessage").textContent = "Message: " + message;

  // Optional: reset form setelah submit
  document.getElementById("messageForm").reset();
});

  }
  
});