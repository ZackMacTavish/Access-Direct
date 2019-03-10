import React from 'react';
import Dropzone from "react-dropzone";
import '../../scss/base/DropZone.scss';
import Section from "./Section";

const DropZone = (props) => {
    return (
        <div className="DropZone-wrapper">
            <div className="DropZone-files">
                {
                    props.fileNames.map(fileName => (
                        <div className="DropZone-file">
                            <div>{fileName.originalName}</div>
                            <img onClick={() => props.onDelete(fileName.uniqueName)} className="pointer" src="/img/backspace-arrow.png" alt="x"/>
                        </div>
                    ))
                }
            </div>
            <Dropzone onDrop={(file) => props.onDrop(file)}>
                <div className="DropZone-background pointer">
                    <Section visible={!props.loading}><img src="/img/drag-and-drop.png" alt=""/></Section>
                    <Section visible={props.loading}><img src="/img/loading.gif" alt=""/></Section>
                    <p>If you have your logo in any additional formats please attach them here.</p>
                    <p>(This will allow us to use the most compatible formats for actual printing.)</p>
                </div>
            </Dropzone>
        </div>
    )
};

export default DropZone;