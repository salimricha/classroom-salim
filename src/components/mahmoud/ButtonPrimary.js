function ButtonPrimary({text}) {
    return (
        <button
            className="bg-purple-500 text-white rounded m-2 px-4 py-2 hover:bg-purple-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-700">
            {text}
        </button>
    );
}

export default ButtonPrimary;
