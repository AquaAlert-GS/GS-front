// JavaScript específico para a página de solução 

document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados de monitoramento em tempo real
    const rainLevel = document.getElementById('rain-level');
    const waterLevel = document.getElementById('water-level');
    
    if (rainLevel && waterLevel) {
        // Atualizar os valores a cada 5 segundos
        setInterval(function() {
            // Gerar valores aleatórios para simulação
            const newRainValue = (35 + Math.random() * 3).toFixed(1);
            const newWaterValue = (105 + Math.random() * 5).toFixed(1);
            
            // Atualizar os elementos na página
            rainLevel.textContent = newRainValue + ' mm';
            waterLevel.textContent = newWaterValue + ' cm';
            
            // Adicionar classe de animação para destacar a atualização
            rainLevel.classList.add('updated');
            waterLevel.classList.add('updated');
            
            // Remover a classe após a animação
            setTimeout(function() {
                rainLevel.classList.remove('updated');
                waterLevel.classList.remove('updated');
            }, 1000);
        }, 5000);
    }
    
    // Funcionalidade do botão de verificação de localização
    const locationInput = document.getElementById('location-input');
    const checkLocationBtn = document.getElementById('check-location');
    
    if (locationInput && checkLocationBtn) {
        checkLocationBtn.addEventListener('click', function() {
            const location = locationInput.value.trim();
            
            if (location) {
                // Simular verificação de localização
                checkLocationBtn.textContent = 'Verificando...';
                checkLocationBtn.disabled = true;
                
                setTimeout(function() {
                    // Simular resultado da verificação
                    alert(`Alerta para ${location}: Risco MÉDIO de enchentes nas próximas 24 horas. Fique atento às notificações.`);
                    
                    // Restaurar o botão
                    checkLocationBtn.textContent = 'Verificar';
                    checkLocationBtn.disabled = false;
                }, 1500);
            } else {
                alert('Por favor, informe sua cidade ou CEP');
            }
        });
    }
    
    // Modal do mapa
    const viewMapBtn = document.getElementById('view-map');
    const mapModal = document.getElementById('map-modal');
    
    if (viewMapBtn && mapModal) {
        const closeMapModal = mapModal.querySelector('.close-modal');
        
        viewMapBtn.addEventListener('click', function() {
            mapModal.style.display = 'block';
        });
        
        closeMapModal.addEventListener('click', function() {
            mapModal.style.display = 'none';
        });
        
        // Fechar modal ao clicar fora do conteúdo
        window.addEventListener('click', function(e) {
            if (e.target === mapModal) {
                mapModal.style.display = 'none';
            }
        });
    }
    
    // Modal do chatbot
    const accessChatbotBtn = document.getElementById('access-chatbot');
    const chatbotModal = document.getElementById('chatbot-modal');
    
    if (accessChatbotBtn && chatbotModal) {
        const closeChatbotModal = chatbotModal.querySelector('.close-modal');
        
        accessChatbotBtn.addEventListener('click', function() {
            chatbotModal.style.display = 'block';
        });
        
        closeChatbotModal.addEventListener('click', function() {
            chatbotModal.style.display = 'none';
        });
        
        // Fechar modal ao clicar fora do conteúdo
        window.addEventListener('click', function(e) {
            if (e.target === chatbotModal) {
                chatbotModal.style.display = 'none';
            }
        });
    }
});