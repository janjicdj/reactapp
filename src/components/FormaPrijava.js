import { useState } from 'react';

function FormaPrijava(props) {

    const [marka, setMarka] = useState('');
    const [kubikaza, setKubikaza] = useState('');
    const [registracija, setReg] = useState();

    function handleMarka(e) {
        setMarka(e.target.value);
    }

    function handleKubikaza(e) {
        setKubikaza(e.target.value);
    }

    function handleReg(e) {
        setReg(e.target.value);
    }

    return (
        <div>
            <h2>{props.naslov}</h2>
            <form className="forma_prijava">
                <div className="element-forme">
                    <label>Marka: </label>
                    <input type={'text'} className="input_prijava" value={marka} onChange={handleMarka}></input>
                </div>
                <div className="element-forme">
                    <label>Kubikaza: </label>
                    <input type={'number'} className="input_prijava" value={kubikaza} onChange={handleKubikaza}></input>
                </div>
                <div className="element-forme">
                    <label>Registracija: </label>
                    <input type={'number'} className="input_prijava" value={registracija} onChange={handleReg}></input>
                </div>
                <button type="submit" onClick={() => props.funkcija(marka, kubikaza, registracija)} className="dugme_prijava" value={registracija} onChange={handleReg}>Prijavi se</button>
            </form>
        </div>
    );
}

export default FormaPrijava