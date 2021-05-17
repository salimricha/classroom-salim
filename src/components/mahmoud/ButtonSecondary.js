function ButtonSecondary({text}) {
    return (
        <button
            className="text-purple-500 border border-purple-500 rounded m-2 px-4 py-2 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-700">
            {text}
        </button>
    );
}

export default ButtonSecondary;
