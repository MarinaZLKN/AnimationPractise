

function PhoneNumber (){

    const phoneNumber = '+37258586189';

    return(
        <div>
             <p>Для связи звоните по номеру: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
        </div>
    );
};

export default PhoneNumber;