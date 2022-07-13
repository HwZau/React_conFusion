import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div>
            <div>
                < img src={props.author.AvatarUrl} alt = {props.author.name}
                    props.author.avata
                    < div > { props.author.name }</div>
        </div >
        </div >