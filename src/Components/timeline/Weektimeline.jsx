import { useState } from "react"


export default function Weektimeline() {
    const [activeWeek, setActiveWeek] = useState(0)

    const timelineData = [
        {
            week: "Week 1",
            title: "Stock Market Basics",
            details: [
                "Introduction to Stock Market",
                "Types of Markets",
                "How Trading Works"
            ]
        },
        {
            week: "Week 2",
            title: "Technical Analysis",
            details: [
                "Candlestick Patterns",
                "Support & Resistance",
                "Trendlines"
            ]
        },
        {
            week: "Week 3",
            title: "Indicators",
            details: [
                "RSI",
                "MACD",
                "Moving Averages"
            ]
        }
    ]


    return (
        <section className="px-6 py-20">
            <h2 className="text-3xl text-center mb-12">What You Learn in 18 Weeks</h2>


            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                {/* Weeks List */}
                <div className="md:w-1/3 flex flex-col gap-4">
                    {timelineData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveWeek(index)}
                            className={`text-left p-4 rounded-lg border transition-none
${activeWeek === index
                                    ? "bg-purple-600 border-purple-500"
                                    : "bg-gray-900 border-gray-700"}`}
                        >
                            <p className="text-sm text-gray-300">{item.week}</p>
                            <h4 className="font-semibold">{item.title}</h4>
                        </button>
                    ))}
                </div>


                {/* Right Content */}
                <div className="md:w-2/3 bg-gray-900 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">
                        {timelineData[activeWeek].title}
                    </h3>


                    <ul className="space-y-2 text-gray-300">
                        {timelineData[activeWeek].details.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}