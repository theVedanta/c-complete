import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Container from "../Container";

const FAQ = () => {
    const qnas = [
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet, nunc scelerisque sit proin mattis eget sem morbi. Quam id aliquet vivamus nulla porttitor amet. Lacus ultrices faucibus venenatis, vel arcu eu ac pellentesque. Sapien pretium, amet ultricies dictumst vulputate eu aliquet mattis gravida. Aliquam at a, tincidunt magna in.
Ut a enim at non nunc. Nibh pharetra turpis sit scelerisque. Neque tincidunt massa aliquet urna nulla ac eget malesuada penatibus. Nunc sem ut gravida felis. Mauris, eu congue vitae pharetra.. `,
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet, nunc scelerisque sit proin mattis eget sem morbi. Quam id aliquet vivamus nulla porttitor amet. Lacus ultrices faucibus venenatis, vel arcu eu ac pellentesque. Sapien pretium, amet ultricies dictumst vulputate eu aliquet mattis gravida. Aliquam at a, tincidunt magna in.
Ut a enim at non nunc. Nibh pharetra turpis sit scelerisque. Neque tincidunt massa aliquet urna nulla ac eget malesuada penatibus. Nunc sem ut gravida felis. Mauris, eu congue vitae pharetra.. `,
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet, nunc scelerisque sit proin mattis eget sem morbi. Quam id aliquet vivamus nulla porttitor amet. Lacus ultrices faucibus venenatis, vel arcu eu ac pellentesque. Sapien pretium, amet ultricies dictumst vulputate eu aliquet mattis gravida. Aliquam at a, tincidunt magna in.
Ut a enim at non nunc. Nibh pharetra turpis sit scelerisque. Neque tincidunt massa aliquet urna nulla ac eget malesuada penatibus. Nunc sem ut gravida felis. Mauris, eu congue vitae pharetra.. `,
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet, nunc scelerisque sit proin mattis eget sem morbi. Quam id aliquet vivamus nulla porttitor amet. Lacus ultrices faucibus venenatis, vel arcu eu ac pellentesque. Sapien pretium, amet ultricies dictumst vulputate eu aliquet mattis gravida. Aliquam at a, tincidunt magna in.
Ut a enim at non nunc. Nibh pharetra turpis sit scelerisque. Neque tincidunt massa aliquet urna nulla ac eget malesuada penatibus. Nunc sem ut gravida felis. Mauris, eu congue vitae pharetra.. `,
        },
    ];

    return (
        <Container className="w-full py-32 flex flex-col items-center relative tab:py-14">
            <h4 className="text-5xl z-10 font-medium text-center ph:text-2xl">
                Frequently Asked Questions
            </h4>
            <LayoutGroup>
                <motion.div className="qnas w-3/4 z-10 mt-20 lap:w-full lap:px-20 tab:mt-12 tab:px-14 ph:mt-8 ph:px-5">
                    {qnas.map((qna, i) => (
                        <QNA key={i} qna={qna} />
                    ))}
                </motion.div>
            </LayoutGroup>
        </Container>
    );
};

const QNA = ({ qna, id }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AnimatePresence>
            <motion.div
                layout
                className={`w-full px-12 z-10 py-8 flex flex-col mb-6 rounded text-black bg-white cursor-pointer tab:py-6 tab:px-10 ph:px-8 ${
                    isOpen ? "ph:px-12 ph:py-8" : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
                initial={{ borderRadius: "5px" }}
            >
                <motion.h5
                    className="q text-xl text-blue z-10 font-medium flex justify-between items-center tab:text-lg ph:text-sm"
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
                        transition={{ delay: 0.1, duration: 0.2 }}
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
