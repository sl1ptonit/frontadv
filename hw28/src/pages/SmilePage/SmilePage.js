import SmileList from "./SmileList";
import {useEffect, useState} from "react";

function SmilePage(props) {

    const smileInitial = [
        {
            id: 1,
            name: 'Smile 1',
            count: 0,
        },
        {
            id: 2,
            name: 'Smile 2',
            count: 0,
        },
        {
            id: 3,
            name: 'Smile 3',
            count: 0,
        },
        {
            id: 4,
            name: 'Smile 4',
            count: 0,
        }
    ];

    const [smiles, setSmiles] = useState(smileInitial);
    const [winner, setWinner] = useState({});

    useEffect(() => {
        loadFromLocalStorage();
    }, []);

    useEffect(() => {
        console.log('save');
        saveToLocalStorage();
    }, [smiles]);

    // Сохранение в localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem('smiles', JSON.stringify(smiles));
    };

    // Загрузка данных из localStorage
    const loadFromLocalStorage = () => {
        const smiles = JSON.parse(localStorage.getItem('smiles'));

        if (smiles) {
            setSmiles(smiles);
        }
    };

    // Обновить счетчик
    const updateCount = (id) => {
        setSmiles(
            smiles.map(smile => {
                return smile.id === id ? {...smile, count: smile.count + 1} : smile
            })
        )

        //saveToLocalStorage();
    }

    const showResult = () => {
       let winner =  smiles.reduce((accumulator, smile) => {
            return  smile.count > accumulator.count ? smile : accumulator;
        }, { count: 0 })

        setWinner(winner);
    }

    const clearResult = () => {
        setSmiles(
            smiles.map(smile => {
                smile.count = 0;
                return smile;
            }),
        );

        setWinner({});
        //saveToLocalStorage();
    }

    return (
        <div>
            <h1>Голосування за найкращий смайл</h1>
            <SmileList
                smiles={smiles}
                updateCount={updateCount}
            />
            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                <button onClick={showResult}>Show result</button>
                <button onClick={clearResult}>Clear result</button>
            </div>
            { winner?.name  ? <p>Winner: {winner.name} </p> : ""  }
        </div>
    )
}

export default SmilePage;