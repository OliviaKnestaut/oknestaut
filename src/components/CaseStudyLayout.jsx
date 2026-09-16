import CaseStudyHeader from './CaseStudyHeader';
import ContentsNav from './ContentsNav';

function CaseStudyLayout({
    title,
    subtitle,
    coverImage,
    coverAlt,
    bgColor,
    buttons = [],
    contentsLinks,
    contentId,
    accentColor,
    children,
}) {
    return (
        <>
            <CaseStudyHeader
                title={title}
                subtitle={subtitle}
                coverImage={coverImage}
                coverAlt={coverAlt}
                bgColor={bgColor}
                buttons={buttons}
            />
            <ContentsNav links={contentsLinks} skipTargetId={contentId} accentColor={accentColor} />
            <main id={contentId} className="case-study-page" aria-label="Case Study Main Content">
                {children}
            </main>
        </>
    );
}

export default CaseStudyLayout;
