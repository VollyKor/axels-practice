import visaSrc from 'images/visa-icon.png';
import masterCardSrc from 'images/mastercard-icon.png';
import discoverCardSrc from 'images/discover-icon.png';

const creditCardsData = [
    {
        name: 'Visa card',
        firstSymbol: '4',
        src: visaSrc,
    },
    {
        name: 'MasterCard',
        firstSymbol: '5',
        src: masterCardSrc,
    },
    {
        name: 'Discovery',
        firstSymbol: '6',
        src: discoverCardSrc,
    },
];

const getCreditCardIcon = (value: string) => {
    if (value[0] === '_') return null;
    return creditCardsData.find((e) => e.firstSymbol === value[0]);
};

export default getCreditCardIcon;
