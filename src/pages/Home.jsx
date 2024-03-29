import { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

export default function Home() {
  // State tanımlamaları
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    // veriyi çekmekiçin fetch async await fonksiyonu
    const response = await fetch(
      'https://d00b28c2a65c4ebbbcd36164c3e78ddd.api.mockbin.io/' // veriyi çektik
    );
    const res_data = await response.json(); // gelen veriyi await ile beraber json yapıp farklı bir değişkene attık
    setData(res_data.sort(() => Math.random() - 0.5)); // veriyi random sıralattık
    setLoading(false);
  };

  useEffect(() => {
    // Component yüklendiğinde veriyi çekme
    getData();
  }, []);

  return loading ? (
    <p className="mx-auto mt-4 text-center text-black px-4 py-2 w-max bg-white rounded">
      {' '}
      {/* yüklenirken çıkacak yazı */}
      DUR ACELE ETME
    </p>
  ) : (
    <>
      <SignedIn>
        <div className="mt-4 min-h-[550px] h-full grid md:grid-cols-3 gap-4 place-items-center">
          {/* 3 adet tarif gösterilecek (veriyi random sıralattığımız için her seferinde gelen 3 tarif farklı olacak) */}
          {data.slice(0, 3).map((item, index) => (
            <Recipe key={index} data={item} />
          ))}
        </div>
      </SignedIn>
      <SignedOut>
        <p className="mx-auto mt-4 text-center text-black px-4 py-2 w-max bg-white rounded">
          {/* kullanıcı giriş yapmadığında çıkacak yazı */}
          GIRIS YAPPPPPP
        </p>
      </SignedOut>
    </>
  );
}
