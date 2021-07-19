import React from "react"

class Etapa1 extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <div>
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                    <p>1. Qual o seu nome?</p>
                    <input ></input>
                    <p>2. Qual sua idade?</p>
                    <input ></input>
                    <p>3. Qual o seu email?</p>
                    <input ></input>
                </div>
                <div>
                    <p>4. Qual sua escolaridade?</p>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
                </div>
                <hr />

            </div>
        )
    }
}

export default Etapa1;

