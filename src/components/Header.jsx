import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="p-4 rounded-lg mx-auto flex items-center justify-between w-full bg-white">
        <Link to="/" className="text-base md:text-xl font-bold">
          {/* sitenin logosu basıldığında home'a atıyor */}
          YEMEK TARIFLERI
        </Link>
        <SignedOut>
          <SignInButton className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500" />
        </SignedOut>
        <SignedIn>
          <UserButton showName={true} afterSignOutUrl="/" />
        </SignedIn>
      </header>
      <SignedIn>
        <section className="mt-4 p-4 w-full bg-white rounded-lg flex items-center justify-center gap-x-8">
          <Link
            to="/all"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Tüm Tarifler
          </Link>
          <Link
            to="/favorites"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Favori Tarifler
          </Link>
        </section>
      </SignedIn>
    </>
  );
};

export default Header;
