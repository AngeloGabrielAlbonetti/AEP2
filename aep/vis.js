const de = JSON.parse(
    localStorage.getItem("de")
);


function linda() {
    if (de) {
        document.body.innerHTML = `

        <div class="flex justify-center items-center min-h-screen bg-base-200">
            <div class="card bg-base-100 w-96 shadow-2xl">

                <figure>
                    <p>
                        <strong>Foto:</strong>
                        ${de.foto}
                    </p>
                </figure>

                <div class="card-body">

                    <h2 class="card-title">
                        Denúncia registrada
                    </h2>

                    <p>
                        <strong>Descrição:</strong>
                        ${de.descricao}
                    </p>

                    <p>
                        <strong>Localização:</strong>
                        ${de.localizacao}
                    </p>

                    <p>
                        <strong>Data:</strong>
                        ${de.data}
                    </p>



                    <div class="card-actions justify-end">

                        <a class="btn btn-primary" href='ini.html'" >
                            Voltar</a>

                    </div>

                </div>

            </div>

        </div>
        `;
    }
}

linda();