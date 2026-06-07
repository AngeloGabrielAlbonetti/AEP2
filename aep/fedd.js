function feed() {
    const feed = document.getElementById("feed");
    const ov = new fi();
    const mina = ov.fre();
    mina.forEach(item => {
        feed.innerHTML += `
        <div class="flex justify-center py-4">
            <div class="card bg-base-100 w-96 shadow-2xl overflow-hidden">

                <figure class="w-full h-52 overflow-hidden">
                    <img src="${item.foto}" class="w-full h-full object-cover">
                </figure>

                <div class="card-body">
                    <h2 class="card-title">Denúncia registrada</h2>

                    <p><strong>Descrição:</strong> ${item.descricao}</p>
                    <p><strong>Localização:</strong> ${item.localizacao}</p>
                    <p><strong>Data:</strong> ${item.data}</p>
                </div>

            </div>
        </div>
        `;
    });
}

feed();