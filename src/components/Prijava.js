import FormaPrijava from "./FormaPrijava";
import { Link } from 'react-router-dom';

function Prijava() {

    function prijaviSe(marka, kubikaza, registracija) {
        alert('Poštovani/a ' + marka + ' ' + kubikaza + ' - JMBG: ' + registracija + ' uspešno ste se prijavili za tehnički pregled, hvala na saradnji.')
    }

    return (
        <div>
            <FormaPrijava naslov='Tehnički pregled' funkcija={prijaviSe} />
            <Link to= "/provera"></Link>
        </div>
    );
    
}

export default Prijava