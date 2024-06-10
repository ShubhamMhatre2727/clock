export default function SecondBits({width, height}){
  const style1 ={
    width: `${width}`,
    height: "1px",
    background: "linear-gradient(to right, black 5%, transparent 5%, transparent 80%, black 80%)",
  };
  function Bits(){
    return(
      <p style={style1}></p>
    )
  }
  return(
    <div>
      <Bits/>
    </div>
  )
  }