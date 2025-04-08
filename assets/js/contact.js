const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  const result = await response.json();
  alert(result.message);
});