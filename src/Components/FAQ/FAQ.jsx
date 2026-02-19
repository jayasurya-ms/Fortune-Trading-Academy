import { Accordion } from 'react-bootstrap';
import '../../CSS/Faqs.css';

export default function FAQ() {
    const faqData = [
        {
            question: "Do you offer personalized training if required?",
            answer: "Yes, we do offer personalized one-on-one mentoring based on the learner’s trading experience, goals, and availability."
        },
        {
            question: "Which of the offered courses by you is best for beginners?",
            answer: "Our Stock Market Foundation Program is ideal for beginners, covering basics, risk management, and live market exposure."
        },
        {
            question: "What is the cost of your stock market courses offered?",
            answer: "Course fees vary depending on the program selected. Please contact us directly for detailed pricing information."
        },
        {
            question: "Do you offer flexible batches for your students?",
            answer: "Yes, we offer flexible batch timings including weekday and weekend options to suit working professionals."
        },
        {
            question: "Do you offer job assistance after the course?",
            answer: "While we do not guarantee jobs, we provide guidance, internship opportunities, and career support to eligible students."
        },
        {
            question: "Do you provide any additional benefits with course enrollment?",
            answer: "Yes, students receive lifetime access to recorded sessions, market updates, and exclusive trading resources."
        }
    ];

    return (
        <section className="px-6 py-24 bg-[url(/src/assets/faqs-bg.png)] bg-cover bg-no-repeat ">
            <h2 className="Alatsi text-3xl md:text-4xl text-white text-center mb-12">
                FAQs – Stock Market Courses
            </h2>

            <div className="max-w-4xl mx-auto">
                {/* alwaysOpen allows items to transition simultaneously without waiting for others to close */}
                <Accordion defaultActiveKey="0" flush className="space-y-4">
    {faqData.map((item, index) => (
        <Accordion.Item 
            eventKey={index.toString()} 
            key={index} 
            className=" border border-purple-600/70 rounded-[2.5rem] overflow-hidden"
        >
            <Accordion.Header>
                <span className="text-white text-sm md:text-base">
                    {item.question}
                </span>
            </Accordion.Header>
            <Accordion.Body className="text-gray-300  pt-0 pb-6 px-6">
                {item.answer}
            </Accordion.Body>
        </Accordion.Item>
    ))}
</Accordion>
            </div>
        </section>
    );
}