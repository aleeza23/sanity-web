import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

// ✅ Dynamic Product Page
export default async function ProductPage({ params }) {
  const slug = params.slug

  const query = `*[_type == "product" && slug.current == $slug][0]`
  const product = await client.fetch(query, { slug })

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Single Product Page</h1>

      <div className="bg-white max-w-xl shadow-lg rounded-xl mx-auto overflow-hidden">
        <Image
          src={urlFor(product.image).url()}
          alt={product.title}
          fill
          className="w-full h-full object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="mt-4 text-lg font-semibold text-green-600">
            Price: PKR {product.price}
          </p>
          <p className="text-sm mt-2 text-gray-500">Category: {product.category}</p>
        <button className="bg-black text-white rounded-md px-5 py-2 hover:opacity-75 mt-4 ">Add to cart</button>

        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const query = `*[_type == "product"]{ slug }`
  const products = await client.fetch(query)

  return products.map((product) => ({
    slug: product.slug.current,
  }))
}
