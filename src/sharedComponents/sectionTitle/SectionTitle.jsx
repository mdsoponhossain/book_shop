
const SectionTitle = ({ titleText, style }) => {
    return (
        <div className="pt-16 pb-8">
            <h2 className={`${style} text-4xl pb-6`}>
                {titleText}
            </h2>
            <div className="border-b-4 border-red-500 w-24 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;