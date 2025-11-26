import React from "react";
import classNames from "classnames";

interface CardProps {
    children?: React.ReactNode;
    className?: string;
}

interface CardHeaderProps {
    title: string;
    className?: string;
}

interface CardBodyProps {
    children?: React.ReactNode;
    className?: string;
}

type CardComponent = React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Body: React.FC<CardBodyProps>;
};

const Card: CardComponent = ({ children, className }) => {
    return (
        <div className={classNames("border border-gray-300 rounded-lg p-2 shadow-md bg-white", className)}>
            {children}
        </div>
    );
};

const Header: React.FC<CardHeaderProps> = ({ title,className }) => (
    <div className={classNames("border-b border-gray-200 pb-2 mb-4",className)}>
        <h2 className="text-xl font-semibold">{title}</h2>
    </div>
);

const Body: React.FC<CardBodyProps> = ({ children ,className}) => (
    <div className={classNames("mb-2",className)}>
        {children}
    </div>
);

// attach subcomponents with proper typing
Card.Header = Header;
Card.Body = Body;

export default Card;
