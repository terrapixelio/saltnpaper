import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [website, setWebsite] = useState('');
    const [budget, setBudget] = useState(5000);
    const [rangeValue, setRangeValue] = useState(5000);
    const [area, setArea] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleRangeChange = (event) => {
        const value = parseInt(event.target.value);
        setRangeValue(value);
        setBudget(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // You can access the form data using the state variables

        // Reset form fields
        setName('');
        setCompany('');
        setWebsite('');
        setBudget(5000);
        setRangeValue(5000);
        setArea('');
        setEmail('');
        setTelephone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Mein Name ist:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="company">Ich arbeite:</label>
                <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="website">Ich suche jemand für:</label>
                <input
                    type="text"
                    id="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="budget">Unser Budget für dieses Projekt liegt bei:</label>
                <input
                    type="range"
                    id="budget"
                    min={1000}
                    max={10000}
                    step={1000}
                    value={rangeValue}
                    onChange={handleRangeChange}
                />
                <span>{budget}$</span>
            </div>
            <div>
                <label htmlFor="area">Im besten Fall würden wir gerne im Bereich:</label>
                <input
                    type="text"
                    id="area"
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Am besten über E-Mail:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="telephone">Oder Telefon:</label>
                <input
                    type="tel"
                    id="telephone"
                    value={telephone}
                    onChange={(event) => setTelephone(event.target.value)}
                />
            </div>
            <button type="submit">Absenden</button>
        </form>
    );
};

export default Form;
