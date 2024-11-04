import Link from "next/link";
import SingleProduct from "./components/products/singleProduct";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div>
      <div className="font-semibold text-center mb-12 md:text-xl text-lg font-['font2']">Products</div>
      <div className="grid md:grid-cols-4 md:gap-3 gap-1 grid-cols-2 md:w-[80%] md:ml-[10%] w-[95%] ml-[2.5%]">
        {data.slice(0,4).map((item)=>(
        <SingleProduct key={item.id} item={item} />
        ))}
      </div>
      <Link href="/products" className="text-center mt-12 block font-['font2']">See More</Link>
    </div>
  );
}
