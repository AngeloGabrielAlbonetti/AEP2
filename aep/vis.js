const ov = new fi();

function linda() {
    const mina = ov.fre();
    const div = document.getElementById("root");

    if (!mina || mina.length === 0) {
        div.innerHTML = `
        <div class="flex justify-center items-center min-h-screen bg-base-200">
            <div class="card w-96 bg-base-100 shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">Denúncias</h2>
                    <p>Você não possui denúncias</p>

                    <div class="card-actions justify-end">
                        <a href="ini.html" class="btn btn-primary">Voltar</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        return;
    }
    let html = `
    <div class="min-h-screen bg-base-200 flex flex-col items-center py-10">
        <div class="flex flex-col items-center gap-8">
    `;

    mina.forEach(de => {
        html += `
        <div class="card bg-base-100 w-96 shadow-2xl">
            <figure>
                <img src="${de.foto}" class="w-full h-52 object-cover">
            </figure>

            <div class="card-body">
                <h2 class="card-title">Denúncia registrada</h2>

                <p><strong>Descrição:</strong> ${de.descricao}</p>
                <p><strong>Localização:</strong> ${de.localizacao}</p>
                <p><strong>Data:</strong> ${de.data}</p>
            </div>
        </div>
        `;
    });

    html += `
        <a href="ini.html" class="btn btn-primary mt-4">Voltar</a>
        </div>
    </div>
    `;

    div.innerHTML = html;
}

linda();