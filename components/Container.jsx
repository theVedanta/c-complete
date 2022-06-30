const Container = ({ children, className, id }) => {
    return (
        <main className={`container px-32 ${className}`} id={id}>
            {children}
        </main>
    );
};

export default Container;
