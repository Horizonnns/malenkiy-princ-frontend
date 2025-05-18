import { mockProductCardData } from "@/entites/product/mockData";

export default function ProductCard() {
  const product = mockProductCardData;

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {product.map((product) => (
        <div
          key={product.title}
          className="w-72 h-72 flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800"
        >
          <img
            alt="Image showing the thumbnail of the product"
            decoding="async"
            data-nimg="fill"
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
            // sizes="(min-width: 768px) 66vw, 100vw"
            src={product.image}
          />
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 grow pl-2 leading-none tracking-tight">
                {product.title}
              </h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                {product.price}
                <span className="ml-1 inline  @[275px]/label:inline">EUR</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
