import React from 'react';

function formatDate(date) {

    return date.toLocaleDateString();
}
6
7// createanew component"Comment"
function Comment(props) {
    return (
        8
9
    10 < div >
        11
    12
    13
    14
    Com
        < img src = {
            props.author.avata
                < div > { props.author.name }</div
        </div>