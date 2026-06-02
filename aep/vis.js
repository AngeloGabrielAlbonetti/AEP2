const ov = new fi();

function linda() {
    const mina = ov.fre();
    
    if (mina.length > 0) {
       let his=""
       
        document.body.innerHTML += `

<div class="flex flex-col items-center justify-center min-h-screen bg-base-200">
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

    <div class="mt-6">
        <a class="btn btn-primary btn-lg" href="ini.html">
            Voltar
        </a>
    </div>
</div>
        `;
    }else{
        document.body.innerHTML=` 
<div class="flex justify-center items-center min-h-screen bg-base-200">
    <div class="card w-96 bg-base-100 card-md shadow-sm">
  <div class="card-body">
    <h2 class="card-title"> Denuncias </h2>
    <p>voçê não possui denucias </p>
    <div class="justify-end card-actions">
      <a href="ini.html" class="btn btn-primary"> Voltar </a>
    </div>
  </div>
    </div>
</div>
`
    }
}

linda(); 