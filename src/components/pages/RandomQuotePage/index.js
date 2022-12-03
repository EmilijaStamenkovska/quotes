// Core
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// UI
import Button from '../../ui/Button';
// Style
import './style.css';

const QuotesListPage = () => {

    const navigate = useNavigate();

    const quoteInit = {
        "sentence": '', 
        "character": { 
            "name": '', 
            "slug": '', 
            "house": { 
                "name": '', 
                "slug": '' 
            } 
        }
    };
    
    const [quote, setQuote] = useState(quoteInit);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(result => result.json())
            .then(json => setQuote(json))
            .catch(err => alert(err))
    }, [refresh]);

    return (
        <div>
            <div className="random-quote">
                <span className="random-quote__sentence">
                    {quote.sentence}
                </span>
                <span className="random-quote__name">
                    {quote.character.name}
                </span>
            </div>
            <Button
                type='submit'
                onClick={() => setRefresh(!refresh)}
            >
                get random quote
            </Button>
            <Button
                customClassName="btn-random-quote"
                onClick={() => navigate("/")}
            >
                back
            </Button>
        </div>
    );
};

export default QuotesListPage;
