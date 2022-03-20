const fetchpokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Img/pokeball.png");
            document.getElementById("pokeId").innerHTML = `Pokeball`;
        }
        else {
            return res.json();
        }
    }).then(data => {
        try
        {   
            if (data) {
                let pokeStats=data.stats;
                //console.log(pokeStats[5].base_stat);
                let pokeAbility=data.abilities; 
                let pokeTypes = data.types;
                let pokeimg = data.sprites.front_default;
                let pokeId = data.id;
                let pokePeso = data.weight;
                let pokeAltura = data.height;
                pokeImage(pokeimg);
                pokeID(pokeId, data.name);
                pokeData(pokePeso, pokeAltura);
                pokeTipos(pokeTypes);
                pokeAbilities(pokeAbility);
                pokeStat(pokeStats[0].base_stat,pokeStats[1].base_stat,pokeStats[2].base_stat,pokeStats[5].base_stat);
            }
            else
            {
                pokeImage("./Img/pokeball.png");
                document.getElementById("pokeId").innerHTML = `No existe`;
            }
        }

        catch(e)
        {
            alert("Llena el campo para encontrar un pokemon");
        }
      
     
    });
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeID = (id, namePoke) => {
    document.getElementById("pokeId").innerHTML = `#${id} ${namePoke}`;
}

const pokeData = (peso, altura) => {
    document.getElementById("pokeData-peso").innerHTML = `Peso: ${peso}`;
    document.getElementById("pokeData-altura").innerHTML = `Altura: ${altura} `;
}

const pokeTipos = (pokeType) => {
    let tipo = "";
    for (let i = 0; i < pokeType.length; i++) {
        tipo += " " + pokeType[i].type.name;
    }
    document.getElementById("pokeTypes").innerHTML = `Tipo: ${tipo}`;

}

const pokeAbilities=(pokeability)=>
{ let movimiento="";
    for (let i = 0; i < pokeability.length; i++) 
    {
        movimiento += " " + pokeability[i].ability.name;
    }
    document.getElementById("pokeAbilities").innerHTML = `Movimientos: ${movimiento}`;

}

const pokeStat=(hp,ataque,defensa,speed)=>
{
    document.getElementById("pokestat-HP").innerHTML = `HP: ${hp}`;
    document.getElementById("pokestat-Ataque").innerHTML = `Ataque: ${ataque}`;
    document.getElementById("pokestat-Defensa").innerHTML = `Defensa: ${defensa}`;
    document.getElementById("pokestat-Speed").innerHTML = `Speed: ${speed}`;
}