import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    onClickExample: (value: string) => void;
}

function ListGroup (props: Props) {
    const { items } = props;

    const otherList: string[] = [];
    // let selectedItem = '';
    const [selectedItem, setSelectedItem] = useState('');
    // arr[0] // variable (selectedItem)
    // arr[1] // updater function

    const handleClick = (e: React.MouseEvent, item: string) => {
        e.preventDefault();
        setSelectedItem(item);

        props.onClickExample('value')
    }

    return (
        <>
            <div className="max-w-lg mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 w-48 text-gray-900 text-sm font-medium">
                    {items.map((item, index) => (
                        <a href=""
                            key={index}
                            onClick={(event) => handleClick(event, item)}
                            className={
                                [
                                    'block',
                                    'px-4',
                                    'py-2',
                                    'border-b',
                                    'border-gray-200',
                                    'w-full',
                                    'rounded-b-lg',
                                    'hover:bg-gray-100',
                                    'hover:text-blue-700',
                                    'focus:outline-none',
                                    'focus:ring-2',
                                    'focus:ring-blue-700',
                                    'focus:text-blue-700 cursor-pointer',
                                    selectedItem === item ? 'bg-blue-300' : '',
                                ].join(' ')
                            }>{item}</a>
                    ))}
                </div>    
            </div>
            <div>
                {otherList.length === 0 ? <p>Not items</p> : null}
                {otherList.length === 0 && <p>Not items</p>}
                {otherList.map((item, index) => (
                    <a href="" key={index} className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">{item}</a>
                ))}
            </div>
        </>
    );
}

export default ListGroup;
