import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default async function Home() {

  const data = await client.fetch(`*[_type == "homepage"]{ heading, subheading, "imageUrl": image.asset -> url }[0]`)
  // console.log(data);

  return (
    <section className="flex justify-center items-center mt-28 gap-10">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">{data.heading}</h1>
        <p className="font-light text-lg max-w-lg">{data.subheading}</p>
        <button className="bg-black text-white rounded-md px-5 py-2 hover:opacity-75 ">Explore more</button>
      </div>

      <div>
        <Image src={data.imageUrl} alt={'Image'} width={400} height={400} className="object-cover" />
      </div>
    </section>
  );
}
