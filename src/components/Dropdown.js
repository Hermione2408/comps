import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    //useRef is for reference it will give to property in object with current as key
    const divEl = useRef()
    //for closing the dropdown when clicking anywhere on the screen
    useEffect(() => {
        const handler = (event) => {
            //to check whether the div is even present on the screen or not 
            if (!divEl.current) {
                return;
            }
            //divEl.current will give actual reference to div element
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler,true)
        //cleanup function to clean previous data
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleClick = (option) => {
        //Close Dropdown
        setIsOpen(!isOpen);
        //what option is clicked
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)

    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });
    //  let content ='Select...';
    // if(selection){
    //    content =selection.label;
    // }

    return (<div ref={divEl} className="w-48 relative">

        <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}> 
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg" />
        </Panel>
        {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>
        }
    </div>)
}
export default Dropdown;