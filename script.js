document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const sobrenome = document.getElementById("sobrenome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const devweb = document.querySelector('input[name="devweb"]:checked')?.value || '';
        const senioridade = document.getElementById("senioridade").value;
        const experiencia = document.getElementById("experiencia").value;

        const tecnologias = Array.from(document.querySelectorAll('input[name="tecnologia"]:checked'))
                                .map(el => el.value)
                                .join(", ");

        const mensagem = 
            `Nome: ${nome} ${sobrenome}\n` +
            `Email: ${email}\n` +
            `Senha: ${senha}\n` +
            `Área: ${devweb}\n` +
            `Senioridade: ${senioridade}\n` +
            `Tecnologias: ${tecnologias}\n` +
            `Experiência: ${experiencia}`;

        alert(mensagem);
    });
});


