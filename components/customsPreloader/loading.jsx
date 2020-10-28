import {useState} from 'react'; 
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () =>  {
  const [openBackDrop, setopenBackDrop] = useState(false);
  return ( 
    <Backdrop  className="opacity-100" >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading; 
