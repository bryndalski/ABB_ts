import React, { useState, useDebugValue, useEffect, useRef } from "react";
//interface
import MultiCheckboxInterface from "./MultiCheckboxInterface";
import CheckBoxArrayInterface from "./CheckBoxArrayInterface";
import reducerInit from "./reducerInit";
import { ImSpinner2 } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
//styles
import "./MultipleCheckboxListStyle.css";

//helpers
import DynamicCheckbox from "../dynamicChekbox/DynamicCheckbox";

export default function MultiCheckboxList(props: MultiCheckboxInterface) {
  const [checkbox, setCheckbox] = useState<Array<CheckBoxArrayInterface>>(
    reducerInit(props.data)
  );
  //isMenuOpen
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //refs
  const componentRef = useRef(null);

  //outside ref
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        componentRef.current &&
        //@ts-ignore
        !componentRef.current!.contains(event.target)
      ) {
        if (isOpen) setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
      console.log("====================================");
      console.log("ADIOS");
      console.log("====================================");
    };
  }, [componentRef]);

  //Sets value to checkbox
  useEffect(() => {
    setCheckbox(reducerInit(props.data));
  }, [props.data]);

  /**
   * Handles change of single checkkbox and on change prop
   * @param index
   */
  const change = (index: number) => {
    let tmpArray = checkbox;
    tmpArray[index].checked = !tmpArray[index].checked;
    props.onChange([...tmpArray]);
    setCheckbox([...tmpArray]);
  };

  useDebugValue(console.log(isOpen));
  //handles loading of list
  return (
    <div
      ref={componentRef}
      className="p-2 w-full flex justify-around relative border-solid h-10 ">
      <div
        onClick={() => setIsOpen((v) => !v)} // trigenrs input ppen
        className="flex absolute top-0 flex-row h-10  p-1 w-full justify-between border-blue-900 border-solit rounded-lg border-2">
        <span className="align-middle inline-block">
          {checkbox.length === 0 ? "Ładowanie danych..." : "Wybierz…"}
        </span>
        {checkbox.length === 0 ? (
          <ImSpinner2 className="animate-spin text-3xl text-blue-900" />
        ) : (
          <MdKeyboardArrowDown
            className={`text-3xl text-blue-900 transition ease-in-out hover:rotate-180  ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      <div className={`absolute top-10  w-full p-1 ${isOpen ? "" : "hidden"}`}>
        {checkbox.map((e: CheckBoxArrayInterface, c: number) => (
          <DynamicCheckbox
            key={c}
            index={c}
            label={e.label}
            checked={e.checked}
            change={(index: number) => change(index)}
          />
        ))}
      </div>
    </div>
  );
  // else
  //   return (
  //     <div className="littleSctoll overflow-scroll h-40 overflow-x-hidden ">
  //       <div></div>

  //     </div>
  //   );
}
