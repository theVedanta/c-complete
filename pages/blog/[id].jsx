import Container from "../../components/Container";
import BlogPost from "../../components/blog/BlogPost";
import MoreBlogs from "../../components/blog/MoreBlogs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { blogs } from "../../data";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import place from "../../public/place.png";

const Blog = () => {
    const [blog, setBlog] = useState({ cover: place });
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        setBlog(blogs.find((blog) => blog.id === parseInt(id)));
    }, [id]);

    return (
        <section className="blog">
            <Container className="bg-gray pt-20">
                <BlogBtns id={id} />
                <Container className="tab:px-0 ph:!px-0">
                    <BlogPost blog={blog} />
                </Container>
            </Container>

            <MoreBlogs id={id} />
        </section>
    );
};

const BlogBtns = ({ id }) => {
    const router = useRouter();
    const nextArt = parseInt(id) + 1;

    return (
        <div className="blog-nav flex w-full justify-between items-center">
            <button
                className="btn btn-transparent flex items-center ph:py-2"
                onClick={() => router.back()}
            >
                <FaArrowLeft />
                &nbsp;&nbsp;Go Back
            </button>

            <Link href={`/blog/${nextArt === blogs.length + 1 ? 1 : nextArt}`}>
                <a className="btn btn-transparent flex items-center ph:py-2">
                    Next Article&nbsp;&nbsp;
                    <FaArrowRight />
                </a>
            </Link>
        </div>
    );
};

export default Blog;
