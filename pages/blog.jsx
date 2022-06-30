import Image from "next/image";
import Container from "../components/Container";
import sample from "../public/case.svg";

const Blog = () => {
    return (
        <section className="blog py-20 bg-gray">
            <Container>
                <div className="blog-nav flex w-full justify-between items-center">
                    <button className="btn btn-transparent">Back</button>
                    <button className="btn btn-transparent">Next</button>
                </div>

                <BlogPost />
            </Container>
        </section>
    );
};

const BlogPost = () => {
    return (
        <div className="blog-post mt-6 px-12 py-10 rounded-2xl bg-white text-black">
            <h1 className="text-center text-4xl font-semibold">
                Professionalism the journey begins
            </h1>

            <p className="mt-10 w-full text-lg">
                <div className="blog-img">
                    <Image
                        src={sample}
                        alt="blog"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
                Now that we have agreed Professionalism is a Habit and a
                continuous process (our article on 360o the Key to
                Professionalism), where exactly does the journey to
                Professionalism begin? While there are several aspects and
                facets to Professionalism, there are a few behaviors considered
                core the bedrock, so to speak. People who work are so used to
                these that often the First timers at work stick out because they
                are lacking.
                <br />
                <br />
                Lets take a closer look at these behaviors
                <br />
                1. Team Work At work, it is vital to work in constant harmony
                with others towards a common goal. Students work solo, their
                goal is to maximize their own rank or score. Very few colleges
                have created curriculum that encourages team-work on an everyday
                basis, fewer still have cracked the code to consistently
                evaluating Team Behavior.
                <br />
                2. Adaptability and Dependability When a Student does not match
                up to the requirements due to pressure or other reasons; most of
                the time, only he pays for it with marks/grades. At work,
                however, the costs are higher - the Team and the Organization
                pay too. A Professional has to be able to be able to adapt to
                any situation and produce good results.
                <br />
                3. Communication Skills What one says and How one says it has a
                huge weightage in how one is perceived. Communication has a
                scope that goes beyond just the Language skills. A Professional
                must be able to communicate with clarity, be brief, polite and
                assertive. The transition from writing answers to structuring
                effective e-mails is often tricky for the un-initiated.
                <br />
                4. Emotional Stability Students have the luxury of choosing to
                communicate and often even work with people who fall in their
                comfort zones, once they enter the Corporate, this vanishes. A
                professional is expected to work with everyone in the team. It
                is crucial that he is able to manage his emotions and separate
                feelings from work. The era of the world pampering him comes to
                an end and he has to be able to balance his actions and deliver
                results.
                <br />
                5. The Learning Attitude It seems logical that a Professional,
                who was a student not long back, would find it the easiest to
                Learn. However, for most of us, end of college also means end of
                learning and a job is associated purely work. A student must be
                able to develop and maintain a Learning approach to stay up to
                date and relevant.
                <br />
                6. Self-Leadership A new professional must demonstrate
                self-reliance, confidence and enthusiasm to be considered an
                independent employee with a potential to grow. Ability to handle
                stress and manage oneself well is crucial to contribute to team
                goals and cohesiveness.
                <br />
                7. Ability to Analyze The ability to look at a problem with the
                objective of understanding it and finding a solution is priced
                highly among professional. The Colleges must evaluate and train
                Students on these basic behaviors to prepare them for their
                first years as Professionals.
            </p>
        </div>
    );
};

export default Blog;
