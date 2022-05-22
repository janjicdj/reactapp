import Provera from './Provera'

function Prijavljeni() {

    const prijavljeni = [
        { marka: 'BMW', kubikaza: 2200, registracija: 123456, status: 'Prijavljen' },
        { marka: 'Audi', kubikaza: 2000, registracija: 456789, status: 'Odbijen' },
        { marka: 'Fiat', kubikaza: 1500, registracija: 789123, status: 'Na čekanju' },
    ];

    return (
        <div>
            <Provera prijavljeni={prijavljeni} />
        </div>
    );
}

export default Prijavljeni