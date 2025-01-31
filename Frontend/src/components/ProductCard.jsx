import { star } from "../assets/icons"

const ProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full border-gray-50 border-2 rounded-lg p-4 shadow-xl hover:shadow-inner insert-shadow-sm h-full hover:bg-gray-50">
      <div className="flex flex-col gap-2">
        <img src={imgURL} alt={name} className="w-full h-auto" />
        
        <div className="mt-8 flex justify-start gap-2.5">
            <img className="object-contain" src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
        </div>

        <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
        <p className="font-semibold leading-normal font-montserrat text-coral-red text-2xl">{price}</p>
      </div>
        
    </div>
  )
}

export default ProductCard