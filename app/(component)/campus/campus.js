import Image from "next/image";
function Campus( props) {
    return (
        <>
            <div className="campus-col">
                <Image width={300} height={300} src={props.source} alt="" />
                <div className="layer">
                    <h3>{props.title}</h3>
                </div>
            </div>


        </>
    )
}

export default Campus;
