const Container = ({ children, className, id }) => {
    return (
        <main
            className={`container px-32 lap:px-14 ph:px-8 sph:px-4 ${className}`}
            suppressHydrationWarning
            id={id}
        >
            {children}
        </main>
    );
};

export default Container;
