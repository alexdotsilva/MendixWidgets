define(['exports', 'react'], (function (exports, react) { 'use strict';

    function CharacterCounter({ content, characterLimit = 0 }) {
        const [currentInput, setCurrentInput] = react.useState("");
        const myContainerRef = react.useRef(null);
        const onInputChange = (e) => {
            if (e) {
                setCurrentInput(e.target.value);
            }
        };
        react.useEffect(() => {
            let eventListner;
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
            }
            else if (charLength > charLimit * 0.6) {
                return "character_counter_60_percent";
            }
            return "";
        };
        return (react.createElement("div", { className: `${charLimitStyles()} character_counter` },
            react.createElement("div", { ref: myContainerRef }, content),
            react.createElement("span", null,
                currentInput.length,
                " / ",
                characterLimit)));
    }

    exports.CharacterCounter = CharacterCounter;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyQ291bnRlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0NoYXJhY3RlckNvdW50ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50LCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8qaW1wb3J0IHsgQ2hhcmFjdGVyQ291bnRlclByZXZpZXdQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL0NoYXJhY3RlckNvdW50ZXJQcm9wc1wiOyovXG5pbXBvcnQgXCIuL3VpL0NoYXJhY3RlckNvdW50ZXIuY3NzXCI7XG5cbmludGVyZmFjZSBDaGFyYWN0ZXJDb3VudGVyUHJvcHMge1xuICAgIGNvbnRlbnQ/OiBSZWFjdE5vZGU7XG4gICAgY2hhcmFjdGVyTGltaXQ/OiBudW1iZXI7IC8vIENoYW5nZWQgUmVhY3ROb2RlIHRvIG51bWJlciBmb3IgY2hhcmFjdGVyTGltaXRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoYXJhY3RlckNvdW50ZXIoeyBjb250ZW50LCBjaGFyYWN0ZXJMaW1pdCA9IDAgfTogQ2hhcmFjdGVyQ291bnRlclByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBjb25zdCBbY3VycmVudElucHV0LCBzZXRDdXJyZW50SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBteUNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgc2V0Q3VycmVudElucHV0KChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50TGlzdG5lcjogRWxlbWVudDtcbiAgICAgICAgaWYgKG15Q29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudHMgPSBteUNvbnRhaW5lclJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlmIChpbnB1dEVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGV2ZW50TGlzdG5lciA9IGlucHV0RWxlbWVudHNbMF07XG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0bmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbklucHV0Q2hhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRMaXN0bmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbklucHV0Q2hhbmdlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbbXlDb250YWluZXJSZWZdKTtcblxuICAgIC8qcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfY291bnRlclwiPlxuICAgICAgICAgICAgPGRpdiByZWY9e215Q29udGFpbmVyUmVmfT57Y29udGVudH08L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50SW5wdXQubGVuZ3RofSAvIHtjaGFyYWN0ZXJMaW1pdH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTsqL1xuXG4gICAgY29uc3QgY2hhckxpbWl0U3R5bGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGFyTGVuZ3RoID0gY3VycmVudElucHV0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgY2hhckxpbWl0ID0gY2hhcmFjdGVyTGltaXQgPyBjaGFyYWN0ZXJMaW1pdCA6IDA7XG4gICAgICAgIGlmIChjaGFyTGVuZ3RoID4gY2hhckxpbWl0ICogMC44KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJjaGFyYWN0ZXJfY291bnRlcl84MF9wZXJjZW50XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhckxlbmd0aCA+IGNoYXJMaW1pdCAqIDAuNikge1xuICAgICAgICAgICAgcmV0dXJuIFwiY2hhcmFjdGVyX2NvdW50ZXJfNjBfcGVyY2VudFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2hhckxpbWl0U3R5bGVzKCl9IGNoYXJhY3Rlcl9jb3VudGVyYH0+XG4gICAgICAgICAgICA8ZGl2IHJlZj17bXlDb250YWluZXJSZWZ9Pntjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRJbnB1dC5sZW5ndGh9IC8ge2NoYXJhY3RlckxpbWl0fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3JlYXRlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7SUFTTSxTQUFVLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsR0FBRyxDQUFDLEVBQXlCLEVBQUE7UUFDbkYsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBR0EsY0FBUSxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzdELElBQUEsTUFBTSxjQUFjLEdBQUdDLFlBQU0sQ0FBaUIsSUFBSSxDQUFDLENBQUM7SUFDcEQsSUFBQSxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVEsS0FBVTtJQUNyQyxRQUFBLElBQUksQ0FBQyxFQUFFO0lBQ0gsWUFBQSxlQUFlLENBQUUsQ0FBQyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsU0FBQTtJQUNMLEtBQUMsQ0FBQztRQUVGQyxlQUFTLENBQUMsTUFBSztJQUNYLFFBQUEsSUFBSSxZQUFxQixDQUFDO1lBQzFCLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ3RCLGdCQUFBLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsZ0JBQUEsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxhQUFBO0lBQ0osU0FBQTtJQUNELFFBQUEsT0FBTyxNQUFLO0lBQ1IsWUFBQSxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdELFNBQUMsQ0FBQztJQUNOLEtBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFckI7Ozs7Ozs7SUFPSTtRQUVKLE1BQU0sZUFBZSxHQUFHLE1BQUs7SUFDekIsUUFBQSxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE1BQU0sU0FBUyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELFFBQUEsSUFBSSxVQUFVLEdBQUcsU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUM5QixZQUFBLE9BQU8sOEJBQThCLENBQUM7SUFDekMsU0FBQTtJQUFNLGFBQUEsSUFBSSxVQUFVLEdBQUcsU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUNyQyxZQUFBLE9BQU8sOEJBQThCLENBQUM7SUFDekMsU0FBQTtJQUNELFFBQUEsT0FBTyxFQUFFLENBQUM7SUFDZCxLQUFDLENBQUM7SUFFRixJQUFBLFFBQ0lDLG1CQUFLLENBQUEsS0FBQSxFQUFBLEVBQUEsU0FBUyxFQUFFLENBQUcsRUFBQSxlQUFlLEVBQUUsQ0FBb0Isa0JBQUEsQ0FBQSxFQUFBO0lBQ3BELFFBQUFBLG1CQUFBLENBQUEsS0FBQSxFQUFBLEVBQUssR0FBRyxFQUFFLGNBQWMsRUFBQSxFQUFHLE9BQU8sQ0FBTztJQUN6QyxRQUFBQSxtQkFBQSxDQUFBLE1BQUEsRUFBQSxJQUFBO0lBQ0ssWUFBQSxZQUFZLENBQUMsTUFBTTs7Z0JBQUssY0FBYyxDQUNwQyxDQUNMLEVBQ1I7SUFDTjs7Ozs7Ozs7OzsifQ==
