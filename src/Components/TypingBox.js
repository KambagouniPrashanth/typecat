import React,{useState} from 'react'


const TypingBox=()=>{
    const[time,setTime]=useState(15)
    const displayText="Artificial intelligence is already helping in the development of new pharmaceuticals and therapies or in the design of new products. However, the algorithms do not achieve faster and better results all by themselves. The human input from which AI learns is vital.So what is AI's greatest asset? A video by GDI researcher Jan Bieser gives us the answer: it frees up time for creative phases. Conversely, AI can also disrupt human creativity. That is when digital applications are designed to consume as much time as possible. Think of social media"

    return(
        <div>
            <div className='row1'>
                <div>
                    <p>{time}</p>
                </div>
                <div>
                <button onClick={()=>setTime(15)}>15</button>
                <button onClick={()=>setTime(20)}>20</button>
                <button onClick={()=>setTime(25)}>25</button>

                </div>
                


            </div>
            <div className='type-box'>
                {
                    displayText.split("").map((char)=>(<span>{char}</span>))
                }

            </div>
            
        </div>
    )

}

export default TypingBox