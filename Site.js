document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.querySelector("main");
    const respostasCorretas = {
        pergunta1: "Html",
        pergunta2: "Domínio",
        pergunta3: "Abc123@!#", // Apenas um exemplo, pode variar
        pergunta4: "1991", // Qualquer dia/mês, mas deve ser em 1991
        pergunta5: ["JavaScript", "Java"],
        pergunta6: ".html", // O arquivo deve ter essa extensão
        pergunta7: "type",
        pergunta8: "Java"
    };

    function validarSenha(senha) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        return regex.test(senha);
    }

    function normalizarTexto(texto) {
        return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    }

    function calcularPontuacao() {
        let pontuacao = 0;
        
        // Verifica pergunta 1 (Múltipla escolha - radio)
        const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
        if (resposta1 && normalizarTexto(resposta1.value) === normalizarTexto(respostasCorretas.pergunta1)) pontuacao++;
        
        // Verifica pergunta 2 (Texto)
        const resposta2 = document.getElementById("p2").value.trim();
        if (normalizarTexto(resposta2) === normalizarTexto(respostasCorretas.pergunta2)) pontuacao++;
        
        // Verifica pergunta 3 (Senha - deve conter maiúscula, minúscula, número e caractere especial)
        const resposta3 = document.getElementById("p3").value;
        if (validarSenha(resposta3)) pontuacao++;
        
        // Verifica pergunta 4 (Data - deve ser de 1991)
        const resposta4 = document.getElementById("p4").value;
        if (resposta4.startsWith("1991")) pontuacao++;
        
        // Verifica pergunta 5 (Seleção múltipla - checkbox)
        const checkboxes = document.querySelectorAll('input[name="pergunta5"]:checked');
        let respostas5 = Array.from(checkboxes).map(cb => normalizarTexto(cb.value));
        let corretas5 = respostasCorretas.pergunta5.map(normalizarTexto);
        if (respostas5.sort().join() === corretas5.sort().join()) pontuacao++;
        
        // Verifica pergunta 6 (Arquivo - deve ter extensão .html)
        const resposta6 = document.getElementById("p6").value;
        if (resposta6.endsWith(respostasCorretas.pergunta6)) pontuacao++;
        
        // Verifica pergunta 7 (Menu suspenso)
        const resposta7 = document.getElementById("p7").value;
        if (normalizarTexto(resposta7) === normalizarTexto(respostasCorretas.pergunta7)) pontuacao++;
        
        // Verifica pergunta 8 (Texto - nome da linguagem)
        const resposta8 = document.getElementById("p8").value.trim();
        if (normalizarTexto(resposta8) === normalizarTexto(respostasCorretas.pergunta8)) pontuacao++;
        
        // Exibe pontuação
        alert("Sua pontuação foi: " + pontuacao + "/8");
    }
    
    // Adiciona botão de envio
    const botaoEnviar = document.createElement("button");
    botaoEnviar.textContent = "Verificar respostas";
    botaoEnviar.style.display = "block";
    botaoEnviar.style.margin = "20px auto";
    botaoEnviar.addEventListener("click", calcularPontuacao);
    
    quizForm.appendChild(botaoEnviar);
});
