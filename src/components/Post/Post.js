
import React, {useState} from 'react';
import Spinner from '../Spinner/Spinner'

const Post = (props) => {
    const {data} = props;
    const [title, setTitle] = useState(data.title)
    const [body, setBody] = useState(data.body)
    const [isEdit, setIsEdit] = useState(false)

    const cancelEditing = (param) => {
        setBody(param.body)
        setTitle(param.title)
        setIsEdit(false);
    }
    const updateActions = () => {
        return <><button title="Update" className="btn btn-primary" onClick={() => {
            props.updatePost(Object.assign({}, {title, body, id, userId}));
            setIsEdit(false);
        }}><i className="fa fa-check"/></button>
            <button title="Cancel" className="btn btn-danger" onClick={() => cancelEditing(data)}><i class="fa fa-refresh" aria-hidden="true"></i></button> 
            </>
    }

    const baseActions = () => {
        return <>
        <button title="Edit" className="btn btn-primary" onClick={() => setIsEdit(true)}><i className="fa fa-pencil"/></button>
        <button title="Delete" className="btn btn-danger" onClick={() => props.deletePost(data)}><i className="fa fa-remove"/></button>
            </>
    }
    

    const renderActionButtons = (isEdit) => {
        return isEdit ? updateActions()
        : baseActions()
    }

    const {id, showSpinner, userId} = data;
    return (
        <div className="post">
                <Spinner showSpinner={showSpinner} />
                <div className="info">
                    <div className="title">{
                        (isEdit ? 
                            <input className="editTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> 
                            : "User " + data.id  + " - " +data.title)}
                        </div>
                </div>
                <div className="msg-body">
                    <div className="content">
                        {(isEdit ? <textarea value={body} onChange={(e) => setBody(e.target.value)} /> : data.body)}
                    </div>
                </div>
                <div className="postActionButtons">
                    {renderActionButtons(isEdit)}
                </div>
            </div>
    )
}
export default Post