import React from 'react';
import useInfo from '../../hooks/useInfo';
import DetailsInfo from './DetailsInfo';

const ViewInfo = () => {
    const [info,setInfo] = useInfo([]);
    return (
        <div>
            
            {
                info.map(inf=><DetailsInfo
                    inf={inf}
                    ></DetailsInfo>)
            }
            
        </div>
    );
};

export default ViewInfo;