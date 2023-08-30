import React from 'react';
import './OptionCard.css'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OptionCard = ({option}) => {
    const notify = () => {
        toast("It's working!", {
            className: 'foo-bar'
        });
    }

    return (
        <div className='option-card'  onClick={notify}>
              <ToastContainer/>
            {/* <div className='tick-div'>
                <h5>X</h5>
            </div> */}
            <h6>{option}</h6>
        </div>
    );
};

export default OptionCard;