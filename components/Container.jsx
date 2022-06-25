const Container = ({ children, className }) => {
    return <main className={`container px-32 ${className}`}>{children}</main>;
};

export default Container;
