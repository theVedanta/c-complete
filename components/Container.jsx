const Container = ({ children, className, id }) => {
    return (
        <main
            className={`container px-32 lap:px-14 ph:px-8 ${className}`}
            id={id}
        >
            {children}
        </main>
    );
};

export default Container;
