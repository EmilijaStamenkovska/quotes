// Core
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// UI
import Button from '../../ui/Button';
// Style
import './style.css';

const QuotesListPage = () => {
    const [quotes, setQuotes] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random/10')
            .then((result) => result.json())
            .then((data) => {
                setQuotes(data);
                const params = new URLSearchParams(); //instanca od klasa
                data.map((quote) => params.append('name[]', quote.character.name.split(' ')[0])); //prviot zbor od imeto na karakterot kako query parameter 

                fetch('https://api.genderize.io/?' + params.toString(), { // instancata na klasata to string
                    method: 'GET'
                })
                    .then((result) => result.json())
                    .then((data) => setGenderData(data))
            })
            .catch((err) => alert(err));
    }, []); 

    return ( 
        <div className="quotes">
            {
                quotes.length > 0
                    ?
                    <table>
                        <thead>
                            <tr >
                                <th>id</th>
                                <th>quote</th>
                                <th className="character">character</th>
                                <th>gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                quotes.map((quote, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td className="quotes-sentence">
                                                {quote.sentence}
                                            </td>
                                            <td>
                                                {quote.character.name}
                                            </td>
                                            <td>
                                                {genderData?.[index]?.gender === 'female' ? '👧🏻' : '👦🏻'}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <h2>loading...</h2>
            }
            <Button
                customClassName="btn-random-quote"
                onClick={() => navigate("/random-quote")}
            >
                get random quote
            </Button>
        </div>
    );
};

export default QuotesListPage;
