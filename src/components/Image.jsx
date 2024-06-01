import myPicture from '../assets/my-photo.jpg';

export default function Image() {
    return (
        <div className='d-flex flex-row justify-content-center'>
            <img className="col-1 p-3" src={myPicture} alt="picture of Eugene McClellan" width='200'/>
        </div>
    )
};