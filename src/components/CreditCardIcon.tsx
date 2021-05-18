import visaSrc from 'images/visa-icon.png';
import masterCardSrc from 'images/mastercard-icon.png';
import discoverCardSrc from 'images/discover-icon.png';

import { Icon } from 'styled/CreditCardIcon';
interface Props {
    value: string;
}

const CreditCardIcon = ({ value }: Props) => {
    if (value[0] === '4') return <Icon src={visaSrc} alt="visa icon" />;

    if (value[0] === '5')
        return <Icon src={masterCardSrc} alt="mastercard icon" />;

    if (value[0] === '6')
        return <Icon src={discoverCardSrc} alt="mastercard icon" />;

    return <Icon />;
};

export default CreditCardIcon;
