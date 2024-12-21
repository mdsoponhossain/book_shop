import { BsCart2 } from 'react-icons/bs';

const CartItems = () => {
    return (
        <div className="md:mr-16 hover:cursor-pointer self-center   p-3 rounded relative flex-shrink-0">
            <span className="absolute top-[3px] bg-black text-white z-50 right-1 border-2 w-7 h-7  dark:bg-green-400 rounded-full dark:text-gray-800 dark:border-gray-50 flex justify-center items-center text-xm">20</span>
            <BsCart2 className="w-8 h-8"></BsCart2>
        </div>
    );
};

export default CartItems;