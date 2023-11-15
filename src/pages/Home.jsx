import React, {useState} from 'react'
import { TextField, Button } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import { EmojiTransportation } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = ({setCode, data, setReset}) => {
  const [change, setChange] = useState("");

  const handleClick = (e) => {
   e.preventDefault();
   setChange("");
   setCode(Number(change));
  }
  
  const handleReset = (e) => {
    e.preventDefault();
    setReset();
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 min-h-[100%]">
    <div className="flex flex-col my-[10px] py-10 px-16 h-[450px] shadow-xl border-[#fff] border-2 rounded-[7px]">
    <div className="flex flex-row justify-center gap-2 flex-wrap">
    <TextField
          id="outlined-number"
          label="Pincode"
          color="primary"
          size="small"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={change}
          onChange={(e) => setChange(e.target.value)}
        />{" "}
      <Button variant="contained" onClick={handleClick}>Search</Button>
      <Button variant="contained" color="error" onClick={handleReset}>Reset</Button>
      </div>
      <div className="flex justify-center flex-col gap-4 text-[20px] mt-12 text-[#eee]">
      {data ?(<>
      <h2><FlagIcon /> {data?.country}</h2>
      <h2><EmojiTransportation/>  {data?.places[0].state} </h2>
      <h2><LocationOnIcon />  {data?.places.map((place, id) => {
        return  <span key={id}>{place["place name"]}, </span> 
      }).slice(0, 5)}
      </h2>
      </>):
      <h2 className="text-center text-[#000] mt-[10px]">Search For Country Details...</h2>
      }
    </div>
    </div>
    </div>
  )
}

export default Home

