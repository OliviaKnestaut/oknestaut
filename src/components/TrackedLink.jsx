import { openTrackedLink } from '../utils/analytics';

function TrackedLink({ href, label, children, className = '', newTab = true, 'aria-label': ariaLabel, ...props }) {
    const externalProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    const computedAriaLabel = ariaLabel === undefined && newTab && label ? `${label} — opens in a new tab` : ariaLabel;

    return (
        <a
            href={href}
            className={className}
            {...externalProps}
            aria-label={computedAriaLabel}
            onClick={(event) => openTrackedLink(event, href, label || href)}
            {...props}
        >
            {children}
        </a>
    );
}

export default TrackedLink;
