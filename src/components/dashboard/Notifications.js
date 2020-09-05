import React from 'react';
import moment from 'moment';

const Notifications = (props)=>{
    const { notifications } = props;
    return(
        <div className="">
            <div className="card z-depth-0 project-summary">
                <div className="card-body">
                    <p className="card-title">Notifications</p>
                    {/* <p className="card-text">Posted by the net ninja</p>
                    <p className="card-text">Sept 1, 2020</p> */}
                    {notifications && notifications.map(item => {
                        return(
                            <div key={item.id} className="mb-2">
                                <p className="mb-1"><span className="pink-text">{item.user}</span> {item.content}</p>
                                <small className="text-muted">{moment(item.time.toDate()).fromNow()}</small>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Notifications;