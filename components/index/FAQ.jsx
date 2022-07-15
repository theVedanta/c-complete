import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Container from "../Container";

const FAQ = () => {
    const qnas = [
        {
            q: "Why a Multi Rater Feedback?",
            a: `Well, behavior is very difficult to be ascertained objectively. It is more of a perception, and the more number of people feel about you (the individual) in a particular way, that is usually (closer to the) truth.`,
        },
        {
            q: "What is difference between 360° and Multi Rater Feedback?",
            a: `Very broadly speaking 360° can be considered as a sub-set of Multi Rater Feedback or 360° is a form of a Multi Rater Feedback. In a Multi Rater, as the name indicates, feedback is taken from multiple people – multiple is operative word here. It doesn’t matter what relation they have with the receiver of the feedback. In a 360° the feedback is taken from the superiors, the peers, the subordinates and the customers. If each of these were represented by a angle of 90° (ex. Superior as 90°), then taken together it is 360°, hence the name.`,
        },
        {
            q: "On what basis is the Feedback taken?",
            a: `The feedback is taken on behaviours critical to the person or position. These, referred to as Competencies in our Product are broken down to finer elements so as to get granular information on each of them.`,
        },
        {
            q: "Are Multi Rater and 360° only initiated by Organizations?",
            a: `Though typically Organizations initiate the feedback, progressive individuals don’t wait for this and take upon themselves to identify their growth areas. C-Complete is one of the first platforms to support individual to initiate this process for himself/herself along with personality profiling.`,
        },
        {
            q: "How often do I need to take the Feedback?",
            a: `Well, behavior is not something that changes overnight. People after taking feedback, need to understand, reflect and improve (if needed) on it. Once they are sure that they have acted on it, they could re-initiate a repeat cycle to see if there is a improvement.`,
        },
    ];

    return (
        <Container className="w-full py-32 flex flex-col items-center relative blap:py-24 lap:py-20 tab:py-14 ph:pt-10 ph:pb-4">
            <h4
                data-aos="fade-down"
                className="text-5xl z-10 font-medium text-center lap:text-4xl tab:text-4xl ph:text-2xl"
            >
                Frequently Asked Questions
            </h4>
            <LayoutGroup>
                <div className="qnas w-3/4 z-10 mt-20 lap:w-full lap:mt-14 lap:px-20 tab:mt-12 tab:px-0 ph:mt-8">
                    {qnas.map((qna, i) => (
                        <QNA key={i} qna={qna} />
                    ))}
                </div>
            </LayoutGroup>
        </Container>
    );
};

const QNA = ({ qna }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AnimatePresence>
            <motion.div
                layout
                initial={{ borderRadius: "5px", y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`w-full px-12 z-10 py-8 flex flex-col mb-6 rounded text-black bg-white cursor-pointer lap:px-10 lap:py-6 tab:py-6 tab:px-10 ph:px-6 ph:py-4 ${
                    isOpen ? "ph:px-10 ph:py-8" : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.h5
                    className="q text-xl text-blue z-10 font-medium flex justify-between items-center lap:text-lg tab:text-lg ph:text-sm"
                    layout
                >
                    <span>{qna.q}</span>
                    <span className="text-black">
                        <FaChevronDown
                            className={`transition-all duration-500 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </span>
                </motion.h5>

                {isOpen && (
                    <motion.h6
                        key={qna.a}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        className="z-10 text-lg mt-5 pr-16 lap:pr-16 lap:text-base tab:pr-10 ph:text-xs ph:mt-3 ph:pr-4 ph:font-normal ph:leading-relaxed"
                    >
                        {qna.a}
                    </motion.h6>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default FAQ;
