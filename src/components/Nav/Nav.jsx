

const Nav = () => {
    return (
        <>
          <div className="flex font-mono text-gray-600 items-center text-center justify-between  gap-4">
            <a className="text-xl   hover:bg-slate-200 hover:border-b-2 w-24  rounded-xl hover:border-gray-400 " href="">About</a>
            <a className="text-xl  hover:bg-slate-200 hover:border-b-2 w-24 rounded-xl hover:border-gray-400" href="">Home</a>
            <a className="text-xl  hover:bg-slate-200 hover:border-b-2 w-24 rounded-xl hover:border-gray-400" href="">Blog</a>
            <a  className="text-xl  hover:bg-slate-200 hover:border-b-2 w-24 rounded-xl hover:border-gray-400" href="">Contact</a>
          </div>
          
        </>
    );
};

export default Nav;