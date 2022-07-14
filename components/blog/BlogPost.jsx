import Image from "next/image";
import place from "../../public/place.png";

const BlogPost = ({ blog }) => {
    return (
        <div className="blog-post z-30 relative mt-6 px-12 py-10 rounded-2xl bg-white text-black flex flex-col items-center tab:px-10 tab:py-8 ph:p-6">
            <h1 className="text-center text-5xl leading-snug font-semibold w-1/2 blap:text-3xl tab:text-2xl ph:w-full">
                {blog && blog.title}
            </h1>

            <p className="mt-10 w-full text-lg blap:text-base tab:text-sm tab:mt-6">
                <div className="blog-img">
                    <Image
                        src={blog ? blog.cover : place}
                        alt="blog"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
                <p>{blog && blog.desc}</p>
            </p>
        </div>
    );
};

export default BlogPost;
