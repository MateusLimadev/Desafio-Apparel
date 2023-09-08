function validarEmail() {
    // Seleciona o elemento de entrada de email
    let emailInput = document.querySelector('#emailInput');
    
    // Obtém o valor do email
    let email = emailInput.value;
    
    // Seleciona o elemento de exibição de mensagens
    let mensagemElement = document.getElementById('mensagem');
    
    // Seleciona o ícone de alerta
    let alertIcon = document.getElementById('alertIcon');
  
    // Verifica se o campo de email está vazio
    if (email === '') {
      // Exibe uma mensagem de erro
      mensagemElement.textContent = 'Por favor, digite seu endereço de email.';
      mensagemElement.style.color = '#b36666';
      
      // Mostra o ícone de alerta
      alertIcon.style.display = 'block';
    } else {
      // Define um padrão para validar o formato de email
      let padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
      // Verifica se o email não corresponde ao padrão
      if (!padraoEmail.test(email)) {
        // Exibe uma mensagem de erro
        mensagemElement.textContent = 'Por favor, digite um endereço de email válido.';
        mensagemElement.style.color = '#b36666';
        
        // Mostra o ícone de alerta
        alertIcon.style.display = 'block';
      } else {
        // Exibe uma mensagem de sucesso
        mensagemElement.textContent = 'Email Enviado!';
        mensagemElement.style.color = '#b36666';
        
        // Limpa o valor do campo de entrada de email
        emailInput.value = '';
        
        // Oculta o ícone de alerta
        alertIcon.style.display = 'none';
  
        // Limpa a mensagem após alguns segundos (por exemplo, 3 segundos)
        setTimeout(function () {
          mensagemElement.textContent = '';
        }, 3000); // 3000 milissegundos = 3 segundos
      }
    }
}
