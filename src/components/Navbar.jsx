function Navbar({ cartCount }) {
  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="/" className="text-2xl font-extrabold text-purple-600">
          🛍️ ShopEase
        </a>
        <div className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
          🛒 Cart: {cartCount}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
