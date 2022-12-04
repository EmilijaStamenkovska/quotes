// Core
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// Reducers
import { allQuotes } from '../../../services/redux/reducers';
// UI
import Button from '../../ui/Button';
// Style
import './style.css';

const QuotesListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quotes, setQuotes] = useState([]);
    const [genderData, setGenderData] = useState([]);

    const handleNavigate = () => {
        navigate("/random-quote");
    };
    
    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random/10')
            .then((result) => result.json())
            .then((data) => {
                setQuotes(data);
                dispatch(allQuotes(data));

                // const params = new URLSearchParams();
                // data.map((quote) => params.append('name[]', quote.character.name.split(' ')[0])); 

                // fetch('https://api.genderize.io/?' + params.toString(), { 
                //     method: 'GET'
                // })
                //     .then((result) => result.json())
                //     .then((data) => setGenderData(data))
            })
            .catch((err) => console.log(err))
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
                                <th>character slug</th>
                                <th>house</th>
                                <th>house slug</th>
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
                                                {quote.character.slug}
                                            </td>
                                            <td>
                                                {quote.character.house.name}
                                            </td>
                                            <td>
                                                {quote.character.house.slug}
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
                onClick={handleNavigate}
            >
                get random quote
            </Button>
        </div>
    );
};

export default QuotesListPage;
