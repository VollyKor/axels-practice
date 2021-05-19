import getCreditCardIcon from 'helpers/CreditCardData';
import { Icon, IconWrapper } from 'styled/CreditCardIcon';

interface Props {
    value: string;
}

const CreditCardIcon = ({ value }: Props) => {
    const icon = getCreditCardIcon(value);

    return (
        <IconWrapper>
            {icon && <Icon src={icon?.src} alt={`${icon?.name} icon`} />}
        </IconWrapper>
    );
};

export default CreditCardIcon;
