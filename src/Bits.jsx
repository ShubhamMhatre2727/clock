import './Bits.css'
export default function Bits({width, height}){

  function SecondBits(){
    let list = [];
    for(let i=0; i<180; i++){
      list.push(<p className='secondBits' style={{transform:`rotate3d(0,0,1,${i*6}deg`}}></p>);
    }
   return list;
  }

  function HourBits(){
    let list = [];
    for(let i=0; i<6; i++){
      list.push(<p className='hourBits' style={{transform:`rotate3d(0,0,1,${i*30}deg`}}></p>);
    }
   return list;
  }  

  return(
    <div className="Bits" style={{width:`${width}px`, height:`${height}px`}}>
      <SecondBits/>
      <HourBits/>
    </div>
  )
  }