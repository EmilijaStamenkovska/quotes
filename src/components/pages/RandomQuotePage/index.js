// Core
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// UI
import Button from '../../ui/Button';
// Redux
import { useDispatch } from 'react-redux';
// Reducers
import { randomQ } from '../../../services/redux/reducers';
// Rest
import { quoteInit } from '../../../services/rest/init';
// Style
import './style.css';

const QuotesListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quote, setQuote] = useState(quoteInit);
    const [randomQuote, setRandomQuote] = useState(false);

    const handleNavigate = () => {
        navigate("/");
    };

    const getRandomQuote = () => {
        setRandomQuote(prevstate => !prevstate);
    };

    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(result => result.json())
            .then(data => {
                setQuote(data);
                dispatch(randomQ(data));
            })
            .catch(err => console.log(err))
    }, [randomQuote]);

    return (
        <div className="random-quote-page">
            <div className="random-quote">
                <span className="random-quote__sentence">
                    {quote.sentence}
                </span>
                <span className="random-quote__name">
                    {quote.character.name}
                </span>
            <Button
                customClassName="btn-new-random-quote"
                type='submit'
                onClick={getRandomQuote}
            >
                get random quote
            </Button>
            <Button
                customClassName="btn-back-to-quotes"
                onClick={handleNavigate}
            >
                back
            </Button>
            </div>
        </div>
    );
};

export default QuotesListPage;
