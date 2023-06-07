function ListGroup () {
    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 w-48 text-gray-900 text-sm font-medium">
                <a href="#" aria-current="true" className="block px-4 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-700 text-white cursor-pointer">
                    Profile
                </a>
                <a href="#" className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                    Settings
                </a>
                <a href="#" className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                    Messages
                </a>
                <a href="#" className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                    Download
                </a>
            </div>    
        </div>
    )    
}

export default ListGroup;