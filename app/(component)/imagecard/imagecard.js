import Image from "next/image";

 function Imagecard(props) {
  return (
    <div className="facilities-col">
    <Image src={props.source} alt="" width={150} height={250} />
    <h3>{props.title}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
    </p>
</div>
  )
}

export default Imagecard;
