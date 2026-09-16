function ResponsivePicture({ src, mobileSrc, alt }) {
    return (
        <picture>
            <source media="(min-width: 1000px)" srcSet={src} />
            <img className="img-fluid" src={mobileSrc} alt={alt} />
        </picture>
    );
}

export default ResponsivePicture;
