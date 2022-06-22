const Container = ({ children, className }) => {
    return <main className={`container px-20 ${className}`}>{children}</main>;
};

export default Container;
