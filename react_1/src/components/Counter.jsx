import {useState} from 'react';

function Counter () {
    const [count,setCount] = useState(0);
    const setPrice = 12000;
    
    const kurang = () => {
        if (count >0){
            setCount(count -1);
        }
    };

    const tambah = () =>{
        if (count <10) {
            setCount(count +1);
        }
    };

    const price = setPrice * count;
  return (
    <div>
        <div style={{display:"flex",gap:"5px" ,color:"red",alignItems:"center"}}>
            <button onClick={kurang} style={{backgroundColor : "yellow"
                ,borderRadius :'20%', width:'60px' ,height:'60px',
            }}>-</button>
            <h2>{count}</h2>
            <button onClick={tambah} style={{backgroundColor : "yellow"
               ,borderRadius :'20%',width:'60px' ,height:'60px',
            }} >+</button>
        </div>
        <h2>harga:Rp {price.toLocaleString()}</h2>
    </div>
  );
}

export default Counter;