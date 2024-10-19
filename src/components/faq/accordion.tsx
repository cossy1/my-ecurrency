import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
    question: string;
    answer: string;
    borderTop?: boolean;
    isOpen: boolean;
    onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
    question,
    borderTop,
    answer,
    isOpen,
    onClick,
}) => (
    <div
        className={`border-b ${borderTop ? "border-t" : ""} border-gray-200 py-4`}
    >
        <button
            className="flex flex-grow justify-between items-center w-full md:w-[660px] xl:w-[672px] text-left"
            onClick={onClick}
        >
            <span className="text-lg font-medium">{question}</span>
            {isOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
        </button>
        {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
);

export default Accordion;
