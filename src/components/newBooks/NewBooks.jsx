import Card from "../../sharedComponents/card/Card";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";


const NewBooks = () => {
    return (
        <div>
            <SectionTitle titleText={'নতুন বই সমূহ'} style={'text-center '}></SectionTitle>
            <div className="max-w-7xl mx-auto h-fit mt-5 grid sm:grid-cols-2 md:grid-cols-3 px-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
                <Card styles={"h-[450px]"} iconsStyles={"text-2xl"}></Card>
            </div>
        </div>
    );
};

export default NewBooks;