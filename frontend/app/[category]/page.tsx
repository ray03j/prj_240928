import { notFound } from "next/navigation"
import { allowedCategories } from "@/app/constants"



export async function generateStaticParams() {
  return allowedCategories.map((category) =>({
    category
  }))
}


const Category = (
  { params }: { params: { category: string } }
) => {

  const { category } = params
  if(!allowedCategories.includes(category)) {
    notFound()
  }

  return <div>My Post: {params.category}</div>
}

export default Category