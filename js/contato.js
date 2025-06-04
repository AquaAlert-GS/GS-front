// JavaScript específico para a página de contato 

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        // Adicionar validação ao formulário
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter os campos do formulário
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validação básica
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                isValid = false;
                nameInput.classList.add('error');
            } else {
                nameInput.classList.remove('error');
            }
            
            if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
                isValid = false;
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                messageInput.classList.add('error');
            } else {
                messageInput.classList.remove('error');
            }
            
            // Se o formulário for válido, enviar
            if (isValid) {
                // Simular envio do formulário
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Limpar o formulário
                contactForm.reset();
                
                // Após 5 segundos, mostrar o formulário novamente
                setTimeout(function() {
                    contactForm.style.display = 'block';
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        });
    }
});