import Container from "../../components/Container";
import BlogPost from "../../components/blog/BlogPost";
import MoreBlogs from "../../components/blog/MoreBlogs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Blog = () => {
    return (
        <section className="blog">
            <Container className="bg-gray pt-20">
                <BlogBtns />
                <Container className="tab:px-0 ph:!px-0">
                    <BlogPost />
                </Container>
            </Container>

            <MoreBlogs />
        </section>
    );
};

const BlogBtns = () => {
    return (
        <div className="blog-nav flex w-full justify-between items-center">
            <button className="btn btn-transparent flex items-center ph:py-2">
                <FaArrowLeft />
                &nbsp;&nbsp;Go Back
            </button>
            <button className="btn btn-transparent flex items-center ph:py-2">
                Next Article&nbsp;&nbsp;
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Blog;