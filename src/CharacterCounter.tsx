import { ReactElement, ReactNode, createElement, useRef, useEffect, useState } from "react";
/*import { CharacterCounterPreviewProps } from "../typings/CharacterCounterProps";*/
import "./ui/CharacterCounter.css";

interface CharacterCounterProps {
    content?: ReactNode;
    characterLimit?: number; // Changed ReactNode to number for characterLimit
}

export function CharacterCounter({ content, characterLimit = 0 }: CharacterCounterProps): ReactElement {
    const [currentInput, setCurrentInput] = useState<string>("");
    const myContainerRef = useRef<HTMLDivElement>(null);
    const onInputChange = (e: Event): void => {
        if (e) {
            setCurrentInput((e.target as HTMLInputElement).value);
        }
    };

    useEffect(() => {
        let eventListner: Element;
        if (myContainerRef.current) {
            const inputElements = myContainerRef.current.querySelectorAll("input");
            if (inputElements.length) {
                eventListner = inputElements[0];
                eventListner.addEventListener("input", onInputChange);
            }
        }
        return () => {
            eventListner.removeEventListener("input", onInputChange);
        };
    }, [myContainerRef]);

    /*return (
        <div className="character_counter">
            <div ref={myContainerRef}>{content}</div>
            <span>
                {currentInput.length} / {characterLimit}
            </span>
        </div>
    );*/

    const charLimitStyles = () => {
        const charLength = currentInput.length;
        const charLimit = characterLimit ? characterLimit : 0;
        if (charLength > charLimit * 0.8) {
            return "character_counter_80_percent";
        } else if (charLength > charLimit * 0.6) {
            return "character_counter_60_percent";
        }
        return "";
    };

    return (
        <div className={`${charLimitStyles()} character_counter`}>
            <div ref={myContainerRef}>{content}</div>
            <span>
                {currentInput.length} / {characterLimit}
            </span>
        </div>
    );
}
