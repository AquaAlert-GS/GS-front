// JavaScript específico para a página de FAQ 

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade de acordeão para as perguntas frequentes
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Alternar o estado do item atual
            item.classList.toggle('active');
            
            // Alternar o símbolo de + para x
            const toggle = item.querySelector('.faq-toggle');
            toggle.textContent = item.classList.contains('active') ? '+' : '+';
        });
    });
    
    // Abrir o primeiro item por padrão
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
        faqItems[0].querySelector('.faq-toggle').textContent = '+';
    }
});