import { ConditionLink, ConditionText } from 'styled/Conditions';

const Conditions = () => (
    <ConditionText className="ml-2 text-muted">
        All puraches are subject to our{' '}
        <ConditionLink href="/" target="_blanc" className="text-muted">
            Terms and Conditions
        </ConditionLink>
    </ConditionText>
);

export default Conditions;
