class CardColetas extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card-info");
    
        const time = document.createElement("div");
        time.setAttribute("class", "tempo");

        const data = document.createElement("span");
        data.setAttribute("id", "data");
        data.textContent = this.getAttribute("data");

        const hora = document.createElement("span");
        hora.setAttribute("id", "horario");
        hora.textContent = this.getAttribute("horario");

        time.appendChild(data);
        time.appendChild(hora);

        const infos = document.createElement("div");
        infos.setAttribute("class", "informacoes");

        const nome = document.createElement("span");
        nome.setAttribute("id", "nomeCliente");
        nome.textContent = this.getAttribute("nome");

        const type = document.createElement("span");
        type.setAttribute("id", "tipoEntrega");
        type.textContent = this.getAttribute("tipoEntrega");

        const local = document.createElement("span");
        local.setAttribute("id", "local");
        local.textContent = this.getAttribute("local");

        infos.appendChild(nome);
        infos.appendChild(type);
        infos.appendChild(local);

        const statusDiv = document.createElement("div");
        statusDiv.setAttribute("class", "status-coleta");

        const statusOptions = document.createElement("select");
        statusOptions.setAttribute("id", "status");

        const options1 = document.createElement("option");
        options1.setAttribute("value", "pendente");

        const options2 = document.createElement("option");
        options2.setAttribute("value", "coletado");

        const options3 = document.createElement("option");
        options2.setAttribute("value", "entregue");
       

        const option1 = document.createTextNode("Pendente");
        const option2 = document.createTextNode("Coletado");
        const option3 = document.createTextNode("Entregue");
        
        statusOptions.appendChild(options1);
        statusOptions.appendChild(options2);
        statusOptions.appendChild(options3);
        options1.appendChild(option1);
        options2.appendChild(option2);
        options3.appendChild(option3);        

        statusDiv.appendChild(statusOptions);
        infos.appendChild(statusDiv);

        const categoria = document.createElement("span");
        categoria.setAttribute("id", "categoria");
        categoria.textContent = this.getAttribute("categoria");

        const img = document.createElement("div");

        const divReciclagem = document.createElement("div");
        divReciclagem.setAttribute("class", "img-reciclagem");

        const imgReciclagem = document.createElement("img");
        imgReciclagem.src = "../imgs/simbolo-reciclagem.png"
        imgReciclagem.alt = "Símbolo mundial da reciclagem, que é composto por três setas que formam um triângulo, no sentido horário."

        const divCategoria = document.createElement("div");
        divCategoria.setAttribute("class", "img-categoria");

        const imgCategoria = document.createElement("img");
        imgCategoria.src = this.getAttribute("foto");
        imgCategoria.alt = "Imagem representativa da categoria da coleta escolhida."

        img.appendChild(divReciclagem);
        img.appendChild(divCategoria);
        divReciclagem.appendChild(imgReciclagem);
        divCategoria.appendChild(imgCategoria);


        componentRoot.appendChild(time);
        componentRoot.appendChild(infos);
        componentRoot.appendChild(categoria);
        componentRoot.appendChild(img);

        


        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card-info {
            display: flex;
            flex-direction: column;
            width: 210px;
            height: 527px;
            background-color: #62996B;
            border-radius: 15px;
            text-align: center;
            padding: 1rem 0 0 0;
            margin: 0 auto 3rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
        }
        
        .tempo, .informacoes  {
            display: flex;
            flex-direction: column;
            font-weight: bold;
            padding: 0.6rem;
        }
        
        .tempo {
            font-size: x-large;
        }
        
        .informacoes {
            display: flex;
            flex-direction: column;
            font-size: large;
            color: #D9D9D9;
        }
        
        span#nomeCliente, span#tipoEntrega, span#local {
            padding: 0.6rem;
        }
        
        span#categoria {
            font-size: xx-large;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        select#status {
            height: 35px;
            width: 55%;
            border: 1px solid black;
            border-radius: 10px;
            font-weight: bold;
            color: black;
            background: #D9D9D9;
            margin: 1rem 0;
        }
        
        .img-categoria img {
            width: 100%;
            height: 100%;
            border-radius: 0 0 10px 10px;
            margin: 1rem 0 0 0;
        }
        
        .img-reciclagem {
            position: absolute;
            z-index: 2;
        }
        
        .img-categoria {
            position: relative;
            z-index: 1;
        }
        .img-reciclagem img {
            padding: 4.15rem;
        }

        @media screen and (max-width: 1400px){
            .card-info {
                width: 200px;
                max-height: 355px;
                margin: 0 auto 3rem;
            }

            .tempo, .informacoes {
                font-size: small;
                padding: 0;
            }

            span#categoria {
                font-size: large;
                padding: 0.5rem;
            }

            select#status {
                margin: 0.5rem;
            }

            .img-categoria img {
                margin: 0;
            }

            .img-reciclagem img {
                padding: 3.1rem 4.4rem;
            }
            
        }
        `

        return style;
    }
}

customElements.define('card-coletas', CardColetas)