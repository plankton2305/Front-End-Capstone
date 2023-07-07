import { Carousel } from "@material-tailwind/react";

export default function CardImgSlider({ product, selectNewProduct }) {

  var galleria = product.styles.photos.slice(1);
  return (
    <Carousel className="rounded-xl">
      <img
        src={product.styles.photos[0].url}
        alt="Product Preview"
        className="h-full w-full object-cover"
        onClick={selectNewProduct}
      />
      {galleria.map((pic, index) => (
        <img
          key={index}
          src={pic.url}
          alt="Product Preview"
          className="h-full w-full object-cover"
          onClick={selectNewProduct}
        />
      ))}
    </Carousel>
  );
}

// {
//   product.styles && product.styles.photos && product.styles.photos[0].url ? (
//     <div className='relative'>
//       <img
//         className='w-full'
//         src={product.styles.photos[0].url}
//         alt={"Product Preview"}
//         layout={"fill"}
//         className={"h-full w-full object-cover"}
//         onClick={selectNewProduct}
//       />
//     </div>
//   ) : (
//   <div className='realtive'>
//     <img
//       src='../../_docs/default_pic.png'
//       alt={"Product Preview"}
//       layout={"fill"}
//       className={"h-full w-full object-cover"}
//       onClick={selectNewProduct}
//     />
//   </div>
// )
// }