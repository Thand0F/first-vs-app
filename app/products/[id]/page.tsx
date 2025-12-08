import ProductPage from "../../components/ProductPage"; // Client Component
import { products } from "../../data";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  // Unwrap the dynamic route param
  const numericId = Number(params.id);

  // Find product from your data
  const product = products.find((p) => p.id === numericId);

  // Error handling for missing product
  if (!product) {
    return (
     <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">
          Product not found. ID: {params.id}
        </p>
      </div>
    );
  }

  // Pass product to the Client Component for cart functionality
  return <ProductPage product={product} />;}
