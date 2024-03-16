import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import "../styles/createpage.css";

const CreatePage = () => {
    const editorRef = useRef(null)
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    

  return (
    <>
    <div className='create-container-header'>
                <div className='d-flex bd-highlight justify-between'>
                    <div className='mr-auto p-2 bd-highlight'>
                        <p className='font-weight-bold lead m-3'>Home Page
                            <span className="badge bg-warning font-weight-normal mx-2" role="alert">
                                Draft
                            </span>
                        </p>
                    </div>
                    <div className='p-2 bd-highlight'>
                        <button type="button" className="btn btn-outline-danger m-3">Cancel</button>
                        <button type="button" className="btn btn-primary m-3">Save</button>
                        <button type="button" className="btn btn-success m-3">Publish</button>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 apply-border">
                            <form className='py-5 px-3'>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" name="title" aria-describedby="emailHelp" placeholder="Enter title" />
                                </div>
                                <div className="form-group pt-4">
                                    <label htmlFor="sub-text">Sub Text</label>
                                    <input type="text" className="form-control" name="subtext" placeholder="Enter sub-text" />
                                </div>
                                <div className="form-group pt-4">
                                    <label htmlFor="body">Body</label>
                                    <Editor
                                        apiKey='gsl03gphwzn62bonejeo3zi1qupi7pxe7dp7tts7ooyeu4a6'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        // initialValue="<p>This is the initial content of the editor.</p>"
                                        init={{
                                            resize: false,
                                            max_height: 400,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                            ],
                                            toolbar: 'undo redo | blocks | ' +
                                                'bold italic forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }'
                                        }}
                                    />
                                    {/* <button onClick={log}>Log editor content</button> */}
                                </div>
                                <div className="form-group pt-4">
                                    <label htmlFor="attachments">Attachments</label><br />
                                    <input type="file" name="attachments" /><br />
                                    <label className='pt-3'>Supported files: JPEG. PNG. PDF. DOC. XLX. PPT.</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 apply-border">
                            <form className='py-5 px-3'>
                                <div className="form-group">
                                    <label htmlFor="title">URL</label>
                                    <input type="text" className="form-control" name="url" aria-describedby="emailHelp" placeholder="Enter URL" />
                                </div>
                                <div className="form-group pt-4">
                                    <label htmlFor="sub-text">Author</label>
                                    <input type="text" className="form-control" name="author" placeholder="Enter author name" />
                                </div>
                                <div className="form-group mx-4 pt-4">
                                    <input type="checkbox" className="form-check-input" name="show-author" />
                                    <label htmlFor="checkbox">Show Author</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CreatePage
