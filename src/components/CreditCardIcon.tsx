import visaSrc from 'images/visa-icon.png';
import masterCardSrc from 'images/mastercard-icon.png';
import discoverCardSrc from 'images/discover-icon.png';

import { Icon, IconWrapper } from 'styled/CreditCardIcon';

interface Props {
    value: string;
}

const CreditCardIcon = ({ value }: Props) => {
    return (
        <IconWrapper>
            {value[0] === '4' && <Icon src={visaSrc} alt="visa icon" />}

            {value[0] === '5' && (
                <Icon src={masterCardSrc} alt="mastercard icon" />
            )}

            {value[0] === '6' && (
                <Icon src={discoverCardSrc} alt="mastercard icon" />
            )}
        </IconWrapper>
    );
};

export default CreditCardIcon;
