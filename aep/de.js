    function add() {
        const des = document.getElementById("des").value;
        const lo = document.getElementById("lo").value;
        const data = document.getElementById("data").value;
        const foto = document.getElementById("foto").files[0];

        if (des.trim() == "" || lo.trim() == "" || data.trim() == "" || !foto) {

            alert("Prenche direito");
        } else {

            console.log(des, lo, data, foto);

            document.body.innerHTML = `

        <div class="flex justify-center items-center min-h-screen bg-base-200">

            <div class="card w-96 bg-base-100 shadow-2xl">

                <div class="card-body items-center text-center">

                    <div class="text-success text-6xl">
                        ✓
                    </div>

                    <h2 class="card-title text-2xl">
                        Denúncia enviada!
                    </h2>

                    <p>
                        Sua denúncia foi registrada com sucesso.
                    </p>

                    <p class="text-sm opacity-70">
                        Deseja fazer outra denúncia?
                    </p>

                    <button
                        class="btn btn-primary mt-4"
                        onclick="window.location.reload()"
                    >
                        Fazer outra
                    </button>

                    <a href="ini.html"class="btn btn-primary mt-4" >Voltar pro inicio </a>

                </div>

            </div>

        </div>
        `;

            const de = {
                descricao: des,
                localizacao: lo,
                data: data,
                foto: foto.name
            };

            localStorage.setItem(
                "de", JSON.stringify(de));
        }


    }