import Image from "next/image";

export default function Feature1({ src1,name1,src2,name2,src3,name3}) {
  return (
    <div className="f-1">
      <div>
        <Image src={src1} title={name1} width={350} height={500}/>
        <h1>{name1}</h1>
      </div>
      <div>
        <Image src={src2} title={name2} width={350} height={500}/>
        <h1>{name2}</h1>
      </div>
      <div>
        <Image src={src3} title={name3} width={350} height={500}/>
        <h1>{name3}</h1>
      </div>
    </div>
  );
}
