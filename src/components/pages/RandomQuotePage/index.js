// Core
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// UI
import Button from '../../ui/Button';
// Rest
import { quoteInit } from '../../../services/rest/init';
// Style
import './style.css';

const QuotesListPage = () => {
    const navigate = useNavigate();

    const [quote, setQuote] = useState(quoteInit);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(result => result.json())
            .then(json => setQuote(json))
            .catch(err => alert(err))
    }, [refresh]);

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
                onClick={() => setRefresh(!refresh)}
            >
                get random quote
            </Button>
            <Button
                customClassName="btn-back-to-quotes"
                onClick={() => navigate("/")}
            >
                back
            </Button>
            </div>
        </div>
    );
};

export default QuotesListPage;
