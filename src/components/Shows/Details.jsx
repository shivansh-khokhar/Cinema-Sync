const Details = ({status, premiered, network}) => {
    return <div>
         <div>Status: {status} </div>
         <div>Premiered: {premiered} on <span>{!!network && network.name}</span></div>
    </div>
};

export default Details;