document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');
    const tableHeader = document.getElementById('table-header');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Previne o envio padrão do formulário

        // Obtém os valores do formulário
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Verifica se os campos não estão vazios
        if (name === '' || phone === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Torna o cabeçalho da tabela visível ao adicionar o primeiro contato
        if (contactList.children.length === 0) {
            tableHeader.style.display = 'table-header-group';
        }

        // Cria uma nova linha na tabela com os dados do contato
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
        `;

        // Adiciona a nova linha à tabela
        contactList.appendChild(newRow);

        // Limpa os campos do formulário
        form.reset();
    });
});
