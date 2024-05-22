const Header = () => {
  return (
    <div>
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap sm:justify-start h-[90px] border-b border-yellow-500/10 sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0">
        <nav className="relative w-full mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-24">
          <div className="flex items-center justify-between">
            <img className="h-10" src="/logo/logo.png" alt="Logo" />
          </div>
          <div className="">
            <div className="border border-yellow-500 shadow-md px-2 rounded py-2">
              <img src="/icon/call.svg" alt="" />
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
    </div>
  );
};

export default Header;
