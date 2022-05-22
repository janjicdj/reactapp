import { useState } from 'react'

function Provera(props) {

    const [registracija, setReg] = useState('');
    const [status, setStatus] = useState('');

    function handleReg(e) {
        setReg(e.target.value);
    }

    function proveri() {
        var element = props.prijavljeni.filter(function (p) {
            return p.registracija == registracija;
        })
        if (element.length !== 0) {
            alert('Status: ' + element[0].status);
        }
        else {
            alert('Niste prijavljeni za registraciju. To mozete uraditi na strani prijava.')
        }
    }

    return (
        <div className="element-forme">
            <h3>Unesite Vašu registraciju: </h3>
            <input type={'text'} className="input_provera" value={registracija} onChange={handleReg}></input>
            <button type="button" onClick={proveri} className="dugme_proveri">Proveri status</button>
        </div >
    );
}

export default Provera